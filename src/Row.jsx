import instance from './axios';
import { useState, useEffect } from 'react'
import styled from 'styled-components';

const Row = (props) => {

    const [ movies, setMovies ] = useState([]);

    const baseUrl = "https://image.tmdb.org/t/p/original";
    
    useEffect(() => {
        const fetchMoviesAsync_ = async () => {
            const result = await instance.get(props.fetchUrl);
            setMovies(result.data.results);            
            return result;
        }

        fetchMoviesAsync_();
    },[props.fetchUrl]);
    return (
        <div>
            <h2>{props.title}</h2>
            <PosterWrapper>
                {movies.map( movie => <Poster largeRow={props.largeRow} key={movie.id} src={props.largeRow ? `${baseUrl}${movie.poster_path}` : `${baseUrl}${movie.backdrop_path}`}/>)}
            </PosterWrapper>
        </div>
    )
}

export default Row

const PosterWrapper = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Poster = styled.img`
    object-fit: contain;
    width: 100%;
    max-height: ${ props => props.largeRow ? `200px`: `100px`};
    margin-right: 10px;
    transition: transform 0.45s;

    &:hover{
        transform: scale(1.08)
    }
`
