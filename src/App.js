import { useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState({});

  const clickHandle = (e) => {
    const {top, width, height } = e.target.getBoundingClientRect();
    // navbar ekranın ortasından yarını kaplıyo diyelim o zaman bu left değeri bozulacak
    // çünkü bu komple ekrana göre alıyor
    // bu yüzden lefti offsetleft ile alcaz
    // bu sayede kapsayıcıya göre left değeri almış olcaz

    const left = e.target.offsetLeft
    setPosition({
      left,
      top,
      width,
      height,
    });
  };
  // getBoundingClientRect() = > x y h w olarak
  // bütün değerleri ayrıntılı olarak verir

  return (
    <div>
      <nav className="menu">
        {Object.values(position).length > 0 && (
          <div
            className="divider"
            style={{
              "--left": position.left + "px",
              "--top": position.top + "px",
              "--width": position.width + "px",
              "--height": position.height + "px",
            }}
          ></div>
        )}
        <button onClick={clickHandle}>Hakkımda</button>
        <button onClick={clickHandle}>iletişim</button>
        <button onClick={clickHandle}>Blog</button>
        <button onClick={clickHandle}>Makaleler</button>
        <button onClick={clickHandle}>Dersler</button>
      </nav>
    </div>
  );
}

export default App;
