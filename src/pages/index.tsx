import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PhotosSection from "../components/PhotosSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        lang="en"
        title="Home"
        keywords={[`glimpse`, `portfolio`, `galleries`]}
        meta={[]}
      />
      <h2>Nero</h2>
      <PhotosSection />
    </Layout>
  )
}

export default IndexPage
