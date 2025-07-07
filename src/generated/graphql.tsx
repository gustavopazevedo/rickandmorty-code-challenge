import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Character = {
  __typename?: 'Character';
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']['output']>;
  /** The id of the character. */
  id?: Maybe<Scalars['ID']['output']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']['output']>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']['output']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']['output']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']['output']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']['output']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']['output']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']['output']>;
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']['output']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  species?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type FilterEpisode = {
  episode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FilterLocation = {
  dimension?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Info = {
  __typename?: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']['output']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']['output']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']['output']>;
};

export type Location = {
  __typename?: 'Location';
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']['output']>;
  /** The id of the location. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']['output']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']['output']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type GetCharactersQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  filter?: InputMaybe<FilterCharacter>;
}>;


export type GetCharactersQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', info?: { __typename?: 'Info', count?: number | null, next?: number | null, pages?: number | null } | null, results?: Array<{ __typename?: 'Character', id?: string | null, name?: string | null, status?: string | null, species?: string | null, gender?: string | null, image?: string | null, location?: { __typename?: 'Location', name?: string | null } | null } | null> | null } | null };

export type GetCharacterCountByStatusQueryVariables = Exact<{
  status: Scalars['String']['input'];
}>;


export type GetCharacterCountByStatusQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', info?: { __typename?: 'Info', count?: number | null } | null } | null };

export type GetCharacterCountBySpeciesQueryVariables = Exact<{
  species: Scalars['String']['input'];
}>;


export type GetCharacterCountBySpeciesQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', info?: { __typename?: 'Info', count?: number | null } | null } | null };

export type GetLocationsQueryVariables = Exact<{
  page: Scalars['Int']['input'];
}>;


export type GetLocationsQuery = { __typename?: 'Query', locations?: { __typename?: 'Locations', info?: { __typename?: 'Info', pages?: number | null, next?: number | null } | null, results?: Array<{ __typename?: 'Location', id?: string | null, name?: string | null, residents: Array<{ __typename?: 'Character', id?: string | null } | null> } | null> | null } | null };

export type GetLocationCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationCountQuery = { __typename?: 'Query', locations?: { __typename?: 'Locations', info?: { __typename?: 'Info', count?: number | null } | null } | null };


export const GetCharactersDocument = gql`
    query GetCharacters($page: Int!, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    info {
      count
      next
      pages
    }
    results {
      id
      name
      status
      species
      gender
      image
      location {
        name
      }
    }
  }
}
    `;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCharactersQuery(baseOptions: Apollo.QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables> & ({ variables: GetCharactersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
      }
export function useGetCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
        }
export function useGetCharactersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
        }
export type GetCharactersQueryHookResult = ReturnType<typeof useGetCharactersQuery>;
export type GetCharactersLazyQueryHookResult = ReturnType<typeof useGetCharactersLazyQuery>;
export type GetCharactersSuspenseQueryHookResult = ReturnType<typeof useGetCharactersSuspenseQuery>;
export type GetCharactersQueryResult = Apollo.QueryResult<GetCharactersQuery, GetCharactersQueryVariables>;
export const GetCharacterCountByStatusDocument = gql`
    query GetCharacterCountByStatus($status: String!) {
  characters(filter: {status: $status}) {
    info {
      count
    }
  }
}
    `;

/**
 * __useGetCharacterCountByStatusQuery__
 *
 * To run a query within a React component, call `useGetCharacterCountByStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterCountByStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterCountByStatusQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetCharacterCountByStatusQuery(baseOptions: Apollo.QueryHookOptions<GetCharacterCountByStatusQuery, GetCharacterCountByStatusQueryVariables> & ({ variables: GetCharacterCountByStatusQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharacterCountByStatusQuery, GetCharacterCountByStatusQueryVariables>(GetCharacterCountByStatusDocument, options);
      }
export function useGetCharacterCountByStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharacterCountByStatusQuery, GetCharacterCountByStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharacterCountByStatusQuery, GetCharacterCountByStatusQueryVariables>(GetCharacterCountByStatusDocument, options);
        }
export function useGetCharacterCountByStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCharacterCountByStatusQuery, GetCharacterCountByStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCharacterCountByStatusQuery, GetCharacterCountByStatusQueryVariables>(GetCharacterCountByStatusDocument, options);
        }
export type GetCharacterCountByStatusQueryHookResult = ReturnType<typeof useGetCharacterCountByStatusQuery>;
export type GetCharacterCountByStatusLazyQueryHookResult = ReturnType<typeof useGetCharacterCountByStatusLazyQuery>;
export type GetCharacterCountByStatusSuspenseQueryHookResult = ReturnType<typeof useGetCharacterCountByStatusSuspenseQuery>;
export type GetCharacterCountByStatusQueryResult = Apollo.QueryResult<GetCharacterCountByStatusQuery, GetCharacterCountByStatusQueryVariables>;
export const GetCharacterCountBySpeciesDocument = gql`
    query GetCharacterCountBySpecies($species: String!) {
  characters(filter: {species: $species}) {
    info {
      count
    }
  }
}
    `;

/**
 * __useGetCharacterCountBySpeciesQuery__
 *
 * To run a query within a React component, call `useGetCharacterCountBySpeciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterCountBySpeciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterCountBySpeciesQuery({
 *   variables: {
 *      species: // value for 'species'
 *   },
 * });
 */
export function useGetCharacterCountBySpeciesQuery(baseOptions: Apollo.QueryHookOptions<GetCharacterCountBySpeciesQuery, GetCharacterCountBySpeciesQueryVariables> & ({ variables: GetCharacterCountBySpeciesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharacterCountBySpeciesQuery, GetCharacterCountBySpeciesQueryVariables>(GetCharacterCountBySpeciesDocument, options);
      }
export function useGetCharacterCountBySpeciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharacterCountBySpeciesQuery, GetCharacterCountBySpeciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharacterCountBySpeciesQuery, GetCharacterCountBySpeciesQueryVariables>(GetCharacterCountBySpeciesDocument, options);
        }
export function useGetCharacterCountBySpeciesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCharacterCountBySpeciesQuery, GetCharacterCountBySpeciesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCharacterCountBySpeciesQuery, GetCharacterCountBySpeciesQueryVariables>(GetCharacterCountBySpeciesDocument, options);
        }
export type GetCharacterCountBySpeciesQueryHookResult = ReturnType<typeof useGetCharacterCountBySpeciesQuery>;
export type GetCharacterCountBySpeciesLazyQueryHookResult = ReturnType<typeof useGetCharacterCountBySpeciesLazyQuery>;
export type GetCharacterCountBySpeciesSuspenseQueryHookResult = ReturnType<typeof useGetCharacterCountBySpeciesSuspenseQuery>;
export type GetCharacterCountBySpeciesQueryResult = Apollo.QueryResult<GetCharacterCountBySpeciesQuery, GetCharacterCountBySpeciesQueryVariables>;
export const GetLocationsDocument = gql`
    query GetLocations($page: Int!) {
  locations(page: $page) {
    info {
      pages
      next
    }
    results {
      id
      name
      residents {
        id
      }
    }
  }
}
    `;

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetLocationsQuery(baseOptions: Apollo.QueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables> & ({ variables: GetLocationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
      }
export function useGetLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
        }
export function useGetLocationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
        }
export type GetLocationsQueryHookResult = ReturnType<typeof useGetLocationsQuery>;
export type GetLocationsLazyQueryHookResult = ReturnType<typeof useGetLocationsLazyQuery>;
export type GetLocationsSuspenseQueryHookResult = ReturnType<typeof useGetLocationsSuspenseQuery>;
export type GetLocationsQueryResult = Apollo.QueryResult<GetLocationsQuery, GetLocationsQueryVariables>;
export const GetLocationCountDocument = gql`
    query GetLocationCount {
  locations {
    info {
      count
    }
  }
}
    `;

/**
 * __useGetLocationCountQuery__
 *
 * To run a query within a React component, call `useGetLocationCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLocationCountQuery(baseOptions?: Apollo.QueryHookOptions<GetLocationCountQuery, GetLocationCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationCountQuery, GetLocationCountQueryVariables>(GetLocationCountDocument, options);
      }
export function useGetLocationCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationCountQuery, GetLocationCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationCountQuery, GetLocationCountQueryVariables>(GetLocationCountDocument, options);
        }
export function useGetLocationCountSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLocationCountQuery, GetLocationCountQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLocationCountQuery, GetLocationCountQueryVariables>(GetLocationCountDocument, options);
        }
export type GetLocationCountQueryHookResult = ReturnType<typeof useGetLocationCountQuery>;
export type GetLocationCountLazyQueryHookResult = ReturnType<typeof useGetLocationCountLazyQuery>;
export type GetLocationCountSuspenseQueryHookResult = ReturnType<typeof useGetLocationCountSuspenseQuery>;
export type GetLocationCountQueryResult = Apollo.QueryResult<GetLocationCountQuery, GetLocationCountQueryVariables>;