import "tailwindcss/tailwind.css"
import Navbar from "../components/UI/Navbar"
import Footer from "../components/UI/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps}/>
      <Footer />
    </main>
  )
}

export default MyApp
