import useStore from "../layouts/store";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

const SideNodePanel = ({ id }: { id: string }) => {
  const [menuState, setMenuState] = useState(true);

  const deleteNode = useStore((state) => state.deleteNode);
  return (
    <div>
      <div
        onClick={() => setMenuState((state) => !state)}
        className="absolute rounded-md -ml-4 cursor-pointer hover:bg-gray-300"
      >
        <BiMenuAltRight />
      </div>
      {menuState && (
        <div className=" flex-column space-x-2 border-gray-600 border rounded-sm">
          <div
            onClick={() => deleteNode(id)}
            className="p-2 flex items-center  justify-center w-4 h-4  bg-white rounded-md border border-gray-600 cursor-pointer hover:bg-gray-300"
          >
            <div>
              <AiFillDelete />
            </div>
          </div>
          <div className="flex">
            <input className="-ml-2 w-4" type="color" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNodePanel;
