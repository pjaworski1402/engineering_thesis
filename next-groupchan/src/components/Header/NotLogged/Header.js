import logo from "@/static/images/logo.svg"
import {HeaderLogo,Container} from "./Header.styled"
import Link from 'next/link';

const Header = () => {
    return ( 
    <Container className="container">
        <Link href="/">
        <HeaderLogo src={logo} alt="Groupchan" />
        </Link>
    </Container> );
}
 
export default Header;