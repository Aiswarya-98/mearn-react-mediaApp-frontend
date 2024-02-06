import { commonAPI } from "./commonAPI"
import { serverUrl } from "./serviceUrl"

//upload video

export const uploadVideo = async (reqBody) => {
  //make POST http request "http://localhost:4000/videos" to add videos to the
  //json server, return response to the add component

  return await commonAPI("POST", `${serverUrl}/videos`, reqBody)
}

//get all videos from json

export const getAllVideo = async (reqBody) => {
  //make GET http request to "http://localhost:4000/videos" to get all videos from
  //json-server return response to view the component

  return await commonAPI("GET", `${serverUrl}/videos`, "")
}

//get videos using id to view

export const getAVideo = async (id) => {
  //make GET http request to "http://localhost:4000/videos/id" to get all videos from
  //json-server return response to view the component

  return await commonAPI("GET", `${serverUrl}/videos/${id}`, "")
}

//delete a video

export const deleteVideo = async (id) => {
  //make DELETE http request to "http://localhost:4000/videos/id" to delete video from
  //json-server and then return the response to Videocard component

  return await commonAPI("DELETE", `${serverUrl}/videos/${id}`, {})
}

//store watching video history to json server

export const addToHistory = async (videoDetails) => {
  //make POST HTTP request "hhtp://localhost:4000/history" to store videos to the
  //json server return response to the videocard component

  return await commonAPI("POST", `${serverUrl}/history`, videoDetails)
}

// GET watching video history to json server

export const getAllHistory = async () => {
  //make GET HTTP request "http://localhost:4000/history" to get video from json-server
  //return response to the watch-history component

  return await commonAPI("GET", `${serverUrl}/history`, "")
}

// DELETE watching video history from json server

export const deleteHistory = async (id) => {
  // make DELETE HTTP request "http://localhost:4000/history/id" to delete history
  //from json server

  return await commonAPI("DELETE", `${serverUrl}/history/${id}`, {})
}

// Post category data to json server

export const addToCategory = async (reqBody) => {
  //make HTTP POST request  to "http://localhost:4000/categories" to post category to json server and
  //return response to category component

  return await commonAPI("POST", `${serverUrl}/categories`, reqBody)
}

//GET all categories from json server

export const getAllCategory = async () => {
  //make HTTP GET request to "hhtp://localhost:4000/categories" to get display all categories
  return await commonAPI("GET", `${serverUrl}/categories`, "")
}

// DELETE category from josn server

export const deleteCategory = async (id) => {
  // make DELETE http request "http://localhost/categories/id" to delete
  //all videos from the json server
  //return reponse to the category component

  return await commonAPI("DELETE", `${serverUrl}/categories/${id}`, {})
}

// update all category from json server

export const updateCategory = async (id, body) => {
  // make PUT http request "https://localhost/categories/id" to update a
  // videos to the json server return response to the category component

  return await commonAPI("PUT", `${serverUrl}/categories/${id}`, body)
}
