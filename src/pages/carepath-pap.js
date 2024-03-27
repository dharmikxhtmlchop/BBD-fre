import React from 'react';
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
function indexbap() {
  return (
    <Layout>
      <Header img={data.header.rightimg} link={data.header.link} logoalt={data.header.alt}/> 
      <Home alignself="align-self-center" bap_py={true} p0="pb-0" careerpathpap_contain= "careerpathpap_contain"  papcontain={true} mt={true} orderf='order-first' imgpart="true" lscontain={true} orderl='order-last' img={baphomebg} shapeimg={shapeimg} homepageData={data.homepageData[0]} meauto="me-auto"/>
      <BapServices serviceBoxData={data.servicesbbd}/>
      <Service lefshape="" grayshape={true} subtitle={data.servicepageData.subtitle} btn="Commençons" eapboxsize="boxsize"  lg4='4' rightshape='' title={data.servicepageData.title}  noImage={false} businessowners={data.businessowners} description={''} divided={true} serviceBoxData={data.serviceBoxData} />
      <AdditionalService/>
      <AccountCreateGuide guidedata={data.guidedata}/>
      <Testimonial background="bg-gray" msauto='ms-auto' conatin={data.TestimonialData.conatin} flowerimg='d-none' shapeimg={shapeimgtestimonial} written={data.TestimonialData.written} />
      <Support
        rightpng="d-lg-block"
        fontcolor="text-black"
        title={data.support.title}
        supportbg="bg-yellow"
        subcontain={data.support.subtitle}
        btn={data.support.btn}
        btnbg="bg-white"
      />
       <FooterComponent boderclr="border_dark" fontcolor="text-black"  bgcolor="bg-yellow" /> 

    </Layout>
  );
}

export default indexbap;
