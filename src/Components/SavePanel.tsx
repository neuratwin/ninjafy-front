import React from "react";
import { AiOutlinePlus, AiOutlineFork } from "react-icons/ai";

function SavePanel() {
  return (
    <div className="w-1/2">
      <div className="flex justify-end space-x-2">
        <div
          onClick={() => alert("file saved")}
          className="text-base flex justify-center space-x-2 font-bold py-2 text-center rounded border-black border-2 w-2/6 cursor-pointer hover:bg-gray-100"
        >
          <div className="flex items-center">
            <AiOutlinePlus />
          </div>

          <div>Save</div>
        </div>
        <div
          className="flex justify-center space-x-2 text-base font-bold py-2 bg-black text-white text-center rounded border-black border-2 w-2/6 cursor-pointer hover:bg-gray-800"
          onClick={() => alert("New fork created")}
        >
          <div className="flex items-center">
            <AiOutlineFork />
          </div>

          <div>Fork</div>
        </div>
      </div>
    </div>
  );
}

export default SavePanel;
