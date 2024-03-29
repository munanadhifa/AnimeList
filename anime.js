import { gql } from "@apollo/client";

export const GET_ANIME_LIST = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
      }
      media(isAdult: false, sort: POPULARITY_DESC) {
        id
        title {
          romaji
          english
        }
        coverImage {
          extraLarge
          large
          medium
        }
        meanScore
        averageScore
        popularity
        episodes
        season
        seasonYear
        status
        type
        genres
      }
    }
  }
`;

export const ANIME_DETAIL = gql`
  query GetAnimeList($id: Int) {
    Media(id: $id) {
      id
      title {
        english
        native
      }
      coverImage {
        large
      }
      duration
      seasonYear
      averageScore
      genres
      description
    }
  }
`;
