/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from '@apollo/client'; 
import { ExecuteQuery } from '../apollo/apollo.service';
import QUERY_ENTRIES_TYPES from './query/screen.types.gql';
import QUERY_SCREEN_DATA from './query/screen.data.gql';
import ColorTextFragment from '../fragments/colorText.fragment.gql';
import CtaFragment from '../fragments/cta.fragment.gql';
import HintBoxFragment from '../fragments/hintBox.fragment.gql';
import InfoContentFragment from '../fragments/infoContent.fragment.gql';
import QuestionFragment from '../fragments/question.fragment.gql';
import CtaContainerFragment from '../fragments/ctaContainer.fragment.gql';
import VideoFragment from '../fragments/video.fragment.gql';

/**
 * Function to create a block fragment to later concatenate with the main query.
 * @param {string[]} type - REQUIRED: This is an array of __typename (entries).
*/
export const GetBlockFragment = (type: string[]) => {
  let query = `
    fragment BlockFragment on Entry {
      sys {
        id
      }
      __typename
  `;
  const uniqueTypes: string[] = [];

  type.forEach((item) => {
    if (!uniqueTypes.includes(item)) {
      uniqueTypes.push(item);
    }
  });

  if (uniqueTypes.includes('ColorText')) {
    query += `\n ...ColorTextFragment`;
  }
  if (uniqueTypes.includes('Cta')) {
    query += `\n ...CtaFragment`;
  }
  if (uniqueTypes.includes('HintBox')) {
    query += `\n ...HintBoxFragment`;
  }
  if (uniqueTypes.includes('InfoContent')) {
    query += `\n ...InfoContentFragment`;
  }
  if (uniqueTypes.includes('Question')) {
    query += `\n ...QuestionFragment`;
  }
  if (uniqueTypes.includes('CtaContainer')) {
    query += `\n ...CtaContainerFragment`;
  }
  if (uniqueTypes.includes('Video')) {
    query += `\n ...VideoFragment`;
  }

  query += `\n}`;

  return query;
};

/**
 * Function to create a inline fragment to later concatenate with the main query.
 * @param {string[]} type - REQUIRED: This is an array of __typename (entries).
*/
export const GetInlineFragment = (type: string[]) => {
  let query = `
    fragment InlineFragment on Entry {
      sys {
        id
      }
      __typename
  `;
  const uniqueTypes: string[] = [];

  type.forEach((item) => {
    if (!uniqueTypes.includes(item)) {
      uniqueTypes.push(item);
    }
  });

  if (uniqueTypes.includes('ColorText')) {
    query += `\n ...ColorTextFragment`;
  }
  if (uniqueTypes.includes('Cta')) {
    query += `\n ...CtaFragment`;
  }
  if (uniqueTypes.includes('HintBox')) {
    query += `\n ...HintBoxFragment`;
  }
  if (uniqueTypes.includes('InfoContent')) {
    query += `\n ...InfoContentFragment`;
  }
  if (uniqueTypes.includes('Question')) {
    query += `\n ...QuestionFragment`;
  }
  if (uniqueTypes.includes('CtaContainer')) {
    query += `\n ...CtaContainerFragment`;
  }
  if (uniqueTypes.includes('Video')) {
    query += `\n ...VideoFragment`;
  }

  query += `\n}`;

  return query;
};

/**
 * Function to add the fragments to the main query.
 * @param {string[]} type - REQUIRED: This is an array of __typename (entries).
*/
export const IncludeFragments = (type: string[]) => {
  let query = '';
  const uniqueTypes: string[] = [];

  type.forEach((item) => {
    if (!uniqueTypes.includes(item)) {
      uniqueTypes.push(item);
    }
  });

  if (uniqueTypes.includes('ColorText')) {
    query += `\n ${ColorTextFragment.loc.source.body}`;
  }
  if (uniqueTypes.includes('Cta')) {
    query += `\n ${CtaFragment.loc.source.body}`;
  }
  if (uniqueTypes.includes('HintBox')) {
    query += `\n ${HintBoxFragment.loc.source.body}`;
  }
  if (uniqueTypes.includes('InfoContent')) {
    query += `\n ${InfoContentFragment.loc.source.body}`;
  }
  if (uniqueTypes.includes('Question')) {
    query += `\n ${QuestionFragment.loc.source.body}`;
  }
  if (uniqueTypes.includes('CtaContainer')) {
    query += `\n ${CtaContainerFragment.loc.source.body}`;
  }
  if (uniqueTypes.includes('Video')) {
    query += `\n ${VideoFragment.loc.source.body}`;
  } 
  
  return query;
};

/**
 * Function to build the fragment to later concatenate with the main query.
 * @param {string[]} type - REQUIRED: This is an array of __typename (entries).
*/
export const BuildFragment = (type: string[]) => {
  return `
    ${IncludeFragments(type)}
    ${GetBlockFragment(type)}
    ${GetInlineFragment(type)}
  `;
};

/**
 * Function to create an array of all __typename found in the screen.
 * @param {any} result - REQUIRED: This is result received from the screen links query.
*/
export const GetEmbeddedComponents = (result: any) => {
  if (result.length === 0) {
    return [];
  }
  
  const types: string[] = [];
  if (result.screenCollection.items[0].leftContent !== null && result.screenCollection.items[0].leftContent !== undefined) {
    const leftContentEntries = result.screenCollection.items[0].leftContent.links.entries;
    leftContentEntries.block.map((item: any) => {
      if (!types.includes(item.__typename)) {
        types.push(item.__typename);
      }
    });
    leftContentEntries.inline.map((item: any) => {
      if (!types.includes(item.__typename)) {
        types.push(item.__typename);
      }
    });
  }
  if (result.screenCollection.items[0].rightContent !== null && result.screenCollection.items[0].rightContent !== undefined) {
    const rightContentEntries = result.screenCollection.items[0].rightContent.links.entries;
    rightContentEntries.block.map((item: any) => {
      if (!types.includes(item.__typename)) {
        types.push(item.__typename);
      }
    });
    rightContentEntries.inline.map((item: any) => {
      if (!types.includes(item.__typename)) {
        types.push(item.__typename);
      }
    });
  }

  return types;
};

/**
 * Function which queries for screen links, call GetEmbeddedComponents and return data for embedded entries.
 * @param {any} slug - REQUIRED: The slug of the specific screen.
*/
export const GetEmbeddedComponentsList = async (slug: string): Promise<string[]> => {
  const query = gql`${QUERY_ENTRIES_TYPES}`;
  const data = await ExecuteQuery(query, { slug }).then(result => GetEmbeddedComponents(result));

  return data;
};

/**
 * Main function to get Links data of all embedded entries for a specific screen.
 * @param {any} slug - REQUIRED: The slug of the specific screen.
*/
export const QueryScreenLinks = async (slug: string): Promise<JSON> => {
  const entriesTypes = await GetEmbeddedComponentsList(slug); // Rich Text Entries Types
  const query = gql`
    ${BuildFragment(entriesTypes)}
    ${QUERY_SCREEN_DATA}
  `;
  const data = await ExecuteQuery(query, { slug });
  
  return data.screenCollection.items[0];
};