const weatherList = [
	{
		date: "Today",
		imgSrc: "./assets/pics/sun.jpg",
	},
	{
		date: "Tomorrow",
		imgSrc: "./assets/pics/moon.jpg",
	},
	{
		date: "Wednesday",
		imgSrc: "./assets/pics/rain.jpg",
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
	return (
		<figure>
			{meteo.image != null ? (
				<img src={meteo.image} alt="weatherpic" />
			) : (
				<p>weather</p>
			)}
			<figcaption>{meteo.date}</figcaption>
		</figure>
	);
}
