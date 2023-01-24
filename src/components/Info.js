import React from "react"
import ProfilePic from "../images/profile_pic.jpg"
import '../assets/info.css'

export default function Info(props) {
     return(
      <>
      <nav className={props.darkMode ? "toggler-div dark": "toggler-div"}>
       <div className="toggler">
          <p className="toggler--light">Light</p>
          <div
              className="toggler--slider"
              onClick={props.toggleDarkMode}
          >
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
        </div>
      </nav>
      <div className="info">
        <div className="profile-img-div">
          <img
            src={ProfilePic}
            alt="Camille"
            className="profile-img"
          />
        </div>
        <div className={props.darkMode ? "info-text dark": "info-text"}>
            <h3 className="info-name">Camille Fujisaki</h3>
            <h4 className="info-job">Frontend Developer</h4>
            <a href="https://github.com/CamillieFu" className="info-github">github.com/CamillieFu</a>
            <div className="info-links">
                <a
                  href="https://www.linkedin.com/in/camille-fujisaki-80367787"
                  className="info-link-linkedin"
                  target="_blank"
                  rel="noopener noreferrer">
                    Linkedin
                  </a>
                <a href="mailto: fujisakicamille@gmail.com" className="info-link-email">Email</a>
            </div>
        </div>
      </div>
      </>
      )
}
