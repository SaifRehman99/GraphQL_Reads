import React from 'react';
import ApolloClient from 'apollo-boost';

import BookList from './Components/BookList';
import AddBooks from './Components/AddBook';

// Apollo Client Setup
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>Saif Reading List</h1>
        <BookList />
        <AddBooks />
      </div>
    </ApolloProvider>
  );
}

export default App;
