import React from 'react';

import { usePagination, DOTS } from './usePagination';
import styles from './pagination.module.css';

export default function Pagination (props)  {

  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;

  const paginationRange = usePagination({currentPage, totalCount, siblingCount, pageSize});

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    
    <ul className={styles.paginationContainer && styles.paginationBar}>
        <li 
          className={currentPage === 1 
          ? styles.disabled 
          : styles.paginationItem} 
          onClick={onPrevious}
        >
            <div className={styles.arrow && styles.left} />
        </li>

        {paginationRange.map(pageNumber => {
            if (pageNumber === DOTS) {
              return <li key={pageNumber} className={styles.paginationItem && styles.dots}>&#8230;</li>;
            }

            return (
              <li key={pageNumber}
                className={
                    styles.paginationItem && pageNumber === currentPage 
                    ? styles.selected 
                    : styles.paginationItem 
                }
                  onClick={() => onPageChange(pageNumber)}
                >
                {pageNumber}
              </li>
            );
        })}

        <li className={
          lastPage === currentPage 
          ? styles.disabled 
          : styles.paginationItem
        }
          onClick={onNext}
        >
          <div className={styles.arrow && styles.right} />
        </li>
    </ul>
  );
};
