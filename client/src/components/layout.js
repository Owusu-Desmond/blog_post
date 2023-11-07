import Header from "./header"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        
    <main className="App">
      <Header />
      <Outlet />
    </main>
    )
}

export default Layout