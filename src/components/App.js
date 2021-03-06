import React from 'react';
import { connect } from 'react-redux';
import '../styles.scss';
import Card from './Card';
import Button from './Button';
import DeleteBox from './Delete';
import {todoState} from '../reducers';

class App extends React.Component {



    render() {
        console.log(this.props);
        return(
            <div className="body">
            <div className="container">
                <Button />
                <div className="head">
                    <h1>Task Manager</h1>
                </div>
                <div className="content">
                <Card title="To Do" data={this.props.ToDo} />
                <Card title="In Progress" data={this.props.InProgress} />
                <Card title="Done" data={this.props.Done} />
                </div>
                <DeleteBox />
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ToDo: state.data.filter(i => i.type === todoState.todo),
        InProgress: state.data.filter(i => i.type === todoState.inprogress),
        Done: state.data.filter(i => i.type === todoState.done),
    };  
}

export default connect(mapStateToProps)(App);