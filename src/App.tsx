import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Index } from 'page/Index'
import { Box } from 'page/Box'
import { Usagi } from 'page/Usagi'
import { Evolution } from 'page/Evolution'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="hakoire_usagi_react" element={<Index />} />
        <Route path="usagi" element={<Usagi />} />
        <Route path="box" element={<Box />} />
        <Route path="evolution" element={<Evolution />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
