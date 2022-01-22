import React from "react";

const Pagination = ({ tripsPerPage, totalTrips, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTrips / tripsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log("tripsPerPage", tripsPerPage);
  console.log("totalTrips", totalTrips);
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
