import './App.css';
import Test from './components/Test'
import SearchMovies from './components/SearchMovies'

function App() {
  return (
    <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies/>
        <Test/>
    </div>
  );
}

export default App;
