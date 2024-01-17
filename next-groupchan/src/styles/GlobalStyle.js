"use client";
import { createGlobalStyle } from "styled-components";
import device from "./device";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    button {
        cursor: pointer;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    p {
        margin: 0;
    }
    * {
        box-sizing: border-box;
        font-family: ${({ montserratFont }) => montserratFont};
    }
    :root {
        /* COLORS */
        --primary:#fff;
        --contrast:#EB4628;
        --dark:#000000;
        --gray:#737373;
        --border:#E6E6E6;
    }
    .dashboardContainer {
        @media ${device.laptop} {
            display: grid;
            grid-template-columns: 256px auto;
        }
    }
    .dashboardGroupContainer{
        @media ${device.laptop} {
            display: flex;
            justify-content: space-between;
            gap: 48px;
            margin-right: 0!important;
            margin-left: 0px!important;
            padding-right: 0!important;
            padding-left: 32px!important;
            width: 100%;
        }
    }
    .container {
        width: 100%;
        padding-left: 14px;
        padding-right: 14px;
        margin-right: auto;
        margin-left: auto;
        @media ${device.tablet} {
            max-width: 720px;
	    }
        @media ${device.laptop} {
            max-width: 1440px;
	    }
        @media ${device.laptopL} {
            max-width: unset;
	    }
        @media ${device.desktop} {
            max-width: unset;
	    }
    }
`;

export default GlobalStyle;
