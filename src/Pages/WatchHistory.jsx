import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { deleteHistory, getAllHistory } from "../Services/allAPI"
import { ToastContainer, toast } from "react-toastify"

function WatchHistory() {
  //in server "history" is stored, we need to display it
  //inorder to see the displayed information we've an api named
  //getAllHistory()  which will return all data in json format
  //this is handled by handleHistory an async function

  //we need a state to get the data out of function to show in jsx part

  const [history, setHistory] = useState([])

  const handleHistory = async () => {
    //we need our api call here
    const { data } = await getAllHistory()
    setHistory(data)
  }

  console.log(history)

  useEffect(() => {
    handleHistory()
  }, [])

  const handleDeletHistory = async (id) => {
    //make an api call
    await deleteHistory(id)
    toast.success("History Deleted !")
    //return remaining history
    handleHistory()
  }

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={"/home"} style={{ textDecoration: "none", fontSize: "20px", color: "white" }}>
          <i class="fa-solid fa-arrow-left-long fa-beat-fade"></i> Back to Home
        </Link>
      </div>

      <table class="table table-hover" className="mt-5 mb-5 container">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">URL</th>
            <th scope="col">Timestamp</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        {/* If history is true, the code inside the curly braces will be executed; otherwise,
 the code after the colon (:) will be executed.
  If history is truthy, it maps over each item in the history array, and 
  for each item, it generates JSX code for a table row (<tr>). 
  The index is used to display the row number. */}

        {
          // here length>0 is checked to show the loader when there is no history available
          history?.length > 0 ? (
            history?.map((item, index) => (
              <tr class="table-secondary" key={item?.id}>
                <th scope="row">{index + 1}</th>
                <td>{item?.caption}</td>
                <td>
                  <a href={item?.embedLink} target="_blank">
                    {item?.embedLink}
                  </a>
                </td>
                <td>{item?.timeStamp}</td>
                <td>
                  <button className="btn" onClick={() => handleDeletHistory(item?.id)}>
                    <i class="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <p className="fw-bolder text-danger fs-5">Nothing to display</p>
          )
        }
      </table>

      <ToastContainer />
    </>
  )
}

export default WatchHistory
