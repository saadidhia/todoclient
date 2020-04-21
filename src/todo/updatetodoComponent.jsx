import React,{ Component } from "react";

class UpdatetodoComponent extends Component{

    render(){
        return (
            <div>Hello it's updateComponent  {this.props.match.params.id}</div>
        );
    }

}
export default UpdatetodoComponent