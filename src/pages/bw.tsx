import React from "react";
import Layout from "../components/layout";
import PhotosSection from "../components/PhotosSection";
import SEO from "../components/seo";
import CollapseMenu from "../components/Menu";

const BwPage = () => {
  return (
    <Layout>
      <SEO
        lang="en"
        title="Home"
        keywords={[`glimpse`, `portfolio`, `galleries`]}
        meta={[]}
      />
      <h2 style={{ margin: "0 1rem", textAlign: "right" }}>Street / Black and white</h2>
      <div style={{
        display: "flex",
        placeContent: "space-around",
        margin: "0 auto"
      }}>
        <CollapseMenu />
        <PhotosSection style={{ flex: 1 }} section="bw" />
      </div>
    </Layout >
  );
};

export default BwPage;
