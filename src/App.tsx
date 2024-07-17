import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="content">
      <img
        src="https://p1.ssl.qhimg.com/dmfd/400_300_/t016c8c639b6etjpdf4r.webp"
        alt="背景图" 
        height="100%"
        width="100%"
        style={{ position: "fixed", zIndex: -1 }}/>
      <div className="container">
        <h1>Rsbuild with React</h1>
           <Link to="/talk" className="button">Talk</Link>
      </div>
      <p style={{ position: "fixed", bottom: 0, width: "100%", textAlign: "center"}}>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;