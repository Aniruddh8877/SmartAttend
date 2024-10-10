import "./App.css";
import Navbar from "./components/Navbar";
import myImage from './assets/myImage.png';


export default function App() {
	return (
		<div className="h-[100vh] w-[100%] font-[Raleway] ">
			<Navbar />
			<div className="main h-[90%] w-full bg-[#d7d7d7] flex ">
				<div className="w-[50%] h-full p-5 pt-16">
					<h1 className="font-extrabold text-[4rem] leading-[4.5rem]">Stay Updated, with <br /> Student Attendance Mangaemnet System</h1>
					<button className="py-2 px-9 text-2xl font-semibold rounded-xl bg-teal-500 mt-10" >SignUp</button>
				</div>
				<div className="w-[50%] h-full flex items-center justify-center">
					<img  className="bg-slate-400 rounded-[70px]" src={myImage} alt="" srcset="" />
				</div>
				
			</div>
		</div>
	);
}
