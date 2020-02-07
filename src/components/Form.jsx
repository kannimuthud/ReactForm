import React, { Component } from 'react';
import './FormStyle.css'
// import Form1 from './Form1.jsx'
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: true,
            lname:true,
            maildone:true,
            phno:true,
            passworddone:true,
            datedone:true
            
        }
    }
    handleChange = event => {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }
    // handleLastname =event =>{
    //     this.setState({
    //         lastname:event.target.vaue
    //     })
    // }
    // this.setState((state) => {
    //     return {
    //       items: state.items.concat(newItem)
    //     };
    //   });


    submitForm = event => {
        event.preventDefault();
        this.firsNameValidation();
        this.lastNameValidation();
        console.log(this.state)
        this.mailValidation();
        this.mobileNumberValidation();
        this.passwordValidation();
        
        // this.setState({
        //     done: true
        // })

    }
    firsNameValidation=(state)=>  {
        var fnameRegex = /^[a-zA-Z]+$/;
        var name = this.state.firstname;
        
        var result =  (fnameRegex.test(name));
        
        this.setState({
            fname:result
        })
       
       
      

        
    }
    
    lastNameValidation = event => {
        var fnameRegex = /^[a-zA-Z]+$/;
        var name = this.state.lastname;
        
        var result1 = (fnameRegex.test(name));
       
        this.setState({
            lname:result1
        })
        


    }




    mobileNumberValidation = event => {
        var a = this.state.mobilenumber;
        var result2 =isNaN(a) || a.length!==10;
        console.log(result2);
        console.log(a);
        this.setState({
            phno:!result2
        })

    }



    mailValidation = event => {
        var re = /^([a-z 0-9\.-]+)@([a-z 0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
        var mailv = this.state.email;
        var result3 = (re.test(mailv));
     
        this.setState({
            maildone:result3
        })

    }
    passwordValidation = event=>{
        var firstname=this.state.firstname;
        var lastname=this.state.lastname;
        var fullname=firstname+lastname;
        var password=this.state.password
        var result4=firstname===password || lastname===password ||fullname===password;
        this.setState({
            passworddone:!result4
        })
    }
    datevalidation=event=>{
    var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  if(dd<10){
    dd='0'+dd
} 

if(mm<10){
    mm='0'+mm
} 
     var date= yyyy+'-'+mm+'-'+dd;
     var result5=date < this.state.dob;
     this.setState({
        datedone:!result5
    })
}
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm} className="form">

                    <label > firstname</label>
                    <input type="text"
                        name='firstname'
                        required
                        value={this.state.firstname}
                        onChange={this.handleChange} />
                     { this.state.fname ?
                             null 
                             :<span>{"Enter valid name"}</span>}

                    <label > lastname</label>
                    <input type="text"
                        name='lastname'
                        required
                        value={this.state.lastname}
                        onChange={this.handleChange}
                    />
                    { this.state.lname ?
                             null 
                             :<span>{"Enter valid name"}</span>}

                    <label >mailid</label>
                    <input type="email"
                        name='email'
                        value={this.state.mail}
                        onChange={this.handleChange} />
                    { this.state.maildone ?
                             null 
                             :<span>{"Enter valid mail"}</span>}

                    <label > password</label>
                    <input type="password"
                        name='password'
                        minLength= '8'
                        value={this.state.password}
                        onChange={this.handleChange} />
                    { this.state.passworddone ?
                             null 
                             :<span>{"Enter Strong password"}</span>}

                    <label> DOB</label>
                    <input
                        name='dob'
                        type="date"
                        value={this.state.dob}
                        onChange={this.handleChange}
                        // onMouseOut={this.dobValidation}
                    />
                    { this.state.datedone ?
                             null 
                             :<span>{"Enter valid Date"}</span>}


                    <label >MobileNumber</label>
                    <input
                        name='mobilenumber'
                        type='text'
                        value={this.state.mobilenumber}
                        onChange={this.handleChange}
                    />
                    { this.state.phno ?
                             null 
                             :<span>{"Enter valid mobilenumber"}</span>}



                    <label >Gender</label>
                    <div>

                        <label for="male">
                            <input type="radio" value="male" id='male' name='gender' checked={true} />
                            male
                            </label>

                        <label for="female" >
                            <input type="radio" value="female" id='female' name='gender' />
                            female
                            </label>

                        <label for='others'>
                            <input type="radio" value="others" id='others' name='gender' />
                            Others
                            </label>
                        
                    </div>





                    <input type="submit" value="Submit" />

                </form>
                {/* {this.state.done ? <Form1 data={this.state} /> : null} */}
                    
            </div>
        )
    }
}
export default Form