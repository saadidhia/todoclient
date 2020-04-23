import React,{ Component } from "react";
import moment from 'moment'
import { Formik ,Form ,Field, ErrorMessage} from "formik";
import todoService from '../api/todo/todoSerivce'
import authenticationService from "./authenticationService";

class UpdatetodoComponent extends Component{

    constructor (props){
        super(props)
        this.state={
            id:  this.props.match.params.id ,
            description: "Learn forms",
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit=this.onSubmit.bind(this)
        this.validate=this.validate.bind(this)
    }
    onSubmit(values){

        if (this.state.id===-1){
             let todo={id:this.state.id,description:values.description,
                targetDate:values.targetDate}
            let username=authenticationService.isUserLoggedIn();
        todoService.createtodo(username,todo).then(
            ()=>this.props.history.push('/todos'))

        } else {
        let username=authenticationService.isUserLoggedIn();
        todoService.updatetodo(username,this.state.id,{
            id:this.state.id,
            description:values.description,
            targetDate:values.targetDate
        }).then(
            ()=>this.props.history.push('/todos')
        )
        }
        
    }

    componentDidMount(){

        let username= authenticationService. isUserLoggedIn();
        todoService.retrievetodo(username,this.state.id)
        .then(response=>this.setState({
            description: response.data.description,
            targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')

        }))

    }

    validate(values){
        let errors={  }
        if(!values.description){
            errors.description='Enter a Description'
        }
        else if (values.description.length<5){
            errors.description='Enter at least 5 characters in descriptiion'
        }
        
      /*  if(moment(values.targetDate).isValid()){
            errors.targetDate='Enter a valid target date'
        }*/
        return errors
    }

    render(){

        let {description,targetDate} = this.state
        return (
            <div>
                
                    <div className="container">
                    <Formik initialValues={{  description ,targetDate   }} onSubmit={this.onSubmit}
                    validate={this.validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}>{
                    (props)=>(
                        <Form  >
                            <ErrorMessage component="div" className="alert alert-danger" name="description" />
                            <ErrorMessage component="div" className="alert alert-danger" name="targetDate" />
                        <fieldset className="form-group">
                            <label>Description :</label>
                            <Field className="form-control" type="text" name="description" />

                        </fieldset>
                        <fieldset className="form-group">
                            <label>date :</label>
                            <Field className="form-control" type="date" name="targetDate" />

                        </fieldset>
                        <button className="btn btn-success" type="submit">Save</button>
                        </Form>
                    )}
                    </Formik>
                    </div>
             
            </div>
        );
    }

}
export default UpdatetodoComponent