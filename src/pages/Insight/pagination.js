import React from "react";
import ReactPaginate from "react-paginate";

const pagination = ({
  pageCount,
  containerClassName,
  activeClassName,
  previousClassName,
  nextClassName,
  disabledClassName,
  marginPagesDisplayed,
}) => {
  return (
    <ReactPaginate
      previousLabel="Prev"
      nextLabel="Next"
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={marginPagesDisplayed}
      previousClassName={previousClassName}
      nextClassName={nextClassName}
      pageRangeDisplayed={0}
      containerClassName={containerClassName}
      activeClassName={activeClassName}
      disabledClassName={disabledClassName}
    />
  );
};

export default pagination;
