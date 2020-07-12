import React, { useState } from 'react';

import { getAuthors, AddBookMutation, getBooksQuery, getBookQuery } from '../Queries/queries';
import { useQuery } from '@apollo/react-hooks';
import { useMutation } from '@apollo/react-hooks';

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthors);
  var [addBook, res] = useMutation(AddBookMutation);

  const [formData, setFormData] = useState({
    name: '',
    genre: '',
    authorId: '',
  });

  const { name, genre, authorId } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    addBook({ variables: { name, genre, authorId }, refetchQueries: [{ query: getBooksQuery }] });

    setFormData({
      name: '',
      genre: '',
      authorId: '',
    });
  };

  const displayAuthors = () =>
    loading ? (
      <option disabled>Loading Authors....</option>
    ) : (
      data.authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ))
    );

  return (
    <div>
      <form id='add-book' onSubmit={onSubmit}>
        <div className='field'>
          <label>Book Name:</label>
          <input type='text' onChange={onChange} name='name' value={name} />
        </div>

        <div className='field'>
          <label>Genre:</label>
          <input type='text' onChange={onChange} name='genre' value={genre} />
        </div>

        <div className='field'>
          <label>Authors:</label>
          <select onChange={onChange} name='authorId' value={authorId}>
            <option value=''>Select Authors</option>
            {displayAuthors()}
          </select>
        </div>

        <button type='submit'>+</button>
      </form>
    </div>
  );
};

export default AddBook;
