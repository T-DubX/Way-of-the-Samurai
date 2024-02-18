import React from 'react';
import styles from "./Paginator.module.css";

export interface PaginationProps {
   currentPage: number
   onPageChanged: (page: number) => void;
   totalUsersCount: number;
   pageSize: number;
}

export const Paginator = ({currentPage, onPageChanged, pageSize, totalUsersCount, ...props}: PaginationProps) => {
   let pagesCount = Math.ceil(totalUsersCount / pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   return (
      <div className={styles.wrapperPagesPagination}>
         {pages.map(el => {
            return <span key={el}
                         className={styles.page + ' ' + (currentPage === el ? styles.selectedPage : '')}
                         onClick={() => {
                            onPageChanged(el)
                         }}>{el}</span>
         })}
      </div>

   );
};