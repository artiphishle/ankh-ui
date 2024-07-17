'use client';

import Link from 'next/link';
import {useState} from 'react';

interface IPagination {
  totalPages?: number;
  initialPage?: number;
  siblingCount?: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({
  totalPages = 5,
  initialPage = 1,
  siblingCount = 1,
  onPageChange = (page: number) => {},
}: IPagination) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const getPageNumbers = () => {
    const totalNumbers = siblingCount * 2 + 5;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - siblingCount);
      const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

      let pages: string[] = Array.from(
        {length: endPage - startPage + 1},
        (_, i) => (startPage + i).toString()
      );
      if (startPage > 2) pages = ['...', ...pages];
      if (endPage < totalPages - 1) pages = [...pages, '...'];

      return [1, ...pages, totalPages];
    }
    return Array.from({length: totalPages}, (_, i) => i + 1);
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav aria-label="Pagination">
      <ul className="flex items-center justify-center space-x-2">
        <li className={currentPage === 1 ? 'text-gray-400' : ''}>
          <Link
            className="block px-3 py-1 border rounded"
            href="#"
            onClick={() => setCurrentPage((n) => n - 1)}
          >
            &laquo;
          </Link>
        </li>
        {pageNumbers.map((page, index) =>
          page === '...' ? (
            <li key={index} className="px-3 py-1">
              ...
            </li>
          ) : (
            <li
              key={index}
              className={
                currentPage === page ? 'bg-blue-500 text-white rounded' : ''
              }
            >
              <Link
                className="block px-3 py-1 border rounded"
                href="#"
                onClick={() => setCurrentPage(page as number)}
              >
                {page}
              </Link>
            </li>
          )
        )}
        <li className={currentPage === totalPages ? 'text-gray-400' : ''}>
          <Link
            className="block px-3 py-1 border rounded"
            href="#"
            onClick={() => setCurrentPage((n) => n + 1)}
          >
            &raquo;
          </Link>
        </li>
      </ul>
    </nav>
  );
}
