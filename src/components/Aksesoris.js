import aksesoris1 from "../assets/aksesoris/Black AK33rgb mechanical keyboard.png";
import aksesoris2 from "../assets/aksesoris/KRAKEN IMPERIUM Mouse Pad.png";
import aksesoris3 from "../assets/aksesoris/Kootek Laptop Cooling Pad 12-17.png";
import aksesoris4 from "../assets/aksesoris/headphone.jpeg";
import aksesoris5 from "../assets/aksesoris/mouse gaming.jpeg";
import aksesoris6 from "../assets/aksesoris/stiker keyboard.jpeg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Aksesoris = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="aksesoris" id="aksesoris">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="aksesoris-bx wow zoomIn">
                        <h2>Aksesoris</h2>
                        <p>Tingkatkan dan penuhi kebutuhan gadgetmu dengan berbagai aksesoris kami sebagai penunjang harian</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme aksesoris-slider">
                            <div className="item">
                                <img src={aksesoris1} alt="Image" />
                                <h5>Black AK33rgb mechanical keyboard</h5>
                            </div>
                            <div className="item">
                                <img src={aksesoris2} alt="Image" />
                                <h5>KRAKEN IMPERIUM Mouse Pad</h5>
                            </div>
                            <div className="item">
                                <img src={aksesoris3} alt="Image" />
                                <h5>Kootek Laptop Cooling Pad 12-17</h5>
                            </div>
                            <div className="item">
                                <img src={aksesoris4} alt="Image" />
                                <h5>RGB Cat Headphone</h5>
                            </div>
                            <div className="item">
                                <img src={aksesoris5} alt="Image" />
                                <h5>Gaming Mouse</h5>
                            </div>
                            <div className="item">
                                <img src={aksesoris6} alt="Image" />
                                <h5>Sticker Keyboard</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
