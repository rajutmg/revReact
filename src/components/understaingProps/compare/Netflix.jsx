import React from "react";
import Cards from "../Cards";
import Sdata from "../Sdata";
const Netflix = () => {
    return(
    <Cards imgsrc={Sdata[0].imgsrc} title={Sdata[0].title} sname={Sdata[0].sname} link={Sdata[0].link}/>
    )
}

export default Netflix;