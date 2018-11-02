import React, { Component } from 'react'

class Budget extends Component {
    constructor() {
        super()

        this.state = {
            monthlyAllowance: 20000,
            expenses: [
                {
                    name: 'Water bill',
                    description: 'Monthly billing of water',
                    dueDate: '12/01/2018',
                    category: 'Utilities'
                },
                {
                    
                }
            ]
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <h3>Budget</h3>

            </div>
        )
    }
}

export default Budget