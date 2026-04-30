import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomeView from "../views/HomeView";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}
