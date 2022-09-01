import useStore from "../../layouts/store";
import {
  EdgeSmoothStepProps,
  // getBezierPath,
  getSmoothStepPath,
  getEdgeCenter,
  getMarkerEnd,
} from "react-flow-renderer";

const foreignObjectSize = 40;

export function CustomEdgeButton({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
}: EdgeSmoothStepProps) {
  const edgePath = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  }); //
  const markerEnd = getMarkerEnd();
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const deleteEdge = useStore((state) => state.deleteEdge);

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path animated"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <button
          className="edgebutton"
          onClick={(event) => {
            event.stopPropagation();
            deleteEdge(id);
          }}
        >
          <span>
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.45998 3.99998L7.99983 6.53983V7.99983H6.53983L3.99998 5.45998L1.46015 7.99983H0.000146866V6.53983L2.53998 3.99998L0 1.46002V2.28882e-05H1.46L3.99998 2.53998L6.53996 0H7.99995V1.46L5.45998 3.99998Z"
                fill="black"
              />
            </svg>
          </span>
        </button>
      </foreignObject>
    </>
  );
}
