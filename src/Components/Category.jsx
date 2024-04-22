import React, { useEffect, useState } from "react"
import { Button, Modal, Form, Col, Row } from "react-bootstrap"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { addToCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from "../Services/allAPI"
import VideoCard from "./VideoCard"

function Category() {
  // state to get categories

  const [allCategories, setAllCategories] = useState([])

  //state to get the value from the input field, that has to be given into the backend server

  const [categoryName, setCategoryName] = useState("")

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // defining handleAddCategory function
  const handleAddCategory = async () => {
    if (categoryName) {
      let body = {
        categoryName,
        allVideos: [],
      }

      // make api call

      const response = await addToCategory(body)
      toast.success("Category name added!")
      console.log(response)
      if (response.status >= 200 && response.status < 300) {
        //hide modal
        handleClose()
        setCategoryName("")
      } else {
        toast.error("Something went wrong")
      }
    } else {
      toast.warning("Provide category name")
    }
  }

  // defining getCategories function to get all category
  const getCategories = async () => {
    // make an api call (getAllCategory)

    //{data} is given because we use axios to fetch data

    // The reason for using curly brackets in the destructuring
    //assignment is to extract specific properties from the object
    //returned by the asynchronous operation.
    //In this case, it's extracting the data property from the Axios
    //response object. Without the curly brackets,
    //you would need to access data through the entire object,
    //like const responseData = await getAllCategory(); setAllCategories(responseData.data);.
    // Using destructuring assignment with curly brackets makes the
    //code more concise and readable.

    const { data } = await getAllCategory()
    setAllCategories(data)
  }

  console.log("category", allCategories)

  useEffect(() => {
    getCategories()
  }, [])

  const handleDelete = async (id) => {
    // make an api call to delete a particular category by passing id.
    await deleteCategory(id)
    getCategories()
  }

  const dragOver = (e) => {
    console.log("video drag over category")
    e.preventDefault()
  }

  //  dropping videocard to category

  const videoDrop = async (e, categoryId) => {
    console.log("video dropped in category" + categoryId)
    const videoId = e.dataTransfer.getData("videoId")
    console.log("videocard id" + videoId)

    //get video details
    const { data } = await getAVideo(videoId)
    console.log(data)

    // get category details
    const selectedCategory = allCategories?.find((item) => item.id === categoryId)
    selectedCategory.allVideos.push(data)
    console.log("selected" + selectedCategory)

    // make api call to get update category
    await updateCategory(categoryId, selectedCategory)
    getCategories()
  }

  return (
    <>
      <div className="d-grid ms-3">
        <button type="button" class="btn btn-primary btn-sm" onClick={handleShow}>
          Add to Category
        </button>

        {/* displaying allCategories using map */}
        {allCategories ? (
          allCategories?.map((item) => (
            <div className="mt-5 mb-3 border rounded p-3" droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e, item?.id)}>
              <div className="d-flex justify-content-between align-items-center">
                <h6>{item.categoryName}</h6>
                <button className="btn" onClick={(e) => handleDelete(item?.id)}>
                  <i class="fa-solid fa-trash text-danger"></i>
                </button>
              </div>

              {/* display selected category video */}
              <Row>
                {item?.allVideos &&
                  item?.allVideos.map((card) => (
                    <Col sm={12}>
                      <VideoCard displayData={card} insideCategory={true} />
                    </Col>
                  ))}
              </Row>
            </div>
          ))
        ) : (
          <p className="fw-bolder text-danger fs-5">Nothing to display</p>
        )}
      </div>

      {/* modal */}

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>FILL THE FOLLOWING FIELDS</p>
          <Form>
            {/* onchange is used to take data from the user to pass it to the backend server using (setCategoryName) */}
            <Form.Control type="text" placeholder="Enter Video Name" onChange={(e) => setCategoryName(e.target.value)} />
            <br />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          {/* a handler function to add value to backend , the is defined above*/}
          <Button variant="primary" onClick={handleAddCategory}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  )
}

export default Category
