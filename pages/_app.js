import "../styles/globals.css";
import { ProjectProvider } from "../contexts/ProjectContext";
function MyApp({ Component, pageProps }) {
  return (
    <ProjectProvider>
      <Component {...pageProps} />
    </ProjectProvider>
  );
}

export default MyApp;
