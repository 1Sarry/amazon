import React from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";

const Pagination = ({ prevSlide, nextSlide }) => {
  return (
    <div className="arrows">
      <HiChevronLeft size={36} className="prev" onClick={prevSlide} />
      <HiChevronRight className="next" size={36} onClick={nextSlide} />
    </div>
  );
};

export default Pagination;
