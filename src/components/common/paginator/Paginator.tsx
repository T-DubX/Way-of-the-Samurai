import React, {useState} from 'react';
import styles from "./Paginator.module.css";

export interface PaginationProps {
   currentPage?: number
   onPageChanged?: (page: number) => void;
   totalItemsCount: number;
   pageSize: number;
   portionSize?: number
}

export const Paginator = ({
                             currentPage,
                             onPageChanged,
                             pageSize,
                             totalItemsCount,
                             portionSize = 10
                          }: PaginationProps) => {
   let pagesCount = Math.ceil(totalItemsCount / pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   const portionCount = Math.ceil(pagesCount / portionSize)
   const [portionNumber, setPortionNumber] = useState(1)
   const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
   const rightPortionPageNumber = portionNumber * portionSize

   return (
      <div className={styles.wrapperPagesPagination}>
         {portionNumber > 1 && (
            <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>
         )}
         {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(el => {
               return <span key={el}
                            className={styles.page + ' ' + (currentPage === el ? styles.selectedPage : '')}
                            onClick={() => {
                               onPageChanged && onPageChanged(el)
                            }}>{el}</span>
            })}
         {portionCount > portionNumber && (
            <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>
         )}
      </div>

   );
};