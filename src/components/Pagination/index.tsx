import { NextPage } from "next";
import { FC, memo } from "react";

interface IPagination {
	currentPage: number;
	onPrevPage: () => void;
	onNextPage: () => void;
  }

const Pagination: FC<IPagination> = memo(({ currentPage, onPrevPage, onNextPage }) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={onPrevPage}
        className={`${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500"
        } text-white py-2 px-4 mx-2 rounded-lg`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        onClick={onNextPage}
        className="bg-blue-500 text-white py-2 px-4 mx-2 rounded-lg"
      >
        Next
      </button>
    </div>
  );
})

Pagination.displayName = 'Pagination';

export default Pagination;