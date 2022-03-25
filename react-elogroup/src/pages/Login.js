import React from 'react'
import { Link, Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

const defaultState = {
  name: '',
  password: '',
  cpassword: '',
  nameError: '',
  passwordError: '',
  cpasswordError: '',
}

class FormValidation extends React.Component {

  constructor() {
    super();
    this.state = defaultState;

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  validate() {
    let nameError = "";
    let passwordError = "";
    let cpasswordError = "";

    if (!this.state.name) {
      nameError = "Name field is required";
    }

    const strongRegex = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$");
    if (!this.state.password || strongRegex.test(this.state.cpassword) === false) {
      passwordError = "Password precisa ter oito caracterese ao menos um caracter especial, um caracter numérico e um alfanumérico"
    }

    if (!this.state.cpassword || strongRegex.test(this.state.cpassword) === false) {
      cpasswordError = "Password precisa ter oito caracterese ao menos um caracter especial, um caracter numérico e um alfanumérico"
    }

    if (this.state.password !== this.state.cpassword) {
      cpasswordError = "Passwords precisam ser iguais";
    }

    if (nameError || passwordError || cpasswordError) {
      this.setState({ nameError, passwordError, cpasswordError });
      return false;
    }

    return true;
  }

  saveList() {
    localStorage.setItem('name', JSON.stringify(this.state.name))
  }

  submit() {

    if (this.validate()) {
      this.setState({redirect:true})
      this.saveList();
      console.warn(this.state);
      this.setState(defaultState);
    }
  }

  render() {
    const { redirect } = this.state;
    if (redirect) return <Redirect to="/newlead" />;
    return (
      <div>
        <div className="row">
          <div className="col-md-6 offset-md-3">

            <h3>React Custom Form Validation</h3><br />

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Nome*</label>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange} required />
                <span className="text-danger">{this.state.nameError}</span>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Password*</label>
                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange} required />
                <span className="text-danger">{this.state.passwordError}</span>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Confirmação Password*</label>
                <input type="password" className="form-control" name="cpassword" value={this.state.cpassword} onChange={this.handleInputChange} required />
                <span className="text-danger">{this.state.cpasswordError}</span>
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-12 text-center">
                <button type="button" className="btn btn-primary" onClick={() => this.submit()}>Registrar</button>
            </div>
          </div>

        </div>
      </div>
      </div >
    )
  }
}

export default FormValidation;