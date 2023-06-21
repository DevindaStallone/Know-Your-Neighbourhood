import axios from 'axios';
import React,{Component } from 'react';


class Register extends Component {
    constructor(){
        super();
        this.state={
            "name":'',
            "email":'',
             "password":'',
             "confirmPassword":''
        }
    }
    nameChange=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    emailChange=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    
    passwordChange=(event)=>{
    this.setState({
        password:event.target.value
    })
    }

    confirmPasswordChange=(event)=>{
        this.setState({
            confirmPassword:event.target.value
        })
        }


        addUser=(event)=>{
            axios.post('adduser',this.state)
            .then(res=>{
                console.log(res.data);
            })
            .catch(error=>{
                console.log(error);
            })
        }

        render(){
          
            return (
                <React.Fragment>
                    <section class="about-section text-center" id="reg">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-12">
                    <section class="vh-100 bg-image " >
                        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                          <div class="container h-100">
                            <div class="row d-flex justify-content-center align-items-center h-100">
                              <div class="col-12 col-md-9 col-lg-7 col-xl-6" >
                                <div class="card bg-black">
                                  <div class="card-body p-5 text-start">
                                    <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                                    <form onSubmit={this.addUser}>

                                      <div class="form-outline mb-4">
                                      <label class="form-label" for="form3Example1cg">Name</label>
                                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" value={this.state.name} onChange={this.nameChange} />
                                      </div>

                                      <div class="form-outline mb-4">
                                      <label class="form-label" for="form3Example3cg">Email</label>
                                        <input type="email" id="form3Example3cg" class="form-control form-control-lg" value={this.state.email} onChange={this.emailChange}/>
                                      </div>

                                      <div class="form-outline mb-4">
                                      <label class="form-label" for="form3Example4cg">Password</label>
                                        <input type="password" id="form3Example4cg" class="form-control form-control-lg" value={this.state.password} onChange={this.passwordChange}/>
                                      </div>

                                      <div class="form-outline mb-4">
                                      <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                                        <input type="password" id="form3Example4cdg" class="form-control form-control-lg" value={this.state.confirmPassword} onChange={this.confirmPasswordChange}/>
                                      </div>

                                      <div class="form-check d-flex justify-content-center mb-5">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                        <label class="form-check-label" for="form2Example3g">
                                          I agree all statements in <a href="/terms" class="text-body"><u>Terms of service</u></a>
                                        </label>
                                      </div>

                                      <div class="d-flex justify-content-center">
                                        <button type="submit"
                                          class="btn btn-dark btn-block btn-lg ">Register</button>
                                      </div>

                                      <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                                          class="fw-bold text-body"><u>Login here</u></a></p>

                                    </form>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                </div>
                <img class="img-fluid" src="assests/images/about.jpg" alt="..." id='regimg'/>
            </div>
        </section>
               
                </React.Fragment>
            )
        }




}

export default Register;