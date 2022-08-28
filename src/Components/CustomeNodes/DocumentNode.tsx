import { useCallback, useState, ChangeEvent } from "react";
import { Handle, Position } from "react-flow-renderer";


function DocumentNode() {
  const [documentId, setDocumentId] = useState<string | null>();
  


  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setDocumentId(evt.target.value);
  }, []);

  


  return (
    <div
    className="resize"
    >
    <div className="border p-2 border-gray-600 rounded-lg text-sm bg-white ">
      <Handle type="target" position={Position.Top} />
      <div>
        {documentId ? documentId.split("\\").pop() : ""}
        {!documentId && (
          <div>
          
            <label htmlFor="text" className="block text-sm">
              File link
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              className="text-xs border-2 rounded-lg opacity-0 absolute"
              onChange={onChange}
            />
            <div className="border border-gray-700 p-2 rounded-lg text-sm">
              Upload your file
            </div>
            <div 
            className="flex ">
              <div

              className="absolute ml-28 cursor-nwse-resize opacity-0">
              ++
              </div>
              </div>
          </div>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
    </div>
  );
}

export default DocumentNode;
