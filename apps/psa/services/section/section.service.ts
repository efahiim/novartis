import { gql } from '@apollo/client';
import { ExecuteQuery } from '../apollo/apollo.service';
import LeftScreensFragment from '../fragments/leftScreens.fragment.gql';
import MiddleScreensFragment from '../fragments/middleScreens.fragment.gql';
import RightScreensFragment from '../fragments/rightScreens.fragment.gql';
import QUERY_SECTION_DATA from './query/section.gql';

export const QuerySectionData = async(slug: string): Promise<JSON> => {
  const query = gql`
    ${LeftScreensFragment}
    ${MiddleScreensFragment}
    ${RightScreensFragment}
    ${QUERY_SECTION_DATA}
  `;
  const data = await ExecuteQuery(query, {slug});
  
  return data.experienceCollection.items[0].sectionPickerCollection.items;
};
