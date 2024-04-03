import React, { useEffect } from 'react';
import Layout from '../components/layout';
import Home from '../components/Home/Home';
import BapServices from '../components/BapServices/BapServices';
import Service from '../components/Services/Service';
import AdditionalService from '../components/Additional_services/AdditionalService';
import AccountCreateGuide from '../components/AccountCreateGuide/AccountCreateGuide';
import Testimonial from '../components/Testimonial/Testimonial';
import Support from '../components/Support/Support';
import Header from '../components/header/header';
import data from '../Data/pap.json'; 
import shapeimgtestimonial  from '../images/BaptestimonialShape.png'
import baphomebg from '../images/baphomebg.png'
import shapeimg from '../images/baphomeshape.png'
import FooterComponent from '../components/Footer/Footer';
import { navigate } from "gatsby"

function Indexbap() {
  // React.useEffect(() => {
  //   navigate('/carepath-pap')
  // })
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout pageTitle="BBD-PAP">
      <Header img={data.header.rightimg} link={data.header.link} signup={data.header.signup} signin={data.header.signin} logoalt={data.header.alt}/> 
      <Home alignself="align-self-center" bap_py={true} p0="pb-0" careerpathpap_contain= "careerpathpap_contain"  papcontain={true} mt={true} orderf='order-first' imgpart="true" lscontain={true} orderl='order-last' img={baphomebg} shapeimg={shapeimg} homepageData={data.homepageData[0]} meauto="me-auto"/>
      <BapServices serviceBoxData={data.servicesbbd}       btnlink="https://bbdcarepath-pap.peoplevousconnecte.com/signup"/>
      <Service lefshape="" grayshape={true} btnlink={data.servicepageData.btnlink} subtitle={data.servicepageData.subtitle} btn="Commençons" eapboxsize="boxsize"  lg4='4' rightshape='' title={data.servicepageData.title}  noImage={false} businessowners={data.businessowners} description={''} divided={true} serviceBoxData={data.serviceBoxData} />
      <AdditionalService/>
      <AccountCreateGuide guidedata={data.guidedata}/>
      <Testimonial background="bg-gray" msauto='ms-auto' conatin={data.TestimonialData.conatin} flowerimg='d-none' shapeimg={shapeimgtestimonial} written={data.TestimonialData.written} />
      
      <Support
      // leftpng=" "
      fontcolor={true}
      buuterflyleft="d-none d-lg-block"
        rightpng=" d-block"
        title={data.support.title}
        supportbg="bg-yellow"
        subcontain={data.support.subtitle}
        btn={data.support.btn}
        btnbg="bg-white"
        btnlink={data.support.btnlink}
      />
       <FooterComponent boderclr="border_dark" fontcolor="text-black"  bgcolor="bg-yellow" /> 

    </Layout>
  );
}

export default Indexbap;
