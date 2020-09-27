import React, {Component} from 'react'
import './about.css'

export default class About extends Component {
    render() {
        return (
            <div className="about-body">
                <section id="about">
                    <p>Ingénieure militaire, je prépare actuellement ma reconversion dans le milieu du développement web.</p>
                    <p>Je suis une autodidacte qui a commencé à poser petit à petit les briques de HTML5, CSS3, Javascript et la librairie React. <br/>
                    Mes ressources : <a href="https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3" target="_blank">OpenClassroom</a>, 
                        <a href="https://scrimba.com/learn/learnreact" target="_blank"> Scrimba </a> et livres (dont Eloquent Javascript).</p>
                    
                    <p>Je me suis essayée dernièrement au domaine du design graphique, notamment via la suite Adobe : Illustrator et InDesign.</p>

                </section>

                <section >
                    <h2>Quelques compétences...</h2>
                    <div className="about-competences">
                        <div className="about-competences-item">
                            <div className="about-competences-item-h3">
                                <h3>Developpement web</h3>
                            </div>
                            <p>HTML5, CSS3</p>
                            <p>Javascript</p>
                            <p>Librairie React</p>
                        </div>

                        <div className="about-competences-item">
                            <div className="about-competences-item-h3">
                                <h3>Design graphique</h3>
                            </div>
                            <p>Illustrations et logos</p>
                            <p>Adobe Illustrator</p>
                            <p>InDesign</p>
                        </div>

                        <div className="about-competences-item">
                            <div className="about-competences-item-h3">
                                <h3>Softskill</h3>
                            </div>
                            <p>Gestion de projet</p>
                            <p>Management d'équipe</p>
                            <p>Empathie et créativité</p>
                        </div>

                        <div className="about-competences-item">
                            <div className="about-competences-item-h3">
                                <h3>Hardskill</h3>
                            </div>
                            <p>Anglais / allemand / chinois</p>
                            <p>Systèmes pyrotechniques</p>
                            <p>MCO naval militaire</p>
                        </div>
                    </div>

                </section>
                
            </div>
        )
    }
}