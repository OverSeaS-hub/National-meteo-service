/*import { useState } from "react";*/
/*import Weather from "./components/Weather";*/
("./components/Weather");
import "./App.css";
import Meteo from "./components/Weather";
import Button from "./components/Button";
import { useState } from "react";

const weatherList = [
	{
		date: "Today [13°~18°]",
		imgSrc: "src/assets/pics/nuageux.png",
	},
	{
		date: "Tomorrow [16°~24°]",
		imgSrc: "src/assets/pics/wind.png",
	},
	{
		date: "Thursday [12°~20°]",
		imgSrc: "src/assets/pics/pluie.png",
	},
	{
		date: "Friday [12°~17°]",
		imgSrc: "src/assets/pics/wind.png",
	},
	{
		date: "Saturday [8°~17°]",
		imgSrc: "src/assets/pics/nuageux.png",
	},
	{
		date: "Sunday [10°~17°]",
		imgSrc: "src/assets/pics/storm.png",
	},
	{
		date: "Monday [-13°~-40°]",
		imgSrc: "src/assets/pics/snow.png",
	},
];

function App() {
	const [index, setIndex] = useState(0);
	return (
		<div className="app-container">
			<Meteo weather={weatherList[index]} />
			<Button
				index={index}
				setIndex={setIndex}
				arrayLength={weatherList.length}
			/>
		</div>
	);
}

export default App;
