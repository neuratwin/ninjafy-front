function DocumentBucketNode() {
  return (
    <div className="border border-black">
      <div className="flex justify-between border-b border-black pb-2">
        <div className="text-cyan-500 ml-2 flex  text-base">
          Document Bucket
        </div>
        <div
            className="text-gray-800 text-base font-bold  bg-white rounded-md w-8 border border-gray-600 cursor-pointer hover:bg-gray-300"
          >
            +
        </div>
      </div> 
    </div>
  );
}

export default DocumentBucketNode;
