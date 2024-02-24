"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./movies.module.css";
import { FaSearch } from "react-icons/fa";
const Movies = () => {
  const [originalAnimes, setOriginalAnimes] = useState([]);
  const [animes, setAnimes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://shikimori.one/api/animes?page=1&limit=28&order=popularity"
        );
        setOriginalAnimes(response.data);
        setAnimes(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      if (!searchTerm) {
        setAnimes(originalAnimes);
        return;
      }

      const response = await axios.get(
        `https://shikimori.one/api/animes?search=${searchTerm}`
      );
      setAnimes(response.data);
    } catch (error) {
      console.error("Error searching:", error.message);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1>Popular Animes</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search anime..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
      {animes.length > 0 ? (
        <ul>
          {animes.map((anime) => (
            <li key={anime.id}>
              {anime.image?.preview && (
                <img
                  src={`https://shikimori.one${anime.image.preview}`}
                  alt={anime.name}
                  width={200}
                  height={250}
                />
              )}
              <h4>{anime.name}</h4>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.loading}>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Movies;
