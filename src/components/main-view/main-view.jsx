import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from '../movie-card/movie-card'
import { LoginView } from '../login-view/login-view'
import { MovieView } from '../movie-view/movie-view'
import { SignupView } from "../signup-view/signup-view";


export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    // const [movies, setMovies] = useState();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(storedUser? storedUser : null);
    const [token, setToken] = useState(storedToken? storedToken : null);

    useEffect(() => {
        if(!token) {
            return;
        }

        fetch('', {
            headers: { Authorization: `Bearer ${token}`}
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    }, [token]);

    if(!user) {
        return(
            <>
                <LoginView onLoggedIn={(user, token) => {
                    setUser(user); setToken(token);
                    }} />
                or
                <SignupView />
            </>
        );
    }

    if (selectedMovie) {
        return (
            <MovieView movie = {selectedMovie} onBackClick = {() => setSelectedMovie(null)} />
        );
    }

    // if (movies.length === 0){
    //     return <div>The list is empty!</div>
    // }
    return (
        <div>
      {movies?.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(SelectedMovie) => {
            setSelectedMovie(SelectedMovie);
          }}
        />
      ))}
    </div>
    );
};

