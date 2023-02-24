import {Image} from "react-bootstrap";
import missionImage from '../assets/4243519.jpg'

export const About = () => {
    return (
        <section style={{height: '100vh', backgroundColor: '#EFF1F3'}} id={'about'}>
            <div style={{display: 'flex', justifyContent: "space-evenly", paddingTop: '150px', gap: '20px'}}>
                <div style={{display: 'flex', alignItems: 'center', width: '500px', flexDirection: 'column',
                    justifyContent: 'center', paddingTop: '35px'}}>
                    <Image src={missionImage} alt={"mission-image"}
                           style={{height: 552, objectFit: 'contain'}}/>
                    <p style={{paddingTop: '35px', fontSize: '20px'}}> Want to work with us? Reach us
                        <a href={'#contact'} style={{color: '#2D4356', textDecoration: 'none', fontWeight: 'bold'}}> here
                        </a>
                    </p>
                </div>
                <div style={{width: '590px', display: 'flex', flexDirection: "column",
                    justifyContent: 'center', textAlign: "initial", fontSize: '25px', color: '#4B4949'}}>
                    <p>
                        Our mission is to provide top-quality, reliable and efficient maintenance and repair services to our customers.
                    </p>
                    <br/>
                    <p>
                        We strive to exceed expectations by using only the best materials,
                        and staying up-to-date with the latest industry techniques.
                    </p>
                    <br/>
                    <p>
                        We are committed to building long-lasting relationships with our customers by providing clear communication,
                        fair pricing and a satisfaction guarantee for all of our work.
                    </p>
                    <br/>
                    <p>
                        We aim to make a positive impact on our customers' homes, businesses and lives
                        by providing comprehensive maintenance solutions and ensuring the best possible care for their properties.
                    </p>
                </div>
            </div>
        </section>
    )
}