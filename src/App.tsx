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
import ModelsView from "./views/ModelsView/ModelsView.tsx";
import ModelDetailView from "./views/ModelDetailView/ModelDetailView.tsx";

function App() {

    const { pathname: location } = useLocation();
    const uriParts = (location.startsWith("/") ? location.substring(1) : location).split('/').filter(part => part.length > 0);

    const isHome = uriParts.length === 0;
    const isModels = uriParts.length === 1 && uriParts[0] === 'models';
    const isModelDetail = uriParts.length >= 2 && uriParts[0] === 'model';

  return (<>
      <div className="min-h-screen overflow-hidden">
          <NavbarView location={location}/>

          {isHome && (
              <HomeView/>
          )}

          {isModels && (
              <ModelsView/>
          )}

          {isModelDetail && (
              <ModelDetailView
                  id={
                    uriParts[1]
                  }
              />
          )}

      </div>
      <FooterView/>
      </>
  )
}

export default App
