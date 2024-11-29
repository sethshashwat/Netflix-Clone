import { getUserLikedMovies } from '../store';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import NotAvailable from '../components/NotAvailable';

export default function UserLiked() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [email, setEmail] = useState(undefined);
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.netflix.movies)
    const navigate = useNavigate();

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setEmail(currentUser.email);
        else navigate("/login");
    })

    useEffect(() => {
        if (email) {
            dispatch(getUserLikedMovies(email));
        }
        // eslint-disable-next-line
    }, [email]);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => { window.onscroll = null };
    }

    return (
        <Container>
            <Navbar isScrolled={isScrolled} />
            <div className="content flex column">
                <h1>My List</h1>
                <div className="grid flex">
                    {
                        movies.length ?
                            movies.map((movie, index) => {
                                return (
                                    <Card movie={movie} index={index} key={movie.id} isLiked={true} />
                                )
                            }) : <NotAvailable text={"No Movies/TV Shows added in favorites"}/>
                    }
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .content {
        margin: 2.3rem;
        margin-top: 8rem;
        gap: 3rem;
        h1 {
            margin-left: 3rem;
        }
        .grid {
            flex-wrap: wrap;
            gap: 3rem;
            .not-available {
                text-align: center;
                color: white;
                margin-top: 4rem;
            }
        }
    }
`;
