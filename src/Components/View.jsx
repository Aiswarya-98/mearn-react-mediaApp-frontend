import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideo } from '../Services/allAPI'

function View({uploadVideoServerResponse}) {

  const[allVideos,setAllVideos] = useState([])

  // to delete a card we need to create a state in view.js initially set to false
  // and when user click on delete it will turn to true

  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

  const getAllUploadedVideos = async() =>{

    const {data} = await getAllVideo()
    setAllVideos(data)

  }


  // on time delete and upload videos

  useEffect(()=>{
    getAllUploadedVideos();

    // make it false to delete more than one video without refreshing
    //once a vide is deleted (true) the setDeleteVideoStatus should be set to false
    setDeleteVideoStatus(false)
  },[uploadVideoServerResponse,deleteVideoStatus])

  console.log(allVideos);

  return (
    <>
    <Row>
    
    {

      allVideos.length>0 ?
      allVideos.map((video)=>(
      <Col sm={12} md={6} lg={4} xl={3}>
        {/* state passed to videocard component */}
        <VideoCard displayData = {video} setDeleteVideoStatus={setDeleteVideoStatus}/>
      </Col>
      )): <p>Nothing to display</p>

    }
      
    </Row>
    </>
  )
}

export default View
