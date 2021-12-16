const APIKEY = "02cb130f1413e58d81cf013c86900094" ;

const requests = {
    NeflixOriginals: `discover/tv?api_key=${APIKEY}&with_networks=213`,
    Trending: `trending/all/week?api_key=${APIKEY}`,
    TopRated: `movie/top_rated?api_key=${APIKEY}`,
    ComedyMovie: `discover/movie?api_key=${APIKEY}&with_genres=35`,
    ActionMovie: `discover/movie?api_key=${APIKEY}&with_genres=28`,
    HorrorMovie: `discover/movie?api_key=${APIKEY}&with_genres=27`,
    KidsMovie: `discover/movie?api_key=${APIKEY}&with_genres=16`,
    RomanceMovie: `discover/movie?api_key=${APIKEY}&with_genres=10749`,
    DocumantaryMovie: `discover/movie?api_key=${APIKEY}&with_genres=&with_genres=99`,
}

export default requests;