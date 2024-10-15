/*import { useState } from "react";*/
/*import Weather from "./components/Weather";*/
("./components/Weather");
import "./App.css";
import Meteo from "./components/Weather";
import Button from "./components/Button";
import { useState } from "react";

const weatherList = [
	{
		date: "Today",
		imgSrc: "src/assets/pics/sun.jpg",
	},
	{
		date: "Tomorrow",
		imgSrc: "src/assets/pics/moon.jpg",
	},
	{
		date: "Thursday",
		imgSrc: "src/assets/pics/rain.jpg",
	},
	{
		date: "Friday",
		imgSrc: "",
	},
	{
		date: "Saturday",
		imgSrc: "",
	},
	{
		date: "Sunday",
		imgSrc: "",
	},
	{
		date: "Monday",
		imgSrc: "",
	},
];

function App() {
	const [index, setIndex] = useState(0);
	return (
		<>
			<Meteo weather={weatherList[index]} />
			<Button index={index} setIndex={setIndex} />
		</>
	);
}

export default App;
