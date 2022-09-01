import { useEffect, useState, useRef, useMemo } from "react";
import Moveable from "moveable";
import {
  Handle,
  useUpdateNodeInternals,
  Node,
  Position,
} from "react-flow-renderer";
import useStore from "../../layouts/store";

export default function Resizable({
  id,
  data,
  selected,
  dragging,
  sourcePosition,
  targetPosition,
}: Node) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 300, height: 150 });
  const [transform, setTransform] = useState("none");
  const updateNodeInternals = useUpdateNodeInternals();

  const deleteNode = useStore((state)=>state.deleteNode)

    
  const style = useMemo(
    () => ({
      transform,
      width: size.width,
      height: size.height,
      background: "rgba(240,240,240,0.7)",
      padding: 20,
      borderRadius: 20,
    }),
    
    [transform, size.width, size.height]
  );

  useEffect(() => {
    if (!nodeRef.current || !selected || dragging) {
      return;
    }

    const moveable = new Moveable(document.body, {
      target: nodeRef.current,
      className: 'bg-red-300',
      draggable: false,
      resizable: true,
      scalable: false,
      rotatable: true,
      warpable: false,
      pinchable: false,
      origin: false,
      keepRatio: false,
      edge: false,
      throttleDrag: 0,
      throttleResize: 0,
      throttleScale: 0,
      throttleRotate: 0,
      dragArea: false,
    });

    moveable.on("rotate", ({ transform }: any) => {
      setTransform(transform);
    });

    moveable.on("resize", ({ width, height, drag }: any) => {
      setTransform(drag.transform);
      setSize({ width, height });
    });

    return () => moveable.destroy();
  }, [selected, dragging]);

  useEffect(() => {
    updateNodeInternals(id);
  }, [transform, id, updateNodeInternals]);

  return (
    <div ref={nodeRef} style={style}>
      <div>
        <div
        onClick={()=>deleteNode(id)} 
        className="bg-gray-800 w-12 text-center rounded-lg text-xs text-white cursor-pointer my-2">Delete</div>
      </div>
      <input type="text" placeholder="Node Name" className=" text-black p-2 flex w-full rounded-lg placeholder:text-gray-300 placeholder:italic  border focus:outline-none"></input>
      <textarea
        style={{
          width: '100%',
          height: '100%',
          resize: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0)',
          color: 'black',
          padding: 5,
          fontSize: 18,
          boxSizing: 'border-box',
          outline: 'none',
          border: 'none',
        }}
        defaultValue={data?.text}
      />
      <Handle position={sourcePosition ?? Position.Top} type="target" />
      <Handle position={targetPosition ?? Position.Bottom} type="source" />
    </div>
  );
}
