import styled from 'styled-components'
import { useState, useEffect } from 'react'

const NavBar = () => {

    const [show, handleShow] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100 ){
                handleShow(true);
            }else { 
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    
  
    return (
        <Nav isShow={show}>
           <Logo 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
            alt="Netflix Logo" 
           />
            <Avatar 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="Netflix Avatar" 
           />
        </Nav>
    )
}

export default NavBar

const Nav = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    height: 30px;
    transition-timing-function: ease-in-out;
    transition: all 0.5s;
    background-color: ${props => props.isShow ? `#111` : `transparent`};
`
const Logo = styled.img`
    position: fixed;
    left: 20px;
    width: 80px;
    object-fit: contain;
`
const Avatar = styled.img`
    position: fixed;
    right: 20px;
    width: 30px;
    object-fit: contain;

`