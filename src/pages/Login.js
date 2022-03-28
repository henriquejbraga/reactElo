import React from 'react'
import { Redirect } from 'react-router-dom';
import elogroup from '../elogroup.png'
import '../css/Login.css'

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

  handleInputChange({ target: { name, value } }) {
    this.setState({
      [name]: value
    });

  }

  validate() {
    let nameError = '';
    let passwordError = '';
    let cpasswordError = '';

    if (!this.state.name) {
      nameError = 'Name field is required';
    }

    const strongRegex = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$');
    if (!this.state.password || strongRegex.test(this.state.cpassword) === false) {
      passwordError = 'Password precisa ter oito caracterese ao menos um caracter especial, um caracter numérico e um alfanumérico'
    }
    if (!this.state.cpassword || strongRegex.test(this.state.cpassword) === false) {
      cpasswordError = 'Password precisa ter oito caracterese ao menos um caracter especial, um caracter numérico e um alfanumérico'
    }
    if (this.state.password !== this.state.cpassword) {
      cpasswordError = 'Passwords precisam ser iguais';
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
      this.setState({ redirect: true })
      this.saveList();
      this.setState(defaultState);
    }
  }

  render() {
    const { redirect, name, nameError, password, passwordError, cpassword, cpasswordError } = this.state;
    if (redirect) return <Redirect to='/leadpanel' />;
    return (
      <div className='login' data-testid='login'>
        <div className='center'>
          <img src={elogroup} alt='elogroup' className='elogrouplogin' />
          <div className='row'>
            <div className='form-row'>
              <label>Nome*</label>
              <br></br>
              <input type='text' className='form-control' name='name' value={name} onChange={this.handleInputChange} required />
              <span className='text-danger'>{nameError}</span>
            </div>
            <div className='form-row' data-testid='password'>
              <label>Password*</label>
              <input type='password' className='form-control' name='password' value={password} onChange={this.handleInputChange} required />
              <span className="text-danger">{passwordError}</span>
            </div>
            <div className='form-row' data-testid='cpassword'>
              <label>Confirmação Password*</label>
              <input type='password' className='form-control' name='cpassword' value={cpassword} onChange={this.handleInputChange} required />
              <span className='text-danger'>{cpasswordError}</span>
            </div>
            <div className='form-row'>
              <button type='button' className='btn btn-primary' onClick={() => this.submit()} disabled={!name || !password || !cpassword}>Registrar</button>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default FormValidation;