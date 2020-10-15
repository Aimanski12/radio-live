import React from "react";
import ReactPaginate from "react-paginate";

function PageNum(props) {

  function handlePageClick (e) {
    const selectedPage = e.selected;
    props.click(selectedPage + 1)
  }

  return (
    <div className='pagination-display'>
      <ReactPaginate
        pageCount={props.totalpages}
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={(e)=>handlePageClick(e)}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"} />
    </div>
  )
}

export default PageNum
