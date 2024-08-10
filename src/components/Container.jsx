function Container({ children }) {
  return (
    <div className="max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col border-r border-l">
      {children}
    </div>
  );
}

export default Container;
