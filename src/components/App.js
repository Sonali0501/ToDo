import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        console.log("ToDo :",this.props.Todo);
        console.log("InProgress :",this.props.InProgress);
        console.log("Done :",this.props.Done);
        return(
            <div>
                A Simple ToDo App...!
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