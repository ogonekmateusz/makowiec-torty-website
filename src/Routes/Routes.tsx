import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
