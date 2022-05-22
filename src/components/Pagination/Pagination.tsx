import React from 'react';
import ReactPaginate from "react-paginate";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";

type PaginationPropsType = {
    count_repos: number | undefined
    page: number
    per_page: number
    changePage: (selectedItem: { selected: number }) => void
}

const Pagination: React.FC<PaginationPropsType> = ({
                                                       count_repos,
                                                       page,
                                                       per_page,
                                                       changePage
                                                   }) => {
    if (!count_repos) {
        return null
    }

    const startRepoIndex = page * per_page - 3
    const endRepoIndex = page * per_page
    const pageCount = Math.ceil(count_repos / per_page)
    const paginationText = `${startRepoIndex}-${count_repos
    &&
    endRepoIndex < count_repos ? endRepoIndex : count_repos} of ${count_repos} items`

    return (
        <div className="pagination">
            <p className="pagination__text">
                {paginationText}
            </p>
            <ReactPaginate
                previousLabel={<ArrowLeft/>}
                nextLabel={<ArrowRight/>}
                forcePage={page - 1}
                pageCount={pageCount}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                onPageChange={changePage}
                containerClassName="pagination__btns"
                previousClassName="pagination__previous"
                nextClassName="pagination__next"
                previousLinkClassName="previous-btn"
                nextLinkClassName="next-btn"
                disabledClassName="pagination__disabled"
                activeClassName="pagination__active"
            />
        </div>
    );
};

export default Pagination;