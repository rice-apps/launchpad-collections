import './App.css';

import Movie from "./components/Movie"
function App() {

  const movies = [{
    "name": "Kung Fu Panda",
    "review": "10"
  },
    {
      "name": "The Conjuring",
      "review": "7"
    }, 
    {
      "name": "Barbie",
      "review": "8"
    },
    {
      "name": "The Hangover 2",
      "review": "3"
    },
    {
      "name": "Get Out",
      "review": "8.5"
    },
  {
      "name": "Despicable Me",
      "review": "6"
    },
  {
      "name": "Shrek",
      "review": "10"
    }]
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* header */}
      <div className="header"> 
        <h1>Movies</h1>

      </div>
      {/* body */}
      <div className="body">
        {movies.map(movie => 
          <Movie name={movie.name} review={movie.review} />
        )}

      </div>


    </div>
  );
}

export default App;
