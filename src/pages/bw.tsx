import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import PhotosSection from "../components/PhotosSection";

const BwPage = () => {
  return (
    <Layout>
      <SEO
        lang="en"
        title="Home"
        keywords={[`glimpse`, `portfolio`, `galleries`]}
        meta={[]}
      />
      <h2 style={{ margin: "0 1rem" }}>Street photography / Black and white</h2>
      <PhotosSection section="bw" />
    </Layout>
  );
};

export default BwPage;