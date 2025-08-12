import { Footer } from "./Footer"
import { Header } from "./Header"

const Layout = (props) => {
  return (
    <>
      <Header/>
      <main className="container my-4">
        {props.children}
      </main>
      <Footer/>
    </>
    
  )
}
export { Layout }
