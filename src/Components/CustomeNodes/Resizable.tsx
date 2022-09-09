import {
  useEffect,
  useCallback,
  ChangeEvent,
  useState,
  useRef,
  useMemo,
  memo,
} from "react";
import Moveable from "moveable";
import {
  Handle,
  useUpdateNodeInternals,
  NodeProps,
  Node,
  Position,
} from "react-flow-renderer";
import SideNodePanel from "../SideNodePanel";
import useStore from "../../layouts/store";

function Resizable({
  id,
  data,
  selected,
  dragging,
  sourcePosition,
  targetPosition,
}: NodeProps<Node>) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 300, height: 150 });
  const [transform, setTransform] = useState("none");
  const updateNodeInternals = useUpdateNodeInternals();

  const [nodeName, setNodeName] = useState((data as any).nodeName);
  const [nodeInformation, setNodeInformation] = useState(
    (data as any).nodeInformation
  );
  const setNodeData = useStore((state) => state.setNodeData);

  const onChangeNodeName = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setNodeName(evt.target.value);
      setNodeData("nodeName", id, evt.target.value);
    },
    [id, setNodeData]
  );
  const onChangeInfo = useCallback(
    (evt: ChangeEvent<HTMLTextAreaElement>) => {
      setNodeInformation(evt.target.value);
      setNodeData("nodeInformation", id, evt.target.value);
    },
    [id, setNodeData]
  );

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
    return () => updateNodeInternals(id);
  }, [transform, id, updateNodeInternals]);

  return (
    <div className="flex">
      <div ref={nodeRef} style={style}>
        <div></div>
        <input
          value={nodeName}
          onChange={onChangeNodeName}
          type="text"
          placeholder="Node Name"
          className=" text-black p-2 flex w-full rounded-lg placeholder:text-gray-300 placeholder:italic  border focus:outline-none"
        ></input>
        <textarea
          style={{
            width: "100%",
            height: "100%",
            resize: "none",
            backgroundColor: "rgba(255, 255, 255, 0)",
            color: "black",
            padding: 5,
            fontSize: 18,
            boxSizing: "border-box",
            outline: "none",
            border: "none",
          }}
          value={nodeInformation}
          onChange={onChangeInfo}
        />
        <Handle position={sourcePosition ?? Position.Top} type="target" />
        <Handle position={targetPosition ?? Position.Bottom} type="source" />
      </div>
      <SideNodePanel id={id} />
    </div>
  );
}

export default memo(Resizable);
