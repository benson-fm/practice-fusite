import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { PageOne } from './pages/pageOne'
import { PageTwo } from './pages/pageTwo'
import { PageThree } from './pages/pageThree'
import { PageFour } from './pages/pageFour'
import { PageFive } from './pages/pageFive'
import { ProfileBenson } from './pages/profileBenson'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageOne" element={<PageOne />} />
        <Route path="/pageTwo" element={<PageTwo />} />
        <Route path="/pageThree" element={<PageThree />} />
        <Route path="/pageFour" element={<PageFour />} />
        <Route path="/pageFive" element={<PageFive />} />
        <Route path="/profileBenson" element={<ProfileBenson />} />
      </Routes>
    </Router>
  )
}