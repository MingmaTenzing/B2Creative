import ExploreServices from "../../../components/ExploreServices"
import Footer from "../../../components/Footer"
import Nav from "../../../components/Nav"
import RecordSuccess from "../../../components/RecordSuccess"
import SEOServices from "../../../components/SEOServices"
import Startups from "../../../components/Startups"
import WelcomeSection from "../../../components/WelcomeSection"

type Props = {}
function About({}: Props) {
  return (
    <div>
        <Nav />
        <div className="  -mt-10">

        <WelcomeSection />
        </div>
        <SEOServices/>
        <Startups />
        <RecordSuccess />
        <Footer/>
        
    </div>
  )
}
export default About