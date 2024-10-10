import Navbar from "./components/Navbar";
import { useState } from "react";
import "./App.css";

export default function Studentdash() {
	return (
		<div className="h-[100vh] w-[100%] ">
			<Navbar />
			<div className="main h-[90%] w-full bg-[Crimson] flex justify-center items-center">
				<button className="py-2 px-9 text-2xl font-semibold rounded-xl bg-white" >this is Student dashboard</button>
			</div>
		</div>
	);
}