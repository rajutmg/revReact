import React from "react";
import Cards from "../Cards";
import Sdata from "../Sdata";
const Webseries = () => {
    return(
    <Cards imgsrc={Sdata[5].imgsrc} title={Sdata[5].title} sname={Sdata[5].sname} link={Sdata[5].link}/>
    )
}

export default Webseries;