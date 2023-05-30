import React, { Fragment } from "react";
import home from "./home";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
