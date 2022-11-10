import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, {useState, useEffect} from 'react';

export const Contact = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments();
  }, []);

  function count(str, symb) {
    let counter = 0;
    for (let char of str ) {
      if (char === symb) {
        counter++;
      }
    }

    return counter;
  }
  
  function getComments() {
      let response = fetch('http://51.250.111.119:5000/comment')
          .then(response => {
              let x = response.json();
              //console.log(x)
              return x;
          })
          .then(data => {
              setComments(data);
          });
  }

  function createComment() {
      let name = prompt('Enter your name', '');
      while (name === "" || name.length == count(name, " ")) {
        name = prompt('Enter your name correctly!');
      }
      if (name === null) {
        return null;
      }

      let message = prompt('Enter your message', '');
      while (message === "" || name.length == count(name, " ")) {
        message = prompt('Enter your message correctly!');
      }
      if (message === null) {
        return null
      }

      fetch('http://51.250.111.119:5000/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, message}),
      }).then(response => {
        return response.json();
      }).then(data => {
        //alert(data);
        getComments();
      });
  }

  let res = comments.map(function(item)
    {
        return <div class="container mt-5 comment_block" key={item.id}>
        <div class="d-flex justify-content-center row">
            <div class="col-md-6">
                <div class="bg-white comment-section">
                    <div class="d-flex p-2"><img class="rounded-circle cat text-selection" src="https://i.pinimg.com/originals/c7/e5/fb/c7e5fbe305b3034eb88856c7c68ea40f.jpg"/>
                        <div class="d-flex flex-column ml-2"><span class="name font-weight-bold text-selection">{item.name}</span><span class="time font-weight-bold text-selection">{item.time}</span></div>
                    </div>
                    <div class="mt-2 p-2">
                        <p class="comment-content text-selection">{item.message}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
    });

    /*return (
        <div>
            {!comments ? 'There is no comments available' : res}

            <FontAwesomeIcon className="comment_button" style={{color:"white"}} icon={faComment} onClick={createComment}/>
        </div>
    );*/

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn text-selection" : "text-selection"} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first"><div class="text-selection">Write</div></Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third"><div class="text-selection">See</div></Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp  " : ""}>
                      <Tab.Pane eventKey="first">
                        <div class="section_write">
                          <h2 class="text-selection">Connection...</h2>
                          <button class="cybr-btn text-selection" onClick={createComment}> Review
                            <span aria-hidden class="text-selection">_</span>
                            <span aria-hidden class="cybr-btn__glitch text-selection">404</span>
                            <span aria-hidden class="cybr-btn__tag text-selection">SuS</span>
                          </button>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div class="comment_block">
                          {comments.length == 0 ?  <span class="no_comments text-selection">There is no comments available</span>: res}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}