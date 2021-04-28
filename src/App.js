import myImageInSrc from "./imageInSrc.jpg";
import './App.css';
import video from "./myVideo.mp4";
import "./style.css";

function App() {
  return (
    <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Syrine Ben Mohamed</h1>
          <br />
          <h3>Hello I'm a Full Stack JS Student</h3>
          <br/>
          <img src={myImageInSrc} width={560} height={315}/> 
          <img src="/imageInPublic.jpg" />
        </div>
        <div>
          <h3>What Is React (React js) and Why Is It So Popular?</h3>
        <video width={700} height={440} controls>
          <source src={video} type="video/mp4" />
        </video>
        </div>
        
      </div>
  );
}

export default App;
