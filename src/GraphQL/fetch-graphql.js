const config = require('../config/consts');

async function fetchGraphQL(gqlQuery, params) {
  let v = { loading: false, response: '200', value: '' };

  // GraphQL 접속을 위한 URL 정의
  let gql_remote = config.REMOTE_SERVER_ADDRESS;
  // console.log('Gql fetch URI= ', gql_remote);
  try {
    const response = await fetch(gql_remote, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: gqlQuery,
        variables: params,
      }),
    });
    v.value = await response.json();
    return v;
  } catch (err) {
    v.response = 400;
    v.value = err;
    return v;
  }
}

export default fetchGraphQL;
