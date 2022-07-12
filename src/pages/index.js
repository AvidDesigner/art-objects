import React from "react";
import Loadable from "react-loadable";
import "../styles/reset.css";

const loader = () => <div>Loading.</div>;
//
const HomeLazy = Loadable({
  loader: () => import("../containers/Home"),
  loading: loader,
});

const Index = () => {
  return (
    <>
      <HomeLazy />
    </>
  );
};
export default Index;
