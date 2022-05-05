import { React, useState, useEffect } from 'react';
import { Button, Flex, Text, layout, Select } from '@chakra-ui/react';

const CustomTableHeader = (props) => {
  const [headerText, setHeaderText] = useState();

  const makeHeaderText = (args) => {
    switch (args.type) {
      case 'search':
        setHeaderText(
          <Flex>
            <Text>검색 결과:</Text>
            <Text pl="5px" fontWeight="600">
              총 {args.value01}개
            </Text>
          </Flex>
        );
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    makeHeaderText(props.headerValues);
  }, [props.headerValues]);
  return (
    <Flex
      w={props.width}
      p="2px"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {/* {makeHeaderText(props.headerValues)} */}
      {headerText}
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
    </Flex>
  );
};

export default CustomTableHeader;
