import "./App.css";
import LeftPanel from "./layouts/LeftPanel";
import Main from "./layouts/Main";

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-56">
        <LeftPanel />
      </div>
      <div className="flex-grow">
        <Main />
      </div>
    </div>
  );
}

export default App;
