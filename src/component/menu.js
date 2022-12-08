import { useState, createContext, useContext, useEffect, useRef} from "react";

const MenuContext = createContext();

const Menu = ({ children }) => {
  const [position, setPosition] = useState({});
  const ref = useRef()

  useEffect(() => {
    console.log(ref)
    const el = ref.current.querySelector('.active')
    const { top, width, height } = el.getBoundingClientRect();
    const left = el.offsetLeft;
    setPosition({
      left,
      top,
      width,
      height,
    });
  }, [])
  

  return (
    <MenuContext.Provider value={{ setPosition, position }}>
      <nav className="menu" ref={ref}>
        {children}
        {Object.values(position).length >0 && <Menu.Divider />}
      </nav>
    </MenuContext.Provider>
  );
};

Menu.Divider = () => {
  const { position } = useContext(MenuContext);

  return (
    <div
      className="divider"
      style={{
        "--left": position.left + "px",
        "--top": position.top + "px",
        "--width": position.width + "px",
        "--height": position.height + "px",
      }}
    ></div>
  );
};

Menu.Item = ({ children , className}) => {

  const {setPosition} = useContext(MenuContext);

  const clickHandle = (e) => {
    const { top, width, height } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
    setPosition({
      left,
      top,
      width,
      height,
    });
  };
  return <button className={className} onClick={clickHandle}>{children}</button>;
};

export default Menu
