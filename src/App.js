import React from "react";

// style
import GlobalStyle from "./style/GlobalStyle";

// Componets
import Home from "./pages/home/index";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
