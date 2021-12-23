function BooksRow(props) {
  return (
    <tr>
      <td>{props.isbn}</td>
      <td>{props.title}</td>
    </tr>
  );
}
export default BooksRow;
