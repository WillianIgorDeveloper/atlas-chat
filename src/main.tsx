import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { BaseLayout } from "@layouts/base"
import { OnlyPublicRoutes, ProtectedRoutes } from "@middleware"
import { HomePage } from "@pages/home"
import { LoginPage } from "@pages/login"
import { NotFoundPage } from "@pages/not-found"
import { BrowserRouter, Route, Routes } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route element={<OnlyPublicRoutes />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedRoutes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
