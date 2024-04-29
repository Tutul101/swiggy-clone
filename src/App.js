import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/home";
import RestrauntPage from "./pages/restraunt-page";
import LoginPage from "./pages/login";

import "./scss/index.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "restraunt/:resId",
          element: <RestrauntPage />,
        },
        {
          path: "sign-in",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
