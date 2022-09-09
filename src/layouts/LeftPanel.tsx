import {
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineBranches,
} from "react-icons/ai";
import { GiCrossedAirFlows } from "react-icons/gi";

const MenuItems = [
  { item: () => <GiCrossedAirFlows />, key: "Logo" },
  { item: () => <AiOutlineHome />, key: "Home" },
  { item: () => <AiOutlineBarChart />, key: "Dashboard" },
  { item: () => <AiOutlineBranches />, key: "Branch" },
];

function LeftPanel() {
  return (
    <div className="flex-row justify-around h-full border-r border-gray-300 py-4 space-y-32 py-8">
      <div className="">
        <div className="text-4xl text-cyan-500 text-center"></div>
        <div className="flex-row align-center py-12 space-y-4 ">
          {MenuItems.map(({ item, key }) => (
            <div
              key={key}
              className="text-4xl rounded hover:bg-gray-100 text-center flex justify-center mx-2 cursor-pointer"
            >
              {item()}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute w-16 bottom-8 ">
        <div className="space-y-4">
          {/* <div
            onClick={() => alert("file saved")}
            className="text-xs text-center rounded border w-8  mx-auto cursor-pointer hover:bg-gray-200 border-black"
          >
            Save
          </div>
          <div
            className="text-xs text-center rounded border w-8  mx-auto cursor-pointer hover:bg-gray-200 border-black"
            onClick={() => alert("New fork created")}
          >
            Fork
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
