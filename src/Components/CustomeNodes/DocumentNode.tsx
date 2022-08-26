import React, { useCallback, useState } from "react";
import { Handle, Position } from "react-flow-renderer";

function DocumentNode() {
  const [documentId, setDocumentId] = useState<string | null>();
  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentId(evt.target.value);
  }, []);

  return (
    <div className="border p-4 border-gray-600 rounded-lg text-sm bg-white">
      <Handle type="target" position={Position.Top} />
      <div>
        {documentId ? documentId.split("\\").pop() : ""}
        {!documentId && (
          <>
            <label htmlFor="text" className="block text-sm">
              Start your workflow
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              className="text-lg border-2 rounded-lg opacity-0 absolute"
              onChange={onChange}
            />
            <div className="border border-blue-100 p-2 rounded-lg text-sm">
              Upload your file
            </div>
          </>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default DocumentNode;
