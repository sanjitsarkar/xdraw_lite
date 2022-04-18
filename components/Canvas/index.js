import { useEffect, useRef } from "react";
import { useProject } from "../../contexts/ProjectContext";

const Canvas = () => {
  const { project, initPaper, canvasRef } = useProject();

  return (
    <div className="">
      <canvas ref={canvasRef} className="canvas" resize="true"></canvas>
    </div>
  );
};

export default Canvas;
