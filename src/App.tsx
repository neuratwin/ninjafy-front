import "./App.css";
import LeftPanel from "./layouts/LeftPanel";
import Main from "./layouts/Main";
import RightPanel from "./layouts/RightPanel";

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-16">
        <LeftPanel />
      </div>
      <div className="flex-grow">
        <Main />
      </div>
      <div className="w-48">
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
