import "./index.css";

function Home() {
  return (
    <div className="home">
      <h1>SPOTIFY</h1>
      <form id="form" className="formSearch">
        <div className="form-group">
          <input type="text" name="title" required />
          <button id="btnSearch" type="submit">
            Search
          </button>
        </div>
      </form>
      <img
        src="https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b"
        className="image"
        alt=""
      />
      <label class="SongTitle">Bohemian Rhapsody (The Original Soundtrack)</label>
        <p class="SongArtist">Queen</p>
      
      <button id="btnSelect" type="submit">
            Select
          </button>
    </div>
  );
}

export default Home;