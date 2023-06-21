import { createBrowserRouter } from "react-router-dom";
import { PATH_BASE, PATH_COMPANIES, PATH_CONTANT, PATH_SKILLS, PATH_STUDENT } from "./paths";

export const router = createBrowserRouter([
  {
    path: PATH_BASE,
    element: <div>Hello world!</div>,
  },
  {
    path: PATH_CONTANT,
    element: <div>contact</div>,
  },
  {
    path: PATH_COMPANIES,
    element: <div>companies</div>,
  },
  {
    path: PATH_STUDENT,
    element: <div>student</div>,
  },
  {
    path: PATH_SKILLS,
    element: <div>skills</div>,
  },
]);