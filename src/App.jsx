import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './App.css'
import Precious from "./assets/image/precious.png"

const App = () => {
  return (
    <>
      <div className="container">

        <div className="contentContainer">
          <header>

            <div className="navBar">

              <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>

              <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>

              <a href={import.meta.env.VITE_EMAIL} target="_blank"><FaEnvelope size={30} /></a>
            </div>
          </header>

          <main>

            <div className="card">

              <h1>Precious Emmanuel O</h1>

              <ul>
                <div className="cv_project_Link">
                  <li><a href="https://docs.google.com/document/d/1ayuwa77sy24g4FpbWEazTjs76mbdmRR5gf5h4e1_HjY/export?format=pdf">Download CV</a></li> <p>(Frontend Developer)</p>
                </div>

                <div className="cv_project_Link">
                  <li> <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a></li> <p>(View Projects)</p>
                </div>
              </ul>

              <div className="aboutME">
                <h2>About me</h2>
                <h4>Lifelong learner</h4>
              </div>

              <div className="favQuote">
                Life is a precious gift that teaches us lessons every day. It is full
                of happiness, challenges, success, and failure. Life helps us grow through
                experiences and makes us stronger with time. Every moment gives us a chance to
                learn something new. Life is not always easy, but difficulties makes us wise and patient. Loving others, helping people, and staying positive make life meaningful.
                Time is very important in life, so we should use it wisely. When we live with honesty, balance, and hope, life becomes beautiful. Therefore, we should value life, learn from it, and live it with purpose and gratitude.
              </div>

              <div className="imageCard">
                <img src={Precious} alt={Precious} className="image" />
              </div>

            </div>

          </main>

        </div>
      </div>

    </>
  )
}
export default App