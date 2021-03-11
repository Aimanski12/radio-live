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
        activeClassName={"active"} 
        breakClassName={"break-me"}
        breakLabel={"..."}
        containerClassName={"pagination"}
        marginPagesDisplayed={1}
        nextLabel={"next"}
        onPageChange={(e)=>handlePageClick(e)}
        pageCount={props.totalpages}
        pageRangeDisplayed={2}
        previousLabel={"prev"}
        subContainerClassName={"pages pagination"} />
    </div>
  )
}

export default PageNum
