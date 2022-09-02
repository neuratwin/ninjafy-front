import { useEffect, useState, useRef, useMemo } from "react";
import Moveable from "moveable";
import {
  Handle,
  useUpdateNodeInternals,
  Node,
  Position,
} from "react-flow-renderer";
import { MdSend } from "react-icons/md";
import SideNodePanel from "../SideNodePanel";

export default function EmailNode({
  id,
  data,
  selected,
  dragging,
  sourcePosition,
  targetPosition,
}: Node) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 300, height: 550 });
  const [transform, setTransform] = useState("none");
  const updateNodeInternals = useUpdateNodeInternals();

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
      className: "bg-red-300",
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
    <div className="flex">
      <div ref={nodeRef} style={style}>
        <Handle position={sourcePosition ?? Position.Top} type="source" />
        <div>
          <div className="flex space-x-2">
            <div>
              <div className="flex items-center font-bold justify-center w-8 h-8 text-gray-800 text-base  bg-white rounded-md border border-gray-600 cursor-pointer hover:bg-gray-300">
                <MdSend />
              </div>
            </div>
          </div>
        </div>
        <label>to:</label>
        <input
          type="text"
          className=" text-black p-2 flex w-full rounded-lg placeholder:text-gray-300 placeholder:italic  border focus:outline-none"
        ></input>
        <label>cc:</label>
        <input
          type="text"
          className=" text-black p-2 flex w-full rounded-lg placeholder:text-gray-300 placeholder:italic  border focus:outline-none"
        ></input>
        <label>bcc:</label>
        <input
          type="text"
          className=" text-black p-2 flex w-full rounded-lg placeholder:text-gray-300 placeholder:italic  border focus:outline-none"
        ></input>
        <label>Message:</label>
        <textarea
          className="w-full h-1/2 rounded-lg"
          defaultValue={data?.text}
        />
        <Handle position={targetPosition ?? Position.Bottom} type="target" />
      </div>
      <div>
        <SideNodePanel id={id} />
      </div>
    </div>
  );
}
