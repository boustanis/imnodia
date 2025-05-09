import {React, useEffect, useState} from 'react';

export default function Test(props) {
  const [songs, setSongs] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("/data/songs-full.json")
      .then(res => res.json())
      .then(json => {setSongs(json.songs); setResults(json.songs); });
  },[]);

  function handleInput(args){
        //setResults(songs.filter(s => s.text.includes(args.target.value)));     
        //props.onSearch(results);
        props.onSearch(songs.filter(s => s.text.includes(args.target.value)));
  }

  return (
    <div>
        <input type="text" onInput={(args) => handleInput(args)}/>
        {/* <h1>{results.map(r => <div key={r.number}>{r.title}</div>)}</h1> */}
    </div>
  )
}
