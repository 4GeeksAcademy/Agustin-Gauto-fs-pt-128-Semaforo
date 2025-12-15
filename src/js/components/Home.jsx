import React, { useState } from "react";

//create your first component
const Home = () => {

	const [luzPrendida, SetLuzprendida] = useState("")
	return (
		<>
		<div className="palo"></div>
		<div className="text-center FDS">
			<div className="Botones">
			<button  type="button" onClick={()=> SetLuzprendida("btn-danger")} className={`rounded-circle btn btn-danger ${luzPrendida == "btn-danger" ? "iluminacion" : " "} `}></button>
			<button  type="button" onClick={()=> SetLuzprendida("btn-warning")} className={`rounded-circle btn btn-warning ${luzPrendida == "btn-warning" ? "iluminacion" : " "} `}></button>
			<button  type="button" onClick={()=> SetLuzprendida("btn-success")} className={`rounded-circle btn btn-success ${luzPrendida == "btn-success" ? "iluminacion" : " "} `}></button>
			</div>
		</div>
	</>
	);
};

export default Home;