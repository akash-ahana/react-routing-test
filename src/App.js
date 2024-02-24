import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from '../src/landingpage';
import Outlet from '../src/Outlet/outlet';
import Landingpage2 from '../src/landingpage2';
import Landingpage3 from './Landingpage3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>} />
          <Route path="/secondpage" element={<Landingpage2 />} />
          <Route path="/thirdpage" element={<Landingpage3/>} />
      </Routes>
    </Router>
  );
}

export default App;
