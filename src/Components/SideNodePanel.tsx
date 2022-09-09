import { Dispatch } from "react";
import useStore from "../layouts/store";
import { useState } from "react";
import { AiFillDelete, AiOutlineRightSquare } from "react-icons/ai";

const SideNodePanel = ({
  id,
  nodeColor,
  setNodeColor,
}: {
  id: string;
  nodeColor?: string;
  setNodeColor?: Dispatch<string>;
}) => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const deleteNode = useStore((state) => state.deleteNode);
  return (
    <div>
      <div
        onClick={() => setMenuState((state) => !state)}
        className="nodrag absolute rounded -ml-4 cursor-pointer hover:bg-gray-50 "
      >
        <AiOutlineRightSquare />
      </div>
      {menuState && (
        <div className="transition-opacity flex-column space-x-2 border-gray-600 border rounded-sm">
          <div
            onClick={() => deleteNode(id)}
            className="p-2 flex items-center  justify-center w-4 h-4  bg-white rounded-md border border-gray-600 cursor-pointer hover:bg-gray-300"
          >
            <div>
              <AiFillDelete />
            </div>
          </div>
          <div className="flex">
            {setNodeColor && (
              <input
                className="-ml-2 w-4"
                type="color"
                onChange={(e) => {
                  setNodeColor(e.target.value);
                }}
                defaultValue={nodeColor ?? "#ffffff"}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNodePanel;
