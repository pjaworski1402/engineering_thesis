import { Montserrat } from 'next/font/google'
import Header from "@/components/Header/NotLogged/Header"
import GlobalStyle from "../styles/GlobalStyle"

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Groupchan',
  description: 'Groupchan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={montserrat.className}>
        <GlobalStyle montserratFont={montserrat.style.fontFamily} />
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
