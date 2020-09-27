import React, {Component} from 'react'
import './timeline.css'

export default class Timeline extends Component {
    render() {
        return(
            <div id="timeline">
                <div className="timeline-parcours">
                    <h2>Mon parcours</h2>
                </div>
                
                <div className="center-line"></div>

                <div className="timeline">

                    <article className="timeline-article">
                        <div className="content-right-container">
                            <div className="content-right">
                                <div className="timeline-item-title">
                                    <h2>Architecte technique navire </h2>  
                                </div>

                                <h3>Service du Soutien de la Flotte, Brest</h3>
                                <img src='./images/marine.svg' alt="image d'un bateau" id='id-itempic'/>
                                <p>Pilotage de contrats de maintenance de plus de 250 navires<br/>
                                Négociation et passation de contrats</p>
                                <p>Gestion de projet, MCO naval, marchés publics, négociation de contrats, culture Marine Nationale </p>
                            </div>

                        </div>

                        <div className="content-left-container">
                            <div className="content-left">
                                <div className="timeline-item-title">
                                    <h2>Formation développement web </h2>  
                                    <img src='./images/devweb.svg' alt="image de fenêtres de dev" id='id-itempic'/>
                                </div>

                                <h3>Autodidacte : Openclassroom / Scrimba</h3>
                                <p>Bases HTML5 / CSS3 (animations) <br />
                                CMS : Wordpress 5<br />
                                Référencement naturel (SEO)<br />
                                Javascript et librairie React<br /> </p>
                                <p>Prochaines étapes : Github, Node.js, MySQL, Sass</p>
                            </div>
                        </div>

                        <div className="meta-date">2019</div>

                    </article>

                    <article className="timeline-article">
                        <div className="content-right-container">
                            <div className="content-right">
                                <div className="timeline-item-title">
                                    <h2>Chef de département et coordinatrice pyrotechnique</h2>  
                                </div>

                                <h3>DGA Essais en Vol, Cazaux</h3>
                                <p>Management d'une équipe spécialisée en essais d'armements depuis avions et hélicoptères (sécurité pyrotechnique, balistique, gabarits de tir)</p>
                                <p>Extra : référent délégation étrangère - EUROSATORY</p>
                                <p>Management, systèmes pyrotechnique, culture Armée de l'air et DGA Essais en Vol</p>
                            </div>

                            <div className="content-right">
                                    <div className="timeline-item-title">
                                        <h2>Ingénieure de recherche</h2>
                                         
                                    </div>
                                    <h3>ONERA, Fauga-Mauzac</h3>
                                    <img src='./images/shuttle.svg' alt="image d'une fusée" id='id-itempic'/>   
                                    <p>Laboratoire de Propulsion : caractérisation acoustique du phénomène vibratoire présent dans les moteurs de l'Ariane 5.</p>
                            </div>    
                        </div>


                        <div className="meta-date">2015</div>
                    </article>

                    <article className="timeline-article">
                        <div className="content-left-container">
                            
                            <div className="content-left">

                                <div className="timeline-item-title">
                                    <h2>Master recherche</h2>
                                    <img src='./images/certificate.svg' alt="image d'un diplôme" id='id-itempic'/>  
                                </div>
                                <h3>ENSMA Poitiers - groupe ISAE, Poitiers</h3>
                                <p>Combustion turbulente, dynamique des détonations</p>
                               
                            </div>

                        </div>

                        <div className="meta-date">2014</div>

                        <div className="content-right-container">
                            <div className="content-right">
                                    <div className="timeline-item-itle">
                                        <h2>Ingénieure de recherche</h2>  
                                    </div>
                                    <h3>Ecole Royale Militaire, Bruxelles</h3>
                                    <p>Développement d'une méthodologie d'emploi de métrologie pour des essais d'impacts balistiques</p>
                            </div>
    
                        </div>

                        <div className="meta-date"> 2014</div>

                    </article>

                    <article className="timeline-article">
                        <div className="content-left-container">
                            
                            <div className="content-left">                        
                                        
                                <div className="timeline-item-title">
                                    <h2>Diplôme d'ingénieur</h2>
                                    <img src='./images/certificate.svg' alt="image d'un diplôme" id='id-itempic'/>    
                                </div>
                                <h3>ENSTA Bretagne, Brest</h3>
                                <p>Spécialisation en matériaux énergétiques et systèmes de propulsion</p>

                            </div>

                        </div>

                        <div className="content-right-container">
                            <div className="content-right">

                                <div className="timeline-item-title">
                                    <h2>Adjointe chef du bureau</h2>  
                                </div>
                                <h3>Centre des Expérimentations du Pacifique, Polynésie Française</h3>
                                <p>Gestion logistique d'un détachement de troupes de marine projeté sur Muroroa<br/>
                                Mission de surveillance radiologique CEA des anciens sites d'essais nucléaires (embarquée à bord du remorqueur ravitailleur Revi)</p>
                                <p>Extra : auditrice 76e séminaire IHEDN jeune</p>
                            </div>
 
                        </div>

                        <div className="meta-date">2011</div>

                    </article>

                    <article className="timeline-article">
                        <div className="content-left-container">
                            <div className="content-left">
                                <div className="timeline-item-title">
                                    <h2>Classes préparatoires grandes écoles</h2>  
                                </div>

                                <h3>Prytanée National Militaire, La Flèche</h3>
                                <p>Physiques et sciences de l'ingénieur</p>
                                </div>
                        </div>

                        <div className="meta-date">2009</div>
                    </article>

                    <article className="timeline-article">
                        <div className="content-right-container">
                            <div className="content-right">
                                <div className="timeline-item-title">
                                    <h2>Bac S-SI, européenne anglais</h2>  
                                </div>

                                <h3>Lycée Gustave Eiffel, Bordeaux</h3>
                                <p>Mention très bien</p>
                                </div>
                        </div>

                    </article>
 
                </div>
                    <div className="timeline-parcours">
                    <h2>1992</h2>
                </div>
            </div>
        )
    }
}