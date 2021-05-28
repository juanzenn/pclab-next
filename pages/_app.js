import "tailwindcss/tailwind.css"
import Navbar from "../components/UI/Navbar"

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps}/>
    </main>
  )
}

export default MyApp
