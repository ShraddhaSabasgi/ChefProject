import React from 'react'
import './Home.scss'
import ChefImage from "../../Assets/img/chef.jpg"
import Employer from "../../Assets/img/rest1.jpg"
import Vendor from "../../Assets/img/vendor.jpg"
// import Header from '../Header/Header'
// import {Link} from 'react-router-dom';
const Home = ()=>{
    return (
        <>   
        {/* <div className='container-fluid'> */}
        <div>
        <div id="hero-image">
        
        <h2 className="imagetitle">
            <strong> Home Page Title Of Our Website </strong>
        </h2>
        <h4>
            subtitle This homepage is one of our absolute favorites. The look and feel of the website is brilliantly designed, and the interactive elements
        </h4>
        </div>
        <div className="features"> 
        <div className="row my-5">
            <div className="col-md-6">
            <h1 className="headline">
                <strong>
                    One step solution after registration
                </strong>
            </h1>
            </div>
            <div className="col-md-6">
            <span className="subheadline">
                From hiring staff to Searching jobs and providing vendor information to help your new setup
                OR running your existing one.
            </span>
            </div>
        </div>
        
       
        
            <ul>
                <li>
                    <div className="feature1">
                        <img alt="featureimage1" src={ChefImage} className="feature-image">
                        </img>
                        <h2 className="title">
                            <strong> Employee</strong> 
                        </h2>
                        <h5 className="subtitle">
                            Looking for good oportunity
                            to join team and prepare delicious meals.
                        </h5>
                        <button>
                            Registration
                        </button>
                    </div>
                </li>
                <li>
                    <div className="feature1">
                    <img alt="featureimage1" src={Employer} className="feature-image">
                    </img>
                    <h2 className="title">
                        <strong> Employer </strong> 
                    </h2>
                    <h5 className="subtitle">
                        We are looking for a Chef to join our team and prepare delicious meals.
                    </h5>
                    <button >
                        Registration
                    </button>
                    </div>
                </li>
                <li>
                <div className="feature1">
                    <img alt="featureimage1" src={Vendor} className="feature-image">
                    </img>
                    <h2 className="title">
                        <strong> Vendor </strong> 
                    </h2>
                    <h5 className="subtitle">
                       Committed to deliverying farm fresh produce right to your doorstep.
                    </h5>
                    <button>
                        Registration
                    </button>
                    </div>
                </li>
            </ul>
        </div>
        </div>
        
        {/* </div> */}
        
    

        </>
    )
}
export default Home