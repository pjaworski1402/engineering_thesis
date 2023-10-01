"use client";
import styled from "styled-components";
import Image from "next/image";
import device from "@/styles/device";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  margin-top: 48px;
  a,
  .logo {
    height: 32px;
  }
  @media ${device.laptop} {
    margin-top: 40px;
    margin-bottom: 0;
    justify-content: left;
  }
`;

export const ContainerAuth = styled.div`
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: var(--primary);
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  a,
  .logo {
    height: 32px;
  }
  @media ${device.laptop} {
    max-width: 100vw !important;
  }
`;

export const HeaderLogo = styled(Image)`
  width: auto;
  height: auto;
`;

export const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  margin-left: auto;
  @media ${device.laptop} {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuIco = styled(Image)``;

export const Menu = styled(motion.div)`
  position: fixed;
  top: 74px;
  bottom: 0;
  width: 70%;
  background-color: var(--primary);
  z-index: 2;
  transition: right 0.3s ease;

  nav {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 16px 24px;
    max-height: calc(100% - 64px);
    overflow-y: auto;
    a {
      margin-top: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 700;
      width: 100%;

      &:first-child {
        margin-top: 0;
      }
    }
  }

  .userTab {
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    padding: 16px 24px;
    align-items: center;
    .userName {
      font-size: 12px;
      margin-left: 6px;
    }
    .settingButton {
      border: none;
      background-color: transparent;
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const CloseMenuBG = styled(motion.div)`
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 77.4px;
  left: 0;
`;

export const NavIcon = styled(Image)``;

export const NavIconGroup = styled.img`
  border-radius: 6px;
`;

export const UserIco = styled.img`
  border-radius: 50%;
`;

export const SettingButton = styled(Image)``;

export const MenuDesktop = styled.div`
  display: none;
  @media ${device.laptop} {
    display: block;
    flex-direction: column;
    background-color: var(--primary);
    position: fixed;
    left: 0;
    top: 72px;
    bottom: 0;
    width: 256px;
    z-index: -1;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    nav {
      display: flex;
      flex-direction: column;
      align-items: start;
      padding: 16px 24px;
      max-height: calc(100% - 64px);
      overflow-y: auto;
      /* Stylizacja scrollbarów WebKit */
      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #a0a0a0;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: #808080;
      }
      a {
        margin-top: 16px;
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 14px;
        font-weight: 700;
        width: 100%;

        &:first-child {
          margin-top: 0;
        }
      }
    }

    .userTab {
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
      width: 100%;
      position: absolute;
      bottom: 0;
      display: flex;
      padding: 16px 24px;
      align-items: center;
      .userName {
        font-size: 12px;
        margin-left: 6px;
      }
      .settingButton {
        border: none;
        background-color: transparent;
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const CreatePostButton = styled.button`
  margin-left: auto;
  border: none;
  background-color: var(--contrast);
  color:white;
  border-radius: 6px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  padding: 2px 13.5px;
`;