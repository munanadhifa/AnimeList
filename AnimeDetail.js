/* eslint-disable no-undef */
import { useParams } from "react-router-dom";
// import { gql, useQuery } from "@apollo/client";

// const ANIME_DETAIL = gql`
//   query GetAnimeList($id: Int) {
//     Media(id: $id) {
//       id
//       title {
//         english
//         native
//       }
//       coverImage {
//         large
//       }
//       duration
//       seasonYear
//       averageScore
//       genres
//       description
//     }
//   }
// `;

const AnimeDetail = () => {
  const { id } = useParams();
  // const { data } = useQuery(AnimeDetail, {
  //   variables: { id },
  // });
  // console.log(data);

  return (
    <div>
      <h1>Anime ID: {id}</h1>

      {/* <h1>{title.romanji}</h1> */}
      {/* <img className="grid__img" src={animes} /> */}
    </div>
  );
};

export default AnimeDetail;
