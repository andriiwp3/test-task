import { gql } from '@apollo/client';

export const GET_LOOS = gql`
  query GetLoos($filters: LooFilter!, $pagination: PaginationInput, $sort: SortOrder) {
    loos(filters: $filters, pagination: $pagination, sort: $sort) {
      loos {
        id
        name
      }
      total
      page
      limit
      pages
    }
  }
`;

export const GET_LOO_DETAILS = gql`
  query GetLooDetails($id: ID!) {
    loo(id: $id) {
      id
      name
      createdAt
      updatedAt
      active
      area {
        name
        type
      }
    }
  }
`;