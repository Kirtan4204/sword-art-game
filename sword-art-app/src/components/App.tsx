import { useState } from "react";
import "./App.css";
import { useFetch } from "../hooks/useFetch";
import { CharactersScreen } from "../screens/CharactersScreen";
import { WinnerScreen } from "../screens/WinnerScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { BattlegroundScreen } from "../screens/BattlegroundScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//This type of component is called functional component.
//functional component should start with a captial letter
//should have return JSX and be exported from a file
export const App = () => {
  const [winner, setWinner] = useState(null);
  
  const { response, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response) {
    return <>Loading...</>;
  }

  if (error && error instanceof Error) {
    return <>Error: {error.message} </>;
  }


  const userNotLoggedIn = (
    <h3 className="not-logged-in">
      Please log in as admin to see character list
    </h3>
  );
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginScreen/>}
          />
          <Route
            path="/characters"
            element={
              <CharactersScreen/>
            }
          />
          <Route
            path="/winner"
            element={<WinnerScreen winner={winner} />}
          />
          <Route
            path="/battleground"
            element={
              <BattlegroundScreen
                winner={winner}
                setWinner={setWinner}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};






