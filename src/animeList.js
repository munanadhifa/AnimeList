/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST } from "./queries/anime";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./anime.css";

function AnimeList() {
  const { data } = useQuery(GET_ANIME_LIST);
  const [animes, setAnime] = useState([]);

  useEffect(() => {
    if (data) {
      setAnime(data.Page.media);
    }
  }, [data]);

  return (
    <div>
      <h1>Anime List</h1>
      <div className="grid">
        {animes.map((item) => (
          <Grid key={item.id}>
            <div className="grid__flex">
              <Link to={`/animes/${item.id}`}>
                <img className="grid__img" src={item.coverImage.large} />
              </Link>
              <p>{item.title.english || item.title.romaji}</p>
            </div>
          </Grid>
        ))}
      </div>
    </div>
  );
}
export default AnimeList;
