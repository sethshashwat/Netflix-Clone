import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getGenres, fetchMovies } from "../store";
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenres from '../components/SelectGenres';


const Movies = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const dispatch = useDispatch();
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
    const movies = useSelector((state) => state.netflix.movies)
    const genres = useSelector((state) => state.netflix.genres)

    useEffect(() => {
        dispatch(getGenres());
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (genresLoaded) dispatch(fetchMovies({ type: "movie" }));
        // eslint-disable-next-line
    }, [genresLoaded]);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => { window.onscroll = null };
    }

    return (
        <Container>
            <div className="navbar">
                <Navbar isScrolled={isScrolled} />
            </div>
            <div className="data">
                <SelectGenres genres={genres} type="movie" />
                {
                    movies.length ? <Slider movies={movies} /> : <NotAvailable text={"No Movies available for selected genre"} />
                }
            </div>
        </Container>
    )
}

export default Movies;

const Container = styled.div`
    .data {
        margin-top: 8rem;
        .not-available {
            text-align: center;
            color: white;
            margin-top: 4rem;
        }
    }
`;
