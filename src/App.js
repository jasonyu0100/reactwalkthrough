import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Task(props) {
    const name = props.name
    const addToCompleted = props.addToCompleted
    return (
        <div style={{ 'backgroundColor': '#C0C0C0' }}>
            <p>{name}</p>
            <button onClick={() => addToCompleted(name)}>Add to Completed</button>
        </div>
    )
}

function CompletedTask(props) {
    const name = props.name
    const removeCompletedTask = props.removeCompletedTask
    return (
        <div style={{ 'backgroundColor': '#B0B0B0' }}>
            <p>{name}</p>
            <button onClick={() => removeCompletedTask(name)}>Remove</button>
        </div>
    )
}

function App() {
    const [task, changeTask] = useState('')
    const [listOne, changeListOne] = useState([])
    const [listTwo, changeListTwo] = useState([])

    function addToCompleted(name) {
        changeListOne(listOne.filter(task => task !== name))
        changeListTwo([...listTwo, name])
    }
    function removeCompletedTask(name) {
        changeListTwo(listTwo.filter(task => task !== name))
    }

    return (
        <div className="App">
            <div className="App-logo-spin">
                <img src={logo} className="App-logo" />
            </div>
            <div style={{ 'padding': '0 0 40px 0' }}>
                <h3>Add Task</h3>
                <input onChange={(e) => changeTask(e.target.value)}></input>
                <button onClick={() => { changeListOne([...listOne, task]) }}>Confirm Task</button>
            </div>
            <div style={{ 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-evenly' }}>
                <div style={{ 'margin': '40px', 'backgroundColor': '#A0A0A0', 'width': '100%' }}>
                    <p>List One</p>
                    {
                        listOne.map(task => <Task name={task} addToCompleted={addToCompleted} />)
                    }
                </div>
                <div style={{ 'margin': '40px', 'backgroundColor': '#A0A0A0', 'width': '100%' }}>
                    <p>List Two</p>
                    {
                        listTwo.map(task => <CompletedTask name={task} removeCompletedTask={removeCompletedTask} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
