import {DragEvent, MouseEventHandler} from 'react';

type NodeButton = {
  clickFnc: MouseEventHandler<HTMLElement>;
  label: string;
}

const NodeAddButton = ({clickFnc, label}: NodeButton)=> {

  const onDragStart = (event:DragEvent<HTMLDivElement>, nodeType:string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  
  return (
    <div
    onClick={clickFnc}
    className="text-xs hover:bg-gray-200 border border-gray-600 text-center p-2 m-2  cursor-pointer rounded-lg"
    onDragStart={(event) => onDragStart(event, 'default')} 
    draggable
  >
    {label}
  </div>
  )
}

export default NodeAddButton ;