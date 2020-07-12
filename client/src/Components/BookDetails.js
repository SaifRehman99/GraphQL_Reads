import React from 'react';

import { getBookQuery } from '../Queries/queries';
import { useQuery } from '@apollo/react-hooks';

const BookDetails = ({ bookID }) => {
  const { loading, error, data } = useQuery(getBookQuery, { variables: { id: bookID } });

  const displayBookDetails = () =>
    data ? (
      <div>
        <h2>{data.book.name}</h2>
        <p>{data.book.genre}</p>
        <p>{data.book.author.name}</p>
        <p>All Books by this Author</p>
        <ul className='other-books'>
          {data.book.author.books.map((book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </div>
    ) : (
      <div>No Books Selected</div>
    );

  return <div id='book-details'>{displayBookDetails()}</div>;
};

export default BookDetails;
