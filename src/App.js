import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./pages/kun/Main";

import Jahon from "./pages/kun/Jahon";
import Uz from "./pages/uz/Uz";
import Iqtisod from "./pages/kun/Iqtisod";
import Jamiyat from "./pages/kun/Jamiyat";

function App() {

  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/uz" exact component={Uz}/>
            <Route path="/jahon" exact component={Jahon}/>
            <Route path="/iqtisod" exact component={Iqtisod}/>
            <Route path="/jamiyat" exact component={Jamiyat}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
