import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { PageOne } from './pages/pageOne'
import { PageTwo } from './pages/pageTwo'
import { PageThree } from './pages/pageThree'
import { PageFour } from './pages/pageFour'
import { PageFive } from './pages/pageFive'
import { PageInternship } from './pages/pageInternship'
import { ProfileBenson } from './pages/profileBenson'
import { ProfileArlaghn } from './pages/profileArlaghn'
import { ProfileDom } from './pages/profileDom'
import { ProfileArvin } from './pages/profileArvin'
import { ProfileEthan } from './pages/profileEthan'
import { ProfileAariel } from './pages/profileAariel'
import { Practice } from './pages/practice'

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
        <Route path="/pageInternship" element={<PageInternship />} />
        <Route path="/profileBenson" element={<ProfileBenson />} />
        <Route path="/profileArlaghn" element={<ProfileArlaghn />} />
        <Route path="/profileDom" element={<ProfileDom />} />
        <Route path="/profileArvin" element={<ProfileArvin />} />
        <Route path="/profileEthan" element={<ProfileEthan />} />
        <Route path="/profileAariel" element={<ProfileAariel />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </Router>
  )
}