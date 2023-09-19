import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

interface ILayoutWrapper {
  children: React.ReactNode;
}

const LayOutWrapper: React.FC<ILayoutWrapper> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Nav />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default LayOutWrapper;
