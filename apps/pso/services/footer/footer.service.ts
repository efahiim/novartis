import { gql } from '@apollo/client';
import { ExecuteQuery } from '../apollo/apollo.service';
import FOOTER_QUERY from './query/footer.gql';

export const QueryFooterData = async(): Promise<JSON> => {
  const query = gql`${FOOTER_QUERY}`;
  const data = await ExecuteQuery(query);
  
  return data.footerCollection.items[0];
};
