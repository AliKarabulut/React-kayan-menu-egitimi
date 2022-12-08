
import Menu from "./component/Menu";
import "./App.css";

function App() {

  // getBoundingClientRect() = > x y h w olarak
  // bütün değerleri ayrıntılı olarak verir

  return (
    <div>
      <Menu>
        <Menu.Item>Hakkımda</Menu.Item>
        <Menu.Item>iletişim</Menu.Item>
        <Menu.Item>Blog</Menu.Item>
        <Menu.Item>Makaleler</Menu.Item>
        <Menu.Item>Dersler</Menu.Item>
      </Menu>
    </div>
  );
}

export default App;
