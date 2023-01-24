import React from "react"
import Chirpy from "../images/chirpy.jpg"
import AvcImage from "../images/avc.jpg"
import Mamoru from "../images/mamoru.jpg"
import '../assets/button.css'
import '../assets/about.css'

export default function About(props) {
    return(
      <div className={props.darkMode ? "about-introduction dark": "about-introduction"}>
        <p className="about-introduction-text">
          Greetings! I am a full-stack developer with a background in education, psychology and human development.
          I love researching, solving difficult problems, and creating beautiful products ✨ I am currently working with Ruby on Rails, JavaScript, React.js, and Next.js.
          Constantly evolving and developing my skills while keeping my eye out for the next thing in web development.
        </p>
        <h4 className="about-introduction-text">Check out some of my solo projects and freelance work below 👇🏼👇🏼👇🏼</h4>
        {/* projects */}
        <div className="card-collection-article">
          <img src={Chirpy} alt="chirpy app home page" className="card-img"/>
          <div className="card-text">
            <a href="https://www.chirpyapp.net/" target="_blank" rel="noopener noreferrer" className="card-title"><h1>Chirpy</h1></a>
            <p>Chirpy is an app and chrome extension which protects children from inappropriate content online.
              I developed this app as a passion project to help children who want and need the freedom to explore online, but don't need to be traumatized by some of the extreme content available.
            </p>
            <a href="https://www.chirpyapp.net/" className="btn-green" target="_blank" rel="noopener noreferrer">See App</a>
          </div>
        </div>
        <div className="card-collection-article">
          <img src={AvcImage} alt="avc app home page" className="card-img"/>
          <div className="card-text">
            <a href="https://www.avc-calendar.app/" target="_blank" rel="noopener noreferrer" className="card-title"><h1>AVC Calendar</h1></a>
            <p>AVC Calendar is an audio-visual calendar app that enables you to more easily plan your child's schedule together with them.
              It is designed for children with special needs such as autism who need an enjoyable, stress free way to check their daily events.
            </p>
            <a href="https://www.avc-calendar.app/" className="btn-green" target="_blank" rel="noopener noreferrer">See App</a>
          </div>
        </div>
        <div className="card-collection-article">
          <img src={Mamoru} alt="avc app home page" className="card-img"/>
          <div className="card-text">
            <a href="https://www.mamoru.earth/" target="_blank" rel="noopener noreferrer" className="card-title"><h1>Mamoru</h1></a>
            <p>Mamoru is a sustainable living app that helps students discover and save on sustainable products, shops, cafes, restaurants, and more.
              It is an app built with React and PHP, and currently in the beta-testing phase.
            </p>
            <a href="https://www.mamoru.earth/" className="btn-green" target="_blank" rel="noopener noreferrer">See App</a>
          </div>
        </div>
      </div>
    )
}
