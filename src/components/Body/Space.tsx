import Body1 from "./Body1";
import DisplayLateral from "./DisplayLateral";
import Body2 from "../Lugares Populares/Body2";
import ResponsivePlayer from "../ResponsivePlayer/ResponsivePlayer";
import Body3 from "../Body3/Body3";
import CardLugares from "../Body3/CardsLugares";

function Space(){

return(

<div className=""style={{height:2700, backgroundColor: "rgb(2, 13, 23)"}}>
<div className="container col-lg-9">
<div className="text-white d-flex " >
  
   <Body1/>
   <DisplayLateral/> 
 


</div>
<div className="text-white d-flex  pt-4">
<Body2/>
    
</div>

<div className="text-white d-flex  pt-5">
<ResponsivePlayer/>
    
</div>

<div className="text-white   pt-5">
<Body3/>
<CardLugares/>
    
</div>
</div>
     
</div>



)


    
}

export default Space;