import React, { useState, useEffect } from 'react';
import fetchGraphQL from '../graphQL/fetch-graphql';
import BooksRow from './BooksRow';

function BooksTable() {
  const [books, setBooks] = useState([]);
  const [rows, setRows] = useState([]);

  const query = `query getBooks($title: String!) {
    Books(title: $title) {
      isbn
      title
    }
  }`;

  useEffect(async () => {
    const result = await fetchGraphQL(query, { title: '' });
    console.log('result: ', result);
    if ('200' == result.response) {
      if (result.value.data) {
        setBooks(result.value.data.Books);
      }
    } else {
      console.log('Fetch GQL Error!= ', result.value);
    }
  }, []);

  useEffect(async () => {
    pushRows();
  }, [books]);

  const pushRows = () => {
    var tmp = [];
    books.map((book) => {
      tmp.push(<BooksRow isbn={book.isbn} title={book.title} key={book.isbn} />);
    });
    setRows(tmp);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ISBN</th>
          <th>TITLE</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
export default BooksTable;
