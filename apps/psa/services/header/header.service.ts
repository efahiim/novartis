import { gql } from '@apollo/client';
import { ExecuteQuery } from '../apollo/apollo.service';
import HEADER_QUERY from './query/header.gql';

export const QueryHeaderData = async(): Promise<JSON> => {
  const query = gql`${HEADER_QUERY}`;
  const data = await ExecuteQuery(query);
  
  return data.headerCollection.items[0];
};
