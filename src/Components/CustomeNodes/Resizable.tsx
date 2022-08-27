import { useEffect, useState, useRef, useMemo } from "react";
import Moveable from "moveable";
import {
  Handle,
  useUpdateNodeInternals,
  Node,
  Position,
} from "react-flow-renderer";

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

    
  const style = useMemo(
    () => ({
      transform,
      width: size.width,
      height: size.height,
      background: data?.color,
      padding: 20,
      borderRadius: 2,
      border: "1px solid black"
    }),
    
    [transform, size.width, size.height, data?.color]
  );

  useEffect(() => {
    if (!nodeRef.current || !selected || dragging) {
      return;
    }

    const moveable = new Moveable(document.body, {
      target: nodeRef.current,
      className: 'nodrag',
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
        {data?.text}
        </div>
      <Handle position={sourcePosition ?? Position.Top} type="target" />
      <Handle position={targetPosition ?? Position.Bottom} type="source" />
    </div>
  );
}
