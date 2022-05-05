import { React, useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { Pagination } from 'react-bootstrap';

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
    console.log('pagenumber:', pageNumbers);
  }, []);

  return (
    <Pagination>
      {cur !== 0 && (
        <Pagination.Item>
          {/* <PaginationLink
            previous
            tag="button"
            onClick={(e) => {
              if (onPageChanged) onPageChanged(cur - 1);
            }}
          >
            Prev
          </PaginationLink> */}
          <Button>prev</Button>
        </Pagination.Item>
      )}
      {pageNumbers.map((v, i) => {
        var isActive = cur === v - 1;
        return (
          <Pagination.Item key={i} active={isActive}>
            {/* <Pagination.Item
              tag="button"
              onClick={(e) => {
                if (onPageChanged) onPageChanged(n - 1);
              }}
            >
              {n}
            </PaginationLink> */}
            <Button>{v}</Button>
          </Pagination.Item>
        );
      })}

      {pageTotal > cur + 1 && (
        <Pagination.Item>
          {/* <PaginationLink
            next
            tag="button"
            onClick={(e) => {
              if (onPageChanged) onPageChanged(cur + 1);
            }}
          >
            Next
          </PaginationLink> */}
          <Button>next</Button>
        </Pagination.Item>
      )}
    </Pagination>
  );
};

export default CustomTablePagination;
