import React from 'react'

import Takeda01Img from '../Assets/Takeda01.jpg';

export default class Header extends React.Component{
    
    render(){
        return(
            <>
            <nav className="navbar px-0">
              <div className="container-fluid flex-column justify-content-center px-0 pb-5">
                <div className="p-4">
                  <h1 className="main-title">PREKINIMO ŠUTNJU!</h1>
                </div>

                <img src={Takeda01Img} alt="background_image"></img>
                <h3 className="secondary-title">#PREKINIMOŠUTNJU #BREAKTHESILENCE</h3>

                <h1 className="main-title mt-3">19. MAJ <br></br> SVJETSKI DAN OBOLJELIH<br></br>OD UPALNIH CRIJEVA</h1>
              </div>
            </nav>
          </>
        )
    }
}