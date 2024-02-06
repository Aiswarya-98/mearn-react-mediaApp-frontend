import React from "react"
import { Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router"

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className=" align-items-center justify-content-between w-100" style={{ marginTop: "70px" }}>
        <Col lg={2}></Col>

        <Col lg={5}>
          <h1 style={{ textAlign: "justify" }}>
            WELCOME TO <span className="text-warning">MEDIA PLAYER</span>
          </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, dolores mollitia. Non error unde veniam quasi ut, incidunt illo fugit est ea ducimus cupiditate, voluptatum sapiente velit sunt? Soluta, enim.</p>
          <button type="button" class="btn btn-primary btn-lg" onClick={() => navigateByUrl("/home")}>
            Get Started
          </button>
        </Col>

        <Col lg={5}>
          <img src="https://www.bing.com/th/id/OGC.f3ee43de75905989dbdb5b80cf6c8c4d?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f34556%2fscreenshots%2f1680799%2fplay.gif&ehk=bLZXdUTKaXGu6iraWddtfBkIzXH6zEWanHISGDIGEkI%3d" style={{ width: "280px", height: "250px", borderRadius: "350px" }} alt="" />
        </Col>

        <Col></Col>
      </Row>

      {/* cards */}

      <div className="container mb-5 d-flex align-items-center justify-content-center flex-column" style={{ marginTop: "150px" }}>
        <h3>FEATURES</h3>

        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
          {/* card1 */}

          <div class="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
            <div class="card-header"></div>
            <div class="card-body">
              <h4 class="card-title">Managing Videos</h4>
              <img src="https://www.bing.com/th/id/OGC.34703103eeaf44f8283a7999f5903d90?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f53%2fc4%2f40%2f53c4408ee03e7525eb6568eb6ad71eb9.gif&ehk=Y8vc%2frNga8EROvkWCwzkl7el90inn7x3OtoSV%2f7aL0Q%3d" style={{ width: "18rem", borderRadius: "5px" }} alt="" />
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          {/* card2 */}

          <div class="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
            <div class="card-header"></div>
            <div class="card-body">
              <h4 class="card-title">MANAGING VIDEOS</h4>
              <img src="https://www.bing.com/th/id/OGC.c55d724f878fb587e4d1ad15d0107b9e?pid=1.7&rurl=https%3a%2f%2fgiffiles.alphacoders.com%2f407%2f4070.gif&ehk=a49zLfrlEXfqHzyFVzHb%2b6AdnXa23PmtHSYPCgUv0bs%3d" style={{ width: "18rem", borderRadius: "5px" }} alt="" />
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          {/* card3 */}

          <div class="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
            <div class="card-header"></div>
            <div class="card-body">
              <h4 class="card-title">Managing Videos</h4>
              <img src="https://media.giphy.com/media/3o8doRA7zJMRpEV3Wg/giphy.gif" style={{ width: "18rem", borderRadius: "5px" }} alt="" />
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          {/* card end */}
        </div>
      </div>

      {/* next section for a video and content */}

      <div className="container border border-secondary rounded p-5 b-5 mt-5 d-flex align-items-center justify-content-between w-100" style={{ marginTop: "100px" }}>
        <div className="col-lg-5">
          <h3 className="mb-3 text-warning">SIMPLE, POWERFUL & FAST</h3>

          <h6 className="mb-5">
            <span className="fs-5 fw-bolder text-warning">Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias distinctio iste veniam at repellendus, illum, incidunt, deleniti quia maxime suscipit quam voluptate. Facere, quia officiis. Fugit aut odit modi nihil.
          </h6>

          <h6 className="mb-5">
            <span className="fs-5 fw-bolder text-warning">Categorize Video</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias distinctio iste veniam at repellendus, illum, incidunt, deleniti quia maxime suscipit quam voluptate. Facere, quia officiis. Fugit aut odit modi nihil.
          </h6>

          <h6 className="mb-5">
            <span className="fs-5 fw-bolder text-warning">Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias distinctio iste veniam at repellendus, illum, incidunt, deleniti quia maxime suscipit quam voluptate. Facere, quia officiis. Fugit aut odit modi nihil.
          </h6>
        </div>

        <div className="video col-lg-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TdrL3QxjyVw?si=9OAr61CO3Ngt-W9n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default LandingPage
