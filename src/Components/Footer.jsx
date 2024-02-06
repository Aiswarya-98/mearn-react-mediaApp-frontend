import React from "react"
import { MDBFooter, MDBContainer, MDBIcon, MDBInput, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div>
      <MDBFooter className="text-center" color="white" bgColor="dark">
        <MDBContainer className="p-4">
          <section className="">
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">
                  <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                    <i className="fa-solid fa-play fa-beat-fade me-2"></i>
                    MEDIA PLAYER
                  </Link>
                </h5>

                <br />
                <ul className="list-unstyled mb-0">
                  <li>
                    <h6 href="#!" className="text-white" style={{ textAlign: "left" }}>
                      Lorem, ipsum dolor aerat in hic illum voluptates cupiditate aperiam natus, molestiae pariatur labore, magnam itaque atque vero, totam ut!
                    </h6>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <br />

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                      Landing Page
                    </Link>
                  </li>
                  <li>
                    <Link to={"/home"} style={{ textDecoration: "none", color: "white" }}>
                      Home Page
                    </Link>
                  </li>
                  <li>
                    <Link to={"/history"} style={{ textDecoration: "none", color: "white" }}>
                      Watch History
                    </Link>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Guides</h5>
                <br />

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white" style={{ textDecoration: "none" }}>
                      React
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white" style={{ textDecoration: "none" }}>
                      React Bootstrap
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white" style={{ textDecoration: "none" }}>
                      Bootswatch
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Contact Us</h5>
                <br />

                <ul className="list-unstyled mb-0">
                  <li>
                    <input type="email" placeholder="Email id" style={{ height: "45px", borderRadius: "10px", border: "none" }} />
                    &nbsp;
                    <button style={{ height: "45px", backgroundColor: "yellow", color: "black", borderRadius: "10px", border: "none" }}>subscribe</button>
                  </li>
                  <br />
                  <li>
                    <a href="#!" className="text-white">
                      <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
                        <MDBIcon fab icon="twitter" />
                      </MDBBtn>

                      <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
                        <MDBIcon fab icon="instagram" />
                      </MDBBtn>

                      <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
                        <MDBIcon fab icon="linkedin-in" />
                      </MDBBtn>

                      <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
                        <MDBIcon fab icon="facebook-f" />
                      </MDBBtn>
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2024 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            mediaPlayer.com
          </a>
        </div>
      </MDBFooter>
    </div>
  )
}

export default Footer
