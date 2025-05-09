import React from 'react'
import {Link} from 'react-router-dom'

export default function UnderConstruction() {
  return (
    <div className="d-flex flex-column align-items-center">
        <div className='d-flex justify-content-between px-3 align-items-center mt-4'>
            <i className="fs-4 fa-solid fa-screwdriver-wrench me-4"></i>
            <span className='fs-2'>Under Construction!</span>
            <i className="fs-4 fa-solid fa-screwdriver-wrench ms-4"></i>
        </div>
        <Link to={"/"} className='d-flex align-items-center justify-content-center p-2 text-decoration-none bg bg-secondary rounded w-50 text-light'>
            Go Home
            <i className="ms-3 fa-solid fa-house"></i>
        </Link>
    </div>
  )
}
