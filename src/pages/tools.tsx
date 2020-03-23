import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../containers/About"

type AboutPageProps = {}

const AboutPage: React.FunctionComponent<AboutPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="Tools"
        description="Beauty Who Invest is a platform for helping people achieve financial freedom, find destiny and glory. My mission is to provide step by step guides, light and powerful tool, consistent action items, dedicated consult service to bring happiness, health, and mindfulness to your life"
      />
      <About />
    </Layout>
  )
}

export default AboutPage
