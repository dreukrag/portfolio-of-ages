import React from 'react';
import filipeImg from './Images/Filipe.jpg';
export class HomeSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input1Value: 'Please insert only numbers',
            input2Value: 'Please insert only numbers',
            input3Value: 'Please insert only numbers'
        }

    }
    render = () => (
        <div>
            <img className="img-circle home-img center" style={{ width: 128 }} src={filipeImg} alt="Profile Photo" />
            <div className="home-container">
                <p>Desenvolvedor Front-End, amante de javascript, entusiasta de sketchup.</p>

                <p>Atualmente disponível. Possuo experiência principalmente com React e também AngularJs.</p>
            </div>
        </div>

    )
}