import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import BodySection from "../components/sections/BodySections"
import HeroSection from "../components/sections/HeroSection"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <BodySection />
    </Layout>
  )
}

export default IndexPage
