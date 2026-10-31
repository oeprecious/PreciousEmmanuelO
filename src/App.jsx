import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './App.css'

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
                  <li><a href="https://docs.google.com/document/d/1ayuwa77sy24g4FpbWEazTjs76mbdmRR5gf5h4e1_HjY/export?format=pdf">Download CV</a></li> <p>(Frontend Developer, Available to hire)</p>
                </div>

                <div className="cv_project_Link">
                  <li> <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a></li> <p>(View Projects)</p>
                </div>
              </ul>

              <div className="aboutME">
                <h2>About me</h2>
                <h4>Lifelong learner</h4>
              </div>

            </div>



          </main>

        </div>
      </div>

    </>
  )
}
export default App