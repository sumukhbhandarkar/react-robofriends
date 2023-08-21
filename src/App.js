import React from "react";
import CardList from "./CardList";
// import { robots } from "./robots";
import './app.css'
import SearchBox from "./SearchBox";
// import { robots } from "./robots";
import Scroll from './Scroll'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        // this.setState({robots: robots})
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState({robots: users})
        })
    }
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
        console.log(event.target.value)
        // const filterRobot = this.state.robots.filter(robot => {
        //     return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        // });
    }
    render() {
        const filterRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        if (this.state.robots.length === 0) {
            return (
                <h1>Loading Robots</h1>
            );
        } else {
        return (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filterRobot}/>
            </Scroll>
            </div>
        );
        }
        }
}

export default App;