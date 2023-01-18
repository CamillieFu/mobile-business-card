import React from "react"

export default function Info() {
     return(
        <div className="info">
          {/* <img
            src="../images/profile_pic.jpg"
            alt="profile picture"
            className="profile-img"
          /> */}
          <div>
              <h3 className="info-name">Camille Fujisaki</h3>
              <h4 className="info-job">Frontend Developer</h4>
              <a href="https://github.com/CamillieFu" className="info-github">github.com/CamillieFu</a>
              <div className="info-links">
                  <a href="https://github.com/CamillieFu" className="info-link-linkedin">Linkedin</a>
                  <a href="https://github.com/CamillieFu" className="info-link-email">Email</a>
              </div>
          </div>
        </div>
      )
}
