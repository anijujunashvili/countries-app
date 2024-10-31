import Layout from "@/layout/default";
import { HomePageView } from "@/pages/home/views/home-page-view.tsx";
import OtpPageView from "@/pages/otp/otp";
import CountryInfoView from "@/pages/home/views/country-info-view";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
  Outlet,
} from "react-router-dom";
import AboutPageView from "@/pages/about/views/about-page-view.tsx";
import ContactPageView from "@/pages/contact/views/contact-page-view.tsx";
import NotFoundPage from "@/pages/404/views/not-found-page-view.tsx";
import { defaultLocale, locales } from "@/translation/global";
import { Suspense } from "react";
import SuspenseComponent from "c/suspense/suspense";

const LangGuard: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;

  if (!locales.includes(lang)) {
    return <Navigate to={`/${defaultLocale}`} />;
  }

  return <Outlet />;
};

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path=":lang" element={<LangGuard />}>
            <Route element={<Layout />}>
              <Route
                index
                element={
                  <Suspense fallback={<SuspenseComponent />}>
                    <HomePageView />
                  </Suspense>
                }
              />
              <Route path="countries/:id" element={<CountryInfoView />} />
              <Route path="countries" element={<HomePageView />} />
              <Route path="about" element={<AboutPageView />} />
              <Route path="contact" element={<ContactPageView />} />
              <Route path="otp" element={<OtpPageView />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to={`/${defaultLocale}`} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
