import { FaGithub, FaLinkedin,FaEnvelope } from 'react-icons/fa'
import './App.css'

const App = () => {
  return (
    <>
      <div className="container">

        <div className="contentContainer">
          <header>

            <div className="navBar">

              <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>

              <a href={import.meta.env.VITE_EMAIL} target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>

              <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank"><FaEnvelope size={30} /></a>
            </div>
          </header>
        </div>


      </div>

    </>
  )
}
export default App