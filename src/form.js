import React from "react";
import './form.css';
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Please Fill the column";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "Invalid Email";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "Invalid Email";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Enter your Password";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !(fields["password"].match(/([a-z].[A-Z])|([A-Z].[a-z])/)) &&
        !(fields["password"].match(/([!,%,&,@,#,$,^,*,?,_,~])/)) &&
        !(fields["password"].match(/([0-9])/)) 
      ) {
        formIsValid = false;
        errors["password"] = "Password is Weak";
      }
      else if (
          !(fields["password"].match(/([a-z].[A-Z])|([A-Z].[a-z])/)) &&
          !(fields["password"].match(/([!,%,&,@,#,$,^,*,?,_,~])/)) 
        ) {
          formIsValid = false;
          errors["password"] = "Password is Medium";
        }
       else if (
          !(fields["password"].match(/([a-z].[A-Z])|([A-Z].[a-z])/)) 
        ) {
          formIsValid = false;
          errors["password"] = "Password is Strong";
        }
  }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }



render() {
  return (
  <div className="main-registration-container">
   <div className="register">
      <h1 className="head">Dynamic Form</h1>
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <div className="regis">
      <label className="abc">Enter your username</label>
      <br></br>
      <br></br>
      <input type="text" placeholder="your Username"  name="username" className="box" size="40" value={this.state.fields.username} onChange={this.handleChange} />
      <br></br>
      <br></br>
      <div className="errorMsg">{this.state.errors.username}</div>
      <label className="abc">Enter your email</label>
      <br></br>
      <br></br>
      <input type="text" placeholder="your Email" name="emailid" className="box" size="40"value={this.state.fields.emailid} onChange={this.handleChange}  />
      <br></br>
      <div className="errorMsg">{this.state.errors.emailid}</div>
      <br></br>
      <label className="abc">Enter your password</label>
      <br></br>
      <br></br>
      <input type="password" placeholder="your Password" name="password" className="box" size="40"value={this.state.fields.password} onChange={this.handleChange} />
      <br></br>
      <div className="errorMsg">{this.state.errors.password}</div>
      <br></br>
      <br></br>
      <input type="submit" className="button"  value="Register"/>
      </div>
      </form>
  </div>
</div>

    );
}


}

export default RegisterForm