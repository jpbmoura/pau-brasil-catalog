const Footer = () => {
  return (
    <footer className="bg-green-500 text-white p-6 flex justify-between items-center px-10 md:px-0 justify-self-end">
      <div className="flex justify-between items-center max-w-3xl m-auto w-full">
        <div className="text-sm">&copy; 2024 Pau Brasil</div>
        {/* <nav className="flex items-center gap-4">
          <a
            href="#"
            className="text-sm font-medium text-green-300 hover:text-white"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm font-medium text-green-300 hover:text-white"
          >
            Terms
          </a>
        </nav> */}
      </div>
    </footer>
  );
};

export default Footer;
