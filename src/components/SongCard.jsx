import React, { useEffect } from 'react'

export default function SongCard({song}) {
    
    useEffect(() => {
        document.querySelector("#SongCnt").scrollTop = 0
    })

    return (
    <div id="SongCnt" className='d-flex flex-column border border-1' style={{overflowY:"auto"}}>
        <div className='song-title p-4 text-center mt-0 border-bottom border-3' style={{fontSize:"medium",position:"sticky", top:"0", backgroundColor:"var(--app-white)"}}>{song.title}</div>
        <div className='p-2' dangerouslySetInnerHTML={{__html: song.text}}></div>
    </div>
    )
}
