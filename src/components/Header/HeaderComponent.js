import React from 'react'

export default class HeaderComponent extends React.Component {
    render = () => (
        <header>
            <div className="header container">
                <button className="btn btn-default link">
                    <span className="header__text">Filipe Alexandre Groh</span>
                </button>
                <div className="header__buttons">
                    <button className="btn btn-default header__buttons-selector"><span className="glyphicon glyphicon-home"></span></button>
                    <button className="btn btn-default header__buttons-selector"><span className="glyphicon glyphicon-briefcase"></span></button>
                    <button className="btn btn-default header__buttons-selector"><span className="glyphicon glyphicon-education"></span></button>
                    <button className="btn btn-default header__buttons-selector"><span className="glyphicon glyphicon-phone-alt"></span></button>
                </div>
            </div>
        </header>
    )
}