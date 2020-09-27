import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import './sidebar.css';

export default class Sidebar extends Component {
    render() {
        return(
            <div className="sidebar-body">
                <nav href="#navbar">
                    <img src='./images/profilePic.svg' alt="photo de profil Emily" id='id-profilpic'/>
                    <h1 className="App-sidebar-h1"><span>Emily</span> Le Deunf</h1>
                    
                    <p>Ingénieure militaire DGA en projet de reconversion dans le <span>développement web</span>.</p>

                    <nav>
                        <div id="navbar">
                            <ul className="sidebar-ul">
                                <li><a href="#home">Introduction</a></li>
                                <li><a href="#about">A propos</a></li>
                                <li><a href="#projects">Mes projets</a></li>
                                <li><a href="#timeline">Mon parcours</a></li>
                            </ul>
                        </div>
                    </nav>

                    <nav>
                        <ul className="sidebar-ul">
                            <li><a href="https://www.linkedin.com/in/emily-lagr%C3%A9ou-964107143/" target="_blank" rel="noopener norefferer"><img src='./images/linkedin.svg' alt="logo de LinkedIn" id='id-logopic'/></a></li>
                        </ul>
                    </nav>

                </nav>
            </div>
        )
    }
}