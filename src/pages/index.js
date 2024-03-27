import React from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
  // This code will redirect to the /eap page once the component mounts
  React.useEffect(() => {
    navigate('/pae')
  }, [])

  return null // This page will not render anything directly
}

export default IndexPage