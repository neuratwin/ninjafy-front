import useStore from "../../layouts/store";

const ResetButton = () => {
  const resetNode = useStore((state) => state.reset);

  const clickHandler = () => {
    resetNode();
  };

  return (
    <div
      onClick={clickHandler}
      className="bg-red-200 cursor-pointer text-white hover:bg-red-600 mx-4 my-2 p-2 rounded text-center"
    >
      Reset
    </div>
  );
};

export default ResetButton;
