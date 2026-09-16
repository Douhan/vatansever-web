import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Deneme1Page } from "./pages/deneme1/Deneme1Page";
import { D1ProjectDetailPage } from "./pages/deneme1/D1ProjectDetailPage";
import { Deneme2Page } from "./pages/deneme2/Deneme2Page";
import { D2ProjectDetailPage } from "./pages/deneme2/D2ProjectDetailPage";
import { Deneme3Page } from "./pages/deneme3/Deneme3Page";
import { D3ProjectDetailPage } from "./pages/deneme3/D3ProjectDetailPage";
import { DesignThemeProvider } from "./context/DesignThemeContext";
import type { DesignTheme } from "./context/theme";
import { useDesignTheme } from "./hooks/useDesignTheme";

/**
 * Every design lives at its own URL (for direct links/bookmarks), but the
 * header's DesignSwitcher lets you re-skin whichever page you're on without
 * navigating. `initialTheme` seeds the theme the first time this route is
 * actually navigated to (pathname change) — after that, the switcher's own
 * theme state takes over and stays put across re-renders.
 */
function useSeededTheme(initialTheme: DesignTheme) {
  const { pathname } = useLocation();
  const { theme, setTheme } = useDesignTheme();

  useEffect(() => {
    setTheme(initialTheme);
    // Re-seed only when the URL actually changes, not on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return theme;
}

function HomeRoute({ initialTheme }: { initialTheme: DesignTheme }) {
  const theme = useSeededTheme(initialTheme);

  if (theme === "d1") return <Deneme1Page />;
  if (theme === "d2") return <Deneme2Page />;
  if (theme === "d3") return <Deneme3Page />;
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

function DetailRoute({ initialTheme }: { initialTheme: DesignTheme }) {
  const theme = useSeededTheme(initialTheme);

  if (theme === "d1") return <D1ProjectDetailPage />;
  if (theme === "d2") return <D2ProjectDetailPage />;
  if (theme === "d3") return <D3ProjectDetailPage />;
  return (
    <>
      <Header />
      <main>
        <ProjectDetailPage />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <DesignThemeProvider>
      <Routes>
        <Route path="/" element={<HomeRoute initialTheme="main" />} />
        <Route path="/proje/:slug" element={<DetailRoute initialTheme="main" />} />
        <Route path="/deneme-1" element={<HomeRoute initialTheme="d1" />} />
        <Route path="/deneme-1/proje/:slug" element={<DetailRoute initialTheme="d1" />} />
        <Route path="/deneme-2" element={<HomeRoute initialTheme="d2" />} />
        <Route path="/deneme-2/proje/:slug" element={<DetailRoute initialTheme="d2" />} />
        <Route path="/deneme3" element={<HomeRoute initialTheme="d3" />} />
        <Route path="/deneme3/proje/:slug" element={<DetailRoute initialTheme="d3" />} />
        <Route
          path="*"
          element={
            <>
              <Header />
              <main>
                <NotFoundPage />
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </DesignThemeProvider>
  );
}

export default App;
