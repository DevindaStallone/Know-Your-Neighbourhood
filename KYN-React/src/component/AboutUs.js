import React,{Component } from 'react';


class AboutUs extends Component {
    render(){
        return (
            <React.Fragment>
                <section class="about-section text-center" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8">
                        <h2 class="text-white mb-4">About Us</h2>
                        <br/>
                        <h3 class="text-white mb-4">Our Introduction</h3>
                        <p class="text-white-50">KNOW-YOUR-NEIGBORHOOD is a Store selling company that helps people world wide to sell their stores.</p>
                        <h3 class="text-white mb-4">Who We Are</h3>
                        <p class="text-white-50">Our dedicated team of crew are passionate about helping people. Since our founding in 2000, KNOW-YOUR-NEIGBORHOOD has enabled 1000+ people around the world to 2023.
                        For further information, please visit our website at www.kyn.com or contact us at kyn@gmail.com.</p>
                    </div>
                </div>
                <img class="img-fluid" src="assests/images/about.jpg" alt="..." id='aboutimg'/>
            </div>
        </section>
            </React.Fragment>
        )
    }
}

export default AboutUs;