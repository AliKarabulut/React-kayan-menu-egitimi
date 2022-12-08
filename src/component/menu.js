import { useState, createContex } from "react";




const Menu = ({children}) => {
const [position, setPosition] = useState({});
  return <nav className="menu">{children}</nav>;
};

//sub component
Menu.Item = ({children}) => {

    const clickHandle = e =>{
        const { top, width, height } = e.getBoundingClientRect();
        const left = e.offsetLeft;
    }
    return (
        <button onClick={clickHandle}>{children}</button>
    )
}
export default Menu;
