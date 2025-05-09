import {React, useState, useEffect} from 'react'
import {useLocation, Link} from 'react-router-dom';

import SongCard from './SongCard';

export default function Playlist() {
    const location = useLocation()
    const [currentSong, setCurrentSong] = useState(0);

    const selectedSongs = location.state;

    function nextSong(){
        if(currentSong < selectedSongs.length-1)
            setCurrentSong((prev) => prev + 1);
    }

    function previousSong(){
        if(currentSong > 0)
            setCurrentSong(prev => prev - 1);
    }

    return (
    <div className='d-flex flex-column justify-content-between' style={{width:"100%", height:"100dvh"}}>
        
        <Link to={"/"} style={{position:"fixed", zIndex:"2",top:"1rem", right:"0.5rem", width:"fit-content"}} className='p-2 text-center bg bg-secondary text-light text-decoration-none rounded'>
            <i class="fa-solid fa-house"></i>
        </Link>


        {
            <SongCard song={selectedSongs[currentSong]} />
        }

        <div className="d-flex justify-content-between align-items-center">
            <button className={`btn btn-${currentSong == 0 ? "secondary":"primary"} p-4`} onClick={previousSong}>
                <i className="fa-solid fa-backward-step"></i>
            </button>

            {
                selectedSongs.map((s,i) =>
                    <i key={s.number} className={`fa-solid fa-circle ${currentSong == i ? "text-primary" : ""}`}></i>
                )
            }

            <button className={`btn btn-${currentSong == selectedSongs.length-1 ? "secondary":"primary"} p-4`} onClick={nextSong}>
                <i className="fa-solid fa-forward-step"></i>
            </button>
        </div>


    </div>
    )
}
