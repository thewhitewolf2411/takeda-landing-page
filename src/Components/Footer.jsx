import React from 'react'

import logo1 from '../Assets/takeda_logo.png';
import logo2 from '../Assets/cumc_logo.png';

export default class Footer extends React.Component {

    render(){
        return(

            <footer className="navbar py-4">
                <div className="container justify-content-between">

                    <div className="row flex-wrap w-100 align-items-end">
                        <div className="col-md-4 mobile-col text-align-left color-white footer-text">
                            <p>VV-MEDMAT-45278</p>
                            <p className="mb-0">TAKEDA PHARMACEUTICALS BH D.O.O., VRBANJA 1.,<br></br>71000 SARAJEVO, DATUM PRIPREME: MAJ 2021.</p>
                        </div>
                        <div className="col-md-4 mobile-col d-flex justify-content-center">
                            <img className="footer-image-cumc" src={logo2} alt="cumc_logo"/>
                        </div>
                        <div className="col-md-4 mobile-col d-flex align-items-end justify-content-end">
                            <img className="footer-image-takeda" src={logo1} alt="takeda_logo"/>
                        </div>
                    </div>

                    
                </div>
            </footer>

        )
    }
  };
