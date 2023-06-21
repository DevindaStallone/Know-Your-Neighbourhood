import React,{Component } from 'react';


class ShowStore extends Component {


    render(){
        const mydata=this.props.alldata;
       const sdata=mydata.map((store,key)=>
            <div class="card bg-black border border-success" id='card'>
            <img src="../assests/images/cardz.jpg" class="card-img-top" alt="Chicago Skyscrapers"/>
            <div class="card-body bg-black ">
                <h5 class="card-title text-light">Stores</h5>
            </div>
            <ul class="list-group list-group-small text-start bg-black border-0">
                <li class="list-group-item px-4 bg-black text-light"><span className='cardspan text-success'>STORE NAME: </span>{store.storename}</li>
                <li class="list-group-item px-4 bg-black text-light"><span className='cardspan text-success'>OWNER NAME: </span>{store.ownername}</li>
                <li class="list-group-item px-4 bg-black text-light"><span className='cardspan text-success'>PHONE NUMBER: </span>{store.phonenumber}</li>
                <li class="list-group-item px-4 bg-black text-light"><span className='cardspan text-success'>LOCATION: </span>{store.localities}</li>

            </ul>
            
            </div>);
        return (

            <React.Fragment>
                <section class="about-section text-center" id="show">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-12 ">
                        <div>
                            <h2 class="text-white mb-4">The Stores</h2>
                            <div className='cardmain'>
                                {sdata}
                            </div>
                        </div>
                    </div>
                </div>
                <img class="img-fluid" src="assests/images/about.jpg" alt="..." id='aboutimg'/>
            </div>
        </section>
         
         </React.Fragment>
        )
    }

    



}

export default ShowStore;