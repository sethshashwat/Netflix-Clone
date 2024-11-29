import React from 'react'
import CardSlider from './CardSlider'

const Slider = ({ movies }) => {
    const getMovieFromRange = (from, to) => {
        return movies.slice(from, to);
    }
    return (
        <div>
            <CardSlider title="Trending Now" data={getMovieFromRange(0, 10)} />
            <CardSlider title="Critically Acclaimed" data={getMovieFromRange(11, 20)} />
            <CardSlider title="Blockbuster" data={getMovieFromRange(21, 30)} />
            <CardSlider title="Popular on Netflix" data={getMovieFromRange(31, 40)} />
            <CardSlider title="New on Netflix" data={getMovieFromRange(41, 50)} />
            <CardSlider title="Action" data={getMovieFromRange(51, 60)} />
        </div>
    )
}

export default Slider
