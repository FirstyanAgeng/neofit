import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/index.jsx";
import TukarPage from "../pages/tukar.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='*' element={<div>404 Not Found</div>} />
      <Route path='/' element={<HomePage />} />
      <Route path='/tukar-point' element={<TukarPage />} />
    </Routes>
  );
};

export default AppRouter;
