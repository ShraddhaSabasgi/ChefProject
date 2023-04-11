import React from "react";
import {Link} from 'react-router-dom';
import Logo from "../../Assets/img/buuterfly.jpg"
import './Header.scss'

const Header = ()=>{
    return (
      <>
        <header>
        <div>
          <img className="logo" src={Logo} alt="Logo" />
          {/* <h1 id="logoName">
            Header
          </h1> */}
        </div>
        <nav>
            <ul>
               <li>
                <Link className="link" to='/' >Home</Link>
              </li>
              {/*<li>
                <Link className="link" to='/about' >About</Link>
              </li> */}
              <li>
                <Link className="link" to='/rest' >Restaurent Owner</Link>
              </li>
              <li>
                <Link className="link" to='/employee' >Employee</Link>
              </li>
              {/* <li>
                <Link className="link" to='/form1'> Form</Link>
              </li> */}
            </ul>
        </nav>
        </header>
      </>
    )
  }
export default Header
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //     <div classNameName="container-fluid">        
    //         <Link className="navbar-brand">
    //         <img 
    //             src={Logo} alt="Logo" width="30" height="24" className="headerlogo d-inline-block align-text-top"
    //         />
    //             Bootstrap
    //         </Link>
    //         <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul classNameName="navbar-nav me-auto mb-5 mb-lg-0">
    //             <li classNameName="nav-item">
    //                 <Link to="/" classNameName="link">Home </Link>
    //             </li>
    //             <li classNameName="nav-item">
    //                 <Link to="/">Home </Link>
    //             </li>
    //             {/* <li classNameName="nav-item dropdown">
    //             <a classNameName="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                 Dropdown
    //             </a>
    //             <ul classNameName="dropdown-menu">
    //                 <li><a classNameName="dropdown-item" >Action</a></li>
    //                 <li><a classNameName="dropdown-item" >Another action</a></li>
    //                 <li><hr classNameName="dropdown-divider"></li>
    //                 <li><a classNameName="dropdown-item" >Something else here</a></li>
    //             </ul> 
    //             </li> 
    //             */}
    //             {/* <li classNameName="nav-item">
    //             <a classNameName="nav-link disabled">Disabled</a>
    //             </li> */}
    //         </ul>
    //         <form classNameName="d-flex" role="search">
    //             <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //             <button classNameName="btn btn-outline-success" type="submit">Search</button>
    //         </form>
    //         </div>
    //   </div>
    // </nav>
//     <nav className="navbar">
//     <div className="navbar-container container">
//         <input type="checkbox" name="" id="" />
//         <div className="hamburger-lines">
//             <span className="line line1"></span>
//             <span className="line line2"></span>
//             <span className="line line3"></span>
//         </div>
//         <ul className="menu-items">
//         <li classNameName="nav-item">
//             <Link to="/" classNameName="link">Home </Link>
//         </li>
//         <li classNameName="nav-item">
//             <Link to="/">About </Link>
//         </li>
//         </ul>
//         <Link>
//            <img 
//                src={Logo} alt="Logo" classNameName="headerlogo"/>
//                Shraddha
//            </Link>
//         </div>
//     </nav>
// //     <header>
// //     <div className="nav-wrapper">
// //         <div className="logo-container">
// //             <img className="logo" src={Logo} alt="Logo" />
// //         </div>
// //         <nav>
// //             <input className="hidden" type="checkbox" id="menuToggle" />
// //             <label className="menu-btn" for="menuToggle">
// //                 <div className="menu"></div>
// //                 <div className="menu"></div>
// //                 <div className="menu"></div>
// //             </label>
// //             <div className="nav-container">
// //             <ul className="nav-tabs">
// //             <li classNameName="nav-tab">
// //                 <Link to="/" classNameName="link">Home </Link>
// //             </li>
// //             <li classNameName="nav-tab">
// //                 <Link to="/">Home </Link>
// //             </li>
// //             </ul>
// //             </div>
// //         </nav>
// //     </div>
// // </header>





// {
  /* <>
<header className="header">
        <nav className="nav">
          <div className="logo">
            <Link>
            <img src={Logo} alt="Logo" className="logo"/>
           </Link>
           <span className="logoName"> Shraddha</span>
          </div>
          <ul>
            <li className="nav-item">
                <Link to="/" className="link" >Home </Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="link" >About </Link>
            </li>
            <li className="nav-item">
                <Link to="/rest" className="link" >Restaurent Owner </Link>
            </li>
          </ul>
        </nav>
      </header>




      <header className="header">
        <nav className="nav">
          <div className="logo">
            <Link>
            <img src={Logo} alt="Logo" className="logo"/>
           </Link>
           <span className="logoName"> Shraddha</span>
          </div>
                <ul>
                     <li>
                        <Link to="/home">Home </Link>
                     </li>
                     <li>
                        <Link to="/about">About </Link>
                     </li>
                     <li>
                        <Link to="/rest">Employer </Link>
                     </li>
                     </ul>
        </nav>
      </header>
      // </> */
    // }
    // )
// }
