// import React, { useCallback, useState } from "react";
import { Handle, Position } from "react-flow-renderer";

function DocumentBucketNode() {
  return (
    <div className="border p-4 border-gray-600 rounded-lg bg-white">
      <Handle type="target" position={Position.Top} id="axc" />
      <div>Document Bucket</div>
      {/* <div className="border p-2 border-gray-600 rounded-lg text-sm cursor-pointer">
        Add sub nodes
      </div> */}
    </div>
  );
}

export default DocumentBucketNode;
