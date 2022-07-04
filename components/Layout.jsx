import Header from "../components/Header";
import About from "../components/About";
import Campaign1 from "../components/Campaign1";
import Campaign2 from "../components/Campaign2";
import Cart from "../components/Cart";
import Campaign3 from "../components/Campaign3";
import Offer from "../components/Offer";
import Footer from "../components/Footer";
import Main from "./Main";
import Playstore from "./Playstore";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Playstore />
      <div className="lg:flex lg:gap-10 lg:px-5">
        <About />
        <Campaign1 />
      </div>

      <Campaign2 />

      <Cart />
      <Campaign3 />

      <Offer />
      <div className=""></div>
      <Footer />
    </div>
  );
}
