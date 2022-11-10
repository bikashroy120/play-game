import "./App.css";
import img1 from "./asstes/imge/PlayButtom.png";
import img2 from "./asstes/imge/image.png"
import img3 from "./asstes/imge/image (1).png"
function App() {
  return (
    <div className="home">
      <div className="container">
        <div className="headding">
          <h2>PLAY FREE TRIVIA AND WIN</h2>
        </div>
        <div className="hero_content">
          <div className="left">
            <img src={img1} alt="" />
            <div className="content">
              <h3>Play our trivia game to win stars.</h3>
              <p>
                Every 5 stars you win 1 free entry into our daily/weekly
                contests where you can win prizes like food, gift cards and
                DragonCamp merchandise! Win your own green DragonCamp onesie.
                Follow us on social to see if you’ve won!
              </p>
            </div>
          </div>
          <div className="right">
            <img src={img2} className="img1" alt="" />
            <img src={img3} className="img2" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
