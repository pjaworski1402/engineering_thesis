"use client";

import logo from "@/static/images/logo.svg";
import {
  HeaderLogo,
  Container,
  ContainerAuth,
  MenuIco,
  MenuButton,
  Menu,
  NavIcon,
  CloseMenuBG,
  UserIco,
  SettingButton
} from "./Header.styled";
import Link from "next/link";
import { useSession } from "next-auth/react";
import menuIco from "@/static/icons/menu.svg";
import closeIco from "@/static/icons/close.svg";
import searchIco from "@/static/icons/search_ico.svg";
import addIco from "@/static/icons/add_ico.svg";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import setting from "@/static/icons/setting_ico.svg"

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { status } = useSession();
  const user = useUser();
  console.log(user);
  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuVariants = {
    open: {
      right: 0,
    },
    closed: {
      right: "-70%",
    },
  };
  const menuVariantsBG = {
    open: {
      opacity: 0.2,
      display: "block",
    },
    closed: {
      opacity: 0,
      display: "none",
    },
  };
  if (status === "unauthenticated") {
    return (
      <Container className="container">
        <Link href="/">
          <HeaderLogo className="logo" src={logo} alt="Groupchan" priority />
        </Link>
      </Container>
    );
  } else if (status === "authenticated") {
    return (
      <ContainerAuth className="container">
        <Link href="/">
          <HeaderLogo className="logo" src={logo} alt="Groupchan" priority />
        </Link>
        <MenuButton>
          <MenuIco
            onClick={handleOpenMenu}
            src={isMenuOpen ? closeIco : menuIco}
            alt="menu button"
          />
          <CloseMenuBG
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            variants={menuVariantsBG}
            transition={{ duration: 0.3, ease: "easeIn" }}
            onClick={() => setIsMenuOpen(false)}
          />
          <Menu
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            variants={menuVariants}
            transition={{ duration: 0.3, ease: "easeIn" }}
          >
            <nav>
              <Link href={"/"}>
                <NavIcon src={searchIco} alt="search icon" />
                Szukaj grupy
              </Link>
              <Link href={"/"}>
                <NavIcon src={addIco} alt="add icon" />
                Stwórz nową grupę
              </Link>
            </nav>
            <div className="userTab">
              <UserIco src={user?.profile?.url&&`http://localhost:1337${user?.profile?.url}`} width={32} height={32} />
              <div className="userName">{user?.username&&user?.username}</div>
              <button className="settingButton">
                <SettingButton src={setting} alt="settings icon" />
              </button>
            </div>
          </Menu>
        </MenuButton>
      </ContainerAuth>
    );
  } else {
    return "loading";
  }
};

export default Header;
