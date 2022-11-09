import { Col } from "react-bootstrap";
import React from 'react'

export const ProjectCard = ({ title, description, status, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => window.open(projectUrl)}>
        <img class="text-selection" src={imgUrl} />
        <div className="proj-txtx">
          <h4 class="text-selection">{title}</h4>
          <span class="text-selection">{description}</span>
          <h6 class="text-selection">{status}</h6>
        </div>
      </div>
    </Col>
  )
}