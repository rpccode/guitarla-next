import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"



const Layouts = ({children,pagina}) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta name="description" content="Sitio Web de Ventas de Guitarras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header/>
            {children}
        <Footer/>
    </div>
  )
}

export default Layouts