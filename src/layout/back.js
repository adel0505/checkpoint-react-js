import React,{Component} from 'react';

class Back extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <React.Fragment>
            <h1>header 2</h1>
               {this.props.children}
            <h1>footer 2</h1>
          </React.Fragment>
        )
          
    }
}
export default Back;