import React from "react";
import PrivateRoute from "./routes/privateRoute";
import PublicRoute from "./routes/publicRoute"
import { pageRoutes } from "./routes/pageRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { Store } from "./redux/store";
import { Provider } from "react-redux";
import ContactUsHeader from "./components/contact/contact";
import Blog from "./components/blog";

function App() {
  return (
    <>
      <BrowserRouter>
      <Provider store={Store}>
        <Routes>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/contact" element={<ContactUsHeader/>}></Route>
          <Route path="/" element={<Layout />}>
            {
              pageRoutes.map((route, index) => {
                return (
                  <Route key={index} path={route.path} element= {
                    route.isPrivate ? (
                      <PrivateRoute>
                        <route.Components />
                      </PrivateRoute>
                    ) : (
                      <PublicRoute>
                        <route.Components />
                      </PublicRoute>
                    )
                  } />
                )
              })
            }
          </Route>
        </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
