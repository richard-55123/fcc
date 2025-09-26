import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"
import ServicePage from "./pages/servivce"
import EducationInternationnal from "./pages/education"
import MobiliteEconomique from "./pages/mobilite"
import DeveloppementAffaires from "./pages/affaire"
import FormulairePage from "./pages/formulaire"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="formulaire" element={<FormulairePage />} />
          {/* <Route path="visa" element={<VisaPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="apply" element={<ApplyPage />} /> */}

          <Route path="services/education-internationale" element={<EducationInternationnal />} />
          <Route path="services/mobilite-economique" element={<MobiliteEconomique />} />
          <Route path="services/developpement-affaires" element={<DeveloppementAffaires />} />
        </Route>
      </Routes>
    </>
  )
}

export default App