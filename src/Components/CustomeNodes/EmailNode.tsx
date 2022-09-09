import {
  useEffect,
  useState,
  useRef,
  useMemo,
  memo,
  useCallback,
  ChangeEvent,
} from "react";
import Moveable from "moveable";
import {
  Handle,
  useUpdateNodeInternals,
  NodeProps,
  Node,
  Position,
} from "react-flow-renderer";
import { MdSend } from "react-icons/md";
import SideNodePanel from "../SideNodePanel";
import useStore from "../../layouts/store";

function EmailNode({
  id,
  data,
  selected,
  dragging,
  sourcePosition,
  targetPosition,
}: NodeProps<Node>) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 300, height: 550 });
  const [transform, setTransform] = useState("none");
  const updateNodeInternals = useUpdateNodeInternals();

  const [toDetails, setToDetails] = useState((data as any).to);
  const [ccDetails, setCcDetails] = useState((data as any).cc);
  const [bccDetails, setBccDetails] = useState((data as any).bcc);
  // const [subjectDetailss, setSubjectDetails] = useState((data as any).subject);
  const [messageDetails, setMessageDetails] = useState((data as any).message);
  const setNodeData = useStore((state) => state.setNodeData);

  const onChangeTo = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setToDetails(evt.target.value);
      setNodeData("to", id, evt.target.value);
    },
    [id, setNodeData]
  );
  const onChangeCc = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setCcDetails(evt.target.value);
      setNodeData("cc", id, evt.target.value);
    },
    [id, setNodeData]
  );
  const onChangeBcc = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setBccDetails(evt.target.value);
      setNodeData("bcc", id, evt.target.value);
    },
    [id, setNodeData]
  );
  // const onChangeSubject = useCallback(
  //   (evt: ChangeEvent<HTMLInputElement>) => {
  //     setSubjectDetails(evt.target.value);
  //     setNodeData("subject", id, evt.target.value);
  //   },
  //   [id, setNodeData]
  // );
  const onChangeMessage = useCallback(
    (evt: ChangeEvent<HTMLTextAreaElement>) => {
      setMessageDetails(evt.target.value);
      setNodeData("message", id, evt.target.value);
    },
    [id, setNodeData]
  );

  const style = useMemo(
    () => ({
      transform,
      width: size.width,
      height: size.height,
      padding: 8,
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
    <div className="flex  border-black border-2 rounded bg-white">
      <div ref={nodeRef} style={style}>
        <Handle position={sourcePosition ?? Position.Top} type="source" />

        <div className="flex space-x-2 p-2">
          <div className="flex items-center font-bold justify-center w-8 h-8 text-gray-800 text-base  bg-white rounded-md border border-gray-600 cursor-pointer hover:bg-gray-300">
            <MdSend />
          </div>
        </div>
        <label>to:</label>
        <input
          type="text"
          className=" text-black p-2 flex w-full rounded-lg placeholder:text-gray-300 placeholder:italic  border focus:outline-none"
          value={toDetails}
          onChange={onChangeTo}
        ></input>
        <label>cc:</label>
        <input
          value={ccDetails}
          onChange={onChangeCc}
          type="text"
          className=" text-black p-2 flex w-full rounded-lg placeholder:text-gray-300 placeholder:italic  border focus:outline-none"
        ></input>
        <label>bcc:</label>
        <input
          value={bccDetails}
          onChange={onChangeBcc}
          type="text"
          className=" text-black p-2 flex w-full rounded-lg placeholder:text-gray-300 placeholder:italic  border focus:outline-none"
        ></input>
        <label>Message:</label>
        <textarea
          value={messageDetails}
          onChange={onChangeMessage}
          className="w-full h-1/2 p-2 rounded-lg border"
        />
        <Handle position={targetPosition ?? Position.Bottom} type="target" />
      </div>
      <div>
        <SideNodePanel id={id} />
      </div>
    </div>
  );
}

export default memo(EmailNode);
