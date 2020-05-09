import { useState, useEffect } from "react";
import { POPULER_BASE_URL } from "../../config";

export const useHomeFetch = (searchTerm) => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search("page");

    try {
      const result = await (await fetch(endpoint)).json();
      setState((prev) => ({
        ...prev,
        movies:
          isLoadMore !== -1
            ? [...prev.movies, ...result.results]
            : [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  // Fetch popular movies initially on mount
  useEffect(() => {
    //check if data available in sesstion then do not fetch it from the server
    if (sessionStorage.homeState) {
      // console.log("fetch from sesstion");
      setState(JSON.parse(sessionStorage.homeState));
    } else {
      // console.log("fetch from api")
      fetchMovies(POPULER_BASE_URL);
    }
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      // console.log("Writing to session storage");
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  });

  return [{ state, loading, error }, fetchMovies];
};
