import React from 'react';
import { connect } from 'react-redux';
import '../styles.scss';
import Card from './Card';
import Button from './Button';

class App extends React.Component {

    render() {
        return(
            <div className="body">
            <div className="container">
                <Button />
                <div className="head">
                    <h1>Task Manager</h1>
                </div>
                <div className="content">
                <Card title="To Do" data={this.props.Todo} />
                <Card title="In Progress" data={this.props.InProgress} />
                <Card title="Done" data={this.props.Done} />
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Todo: state.Todo,
        InProgress: state.InProgress,
        Done: state.Done
    };  
}

export default connect(mapStateToProps)(App);