import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Index } from 'page/Index'
import { BoxList } from 'page/BoxList'
import { UsagiList } from 'page/UsagiList'
import { Evolution } from 'page/Evolution'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="hakoire_usagi_react" element={<Index />} />
        <Route path="usagi" element={<UsagiList />} />
        <Route path="box" element={<BoxList />} />
        <Route path="evolution" element={<Evolution />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
