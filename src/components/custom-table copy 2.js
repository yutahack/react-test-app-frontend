import { React, useState, useEffect } from 'react';
import {
  Button,
  Flex,
  Heading,
  Input,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  useToast,
  Wrap,
  WrapItem,
  Spacer,
  Text,
  layout,
} from '@chakra-ui/react';
import { useTable, useSortBy, useFilters, useExpanded, usePagination } from 'react-table';
import './table.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const CustomTable3 = (props) => {
  const fontSize = props.fontSize;
  const columns = props.columns;
  const data = props.data;

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
  //   columns,
  //   data,
  // });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows, -> we change 'rows' to 'page'
    page,
    prepareRow,
    visibleColumns,
    // below new props related to 'usePagination' hook
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    rows,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );

  return (
    <Flex>
      <table {...getTableProps()} className={'bordered hover'}>
        {/* <Table striped bordered hover size="sm" {...getTableProps()}> */}
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  width={column.width}
                  style={{ fontSize: fontSize }}
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} style={{ fontSize: fontSize }}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Flex>
  );
};

export default CustomTable3;
