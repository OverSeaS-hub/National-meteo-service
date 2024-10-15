const weatherList = [
	{
		date: "Today",
		imgSrc: "src/assets/pics/morning time.jpg",
	},
	{
		date: "Tomorrow",
		imgSrc: "src/assets/pics/moon.jpg",
	},
	{
		date: "Wednesday",
		imgSrc: "src/assets/pics/rain.jpg",
	},
	{
		date: "Thursday",
		imgSrc: "",
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
];
export default function Weather() {
	const meteo = {
		image: weatherList[0].imgSrc,
		date: weatherList[0].date,
	};

	console.log(meteo.image);
	return (
		<figure>
			{meteo.image != null ? (
				<img src={meteo.image} alt="weatherpic" />
			) : (
				<p>weather</p>
			)}

			<figcaption>{meteo.date}</figcaption>
			<p>13°</p>
			<p>Sunny</p>
		</figure>
	);
}
