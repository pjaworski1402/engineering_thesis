import { Montserrat } from "next/font/google";
import Header from "@/components/Header/Header";
import GlobalStyle from "../styles/GlobalStyle";
import StyledComponentsRegistry from "../lib/registry";
import Provider from "@/components/Provider";
import { UserProvider } from "@/context/UserContext";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Groupchan",
  description: "Groupchan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={montserrat.className}>
        <Provider>
      <UserProvider>
          <StyledComponentsRegistry>
            <GlobalStyle montserratFont={montserrat.style.fontFamily} />
            <Header></Header>
            {children}
          </StyledComponentsRegistry>
    </UserProvider>
        </Provider>
      </body>
    </html>
  );
}
