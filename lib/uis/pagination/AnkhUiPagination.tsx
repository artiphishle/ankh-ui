'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useActivePalette } from 'ankh-config';
import { Auth } from '@/auth/Auth';
import type { IAnkhCmsThemePalette, IAnkhColorHsl, IAnkhUiIntrinsicProps } from 'ankh-types';

export function AnkhUiPagination({
  totalPages = 5,
  initialPage = 1,
  siblingCount = 1,
  onPageChange = (page: number) => { },
}: IPagination) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const stringifyHsl = ({ h, s, l }: IAnkhColorHsl) => `hsl(${h}, ${s}%, ${l}%)`;
  const [palette, setPalette] = useState<IAnkhCmsThemePalette | null>(null);
  useActivePalette().then((activePalette) => setPalette(activePalette));

  const getPageNumbers = () => {
    const totalNumbers = siblingCount * 2 + 5;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - siblingCount);
      const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

      let pages: string[] = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => (startPage + i).toString()
      );
      if (startPage > 2) pages = ['...', ...pages];
      if (endPage < totalPages - 1) pages = [...pages, '...'];

      return [1, ...pages, totalPages];
    }
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  const pageNumbers = getPageNumbers();

  if (!palette) return;

  const $ = {
    backgroundColor: stringifyHsl(palette.colors[2]!),
    backgroundColorActive: stringifyHsl(palette.colors[0]!),
    color: stringifyHsl(palette.colors[3]!),
    colorActive: stringifyHsl(palette.colors[4]!),
  };

  return (
    <Auth.ReadRole>
      <nav data-ui="pagination" aria-label="Pagination">
        <ul style={{ display: 'flex', gap: '.4rem' }}>
          <li style={{ padding: '.4rem', width: 'fit-content', color: $.color, backgroundColor: $.backgroundColor }}>
            <Link style={{ color: $.color }}
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
              <li style={{
                width: 'fit-content',
              }}
                key={index}
              >
                <Link
                  style={{ padding: '.4rem', color: currentPage === page ? $.colorActive : $.color, backgroundColor: currentPage === page ? $.backgroundColorActive : $.backgroundColor }}
                  href="#"
                  onClick={() => setCurrentPage(page as number)}
                >
                  {page}
                </Link>
              </li>
            )
          )}
          <li style={{ color: $.color, backgroundColor: $.backgroundColor }}>
            <Link
              href="#"
              onClick={() => setCurrentPage((n) => n + 1)}
            >
              &raquo;
            </Link>
          </li>
        </ul>
      </nav>
    </Auth.ReadRole >
  );
}

interface IPagination extends IAnkhUiIntrinsicProps {
  readonly totalPages?: number;
  readonly initialPage?: number;
  readonly siblingCount?: number;
  readonly onPageChange?: (page: number) => void;
}
