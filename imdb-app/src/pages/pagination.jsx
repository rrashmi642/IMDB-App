import { useEffect, useState } from "react";
import "./App.css";
const Pagination = ({ onPageChange, totalPages }) => {
  const [pages, setPages] = useState([]);
  const [selectedpage, setSelectedPage] = useState(pages[0]);
  const [totalPagesCount, setTotalPagesCount] = useState();
  const THRESHOLD = 10;
  const setNewPagesList = (pageNo) => {
    const itemsLength = Math.min(totalPages, THRESHOLD);
    const itemsonLeft = Math.ceil(THRESHOLD / 2) - 1;
    const startingPage = Math.max(pageNo - itemsonLeft, 1);

    if (startingPage + itemsLength > totalPages) {
      startingPage = totalPages - itemsLength + 1;
    }
    
    const list = Array.from(
      { length: Math.min(totalPages, THRESHOLD) },
      (_, i) => i + startingPage
    );
    setPages(list);
  };
  const handleClick = (pageNo) => {
    // setTotalPagesCount()
    onPageChange(pageNo);
    setSelectedPage(pageNo);
    setNewPagesList(pageNo);
  };
  useEffect(() => {
    setTotalPagesCount(totalPages);

    const list = Array.from(
      { length: Math.min(totalPages, THRESHOLD) },
      (_, i) => i + 1
    );
    setPages(list);
    // console.log(pages);
  }, [totalPages]);
  return (
    <div className="pagination">
      <button
        onClick={() => handleClick(selectedpage - 1)}
        disabled={selectedpage == pages[0]}
      >
        &lt;
      </button>
      {pages.map((page) => (
        <button
          className={selectedpage === page ? "active" : ""}
          key={page}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handleClick(selectedpage + 1)}
        disabled={selectedpage == pages[pages.length - 1]}
      >
        &gt;
      </button>
    </div>
  );
};
export default Pagination;
