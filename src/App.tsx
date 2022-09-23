import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Index } from 'page/Index'
import { BoxList } from 'page/BoxList'
import { UsagiList } from 'page/UsagiList'
import { Evolution } from 'page/Evolution'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="usagi" element={<UsagiList />} />
        <Route path="box" element={<BoxList />} />
        <Route path="evolution" element={<Evolution />} />
      </Routes>
    </HashRouter>
  )
}

export default App
