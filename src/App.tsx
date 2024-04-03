import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { Routes, Route, useNavigate, Navigate, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { APIConfig, setAuthToken } from "./lib/api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AUTH_CHECK, AUTH_ERROR } from "./stores/rootReducer";
import MainPages from "./layouts/MainPages";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authCheck = async () => {
    try {
      setAuthToken(localStorage.token);

      const response = await APIConfig.get("/auth/check");
      dispatch(AUTH_CHECK(response.data));
    } catch (error) {
      dispatch(AUTH_ERROR());
      navigate("/auth/login");
    }
  };

  useEffect(() => {
    authCheck();
  }, []);

  const IsLogin = () => {
    if (!localStorage.token) {
      return <Navigate to={"/auth/login"} />;
    } else {
      return <Outlet />;
    }
  };
  const IsNotLogin = () => {
    if (localStorage.token) {
      return <Navigate to={"/"} />;
    } else {
      return <Outlet />;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<IsLogin />}>
        <Route
          path="/"
          element={
            <MainPages>
              <Home />
            </MainPages>
          }
        />
        <Route
          path="/threads/:id"
          element={
            <MainPages>
              <Detail />
            </MainPages>
          }
        />
      </Route>

      <Route path="/" element={<IsNotLogin />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
