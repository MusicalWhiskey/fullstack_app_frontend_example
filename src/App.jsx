import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"

export default function App() {
  return(
    <main>
      <h1>Fullstack App</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}
