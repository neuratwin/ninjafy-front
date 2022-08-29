import {MouseEventHandler} from 'react';

type NodeButton = {
  clickFnc: MouseEventHandler<HTMLElement>;
  label: string;
}

const NodeAddButton = ({clickFnc, label}: NodeButton)=> {
  
  return (
    <div
    onClick={clickFnc}
    className="text-xs hover:bg-gray-200 border border-gray-600 text-center p-2 m-2  cursor-pointer rounded-lg"
  >
    {label}
  </div>
  )
}

export default NodeAddButton ;