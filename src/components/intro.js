import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import './intro.css';

export default class Introduction extends Component {
    render() {
        return (
            <div id="home" className="intro-body">
                <h1 className="intro-h1">Emily <span>LE DEUNF</span></h1>
                <img src='./images/profilePic.svg' alt="profil Emily" id='intro-profilpic'/>
                <a href="mailto:lagreouemily@gmail.com">lagreouemily@gmail.com</a>
                <p className="intro-cv">
                    <a href="https://drive.google.com/file/d/1X6EQ9rDo6J5KLqE6ZbBgVoIkndnP3ZAS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon = { faFileDownload } /> CV
                    </a>
                </p>
                
            </div>
        )
    }
}