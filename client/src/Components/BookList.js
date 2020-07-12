import React, { useState } from 'react';
import { getBooksQuery } from '../Queries/queries';

import { useQuery } from '@apollo/react-hooks';

import BookDetails from './BookDetails';

const BookList = () => {
  const [bookID, setBookID] = useState('');
  const { loading, error, data } = useQuery(getBooksQuery);

  const displayData = () =>
    loading ? (
      <p>Loading....</p>
    ) : (
      data.books.map((book) => (
        <li key={book.id} onClick={() => setBookID(book.id)}>
          {book.name} written by {book.author.name}
        </li>
      ))
    );

  return (
    <div>
      <ul id='book-list'>{displayData()}</ul>
      <BookDetails bookID={bookID} />
    </div>
  );
};

export default BookList;
