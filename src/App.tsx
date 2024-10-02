import Layout from "@/layout/default";
import { HomePageView } from "@/pages/home/views/home-page-view.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<SuspenseComponent />}>
                  <HomePageView />
                </Suspense>
              }
            />
            <Route path="about" element={<AboutPageView />} />
            <Route path="contact" element={<ContactPageView />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
