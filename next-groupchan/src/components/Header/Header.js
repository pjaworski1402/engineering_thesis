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
  SettingButton,
  MenuDesktop,
  MenuWrapper,
  NavIconGroup,
  CreatePostButton
} from "./Header.styled";
import Link from "next/link";
import { useSession } from "next-auth/react";
import menuIco from "@/static/icons/menu.svg";
import closeIco from "@/static/icons/close.svg";
import searchIco from "@/static/icons/search_ico.svg";
import addIco from "@/static/icons/add_ico.svg";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import setting from "@/static/icons/setting_ico.svg";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from 'next/navigation'
import { apiVars } from "@/api/strapiQueries";
const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { status } = useSession();
  const pathname = usePathname()
  const [isGroup,setIsGroup]=useState(false)
  const [isCreatePost,setIsCreatePost]=useState(false)
  const groupName = isGroup?decodeURI(window.location.pathname.split("/")[3]):null;
  const user = useUser();
  const rotuer = useRouter()
const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCreatePost = ()=>{
    rotuer.push(`/dashboard/group/${groupName}/create-post`)
  }
  console.log(pathname)
  useEffect(()=>{
    setIsGroup(pathname.split("/")[2] == "group")
    setIsCreatePost(pathname.split("/")[4] == "create-post")
  },[pathname])
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
        {isGroup&&!isCreatePost&&(
          <CreatePostButton onClick={handleCreatePost}>Napisz post</CreatePostButton>
        )}
        <MenuButton>
          <MenuIco
            onClick={handleOpenMenu}
            src={isMenuOpen ? closeIco : menuIco}
            alt="menu button"
          />
        </MenuButton>
        <MenuWrapper>
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
              {user?.group_users.map((group) => (
                <Link onClick={()=>setIsMenuOpen(false)} href={`/dashboard/group/${group.name}`} key={group.id}>
                  <NavIconGroup
                    src={`${apiVars.API_URL}${group.icon.url}`}
                    alt="search icon"
                    width={32}
                    height={32}
                  />
                  {group.name}
                </Link>
              ))}
              <Link onClick={()=>setIsMenuOpen(false)} href={"/"}>
                <NavIcon src={searchIco} alt="search icon" />
                Szukaj grupy
              </Link>
              <Link onClick={()=>setIsMenuOpen(false)} href={"/dashboard/create-group"}>
                <NavIcon src={addIco} alt="add icon" />
                Stwórz nową grupę
              </Link>
            </nav>
            <div className="userTab">
              <UserIco
                src={
                  user?.profile?.url &&
                  `${apiVars.API_URL}{user?.profile?.url}`
                }
                width={32}
                height={32}
              />
              <div className="userName">{user?.username && user?.username}</div>
              <button className="settingButton">
                <SettingButton src={setting} alt="settings icon" onClick={signOut} />
              </button>
            </div>
          </Menu>
        </MenuWrapper>
        <MenuDesktop>
          <nav>
            {user?.group_users.map((group) => (
              <Link href={`/dashboard/group/${group.name}`} key={group.id}>
                <NavIconGroup
                  src={`${apiVars.API_URL}${group.icon.url}`}
                  alt="search icon"
                  width={32}
                  height={32}
                />
                {group.name}
              </Link>
            ))}
            <Link href={"/"}>
              <NavIcon src={searchIco} alt="search icon" />
              Szukaj grupy
            </Link>
            <Link href={"/dashboard/create-group"}>
              <NavIcon src={addIco} alt="add icon" />
              Stwórz nową grupę
            </Link>
          </nav>
          <div className="userTab">
            <UserIco
              src={
                user?.profile?.url &&
                `${apiVars.API_URL}${user?.profile?.url}`
              }
              width={32}
              height={32}
            />
            <div className="userName">{user?.username && user?.username}</div>
            <button className="settingButton">
              <SettingButton src={setting} alt="settings icon" onClick={signOut} />
            </button>
          </div>
        </MenuDesktop>
      </ContainerAuth>
    );
  } else {
    return "loading";
  }
};

export default Header;
