import { gql } from 'apollo-boost';

export const getBooksQuery = gql`
  {
    books {
      id
      name
      genre
      author {
        id
        name
        age
      }
    }
  }
`;

export const getBookQuery = gql`
  query($id: ID!) {
    book(id: $id) {
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
          genre
        }
      }
    }
  }
`;

export const getAuthors = gql`
  {
    authors {
      id
      name
      age
    }
  }
`;

// Same mutation name in the schema
// $name ( query variable)
export const AddBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
      author {
        id
        name
        age
      }
    }
  }
`;
