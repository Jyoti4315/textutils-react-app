import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>         
      </ul>
      <div className="d-flex">
        <div className="bg-primary  mx-2" onClick={()=>props.toggleMode('primary')} style={{height: '30px', width: '30px', cursor: 'pointer', border:'4px solid black', borderRadius:'50px'}}></div>
        <div className="bg-success  mx-2" onClick={()=>props.toggleMode('success')} style={{height: '30px', width: '30px', cursor: 'pointer' , border:'4px solid black', borderRadius:'50px'}}></div>
        <div className="bg-warning  mx-2" onClick={()=>props.toggleMode('warning')} style={{height: '30px', width: '30px', cursor: 'pointer' , border:'4px solid black', borderRadius:'50px'}}></div>
        <div className="bg-danger  mx-2" onClick={()=>props.toggleMode('danger')} style={{height: '30px', width: '30px', cursor: 'pointer' , border:'4px solid black', borderRadius:'50px'}}></div>
        <div className="bg-light  mx-2" onClick={()=>props.toggleMode('light')} style={{height: '30px', width: '30px', cursor: 'pointer' , border:'4px solid black', borderRadius:'50px'}}></div>
        <div className="bg-dark  mx-2" onClick={()=>props.toggleMode('dark')} style={{height: '30px', width: '30px', cursor: 'pointer' , border:'4px solid black', borderRadius:'50px'}}></div>
      </div>
      
    </div>
  </div>
</nav>

  )
}
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
  }

// NavBar.defaultProps = {
//   title: 'Set title here',
//   aboutText: 'Set About text here'
// };