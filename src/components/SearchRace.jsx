import React from 'react'
import NavRace from './NavRace'

const SearchRace = () => {
  return (
    <div>
        <NavRace/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                <label htmlFor="" className="form-label">Car name:</label>
                <input type="text" className="" />form-control

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-info">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchRace