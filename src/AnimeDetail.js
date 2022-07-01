import React from "react";
import { useParams } from "react-router-dom";

const AnimeDetail = () => {
  const { id } = useParams();
  // const { data } = useQuery(GET_ANIME_LIST);
  // const [animes, setAnime] = useState([]);

  // useEffect(() => {
  //   if (data) {
  //     setAnime(data.Page.media);
  //   }
  // }, [data, id]);

  return (
    <div>
      <h1>Anime ID: {id}</h1>
    </div>
  );
};

export default AnimeDetail;
