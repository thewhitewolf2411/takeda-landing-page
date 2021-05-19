import React from 'react'

import Header from './Header';
import Footer from './Footer';
import ReactPlayer from 'react-player'

import facebookFrame from '../Assets/FacebookFrame.png';

export default class Main extends React.Component{
    
    render(){
        return(
            <>
                <Header />
                    <div className="main container p-0">
    
                        <section id="video-content" className="px-2">
                            <div className="row px-3 w-100 m-auto">
                                <ReactPlayer width="100%" height="600px" id="video-player" url='https://youtu.be/a1t3FpCvt-U' />
                            </div>
                        </section>
    
                        <section id="article-content" className="my-3 p-2">
                            <div className="col d-flex flex-column">
                                <h1 className="article-title">
                                Svjetski dan oboljelih od upalnih bolesti crijeva 2021 obilježava se i u BiH: Prekinimo šutnju! i obojimo svijet u ljepše boje
                                </h1>
                                <p className="article-paragraph">
                                U cijelom svijetu 19. maja obilježava se World IBD Day – Svjetski dan oboljelih od upalnih bolesti crijeva s ciljem da se široj javnosti ukaže na položaj oboljelih od upalnih bolesti crijeva i na poteškoće s kojima se susreću oboljeli od ovih hroničnih bolesti.  
                                </p>
                                <p className="article-paragraph">
                                Svjetski dan oboljelih od upalnih bolesti crijeva obilježava se i u Bosni i Hercegovini. Udruženje oboljelih od Morbus Crohna i ulceroznog kolitisa BiH podsjeća da i u našoj zemlji ima nezanemariv broj onih koji žive s ovim bolestima i koji se svakodnevno suočavaju sa brojnim problemima, poput bolova, smanjenja kvalitete života i radne sposobnosti. 
                                </p>
                                <p className="article-paragraph">
                                „Jednostavno rečeno, želimo da skrenemo pažnju javnosti na nas i da time utičemo na promjenu i poboljšanje kvalitete života oboljelih od IBD-a. Svjesni smo da se, kroz borbu sa našom bolešću, moramo prilagođavati uslovima situacije, ali i da trebamo snažnu podršku naših porodica, kao i društva u cjelini. Cilj nam je ove godine govoriti o svemu onome s čim se oboljeli suočavaju, od ranog otkrivanja i prepoznavanja bolesti, do kontinuirane brige pacijenata za svoje zdravlje i liječenje“ – saopćili su iz Udruženja oboljelih od Morbus Crohna i ulceroznog kolitisa BiH.
                                </p>
                                <p className="article-paragraph">
                                <b className="bold">Pretpostavlja se da od upalnih bolesti crijeva u Bosni i Hercegovini boluje najmanje 1600 građana</b>, ali jedinstveni registar oboljelih ne postoji. Oboljeli često imaju manju sposobnost obavljanja posla, izostaju sa nastave ili, zbog bolova, propuštaju važne životne događaje, te je kvalitet njihovog života dosta drugačiji. 
                                </p>
                                <p className="article-paragraph">
                                Zato je, tvrde iz Udruženja, <b className="bold">vrijeme da se ove godine prekine šutnja i počne govoriti o onima koji žive s ovom bolešću</b> i koji se, naročito u vrijeme pandemije Covid-19, u našoj zemlji suočavaju sa problemom nevidljivosti i još veće nezaposlenosti. I ove godine, zajednička slika podrške oboljelima bit će poslana svim građanima BiH, ali i cijelom svijetu, Bosna i Hercegovina pridružila se svjetskoj kampanji EFCCA.
                                </p>
                                <p className="article-paragraph">
                                U saradnji sa  Gradskom upravom Grada Sarajeva večeras će od 20:30 do 22:30  ljubičastom bojom biti osvijetljena zgrada Gradske Vijećnice, a u Banjoj Luci će, u saradnji sa Gradom Banja Luka i Kulturnim centrom Banski dvori, u istom periodu biti osvjetljeni Banski dvori. Ovoj akciji pridružilo se i Vijeće ministara BiH osvjetljavanjem prozora Zgrade prijateljstva između Grčke i Bosne i Hercegovine, a osvjetljen će biti i AVAZ Twist Tower.  
                                </p>
                                <p className="article-paragraph">
                                „Želimo se zahvaliti svim institucijama koje su nas podržale jer je zaista važno da poruke podrške nama budu i poruke podrške drugima da zajedno obojimo svijet u ljepše boje, upalimo svjetlo, damo šansu sebi samima i prekinemo šutnju“ – dodali su predstavnici Udruženja oboljelih od Morbus Crohna i ulceroznog kolitisa BiH.
                                </p>
                                <p className="article-paragraph">
                                Obilježavanje ovog dana u Bosni i Hercegovini je usklađeno sa globalnom kampanjom koja se ove godine provodi pod sloganom „Break the silence!“ ili „Prekinimo šutnju!“.
                                </p>
                                <p className="article-paragraph">
                                Predstavnici Udruženja <b className="bold">pozivaju sve građane Bosne i Hercegovine da, ove godine, podrže oboljele tako što će pogledati i na društvenim mrežama podijeliti video „Prekinimo šutnju!“</b> koji je kreiran s ciljem da poveća svijest građana, <b className="bold">koristeći hashtagove #PrekinimoSutnju #BreakTheSilence, kao i da koriste Facebook profile frame</b> kako bi pokazali suosjećanje sa osobama koje žive sa ovim neizlječivim bolestima.
                                </p>
                                <p className="article-paragraph">
                                Video „Prekinimo šutnju“ govori o tome kako su oboljeli od upalnih bolesti crijeva u Bosni i Hercegovini nevidljivi, te kako je krajnje vrijeme da se prekine šutnja o ovom problemu i da o tome počnu govoriti svi građani BiH, a ne samo oboljeli. 
                                </p>
                                <p className="article-paragraph">
                                Svjetski dan oboljelih od upalnih bolesti crijeva u Bosni i Hercegovini se obilježava svake godine s ciljem buđenja svijesti građana BiH. Također se pokušava skrenuti pažnja nadležnima da se pronađe sistemsko rješenje za oboljele i poboljša im se narušena kvaliteta života.
                                </p>

                                <p className="article-signature bold">
                                Za više informacija kontaktirati:
                                </p>

                                <p className="article-signature">
                                Alma Hadžić<br></br>
                                Predsjednica Udruženja oboljelih od Morbus Crohna i ulceroznog kolitisa BiH<br></br>
                                Kontakt: +387 61 243  511<br></br>
                                </p>

                                <a href="https://www.facebook.com/profilepicframes/?selected_overlay_id=221800779407690" rel="noreferrer" target="_blank" className="d-flex flex-column align-items-center">
                                    <img className="facebook-frame" src={facebookFrame} alt="facebook_frame"></img>

                                    <h1 className="article-title mt-4">
                                        ISKORISTI FACEBOOK OKVIR
                                    </h1>
                                </a>

                            </div>
                        </section>
    
                    </div>
    
                <Footer />
            </>
        )
    }
}