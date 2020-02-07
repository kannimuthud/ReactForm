import React ,{Component} from 'react'
class Form1 extends Component{
    constructor(props){
        super(props);
        this.createTasks=this.createTasks.bind(this)
        
    }
    createTasks(){
        console.log('hi ')
    return <ul>
                <h4>Succesfully submitted</h4>
                 <li>{this.props.data.firstname}</li>
                 <li>{this.props.data.lastname}</li>
        </ul>
    }
    
    render(){
            
      const va=this.createTasks();

        return(
            <ul className="theList">
              {va}
            </ul>
        );
    }
}
export  default Form1;