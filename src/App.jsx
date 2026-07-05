import fetchTopAnime from "./data/fetchAnime";

function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Anime Guesser – Data Fetcher</h1>
      <button onClick={fetchTopAnime}>Fetch Anime List</button>
      <p>Open the browser console (F12) to see the output.</p>
    </div>
  );
}

export default App;