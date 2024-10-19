import Layout from "@/layout/default";
import { HomePageView } from "@/pages/home/views/home-page-view.tsx";
import CountryInfoView from "@/pages/home/views/country-info-view";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutPageView from "@/pages/about/views/about-page-view.tsx";
import ContactPageView from "@/pages/contact/views/contact-page-view.tsx";
import NotFoundPage from "@/pages/404/views/not-found-page-view.tsx";
import { Suspense } from "react";
import SuspenseComponent from "c/suspense/suspense";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:lang" element={<Layout />}>
            <Route
              path="countries"
              element={
                <Suspense fallback={<SuspenseComponent />}>
                  <HomePageView />
                </Suspense>
              }
            />
            <Route path="countries/:id" element={<CountryInfoView />} />
            <Route path="about" element={<AboutPageView />} />
            <Route path="contact" element={<ContactPageView />} />
          </Route>
          <Route path="/" element={<Navigate to="/ka/countries" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
