import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { IUser, RootState } from "../Interface/login";
import { useAppSelector } from "../Redux/hook";

interface Iprops {
  children: ReactNode;
}

const PrivateRoute = ({ children }: Iprops) => {
  const user: IUser | null | undefined = useAppSelector(
    (state: RootState) => state.auth
  );

  const { pathname } = useLocation();

  if (!user?.accessToken) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
