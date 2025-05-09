import {React, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './NavMenu.css';

export default function NavMenu({currentPage, data}) {
    
    const navMenuOptions = [
        {
            id:"home",
            icon:"fa-solid fa-house",
            path:"/"
        },
        {
            id:"playlist",
            icon:"fa-solid fa-play",
            path:"/playlist"
        },
        {
            id:"chords",
            icon:"fa-solid fa-music",
            path:"/chords"
        }
    ]

  return (
    <nav id='NavMenu' className='bg bg-secondary d-flex justify-content-between mt-1'>
        {
            navMenuOptions.map(option => 
                <Link
                    key={option.id} 
                    id={`${option.id}`} className={`w-100 d-flex align-items-center justify-content-center nav-menu-btn btn ${currentPage==option.id?"selected-btn":""}`}
                    to={option.path}
                    state={data}>
                        <i className={`${option.icon} text-light fs-3 ${currentPage==option.id?"selected-btn-icon":""}`}></i>
                </Link>
            )
        }
    </nav>
  )
}
