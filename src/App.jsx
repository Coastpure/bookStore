
import BookList from './components/List';
import { Link, BrowserRouter as Router ,Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li className='text-red'>
            <Link to="/">BookList</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<BookList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
