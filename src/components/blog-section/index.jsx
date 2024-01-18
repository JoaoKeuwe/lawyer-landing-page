import React from "react";
import "./style.css";
import direito from "../../images/images/direito.svg";
import Cards from "../cards";

const BlogSection = () => {
	return (
		<>
			<div className="about-container" style={{ background: "#F6F6F6" }}>
				<div className="image-direito">
					<img src={direito} alt="" />
				</div>
				<div className="about-content">
					<p className="p1">Nossas experiências a sua disposição</p>
					<p className="p2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic
						ex fugiat ducimus minima.
					</p>
				</div>
				<div>


					<Cards
						img={direito}
						title={"Derecho Mercantil "}
						text={
							"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
						}
					/>

					<Cards
						img={direito}
						title={"Derecho Mercantil "}
						text={
							"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
						}
					/>
					<Cards
						img={direito}
						title={"Derecho Mercantil "}
						text={
							"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
						}
					/>
					<Cards
						img={direito}
						title={"Derecho Mercantil "}
						text={
							"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
						}
					/>
					<Cards
						img={direito}
						title={"Derecho Mercantil "}
						text={
							"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
						}
					/>
					<Cards
						img={direito}
						title={"Derecho Mercantil "}
						text={
							"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero."
						}
					/>
				</div>
			</div>
		</>
	);
};

export default BlogSection;
