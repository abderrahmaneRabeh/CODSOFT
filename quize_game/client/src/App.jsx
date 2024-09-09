import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/main/Main";
import Quiz from "./components/quiz/Quiz";
import Result from "./components/result/Result";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
    {
      path: "/quiz",
      element: <Quiz></Quiz>,
    },
    {
      path: "/result",
      element: <Result></Result>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
