import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import instance from './axios';
import requests from './requests'

const Banner = () => {

    const [ movie, setMovie ] = useState([]);

    useEffect( () => {
        const fetchMovieAsync_ = async () => {
            const result = await instance.get(requests.NeflixOriginals);
            setMovie(result.data.results[Math.floor(Math.random() * ( result.data.results.length + 0 + 1) ) + 0]); 
            console.log(movie)          
            return result;
        }
        fetchMovieAsync_();
    },[])
    const baseUrl = "https://image.tmdb.org/t/p/original";
     
    return (
        <BannerWrapper backgroundImage={`${baseUrl}${movie.backdrop_path}`}>
            <BannerContent>
                <MovieTitle>{movie?.title || movie?.name || movie?.original_name}</MovieTitle>
                <ButtonsWrapper>
                    <BannerButton>Play</BannerButton>
                    <BannerButton>My List</BannerButton>
                </ButtonsWrapper>
                <Discription>{ movie?.overview }</Discription>
            </BannerContent>
            <FadeButtom />
        </BannerWrapper>
    )
}

export default Banner

const BannerWrapper = styled.div`
    background-size: cover;
    background-image: url(${ props => props.backgroundImage});
    background-position: center; 
    color: white;
`

const BannerContent = styled.div`
    margin-left: 30px;
    padding-top: 148px;
    height: 200px;
`

const BannerButton = styled.button`
     cursor: pointer;
     color: #fff;
     outline: none;
     border: none;
     font-weight: 700;
     border-radius: 0.2vw;
     padding-left: 2rem;
     padding-right: 2rem;
     margin-right: 1rem;
     padding-top: 0.5rem;
     background-color: rgba(51, 51, 51, 0.5);
     padding-bottom: 0.5rem;

     &:hover{
         color: black;
         background-color: #e6e6e6;
         transition : all 0.2s;
     }
`

const MovieTitle = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
`
const ButtonsWrapper = styled.div`
    
`
const Discription = styled.p`
    width:45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 360px;
    height: 800px; 
`
const FadeButtom = styled.div`
    height: 7.4rem;
    background-image: linear-gradient(
        180deg,
        transparent,
        rgba(37, 37, 37, 0.61),
        #111
    );
`