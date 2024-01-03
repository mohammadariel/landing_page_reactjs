import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { GadgetCard } from "./GadgetCard";
import { LaptopCard } from "./LaptopCard";
import { MoreCard } from "./MoreCard";
import gadgetImg1 from "../assets/handphone/Oppo A78 5G.png";
import gadgetImg2 from "../assets/handphone/Realme C53.png";
import gadgetImg3 from "../assets/handphone/Samsung Galaxy Z Flip 3.png";
import gadgetImg4 from "../assets/handphone/ip 14.jpeg";
import gadgetImg5 from "../assets/handphone/Vivo V27 Pro.png";
import gadgetImg6 from "../assets/handphone/redmi 10 pro.jpeg";
import laptopImg1 from "../assets/laptop/ASUS TUF Gaming F15.png";
import laptopImg2 from "../assets/laptop/Acer Aspire 3 A317-53-53YE.png";
import laptopImg3 from "../assets/laptop/Asus Zenbook S 13 OLED.png";
import laptopImg4 from "../assets/laptop/HP Elitebook 840 G9.png";
import laptopImg5 from "../assets/laptop/laptop 2.jpeg";
import laptopImg6 from "../assets/laptop/laptop MSI GE62.png";
import MoreImg1 from "../assets/More/Iphone 15.jpeg";
import MoreImg2 from "../assets/More/Macbook pro.jpeg";
import MoreImg3 from "../assets/More/Galaxy Fold 5.jpeg";
import MoreImg4 from "../assets/More/Laptop Hp spectre.jpeg";
import MoreImg5 from "../assets/More/Oppo Find N2.jpeg";
import MoreImg6 from "../assets/More/Asus ROG.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Gadget = () => {

  const gadget = [
    {
      title: "IPhone 14 Pro",
      description: "6.1'; 48 + 12 + 12MP; 1000GB; 6GB",
      imgUrl: gadgetImg4,
    },
    {
      title: "Realme C53",
      description: "6.74'; 50MP; 128GB; 6GB",
      imgUrl: gadgetImg2,
    },
    {
      title: "Samsung Galaxy Z Flip 3",
      description: "6.7'; 12 + 12MP; 256GB; 8GB",
      imgUrl: gadgetImg3,
    },
    {
      title: "Oppo A78 5G",
      description: "6.56'; 50 + 8MP; 128GB; 8GB",
      imgUrl: gadgetImg1,
    },
    {
      title: "Vivo V27 Pro",
      description: "6.78'; 50 + 8 + 2MP; 128GB; 12GB",
      imgUrl: gadgetImg5,
    },
    {
      title: "Xiaomi Redmi Note 10 Pro",
      description: "6.43'; 50 + 8 + 2 + 2MP; 128GB; 6GB",
      imgUrl: gadgetImg6,
    },
  ];

  const laptop = [
    {
      title: "Asus TUF Gaming F15",
      description: "Windows 10; Intel Core i5-10300H; 15.6-inch, FHD (1920 x 1080)",
      imgUrl: laptopImg1,
    },
    {
      title: "MSI GE62",
      description: "Windows 10; Intel Core i7-4720HQ; 15,6-inch, Full HD (1920 x 1080)",
      imgUrl: laptopImg6,
    },
    {
      title: "Asus Zenbook S13 Oled",
      description: "Windows 11; Ryzen 7 6800U; World’s lightest 13.3” 2.8K OLED",
      imgUrl: laptopImg3,
    },
    {
      title: "HP Elitebook 840 G9",
      description: "Windows 11; Intel Core i7-1255U; 14 diagonal WUXGA display",
      imgUrl: laptopImg4,
    },
    {
      title: "ASUS A416MAO ",
      description: "Windows 11; Intel® Celeron® N4020; 14.0″ FHD (1920×1080) Anti-Glare 60Hz Panel with 45% NTSC",
      imgUrl: laptopImg5,
    },
    {
      title: "Acer Aspire 3 A317-53-53YE",
      description: "Windows 11; Intel Core i3; LCD 17.3' UHD Grapics",
      imgUrl: laptopImg2,
    },
  ];

  const more = [
    {
      title: "Iphone 15 Pro Max",
      description: "6.43'; 48 + 12 + 12MP; 1000GB; 8GB",
      imgUrl: MoreImg1,
    },
    {
      title: "Apple MacBook Pro M2",
      description: "GPU-16 Core; Intel Core i5 quad-core; Layar Liquid Retina XDR 14,2 inci (3024 x 1964)",
      imgUrl: MoreImg2,
    },
    {
      title: "Samsung Galaxy Z Fold 5 5G",
      description: "7.6” Dynamic AMOLED 2X (1-120Hz); 50MP (OIS) + 10MP (OIS) + 12MP; 256GB; 12GB",
      imgUrl: MoreImg3,
    },
    {
      title: "HP Spectre X360 14",
      description: "Windows 11; Intel® Core™ i7-1355U; 34.3 cm (13.5') diagonal, WUXGA+ (1920 x 1280)",
      imgUrl: MoreImg4,
    },
    {
      title: "OPPO FIND Find N2 Flip",
      description: "6.8 inches, 108.0 cm2 (~86.4% screen-to-body ratio); Dual 50MP; 512GB; 16GB",
      imgUrl: MoreImg5,
    },
    {
      title: "ASUS ROG STRIX SCAR 17 SE G733CX",
      description: "Windows 11; 12th Gen Intel® Core™ i9-12900H; 17.3-inch WQHD (2560 x 1440) 16:9 IPS-level",
      imgUrl: MoreImg6,
    },
  ];

  return (
    <section className="gadget" id="gadget">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Gadgets</h2>
                <p>Temukan Gadget Terbaik di Toko Kami Dengan Garansi Terbaik!!!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Handphone</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Laptop</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Best Seller</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          gadget.map((gadget, index) => {
                            return (
                              <GadgetCard
                                key={index}
                                {...gadget}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                          {
                            laptop.map((laptop, index) => {
                              return (
                                <LaptopCard
                                  key={index}
                                  {...laptop}
                                  />
                              )
                            })
                          }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                            {
                              more.map((more, index) => {
                                return (
                                  <MoreCard
                                    key={index}
                                    {...more}
                                    />
                                )
                              })
                            }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )

  

}
