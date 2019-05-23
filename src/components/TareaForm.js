import React, { Component } from 'react';

class TareaForm extends Component {
    constructor(){
        super();
        this.state={
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.manejaInput = this.manejaInput.bind(this);
        this.manejaSubmit = this.manejaSubmit.bind(this);
    }    

    manejaInput(e){
        //console.log(e.target.value, e.target.name);
        const { value,name } = e.target;
        this.setState({
            [name]: value
        })
    }

    manejaSubmit(variable){
        variable.preventDefault();
        this.props.onAggTarea(this.state);
        console.log("Enviando");
    }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={ this.manejaSubmit }>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="title"
                            onChange={ this.manejaInput }
                            className="form-control"
                            placeholder="title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            onChange={ this.manejaInput }
                            className="form-control"
                            placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            onChange={ this.manejaInput }
                            className="form-control"
                            placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control" onChange={ this.manejaInput }>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>

                    </div>
                    <input className="btn btn-primary" type="submit" value="Save"/>
                </form>
            </div>
        );
    }
}

export default TareaForm;