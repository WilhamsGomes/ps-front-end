import React, { useContext } from 'react';

import { usePagination, DOTS } from './usePagination';
import styles from './pagination.module.css';

import { ThemeContext } from "../Theme/useThemeContext"; 

export default function Pagination (props)  {

  const {theme} = useContext(ThemeContext);

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
          style={{
            background: theme === 'dark' ?  '#ECF1F3' : '#ECF1F3' 
          }}
        >
            <div className={styles.arrow && styles.left} />
        </li>

        {paginationRange.map((pageNumber, index) => {
            
            if (pageNumber === DOTS) {
              return(
                <li 
                  key={index}
                  className={
                    styles.paginationItem 
                    && styles.dots
                  }
                >
                  &#8230;
                </li>
              ) 
            }

            return (
              <li 
                key={index}
                className={
                    styles.paginationItem && pageNumber === currentPage 
                    ? styles.selected 
                    : styles.paginationItem 
                }
                style={{
                  color: theme === 'dark' ?  '#ECF1F3' : '#222222'
                }}
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
          style={{
            background: theme === 'dark' ?  '#ECF1F3' : '#ECF1F3' 
          }}
        >
          <div className={styles.arrow && styles.right} />
        </li>
    </ul>
  );
};
