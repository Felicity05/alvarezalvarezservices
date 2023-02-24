import Carousel from "react-bootstrap/Carousel";
import firstImage from '../assets/gallery/IMG_5267.jpg'
import secondImage from '../assets/gallery/IMG_2282.jpg'
import thirdImage from '../assets/gallery/IMG_6796.jpg'
import {Image} from "react-bootstrap";


export const Home = () => {

    return (
        <section style={{height: '100vh', backgroundColor: '#5D6B78'}}>
            <Carousel style={{margin: '0 auto 48px auto', paddingTop: '104px'}} className={'w-100'}>
                <Carousel.Item style={{height: "650px"}}>
                        <Image className="d-block mx-auto my-auto"
                        src={firstImage}
                        alt="First slide"
                        fluid
                    />
                    {/*<Carousel.Caption>*/}
                    {/*    <h3>First slide label</h3>*/}
                    {/*    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item style={{height: "650px"}}>
                    <Image
                        className="d-block mx-auto my-auto"
                        src={secondImage}
                        alt="Second slide"
                        fluid
                    />
                </Carousel.Item>
                <Carousel.Item style={{height: "650px"}}>
                    <Image
                        className="d-block"
                        src={thirdImage}
                        alt="Third slide"
                        fluid
                    />
                </Carousel.Item>
            </Carousel>
            <p style={{color: '#EAF2F9', fontFamily: 'Alegreya SC',
                fontSize: '65px'}}>
                Alvarez Alvarez Services Inc.
            </p>
            <p style={{color: '#EEEFEF', textShadow: '0px 3px 3px rgba(0, 0, 0, 0.25)',
                fontFamily: 'Italianno',
                fontSize: '60px',
                lineHeight: '75px',
                letterSpacing: '0.04em'}}>
                Providing efficiency, quality and commitment in every job since 2015.
            </p>
        </section>
    );
}