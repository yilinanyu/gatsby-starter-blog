import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tools from "../containers/Tools"

type ToolsPageProps = {}

const AboutPage: React.FunctionComponent<ToolsPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="Tools"
        // description="Beauty Who Invest is a platform for helping people achieve financial freedom, find destiny and glory. My mission is to provide step by step guides, light and powerful tool, consistent action items, dedicated consult service to bring happiness, health, and mindfulness to your life"
      />
      <Tools />
    </Layout>
  )
}

export default AboutPage
