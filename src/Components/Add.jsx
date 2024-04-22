import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { uploadVideo } from "../Services/allAPI"
import { Toast } from "react-bootstrap"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Add({ setUploadVideoServerResponse }) {
  const [video, setVideo] = useState({
    id: "",
    caption: "",
    url: "",
    embedLink: "",
  })

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const getEmbedLink = (e) => {
    const { value } = e.target

    if (value) {
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({ ...video, embedLink: link })
    } else {
      setVideo({ ...video, embedLink: "" })
    }
  }

  //fn to uploadvideo

  const handleUpload = async () => {
    const { id, caption, url, embedLink } = video
    if (!id || !caption || !url || !embedLink) {
      toast.warning("Please fill out all fields")
    } else {
      //make api call
      const response = await uploadVideo(video)
      console.log(response)
      if (response.status >= 200 && response.status < 300) {
        toast.success(`${response.data.caption} video uploaded`)

        setUploadVideoServerResponse(response.data)
        //reset video component
        setVideo({
          id: "",
          caption: "",
          url: "",
          embedLink: "",
        })
        // hide modal
        handleClose()
      } else {
        // console.log(response);
        toast.error("Something went wrong")
      }
    }
  }
  // console.log(video);

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>UPLAOD VIDEOS HERE</h5>

        <button className="btn" onClick={handleShow} style={{ border: "none" }}>
          <i class="fa-sharp fa-solid fa-circle-plus fa-beat"></i>
        </button>
      </div>

      {/* modal */}

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>FILL THE FOLLOWING FIELDS</p>
          <Form>
            <Form.Control type="text" placeholder="Enter Video Id" onChange={(e) => setVideo({ ...video, id: e.target.value })} />
            <br />
            <Form.Control type="text" placeholder="Enter Video Title" onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
            <br />
            <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e) => setVideo({ ...video, url: e.target.value })} />
            <br />
            <Form.Control type="text" placeholder="Enter Video Link" onChange={getEmbedLink} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            UPLOAD
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  )
}

export default Add
