import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';

class Login extends Component{

    state={
        email:'srinath',
        password:'something'
    }


    render(){
        return(
            <div>
        email id from redux    *{this.props.redux_email}*
            <hr/>
          email id from component state  {this.state.email}
          <hr/>
          <Button label="CLICK" onClick={this.props.onLogin}>Click</Button>
          email id from redux    *{this.props.redux_email}*
            </div>
        );
    }

}

const mapStateToProps = state =>{

    return {
        redux_email:state.email,
        redux_password:state.password
    };
}

const mapDispatchToProps = dispatch=>{
   return{
       onLogin:()=> dispatch({type:'LOGIN' , val:'afterlogin'})
};
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);