import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import styled from 'styled-components';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <BannerItem />
      <Row title="Netflix Originals" largeRow fetchUrl={requests.NeflixOriginals}/>
      <Row title="Top Rated" fetchUrl={requests.Trending}/>
      <Row title="Trending Now" fetchUrl={requests.TopRated}/>
      <Row title="Comedy Movies" fetchUrl={requests.ComedyMovie}/>
      <Row title="Horror Movies" fetchUrl={requests.HorrorMovie}/>
      <Row title="Action Movies" fetchUrl={requests.ActionMovie}/>
      <Row title="Kids Movies" fetchUrl={requests.KidsMovie}/>
      <Row title="Romance Movies" fetchUrl={requests.RomanceMovie}/>
      <Row title="Documantary Movies" fetchUrl={requests.DocumantaryMovie}/>
    </div>
  );
}

export default App;

const BannerItem = styled(Banner)`
    height: 450px;
    object-fit: contain;
`