import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import NewsPage from "./pages/NewsPage";
import Navbar from "./components/Navbar";

const App = () => {
  const [progress, setProgress] = useState(0);
  return (
    <div className="bg-gray-900">
      <BrowserRouter>
        <Navbar />
        <LoadingBar height={3} color="violet" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsPage
                setProgress={setProgress}
                category="general"
                key="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <NewsPage
                setProgress={setProgress}
                category="business"
                key="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <NewsPage
                setProgress={setProgress}
                category="entertainment"
                key="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <NewsPage
                setProgress={setProgress}
                category="health"
                key="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <NewsPage
                setProgress={setProgress}
                category="science"
                key="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <NewsPage
                setProgress={setProgress}
                category="sports"
                key="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <NewsPage
                setProgress={setProgress}
                category="technology"
                key="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
