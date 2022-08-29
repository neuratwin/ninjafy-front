import useStore from "../../layouts/store";

const ResetButton = () => {
  const resetNode = useStore((state) => state.reset);

  const clickHandler = () => {resetNode()}

  return( <div 
  onClick={clickHandler}
  className="bg-gray-500 cursor-pointer text-white hover:bg-gray-600 mx-4 my-2 p-2 rounded-lg text-center">Reset</div>
)}

export default ResetButton;