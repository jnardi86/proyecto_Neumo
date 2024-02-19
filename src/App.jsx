import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/router/AppRouter";

function App() {

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
