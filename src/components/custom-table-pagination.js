import { React, useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomTablePagination = ({ page, onPageChanged }) => {
  const isMobile = false;
  //   const pagingCnt = page.pagingCnt || isMobile ? 5 : 10;
  const pagingCnt = 5;
  const pageNumbers = [];
  const pageTotal = Math.ceil(page.total / page.limit);
  const pageGroup = Math.ceil(pageTotal / pagingCnt);

  const cnt = page ? Math.floor((page.total + page.limit - 1) / page.limit) : 0;
  const cur = page ? Math.floor(page.offset / page.limit) : 0;

  for (let i = 1; i <= pageGroup; i++) {
    if (i * pagingCnt > cur) {
      for (let j = i * pagingCnt - (pagingCnt - 1); j <= i * pagingCnt; j++) {
        if (j > pageTotal) break;
        pageNumbers.push(j);
      }
      break;
    }
  }

  useEffect(() => {
    console.log('page:', page);
    console.log('pageTotal:', pageTotal);
    console.log('pagenumber:', pageNumbers);
  }, []);
  useEffect(() => {
    console.log('pageTotal:', pageTotal);
  }, [pageTotal]);

  return (
    <Pagination>
      {/* {cur !== 0 && (
        <Pagination.Item
          onClick={(e) => {
            if (onPageChanged) onPageChanged(cur - 1);
          }}
        >
          {'<'}
        </Pagination.Item>
      )} */}
      <Pagination.Item
        disabled={0 !== cur ? false : true}
        onClick={(e) => {
          if (onPageChanged) onPageChanged(cur - 1);
        }}
      >
        {'<'}
      </Pagination.Item>

      {pageNumbers.map((v, i) => {
        var isActive = cur === v - 1;
        return (
          <Pagination.Item
            key={i}
            active={isActive}
            onClick={(e) => {
              if (onPageChanged) onPageChanged(v - 1);
            }}
          >
            {v}
          </Pagination.Item>
        );
      })}

      <Pagination.Item
        disabled={pageTotal > cur + 1 ? false : true}
        onClick={(e) => {
          if (onPageChanged) onPageChanged(cur + 1);
        }}
      >
        {'>'}
      </Pagination.Item>
    </Pagination>
  );
};

export default CustomTablePagination;
