import TopNav from "./comps/top-nav/topNav";
import MainButtons from "./comps/main-buttons/mainButtons";
import Board from "./comps/board/board";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <Board></Board>
      <MainButtons></MainButtons>
    </div>
  );
}

export default App;
