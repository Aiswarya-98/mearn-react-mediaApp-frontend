import React, { useState } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { addToHistory, deleteVideo } from "../Services/allAPI"

function VideoCard({ displayData, setDeleteVideoStatus, insideCategory }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  const handleShow = async () => {
    setShow(true)

    //make api call to https://localhost:4000/history

    const { caption, embedLink } = displayData
    let today = new Date()
    let timeStamp = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(today)

    let videoDetails = {
      caption,
      embedLink,
      timeStamp,
    }

    await addToHistory(videoDetails)
  }

  // delete a video

  const removeVideo = async (id) => {
    //make api call
    const response = await deleteVideo(id)
    setDeleteVideoStatus(true)
    alert(`The video ${displayData?.caption} has been deleted`)
  }

  // for dragging a videocard

  const dragStarted = (e, id) => {
    console.log("drag started" + id)
    e.dataTransfer.setData("videoId", id)
  }

  return (
    <>
      <Card className="mt-3" draggable onDragStart={(e) => dragStarted(e, displayData?.id)}>
        <Card.Img onClick={handleShow} variant="top" src={displayData?.url} style={{ height: "240px" }} />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h6 style={{ height: "50px" }}>{displayData?.caption}</h6>

            {/* a prop named insideCategory is passed from Category component
            to hide the delete button from the Videocard when insideCategory= true */}
            {
              (insideCategory = true ? ("") : (
                <button className="btn" onClick={() => removeVideo(displayData?.id)}>
                  <i class="fa-solid fa-trash text-danger"></i>
                </button>
              ))
            }
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width={"100%"} height="400" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <br />
    </>
  )
}

export default VideoCard
