import { createContext, useContext, useEffect, useRef, useState } from "react";
import paperCore, { project as _project } from "paper/dist/paper-core";
const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState();
  const canvasRef = useRef();
  const initPaper = (canvasRef) => {
    paperCore.install(canvasRef.current);
    paperCore.setup(canvasRef.current);
    console.log("canvasRef", _project);
  };

  useEffect(() => {
    _project && setProject(_project);
  }, [_project]);
  useEffect(() => {
    if (canvasRef) initPaper(canvasRef);
  }, [canvasRef]);
  return (
    <ProjectContext.Provider
      value={{ project, setProject, initPaper, canvasRef }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

const useProject = () => useContext(ProjectContext);

export { ProjectProvider, useProject };
