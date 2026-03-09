import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout;