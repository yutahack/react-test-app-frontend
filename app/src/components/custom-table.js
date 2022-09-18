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
  Select,
} from '@chakra-ui/react';
import { useTable, useSortBy, useFilters, useExpanded, usePagination } from 'react-table';
import './table.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from '@material-ui/lab/Pagination';
import CustomTablePagination from './custom-table-pagination';

const CustomTable = (props) => {
  const fontSize = props.fontSize;
  const columns = props.columns;
  const data = props.data;
  // const [columns, setColumns] = useState('');
  // const [data, setData] = useState([]);

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
  //   columns,
  //   data,
  // });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows, -> we change 'rows' to 'page'
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
      // initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );

  // const numbering = (data) => {
  //   data.map((v, i) => {
  //     data[i].no = i + 1;
  //   });
  //   return data;
  // };

  // useEffect(() => {
  //   var d = props.data;
  //   setData(d);
  //   // setColumns(props.columns);
  //   // setData(numbering(data));
  //   // setData(numbering(data));
  //   var nd = numbering(d);
  //   setData(nd);
  // setData(data);
  //   // console.log(d);
  // }, [data]);

  return (
    <Flex width={props.width} direction="column">
      {/* CardHeader */}
      {/* <Flex
        direction="column"
        p="0px"
        borderWidth="1px"
        borderRadius="5px"
        boxShadow="md"
        overflowY="scroll"
      > */}
      {/* <Flex p="2px" direction="row" justifyContent="space-between" alignItems="center">
        <Text>aa</Text>
        <Select
          w="30%"
          size="sm"
          justifyContent="end"
          onChange={(e) => props.onChangedCardHeaderLimitSelectDrop(e)}
        >
          <option value={10}>10개</option>
          <option value={20}>20개</option>
          <option value={30}>30개</option>
          <option value={50}>50개</option>
          <option value={100}>100개</option>
        </Select>
      </Flex> */}
      {/* </Flex> */}
      <Flex h="3px" />
      {/* Table */}
      <Flex
        direction="column"
        pl="5px"
        pr="5px"
        borderWidth="1px"
        borderRadius="5px"
        boxShadow="sm"
        maxHeight="400px"
        overflowY="scroll"
        background="white"
      >
        {/* <Pagination count={5} defaultPage={1} siblingCount={0} />
      <Pagination
        className="my-3"
        // count={count}
        page={page}
        siblingCount={1}
        boundaryCount={1}
        variant="outlined"
        shape="rounded"
        // onChange={handlePageChange}
      /> */}
        <table {...getTableProps()}>
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
      <Flex h="10px" />
      <Flex justifyContent="center">
        <CustomTablePagination page={props.page} onPageChanged={props.onPageChanged} />
      </Flex>
    </Flex>
  );
};

export default CustomTable;
