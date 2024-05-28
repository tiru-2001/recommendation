import React from "react";
import "./about.scss";

const About = () => {
    return (
        <div className="app__about-container">
            
            <div className="about-subcontainer">
                <div className="top-container">
                    <h1>  About Us</h1>
                    
                </div>
                <div className="bottom_maincontainer">
                   <div className="heading"> 
                   <h3>Under the  Guidence of </h3>
                    <h3> Dr. Thyagaraju G S </h3>
                    <h3>Head of the Department</h3> 
                   </div>

                    <div className="bottom-container">
                    <div className="p">
                        <div className="image"></div>
                        <div className="par1">
                            <p>Tirumalesha</p>
                            <p>4SU20CS116</p>
                            
                        </div>
                    </div>
                    <div className="p">
                    <div className="image"></div>
                    <div className="par1">
                        <p>Swamy B C</p>
                        <p>4SU20CS114</p>
                    </div>
                    </div>
                    <div className="p">
                    <div className="image"></div>
                    <div className="par1">
                        <p>Shresta G R</p>
                        <p>4SU20CS097</p>
                    </div>
                    </div>
                    <div className="p">
                    <div className="image"></div>
                    <div className="par1">
                        <p>Rashmi M</p>
                        <p>4SU20CS075</p>
                    </div>   
                    </div>
                </div>
                </div>
              
            </div>

        </div>

    );
};

export default About;