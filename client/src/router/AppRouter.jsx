import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Catalog from '../pages/catalog/Catalog'
import Administracion from '../pages/administration/Administracion'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/administracion" element={<Administracion />} />
      </Routes>
    </BrowserRouter>
  )
}
