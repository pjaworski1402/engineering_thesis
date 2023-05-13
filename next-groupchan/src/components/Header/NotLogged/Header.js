import React from 'react'
import logo from "@/static/images/logo.svg"
import {HeaderLogo,Container} from "./Header.styled"

const Header = () => {
    return ( 
    <Container className="container">
        <HeaderLogo src={logo} alt="Groupchan" />
    </Container> );
}
 
export default Header;