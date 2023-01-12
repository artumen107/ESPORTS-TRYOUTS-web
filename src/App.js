import { BrowserRouter, HashRouter, Link, Route, Routes } from "react-router-dom";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PrivateRouteSignup from "./components/PrivateRoute/PrivateRouteSignup";
import PrivateRouteLogin from "./components/PrivateRoute/PrivateRouteLogin";
import Results from "./subpages/Results/Results";
import Statistics from "./subpages/Statistics/Statistics";
import Tasks from "./subpages/Tasks/Tasks";

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PrivateRoute />}>
            <Route path='Statistics' element={<Statistics />} />
            <Route path='Results' element={<Results />} />
            <Route path='Tasks' element={<Tasks />} />
            <Route path='*' element={<Results />} />
          </Route>
          <Route exact path="/signup" element={<PrivateRouteSignup />} />
          <Route exact path="/login" element={<PrivateRouteLogin />} />
          <Route path="*" element={<PrivateRoute />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider >


  );
}

export default App;
