import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import weatherImg from "../assets/img/weatherImg.png";
import fpImg from "../assets/img/fpImg.png";
import adasImg from "../assets/img/adasImg.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Weather display app in Saint Petersburg",
      description: "Development",
      status: "Status: Done",
      imgUrl: weatherImg,
      projectUrl: "https://github.com/Stanislav-Sartasov/spsu-mm-se-programming/tree/main/Grigory-Aseev/Semester2/Task7",
    },
    {
      title: "F# language interpreter",
      description: "Development",
      status: "Status: In Progress",
      imgUrl: fpImg,
      projectUrl: "https://github.com/Grigory-Aseev/fp2022",
    },
    {
      title: "Pedestrian detection",
      description: "Development",
      status: "Status: In Progress",
      imgUrl: adasImg,
      projectUrl: "https://github.com/Grigory-Aseev/adas_spbu",
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 class="text-selection">Projects</h2>
                <p class="text-selection">The collection of my projects is not extensive, but in the future it is planned to replenish the quantity and quality.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="second">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (<ProjectCard
                            key={index}
                            {...project}
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