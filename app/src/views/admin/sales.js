import { React, useState, useEffect } from 'react';
import { Button, Flex, Menu, Box, SimpleGrid, Text } from '@chakra-ui/react';
import { priceToString } from '../../utils/utils';
import CustomButtonR from '../../components/custom-button-r';
import CustomButton from '../../components/custom-button';
import { useNavigate } from 'react-router-dom';
import CustomTable from '../../components/custom-table';
import client, { sequencer } from '../../client/client';
import PuffLoader from 'react-spinners/PuffLoader';
import CustomPagination from '../../components/custom-pagination';
import CustomTableHeader from '../../components/custom-table-header';

const Sales = () => {
  let navigate = useNavigate();
  const [headerValues, setHeaderValues] = useState({ type: '', value01: 0 });
  const [trHistoryLoadingState, setTrHistoryLoadingState] = useState(false);
  const [trHistory, setTrHistory] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [pageTotal, setPageTotal] = useState(0);

  // const columnHeaders = [
  //   { name: 'No', key: 'no', width: '5%', grow: 5 },
  //   { name: '결제일시', key: 'tr_date', width: '10%', grow: 15 },
  //   { name: '거래번호', key: 'tr_no', width: '10%', grow: 10 },
  //   { name: '결제수단', key: 'pay_method', width: '10%', grow: 10 },
  //   { name: '금액', key: 'price', width: '10%', grow: 10 },
  // ];

  const columns = [
    { Header: 'No', accessor: 'no', width: '5%' },
    { Header: '결제일시', accessor: 'tr_date', width: '20%', grow: 15 },
    { Header: '거래번호', accessor: 'tr_no', width: '10%', grow: 10 },
    { Header: '결제수단', accessor: 'pay_method', width: '10%', grow: 10 },
    { Header: '총액', accessor: 'amount', width: '10%', grow: 10 },
  ];

  // const salesData = [
  //   { no: '1', tr_date: '2022-01-01 12:34', tr_no: '0001', amount: '1000', pay_method: 'card' },
  //   { no: '2', tr_date: '2022-01-02 12:34', tr_no: '0002', pay_method: 'card', amount: '2222' },
  //   { no: '3', tr_date: '2022-01-03 12:34', tr_no: '0003', pay_method: 'card', amount: '33100' },
  // ];
  const ctHeaderHeight = '40px';
  const ctDataHeight = '30px';

  const [inputs, setInputs] = useState({
    tr_no: '',
    pay_method: '',
    del_yn: '',
  });
  const page = { offset: pageOffset, limit: pageLimit, total: pageTotal };

  const onLimitChange = (e) => {
    const { value } = e.target;
    setPageLimit(parseInt(value));
    setPageOffset(0);
  };

  // const setHeaderValues= (args) => {
  //   setHeaderValue ({type: args.type, value01: args.value01});
  // }

  const fetchTrHistory = async () => {
    setTrHistoryLoadingState(true);
    const params = { ...inputs, ...page };
    console.log('params', params);
    const { loading, response, value } = await client.getTrHistory(params);
    if (loading) return 'Loading...';

    // if ('200' != response) return `Error! ${response.message}`;
    // return 'success';
    setTrHistoryLoadingState(false);
    if ('200' == response && '600' == value.data.GetTrHistory.error) {
      // setTrHistory(value.data.GetTrHistory.result.rows);
      setTrHistory(
        sequencer.list(
          value.data.GetTrHistory.result.rows,
          value.data.GetTrHistory.result.count,
          page.offset
        )
      );
      setPageTotal(value.data.GetTrHistory.result.count);
      setHeaderValues({ type: 'search', value01: value.data.GetTrHistory.result.count });
    } else {
      console.log('ng');
    }
  };

  // const paginationHandler = (e) => {
  //   switch (e) {
  //     case 'prev':
  //       if (offset > 0) {
  //         setOffset(offset - 10);
  //       }
  //       break;

  //     case 'next':
  //       setOffset(offset + 10);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  useEffect(() => {
    // fetchTrHistory();
    // let timer = setTimeout(() => {
    //   setProductListLoadingState(false);
    // }, 2000);
    console.log('start');
  }, []);

  useEffect(() => {
    fetchTrHistory();
  }, [pageOffset, pageLimit, pageTotal]);

  useEffect(() => {
    // console.log('pagetotal:', pageTotal);
    console.log('trhis', trHistory);
  }, [trHistory]);

  return (
    <Flex w="500px" h="100%" direction="column" justifyContent="start" alignItems="center">
      <Flex h="30px" />
      <div style={{ fontSize: '32px' }}>매출조회</div>

      <Flex h="30px" />

      <CustomTableHeader
        width="90%"
        headerValues={headerValues}
        onChangedCardHeaderLimitSelectDrop={onLimitChange}
      />
      {trHistoryLoadingState ? (
        <>
          <Box h="400px">
            <Flex h="100%" w="100%" justifyContent="center" alignItems="center">
              <PuffLoader color={'#5A97DB'} loading={true} size={80}></PuffLoader>
            </Flex>
          </Box>
        </>
      ) : (
        <Flex direction="column" width="100%" alignItems="center">
          <CustomTable
            width="90%"
            columns={columns}
            cardHeader={''}
            headerHeight={ctHeaderHeight}
            data={trHistory}
            page={page}
            dataHeight={ctDataHeight}
            onPageChanged={(i) => {
              if (i >= 0) {
                setPageOffset(i * page.limit);
              }
              console.log('PageChanged: ', i);
            }}
            fontSize="14px"
          />
          {/* <CustomPagination
            data={trHistory}
            handler={(e) => {
              // paginationHandler(e);
            }}
          /> */}
        </Flex>
      )}
    </Flex>
  );
};

export default Sales;
