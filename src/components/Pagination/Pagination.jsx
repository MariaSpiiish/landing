/* eslint-disable react/prop-types */
import './Pagination.css';

function Pagination({ color }) {
  const className = color === "white" ? "pagination__dot" : "pagination__dot pagination__dot_blue";
  const classNameActive = color === "white" ? "pagination__dot pagination__dot-active" : "pagination__dot pagination__dot-active pagination__dot-active_blue";

  return (
    <ul className="pagination">
        <li className="pagination__item"><span className={className}></span></li>
        <li className="pagination__item"><span className={classNameActive}></span></li>
        <li className="pagination__item"><span className={className}></span></li>
    </ul>
  )
}

export default Pagination