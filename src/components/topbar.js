import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './topbar.css';

export default class Topbar extends Component {
    render() {
        return (
            <div className="topbar-body">
                <div className="topbar-flex">
                    <nav className="topbar-nav">
                        <a href="#home">Introduction</a>
                        <a href="#about">A propos</a>
                        <a href="#projects">Mes projets</a>
                        <a href="#timeline">Mon parcours</a>
                    </nav>
                </div>
            </div>
        )
    }
}
