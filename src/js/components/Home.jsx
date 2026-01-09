import React, { useState } from "react";

//create your first component
const Home = () => {

	const [luzPrendida, SetLuzprendida] = useState("")
	return (
		<>
		<div className="palo"></div>
		<div className="text-center FDS">
			<div className="Botones">
			<button  type="button" onClick={()=> SetLuzprendida("btn-danger")} className={`rounded-circle btn btn-secondar ${luzPrendida == "btn-danger" ? "iluminacion btn-danger" : " "} `}></button>
			<button  type="button" onClick={()=> SetLuzprendida("btn-warning")} className={`rounded-circle btn btn-seconda ${luzPrendida == "btn-warning" ? "iluminacion btn-warning" : " "} `}></button>
			<button  type="button" onClick={()=> SetLuzprendida("btn-success")} className={`rounded-circle btn btn-second ${luzPrendida == "btn-success" ? "iluminacion btn-success" : " "} `}></button>
			
			</div>
		</div>
	</>
	);
};

export default Home;