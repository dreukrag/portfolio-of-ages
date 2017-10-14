import React from 'react'
import Portal from 'react-portal'

export class GalleryItem extends React.Component {
    render = () => {
        return (
            <Portal closeOnEsc closeOnOutsideClick isOpened={this.props.isModalOpen}>
                <div>
                    <div className="GalleryItem__backdrop" onClick={this.props.modalClose}>
                    </div>
                    <div className="panel panel-default GalleryItem__modal">
                        <div className="panel-heading">
                            {this.props.titulo}
                            <span onClick={this.props.modalClose} style={{float:'right'}}>X</span>
                        </div>
                        {/* <button >Close this</button> */}
                        <div className="panel-body">
                            {this.props.children}
                        </div>
                        
                    </div>
                </div>
            </Portal>
        )
    }

}