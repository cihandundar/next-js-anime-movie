"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./moviedetails.module.css";
const MovieDetails = ({ params }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://shikimori.one/api/animes/${params.movieId}`
        );
        setMovieDetails(response?.data);
      } catch (error) {
        console.error("Error fetching movie details:", error.message);
      }
    };

    fetchMovieDetails();
  }, [params.movieId]);

  if (!movieDetails) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          aligItems: "center",
          justifyContent: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div className={styles.details}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.leftImage}>
            {movieDetails.image?.preview && (
              <img
                src={`https://shikimori.one${movieDetails.image.preview}`}
                alt={movieDetails.name}
                width={200}
                height={250}
              />
            )}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightItem}>
            <h2>{movieDetails.name}</h2>
          </div>
          <div className={styles.rightItem}>
            <p>{movieDetails.description}</p>
          </div>
          <div className={styles.rightItem}>
            <h3>Rate: {movieDetails.score}</h3>
          </div>
          <div className={styles.rightItem}>
            <h3>Episodes: {movieDetails.episodes}</h3>
          </div>
          <div className={styles.rightItem}>
            <h3>Licensors: {movieDetails.licensors}</h3>
          </div>
          <div className={styles.rightItem}>
            <h3>Released on: {movieDetails.aired_on}</h3>
          </div>
          <div className={styles.rightItem}>
            <h3> Finished: {movieDetails.released_on}</h3>
          </div>
          <div className={styles.rightItem}>
            <h3>Studios</h3>
            {movieDetails?.studios?.map((studio) => (
              <div key={studio.id} className={styles.studioItem}>
                <img
                  src={`https://shikimori.one${studio.image}`}
                  alt={studio.name}
                  width={150}
                  height={100}
                />
                <h4>{studio.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      {movieDetails?.videos?.length > 0 && (
        <>
          <div className={styles.videoTitle}>
            <h3>Trailer</h3>
          </div>
          <div className={styles.videos}>
            {movieDetails.videos.map((video) => (
              <div key={video.id} className={styles.videoItem}>
                <iframe
                  width="560"
                  height="315"
                  src={video.player_url}
                  title={video.name}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
