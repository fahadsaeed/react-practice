import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons : [
            {id:'1ad', name: 'sami', age: 30},
            {id:'2s', name: 'raheel ', age: 28},
            {id:'3a', name: 'fahad', age: 26}
        ], personListRender : false
    };

    deleteHandler(index) {
        // spread operator " ... " use copy array like this.state.persons.slice()
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons : persons})
    }

    onChangeHandler(id, event){
        let persons = [...this.state.persons];
        const personIndex = persons.findIndex((person => person.id === id));

        persons[personIndex].name = event.target.value;

        this.setState({persons : persons})
    }

    togglePersons = () => {
        const toggle  = this.state.personListRender;
        this.setState({personListRender : !toggle});
    };

    renderPersons(){
        if(!this.state.personListRender)
            return null;

        return (
            <div>
                {
                    this.state.persons.map((person, i) => {
                        return <Person
                            age={person.age}
                            name={person.name}
                            onChangeHandler={this.onChangeHandler.bind(this, person.id)}
                            key={person.id}
                            deleteHandler={this.deleteHandler.bind(this, i)}/>
                    })
                }
            </div>
        )
    }

    render() {
        return (
            <div className="App">
                Person Card App
                <hr/>
                <button onClick={this.togglePersons}>{this.state.personListRender ? 'Hide' : "Show"} Persons</button>

                {this.renderPersons()}
            </div>
        );
    }
}

export default App;
