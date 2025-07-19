import { useState } from "react";
import "./App.css";
const Pagination = ({ onPageChange }) => {
  const [pages, setPages] = useState([1, 2, 3, 4]);
  const [selectedpage, setSelectedPage]=useState(pages[0]);
  const handleClick = (pageNo) => {
    onPageChange(pageNo);
    setSelectedPage(pageNo);
  };
  return (
    <div className="pagination">
      <button  onClick={()=>handleClick(selectedpage-1)}  disabled= {selectedpage ==pages[0]} >&lt;</button>
      {pages.map(page => (
        <button className={selectedpage === page ? 'active': ''}
        key={page} 
        onClick={() => handleClick(page)}>
          {page}
        </button>
      ))}
      <button onClick={()=>handleClick(selectedpage+1)} disabled= {selectedpage ==pages[pages.length-1]}>&gt;</button>
    </div>
  );
};
export default Pagination;
