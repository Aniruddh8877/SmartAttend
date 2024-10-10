import { useState } from "react";
import Teacher from "./components/Teacher";
import Navbar from "./components/Navbar";
import Student from "./components/Student";
import "./App.css";

export default function App() {
  return (
	<div className="h-[100vh] w-[100%] ">
		 <Navbar />
		 <div className="main h-[90%] w-full bg-[Crimson] flex justify-center items-center">
			<button className="py-2 px-9 text-2xl font-semibold rounded-xl bg-white" >SignUp</button>
		 </div>
		 <Teacher/>
		 <Student />
	</div>
  );
}
