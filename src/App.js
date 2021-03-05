import React from 'react';
import { Route ,BrowserRouter as Router,Switch} from "react-router-dom";
import Home from './Pages/Home/Home';
import certs from './Pages/Certs/CertsResume';
import Dataeng from './Pages/Analysis/Dataeng';
import Contact from './Pages/Contact/Contact';
import frontEnd from './Pages/Front-End/frontend';
import PersistentDrawerLeft from './navbar';
import './App.css';
export const HomeRoute = "/";
export const CertsRoute = "/Certs/";
export const FrontendRoute = "/Front-End/";

export const AnalysisRoute = "/Analysis/";
export const ContactRoute = "/Contact/";
export const pdfRoute = "/PDF-View/";
function App(){
        return (
          <div>
            <Router>
          <div>
            <PersistentDrawerLeft/>
            <Switch>
                <Route path={HomeRoute} exact component={Home} />
                <Route path={AnalysisRoute} component={Dataeng} />
                <Route path={ContactRoute} component={Contact} />
                <Route path={CertsRoute} component={certs} />
                <Route path={FrontendRoute} component ={frontEnd}/>
            </Switch >
            
            </div>
            </Router>
            </div>
        );
}

export default App;