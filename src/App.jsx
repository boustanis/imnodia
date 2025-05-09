import {useState, useEffect, useCallback} from 'react';
import './App.css';
import Song from './components/Song';
import NavMenu from './components/NavMenu';
import Test from './components/Test';

function App(){
  const [songs, setSongs] = useState([]);
  const currentPage = 'home';

  let selections = [];

  useEffect(() => {
    fetch("/data/songs-full.json")
      .then(res => res.json())
      .then(json => setSongs(json.songs));
  }, []);

  function onSelectSong(song){
    if(selections.includes(song)){
      const index = selections.indexOf(s => s.number === song.number);
      selections.splice(index,1);
    }
    else
      selections.push(song);
    //console.log(selections);
  }

  function showSelections(){
    selections.length != 0
    ? alert(`your selections are: ${selections.map(s => s.title)}`)
    : alert('no selections have been made');
  }

  function onSearchSong(res) {
    setSongs(res);
  }

  return(
    <div id="MainPage" className='w-100 d-flex flex-column'>
      
      <div id="MainPageHeader" className='text-center d-flex align-items-center justify-content-between'>
        <div className='fs-4 ms-3'>Περιεχόμενα</div>
        <button id='ShowSelectionsBtn' className='btn btn-success' onClick={showSelections}>SHOW SELECTIONS!</button>
      </div>

      <Test onSearch={onSearchSong}/>

      <div id='Contents'>
        {
          songs.length > 0 ?
          songs.map(song => <Song 
                              key={song.number-1}
                              title={song.title}
                              handleSelections={() => onSelectSong(song)}/>)
          :
          <h1>oops</h1>
        }
      </div>

      <NavMenu 
        currentPage={currentPage}
        data={selections}/>

    </div>
  )
}

export default App;