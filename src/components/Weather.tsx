interface weather {
	weather: {
		imgSrc: string;
		date: string;
	};
}

/*export default function Weather() {
	const meteo = {
		image: weatherList[2].imgSrc,
		date: weatherList[2].date,
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
		</figure>
	);
}
*/
function Meteo({ weather }: weather) {
	return (
		<div className="meteo-container">
			<figure>
				{weather.imgSrc != null ? (
					<img src={weather.imgSrc} alt="weatherpic" />
				) : (
					<p>???</p>
				)}
				<figcaption>{weather.date}</figcaption>
			</figure>
		</div>
	);
}

export default Meteo;
