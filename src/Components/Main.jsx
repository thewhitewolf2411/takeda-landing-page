import React from 'react'

import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';

import facebookFrame from '../Assets/FacebookFrame.png';

export default class Main extends React.Component{
    
    constructor(){
        super();

    }


    render(){
        return(
            <>
                <Header />
                    <div className="main container p-0">
    
                        <section id="video-content" className="px-2">
                            <div className="row px-3 w-100 m-auto">
                            <Player
                                playsInline
                                poster="/assets/poster.png"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                />
                            </div>
                        </section>
    
                        <section id="article-content" className="my-3 p-2">
                            <div className="col d-flex flex-column align-items-center">
                                <h1 className="article-title">
                                    TITLE
                                </h1>
                                <p className="article-paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis aliquam condimentum. Integer malesuada facilisis quam a placerat. Aenean consequat tellus turpis, ut malesuada tortor pretium ac. Donec lorem massa, blandit a aliquam ac, tempor sit amet urna. Praesent in venenatis eros, non aliquet ante. Maecenas maximus vehicula quam, in posuere magna tincidunt sed. Curabitur quis purus quis lorem congue cursus. Proin fermentum posuere finibus. Cras eu iaculis nibh. Nam non dui nunc. Integer gravida leo mauris, ac vehicula orci dapibus in. Pellentesque volutpat dolor eros, vel dapibus diam luctus sollicitudin. Aenean egestas erat mollis egestas imperdiet. Donec id nisl ut mi rhoncus molestie. Maecenas non egestas ex. 
                                </p>
                                <p className="article-paragraph">
                                    Quisque semper tempus odio id ornare. Phasellus id nibh diam. Phasellus tortor ante, accumsan a elit eget, interdum vulputate urna. Donec fermentum ex sit amet risus interdum, ac tempor tortor ullamcorper. Nunc id tellus vitae dui aliquam aliquet. Integer sagittis laoreet erat sed ornare. Integer sed ante porta, rhoncus orci nec, dignissim tortor. Quisque eget risus viverra, molestie elit ac, convallis neque. Quisque nulla orci, faucibus sit amet tortor vitae, accumsan condimentum mi. Etiam non arcu fermentum, porta justo ut, convallis est. Suspendisse nunc sem, scelerisque in mauris non, eleifend iaculis leo. Phasellus eget magna id neque ultrices auctor. Proin aliquam auctor sem, eget eleifend nisl volutpat non. Ut sit amet bibendum nisl. Mauris et mauris massa.
                                </p>

                                <img className="facebook-frame" src={facebookFrame}></img>

                                <h1 className="article-title mt-4">
                                    ISKORISTI FACEBOOK OKVIR
                                </h1>
                            </div>
                        </section>
    
                    </div>
    
                <Footer />
            </>
        )
    }
}