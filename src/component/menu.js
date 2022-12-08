import { useState, createContext, useContext} from "react";

const MenuContext = createContext();

const Menu = ({ children }) => {
  const [position, setPosition] = useState({});
  return (
    <MenuContext.Provider value={{ setPosition, position }}>
      <nav className="menu">
        {children}
        <Menu.Divider />
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

Menu.Item = ({ children }) => {

  const {setPosition} = useContext(MenuContext);

  const clickHandle = (e) => {
    const { top, width, height } = e.getBoundingClientRect();
    const left = e.offsetLeft;
    setPosition({
      left,
      top,
      width,
      height,
    });
  };
  return <button onClick={clickHandle}>{children}</button>;
};

export default Menu
