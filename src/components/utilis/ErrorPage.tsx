import LinkButton from "../button/LinkButton";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-secondary text-white flex justify-center items-center gap-[20px] flex-col">
      <h2 className="text-[48px] font-clashDisplay uppercase font-[700]">
        Error 404
      </h2>
      <h3 className="text-[36px] font-monteserat font-[600]">Page not found</h3>
      <LinkButton path="/" text="Go Home" />
    </div>
  );
};

export default ErrorPage;
