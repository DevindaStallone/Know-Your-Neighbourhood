import React,{Component } from 'react';
import axios from 'axios';


class ContactUs extends Component {
    constructor(){
        super();
        this.state={
            "text":''
        }
    }
    
    MessageChange=(event)=>{
        this.setState({
            text:event.target.value
        })
    }
    sendMessage=(event)=>{
        axios.post('messages/Devinda Stallone',this.state)
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
                <section class="about-section text-center" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-11">
                        <h2 class="text-white mb-4">Contact Us</h2>
                        <section class="contact-section">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-dark mb-2"></i>
                                <h4 class="text-uppercase m-0">Address</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="large text-black-50">4923 Market Street, Orlando FL</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-dark mb-2"></i>
                                <h4 class="text-uppercase m-0">Email</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="large text-black-50"><a href="#!" id='email'>notifyus@kyn.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt text-dark mb-2"></i>
                                <h4 class="text-uppercase m-0">Phone</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="large text-black-50">+94 11 25 25 489</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social d-flex justify-content-center">
                    <a class="mx-2" href="#!"><i class="fab fa-twitter fa-xl"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-facebook-f fa-xl"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-instagram fa-xl"></i></a>
                </div>
            </div>
        </section>
        <section class="signup-section" id="signup">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-10 col-lg-8 mx-auto text-center">
                        <h2 class="text-white mb-5" >Send Your Thoughts</h2>
                       
                        <form class="form-signup" id="contactForm" onSubmit={this.sendMessage} >
                            <div class="row input-group-newsletter">
                                <div class="col"><textarea class="form-control" id="emailAddress" type="text" placeholder="Send us your Message" value={this.state.text} onChange={this.MessageChange}/></div>
                                <div class="col-auto"><button class="btn btn-dark " id="submitButton" type="submit">Notify Us!</button></div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
                    </div>
                </div>
                <img class="img-fluid" src="assests/images/contact.jpg" alt="" id='contactimg'/>
            </div>
        </section>
        
            </React.Fragment>
        )
    }
}

export default ContactUs;