import ReactFlowCanvas from "./ReactFlowCanvas";
import SearchBar from "../Components/SearchBar";
import SavePanel from "../Components/SavePanel";
function Main() {
  return (
    <>
      <div className="h-screen flex-row border-black">
        <div className="h-16 p-2 border-gray-200 border-b flex justify-between">
          <SearchBar />
          <SavePanel />
        </div>
        <div className="flex" id="moveableContainer">
          <div style={{ width: "100%", height: "calc(100vh - 4rem)" }}>
            <ReactFlowCanvas />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
