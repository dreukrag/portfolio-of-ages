import React from 'react';
import filipeImg from './Images/Filipe.jpg';

export class HomeSection extends React.Component {
    render = () => (
        <div>
            <div className="home-container">
                <img className="img-circle home-img" style={{ width: 128 }} src={filipeImg} alt="Profile Photo" />

                <p>Desenvolvedor Front-End, amante de javascript, entusiasta de sketchup.</p>

                <p>Atualmente disponível. Possuo experiência principalmente com React e também AngularJs.</p>
            </div>
        </div>
    )
}