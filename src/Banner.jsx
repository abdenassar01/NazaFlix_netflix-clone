import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import instance from './axios';
import requests from './requests'

const Banner = () => {

    const [ movie, setMovie ] = useState([]);

    useEffect( () => {
        const fetchMovieAsync_ = async () => {
            const result = await instance.get(requests.RomanceMovie);
            setMovie(result.data.results[Math.floor(Math.random() * ( result.data.results.length + 0 + 1) ) + 0]); 
            console.log(movie)          
            return result;
        }
        fetchMovieAsync_();
    },[])
     const baseUrl = "https://image.tmdb.org/t/p/original";
     

     function truncateString(str, num) {
        if (str.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }


    return (
        <BannerWrapper backgroundImage={`${baseUrl}${movie.backdrop_path}`}>
            <BannerContent>
                <MovieTitle>{movie?.title || movie?.name || movie?.original_name}</MovieTitle>
                <ButtonsWrapper>
                    <BannerButton>Play</BannerButton>
                    <BannerButton>Discover More</BannerButton>
                </ButtonsWrapper>
                <Discription>{movie?.overview}</Discription>
            </BannerContent>
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
    padding-bottom: 100px;
    height: 200px;
`

const BannerButton = styled.button`
    
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
