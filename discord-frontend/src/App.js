import React from "react";
import { BrowserRouter } from "react-router-dom";

import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import LoginPage from "./authPages/LoginPage/LoginPage";
import Dashboard from "./Dashboard/Dashboard";
import AlertNotification from "../src/shared/Components/AlertNotification";
import { Navigate, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      {/* <h1>hello</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
      <AlertNotification />
    </>
  );
}
