import React, { Component } from 'react'

export default class TodoList extends Component {
    
    state = {
        tasks: [
            {title: "La vaisselle", subtasks:["Assiettes", "Plats"]},
            {title: "Les courses", subtasks: ["Fromage", "Dessert", "Saucisson", "Pâté"]},
            {title: "Balayer", subtasks: ["Entrée", "Escalier"]},
            {title: "Nettoyer", subtasks: ["Ma Lamborghini", "Chien"]},
            {title: "Astiquer", subtasks: ["Mon manche"]}
        ]
    }
    
    render() {
        return (
            <ul>
                {this.state.tasks.map(task => {
                    return <li>
                        <h2>{task.title}</h2>
                        <ul>
                            {task.subtasks.map(subtask => {
                                return <li>{subtask}</li>
                            })}
                        </ul>
                        </li>
                })}
            </ul>
        )
    }
}
