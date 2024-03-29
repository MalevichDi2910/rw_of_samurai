import React, {useState} from "react";
import s from "./Paginator.module.css";
import cn from "classnames"

type PaginatorProps = {
    currentPage: number
    pageSize: number
    totalItemsCount: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

const Paginator = ({currentPage, totalItemsCount, onPageChanged, pageSize, portionSize = 10}: PaginatorProps) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let[portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.paginator}>
            { portionNumber > 1 &&
                <button className={s.buttons} onClick={ () => { setPortionNumber(portionNumber - 1) }}>PREV</button>
            }

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p  => {
                 return <span key={p} className={ cn({[s.selectedPage]: currentPage === p}, s.pageNamber)}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}

            {portionCount > portionNumber &&
                <button className={s.buttons} onClick={ () => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
            }

        </div>






    )
}

export default Paginator;