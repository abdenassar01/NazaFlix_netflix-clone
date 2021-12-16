import instance from './axios';
import { useState, useEffect } from 'react'
import styled from 'styled-components';
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const Row = (props) => {

    const [ movies, setMovies ] = useState([]);
    const [ trailerUrl, setTrailerUrl ] = useState("");

    const baseUrl = "https://image.tmdb.org/t/p/original";

    const handlClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || "")
            .then( (url) => {
                const urlParam = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParam.get('v'));
            })
            .catch( (err) => {console.error(err)})
        }
    } 
    
    const options = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    useEffect(() => {
        const fetchMoviesAsync_ = async () => {
            const result = await instance.get(props.fetchUrl);
            setMovies(result.data.results);            
            return result;
        }

        fetchMoviesAsync_();
    },[props.fetchUrl]);
    return (
        <RowWrapper>
            <h2 style={{fontSize: "1.5rem" }}>{props.title}</h2>
            <PosterWrapper>
                {movies.map( movie => 
                    <Poster 
                        largeRow={props.largeRow} 
                        onClick={ () => handlClick(movie)}
                        key={movie.id} 
                        src={props.largeRow ? `${baseUrl}${movie.poster_path}` : `${baseUrl}${movie.backdrop_path}`}
                    />)}
            </PosterWrapper>
            { trailerUrl ? <YouTube videoId={trailerUrl} opts={options} /> : null }
        </RowWrapper>
    )
}

export default Row

const RowWrapper = styled.div`
    padding-top: 10px;
`

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
