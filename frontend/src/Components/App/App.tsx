import { BrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
