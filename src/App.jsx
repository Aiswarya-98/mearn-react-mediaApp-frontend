import { Route, Routes } from "react-router"
import "./App.css"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import LandingPage from "./Pages/LandingPage"
import WatchHistory from "./Pages/WatchHistory"



function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/history" element={ <WatchHistory />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
