import { useProject } from "../../contexts/ProjectContext";

const Canvas = () => {
  const { canvasRef } = useProject();

  return (
    <div className="">
      <canvas ref={canvasRef} className="canvas" resize="true"></canvas>
    </div>
  );
};

export default Canvas;
