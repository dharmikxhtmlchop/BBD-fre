import React  from "react"
import Layout from "../components/layout"
import Home from "../components/Home/Home"
import About from "../components/About/About"
import Service from "../components/Services/Service"
import Testimonial from "../components/Testimonial/Testimonial"
import Support from "../components/Support/Support"
import eaphomeimg from "../images/hero1.png"
import eaphomeshape from "../images/hero-bgshap.png"
import "../style/global.css"   
import data from '../Data/data.json' // Import the JSON data file 
import FooterComponent from "../components/Footer/Footer"
import Header from "../components/header/header" 


const IndexPage = () => {
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { header ,homepageData, aboutContain, servicepageData, serviceBoxData,support, TestimonialData } = data;

  return (
    <Layout
      pageTitle="BBD-PAE"
      pageDescription="Welcome to our Gatsby site with Bootstrap integration"
    >
    <Header img={header.rightimg} link={header.link} signup={header.signup} signin={header.signin} eap={true} logoalt={header.alt} />

      <Home
        orderf="order-last"
        orderl="order-first"
        img={eaphomeimg}
        shapeimg={eaphomeshape}
        homepageData={homepageData}
        meauto="ms-auto"
        imgpart={true}
        eap_contain={true}
        bap_py={false}
      />
      <About aboutContain={aboutContain} btnlink={aboutContain.btnlink}/>
      <Service
        lg4="3"
        subtitle={servicepageData.subtitle}
        title={servicepageData.title}
        rowgap={true}
        description={servicepageData.description}
        noImage={true}
        divided={false}
        eapboxsize="boxsizeeap"
        btnlink={servicepageData.btnlink}
        serviceBoxData={serviceBoxData.map(item => ({
    ...item,
    img: require(`../images/${item.img}`).default // Dynamic import of images
  }))}
        
        btn="Commençons"
      />
      <Testimonial
       
        background="bg-lightyellow"
        flowerimg=" d-none d-xl-block"
        conatin={TestimonialData.contain}
        written={TestimonialData.written}
        shapeimg={require(`../images/${TestimonialData.shapeimg}`).default   }
      />
      <Support
        // leftpng="d-none d-lg-block"
        eap={false}
        buuterflyleft="d-none"
      btnlink={support.btnlink}
      leftpng=" d-lg-block"
        supportbg="bg_brown"
        title={ support.title}
        subcontain={ support.subtitle}
        btn={support.btn}
      />
       
      <FooterComponent eap={true} boderclr="border-dark"  bgcolor="bg_brown" /> 
    </Layout>
  )
}
export default IndexPage
