import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { ThemeProvider } from "@composed/theme/theme-provider"
import { BaseLayout } from "@layouts/base"
import { OnlyPublicRoutes, ProtectedRoutes } from "@middleware"
import { HomePage } from "@pages/home"
import { LoginPage } from "@pages/login"
import { NotFoundPage } from "@pages/not-found"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppPage } from "@pages/app"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route element={<OnlyPublicRoutes />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="app" element={<AppPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
