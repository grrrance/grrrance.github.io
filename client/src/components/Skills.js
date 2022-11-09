import React from 'react'
import meter1 from "../assets/img/25.png";
import meter2 from "../assets/img/50.png";
import meter3 from "../assets/img/75.png";
import meter4 from "../assets/img/100.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 class="text-selection">Skills</h2>
                        <p class="text-selection">The content of the subjective assessment of my knowledge.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img class="text-selection" src={meter3} alt="Image" />
                                <h5 class="text-selection">C#</h5>
                            </div>
                            <div className="item">
                                <img class="text-selection" src={meter2} alt="Image" />
                                <h5 class="text-selection">C++</h5>
                            </div>
                            <div className="item">
                                <img class="text-selection" src={meter3} alt="Image" />
                                <h5 class="text-selection">Python</h5>
                            </div>
                            <div className="item">
                                <img class="text-selection" src={meter2} alt="Image" />
                                <h5 class="text-selection">JavaScript</h5>
                            </div>
                            <div className="item">
                                <img class="text-selection" src={meter2} alt="Image" />
                                <h5 class="text-selection">OCaml</h5>
                            </div>
                            <div className="item">
                                <img class="text-selection" src={meter1} alt="Image" />
                                <h5 class="text-selection">SQL</h5>
                            </div>
                            <div className="item">
                                <img class="text-selection" src={meter4} alt="Image" />
                                <h5 class="text-selection">HTML & CSS ¯\_(ツ)_/¯</h5>
                            </div>
                            <div className="item">
                                <img class="text-selection" src={meter4} alt="Image" />
                                <h5 class="text-selection">CS:GO 😎</h5>
                            </div>
                            <div className="item">
                                <img class="text-selection" src={meter4} alt="Image" />
                                <h5 class="text-selection">Football</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left text-selection" src={colorSharp} alt="Image" />
    </section>
  )
}