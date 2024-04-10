import Navebar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navebar />
        <div className="content">
          <Routes>
            <Route exact path="/" Component={ Home } />
            <Route path="/create" Component={ Create } />
            <Route path="/blogs/:id" Component={ BlogDetails } />
            <Route path="*" Component={ NotFound } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
