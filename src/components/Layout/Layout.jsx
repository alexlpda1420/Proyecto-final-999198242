import { Footer } from "./Footer"
import { Header } from "./Header"
import WhatsAppButton from "../WhatsAppButton";

const Layout = (props) => {
  return (
    <>
      <Header/>
      <main className="container my-4">
        {props.children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
    
  )
}
export { Layout }
