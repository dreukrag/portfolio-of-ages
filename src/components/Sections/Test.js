import React from 'react';
import filipeImg from './Images/Filipe.jpg';

export default class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input1Value: 'Please insert only numbers',
            input2Value: 'Please insert only numbers',
            input3Value: 'Please insert only numbers',
            validity1:'',
            validity2:'',
            validity3:''
        }

    }
    render = () => (
            <form>
                <input type="text" name="input1" value={this.state.input1Value} onChange={this.handleChange1} className={ '' + this.state.validity1}/>
                <input type="text" name="input2" value={this.state.input2Value} onChange={this.handleChange2} className={ '' + this.state.validity2}/>
                <input type="text" name="input3" value={this.state.input3Value} onChange={this.handleChange3}  className={ '' + this.state.validity3}/>
                <input type="submit" value="submit" onClick={this.handleSubmit}/>
            </form>
    )
handleChange1 = (ev) =>{
    this.setState({
        input1Value:ev.target.value
    })
}
handleChange2 = (ev) =>{
    this.setState({
        input2Value:ev.target.value
    })
}
handleChange3 = (ev) =>{
    this.setState({
        input3Value:ev.target.value
    })
}
    handleSubmit = (ev) =>{
        ev.preventDefault();
        if(isNaN(this.state.input1Value) ){
            this.setState({
                validity1:'invalid'
            })
        }else{
            this.setState({
                validity1:'valid'
            })
        }
        if(isNaN(this.state.input2Value) ){
            this.setState({
                validity2:'invalid'
            })
        }else{
            this.setState({
                validity2:'valid'
            })
        }
        if(isNaN(this.state.input3Value) ){
            this.setState({
                validity3:'invalid'
            })
        }else{
            this.setState({
                validity3:'valid'
            })
        }
    }
}