async function fetchGraphQL(gqlQuery, params) {
  let v = { loading: false, response: '200', value: '' };

  try {
    const response = await fetch('http://localhost:4001/books', {
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
