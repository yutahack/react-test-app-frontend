import logo from './logo.svg';
import './App.css';
// import Router from './router';
import TransitionRouter from './transition-router';
import { BrowserRouter } from 'react-router-dom';
import Main from './views/main/main';
import { Box, Flex } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Router /> */}
        <BrowserRouter>
          <div className="Main">
            <Flex
              height={'100vh'}
              justifyContent={'center'}
              alignItems="center"
              direction="column"
              pt="35px"
            >
              <Box
                // bg={'black.400'}
                w={'550px'}
                // height={'100vh'}
                roundedTopLeft={'25px'}
                roundedTopRight={'25px'}
                shadow={'dark-lg'}
                pt="25px"
                // bg="blackAlpha.900"
                bg="blackAlpha.800"
                h="870px"
              >
                <Flex
                  //   justifyContent={'center'}
                  alignItems={'center'}
                  direction={'column'}
                >
                  <Box
                    bg={'gray.50'}
                    height={'820px'}
                    // mt={'25px'}
                    mb={'25px'}
                    w={'500px'}
                    rounded={'15px'}
                    boxShadow={'inner'}
                  >
                    <Flex w="100%" h="100%">
                      <TransitionRouter />
                    </Flex>
                  </Box>
                </Flex>
              </Box>

              <Box w="550px" shadow="dark-lg" pt="25px" bg="gray.300" h="100%"></Box>
            </Flex>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
