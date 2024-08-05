function Container({children}) {
    return (<div className="max-w-[1100px] mx-auto bg-white flex flex-col">
        {children}
    </div>
      
    );
  }
  
  export default Container;