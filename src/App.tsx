import './App.css'
import NavbarView from "./components/NavbarView";
import {useLocation} from "react-router-dom";
import HomeView from "./views/HomeView/HomeView.tsx";
import "@fontsource/inter/300.css";
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import FooterView from "./components/FooterView";

function App() {

    const { pathname: location } = useLocation();

  return (<>
      <div className="h-screen">
          <NavbarView location={location}/>

          {location === '/' && (
              <HomeView/>
          )}


      </div>
      <FooterView/>
      </>
  )
}

export default App
