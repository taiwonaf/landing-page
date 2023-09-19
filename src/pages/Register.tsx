import { useMediaQuery } from "react-responsive";
import RegisterMobile from "../components/register/RegisterMobile";

const Register = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  return <>{isMobile && <RegisterMobile />}</>;
};

export default Register;
