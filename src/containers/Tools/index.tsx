import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "components/SocialProfile/SocialProfile"
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io"
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from "./style"

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "https://www.facebook.com/redqinc/",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/redqinc/",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/redqinc",
    tooltip: "Twitter",
  },
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/company/redqinc/",
    tooltip: "Linked In",
  },
]

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "//" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2><a href="https://chrome.google.com/webstore/detail/cash-flow-calculator/dgcpcflpgpibbhlddejklgkjimpninoh">Cash Flow Calculator Chrome Extension</a></h2>
        <p>
        Extension for Calculate the Cash Flow For Listed Property Cash Flow Calculator Extension empowers rental property investors to find the best opportunity to invest in Redfin.
        By one-click feature, It calculates the monthly mortgage, rental price, HOA and returns you the cash flow of the property, which helps you decide if it will be an excellent investment to invest with Cash Flow.
        (It only supports Redfin.com so far. It will not work on some other realtor website)
        </p>
        <h2><a href="https://www.realcash.app/">Real Cash App</a></h2>
        <p>
        Real Cash App deliver weekly positive cash flow emails in your inbox. Real Cash quickly searches for properties and find positive cash flow deals on your city and state. 
        We are constantly using technology to research trends and seek out properties in high cash flow, quality areas with growth potential.
        </p>
      </AboutPageTitle>
    </AboutWrapper>
  )
}
export default About
