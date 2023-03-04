import React from "react"
import Chirpy from "../images/chirpy.jpg"
import AvcImage from "../images/avc.jpg"
import Mamoru from "../images/mamoru.jpg"
import '../assets/button.css'
import '../assets/about.css'
import Quiz from '../images/quiz.png';
import TwoBridal from '../images/2bridal.png';
import Tenzies from '../images/tenzies.png';
import Notepad from '../images/note.png';



export default function About(props) {
    return(
      <div className={props.darkMode ? "about-introduction dark": "about-introduction"}>
        <p className="about-introduction-text">
          Greetings! I am a full-stack developer with a background in education, psychology and human development.
          I love researching, solving difficult problems, and creating beautiful products ✨ I am currently working with Ruby on Rails, JavaScript, React.js, and Next.js.
          Of course, I also have experience with HTML, CSS, Bootstrap, Tailwind, and other front-end frameworks!
          I am constantly evolving and developing my skills while keeping my eye out for the next thing in web development.
        </p>
        <h4 className="about-introduction-text">Check out some of my projects and freelance work below 👇🏼👇🏼👇🏼</h4>
        {/* projects */}
        <div className="card-collection-article">
          <img src={Chirpy} alt="chirpy app home page" className="card-img"/>
          <div className="card-text">
            <a href="https://chirpy-camilliefu.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="card-title"><h1>Chirpy</h1></a>
            <p>Chirpy is an app and chrome extension which protects children from inappropriate content online.
              I developed this app as a passion project to help children who want and need the freedom to explore online, but don't need to be traumatized by some of the extreme content available.
            </p>
            <div className="links">
              <a href="https://chirpy-camilliefu.herokuapp.com/" className="btn-green" target="_blank" rel="noopener noreferrer">See App</a>
              <a href="https://github.com/CamillieFu/chirpy" className="btn-green" target="_blank" rel="noopener noreferrer">See Code</a>
            </div>
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
        <div className="card-collection-article">
          <img src={TwoBridal} alt="2bridal dress page" className="card-img"/>
          {/* <video src={Video} width="600" height="300" controls="controls" autoplay="true" /> */}
          <div className="card-text">
            <a href="https://twobridal.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="card-title"><h1>2Bridal</h1></a>
            <p>2Bridal is an app for renting and borrowing used wedding dresses. It is simple, easy to browse and navigate, and fully responsive!
              Made with: Ruby on Rails, CSS and Javascript.
            </p>
            <div className="links">
              <a href="https://twobridal.herokuapp.com/" className="btn-green" target="_blank" rel="noopener noreferrer">See App</a>
              <a href="https://github.com/CamillieFu/2bridal" className="btn-green" target="_blank" rel="noopener noreferrer">See Code</a>
            </div>
          </div>
        </div>
        <div className="card-collection-article">
          <img src={Quiz} alt="Quizzism app page" className="card-img"/>
          <div className="card-text">
            <a href="https://camilliefu.github.io/Quizzism/" target="_blank" rel="noopener noreferrer" className="card-title"><h1>Quizzism</h1></a>
            <p>This app is a very simple trivia game made using React, CSS and a quiz API. It is a very straightforward and addictive game!
              Of course, it is fully responsive and the design and graphics adjust to any screen size, so it can be enjoyed equally well on an SE or an ipad mini.
            </p>
            <div className="links">
              <a href="https://camilliefu.github.io/Quizzism/" className="btn-green" target="_blank" rel="noopener noreferrer">See App</a>
              <a href="https://github.com/CamillieFu/Quizzism" className="btn-green" target="_blank" rel="noopener noreferrer">See Code</a>
            </div>
          </div>
        </div>
        <div className="card-collection-article">
          <img src={Tenzies} alt="Tenzies app page" className="card-img"/>
          <div className="card-text">
            <a href="https://camilliefu.github.io/tenzies/" target="_blank" rel="noopener noreferrer" className="card-title"><h1>Tenzies</h1></a>
            <p>This app is a simple game, "Tenzies" built using React. The object of the game is to roll all the dice until every die is the same number.
              The game is designed to look clean on both desktop and mobile, with little change in the look and feel of the UI.
            </p>
            <div className="links">
              <a href="https://camilliefu.github.io/tenzies/" className="btn-green" target="_blank" rel="noopener noreferrer">See App</a>
              <a href="https://github.com/CamillieFu/tenzies" className="btn-green" target="_blank" rel="noopener noreferrer">See Code</a>
            </div>
          </div>
        </div>
        <div className="card-collection-article">
          <img src={Notepad} alt="Notes app page" className="card-img"/>
          <div className="card-text">
            <a href="https://camilliefu.github.io/notepad/" target="_blank" rel="noopener noreferrer" className="card-title"><h1>Notepad</h1></a>
            <p>This app is a simple note-taking app built using React and utilizes local storage. The design is minimal, cutesy (have you noticed I like purple?)
              and clutter-free. The size of the note-taking space and side bar are fully adjustable by the user.
            </p>
            <div className="links">
              <a href="https://camilliefu.github.io/notepad/" className="btn-green" target="_blank" rel="noopener noreferrer">See App</a>
              <a href="https://github.com/CamillieFu/notepad" className="btn-green" target="_blank" rel="noopener noreferrer">See Code</a>
            </div>
          </div>
        </div>
      </div>
    )
}
