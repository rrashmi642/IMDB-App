import { useState } from "react";
import "./App.css";
const Pagination = ({ onPageChange }) => {
  const [pages, setPages] = useState([1, 2, 3, 4]);
  const [selectedpage, setSelectedPage]=useState(1);
  const handleClick = (pageNo) => {
    onPageChange(pageNo);
    setSelectedPage(pageNo);
  };
  return (
    <div className="pagination">
      <button>&lt;</button>
      {pages.map(page => (
        <button className={selectedpage === page ? 'active': ''}
        key={page} 
        onClick={() => handleClick(page)}>
          {page}
        </button>
      ))}
      <button>&gt;</button>
    </div>
  );
};
export default Pagination;
