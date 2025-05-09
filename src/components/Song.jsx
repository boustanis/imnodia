import {useState, useEffect} from 'react';
import './Song.css';

function Song(props){
    const selectedSongClass = "bg bg-selected-song text-light";
    const notSelectedSongClass = "bg bg-not-selected-song text-dark";
    
    const [selectedClass, setSelectedClass] = useState(notSelectedSongClass);
    const [iconClass, setIconClass] = useState("d-none");
    
    // useEffect(() => console.log(props.title),[iconClass])

    function onSelectSong(){
        if(selectedClass == notSelectedSongClass){
            setSelectedClass(selectedSongClass);
            setIconClass("d-block");
        }
        else{
            setSelectedClass(notSelectedSongClass);
            setIconClass("d-none");
        }
        
        props.handleSelections();
    }
    
    return (
        <div className='song d-flex align-items-center mt-3 px-3' onClick={onSelectSong}>
            <div className={`d-flex align-items-center border border-1 rounded text-start ps-3 py-3 w-100 ${selectedClass}`}>
                <span className='song-title'>{props.title}</span>
                <i className={`${iconClass} fa-solid fa-check text-light ms-auto me-2`}></i>
            </div>
        </div>
    )
}


export default Song;