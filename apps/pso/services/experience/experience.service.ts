import { gql } from '@apollo/client';
import { ExecuteQuery } from '../apollo/apollo.service';
import { SlugList, IslugList } from '../experience/experience.request';
import EXPERIENCE_QUERY from './query/experience.gql';

export const QueryExperienceSlugs = async(): Promise<Array<IslugList>> => {
  const query = gql`${EXPERIENCE_QUERY}`;
  const data = await ExecuteQuery(query);

  return SlugList(data.indicationCollection.items[0].experiencePickerCollection.items);
};

export const QueryExperiences = async(): Promise<Array<JSON>> => {
  const query = gql`${EXPERIENCE_QUERY}`;
  const data = await ExecuteQuery(query);

  return data.indicationCollection.items[0].experiencePickerCollection.items;
};
