'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useActivePalette } from 'ankh-config';
import { Auth } from '@/auth/Auth';
import type { IAnkhCmsThemePalette, IAnkhUiIntrinsicProps } from 'ankh-types';
import { stringifyHsl } from '@/utils/color.util';

export function AnkhUiPagination({
  totalPages = 5,
  initialPage = 0,
  handlePrevClick = () => { },
  handleNextClick = () => { }
}: IPagination) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [palette, setPalette] = useState<IAnkhCmsThemePalette | null>(null);
  useActivePalette().then((activePalette) => setPalette(activePalette));

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
        <ul style={{ display: 'flex', gap: '.4rem', alignItems: 'center' }}>
          <li style={{ visibility: currentPage === 0 ? 'hidden' : 'visible', padding: '.4rem .8rem', width: 'fit-content', color: $.color, backgroundColor: $.backgroundColor }}>
            <Link style={{ color: $.color, textDecoration: 'none' }}
              className="block px-3 py-1 border rounded"
              href="#"
              onClick={() => {
                handlePrevClick && handlePrevClick();
                setCurrentPage((n) => {
                  if (n - 1 === -1) return n;
                  return n - 1;
                });
              }}
            >
              &laquo;
            </Link>
          </li>
          <li>{currentPage + 1}/{totalPages}</li>
          <li style={{ visibility: currentPage === totalPages - 1 ? 'hidden' : 'visible', padding: '.4rem .8rem', backgroundColor: $.backgroundColor }}>
            <Link style={{ color: $.color, textDecoration: 'none' }}
              href="#"
              onClick={() => {
                handleNextClick && handleNextClick();
                setCurrentPage((n) => {
                  if (n === totalPages - 1) return n;
                  return n + 1;
                })
              }}
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
  readonly handlePrevClick?: () => void;
  readonly handleNextClick?: () => void;
  readonly onPageChange?: (page: number) => void;
}
