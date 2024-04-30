import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { PageOne } from './pages/pageOne'
import { PageTwo } from './pages/pageTwo'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageOne" element={<PageOne />} />
        <Route path="/pageTwo" element={<PageTwo />} />
      </Routes>
    </Router>
  )
}