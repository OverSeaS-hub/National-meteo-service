import { useState } from "react";

function Button() {
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};
	console.log(count);
	return (
		<>
			<div>
				<button type="button" onClick={decrement}>
					←
				</button>
				<button type="button" onClick={increment}>
					→
				</button>
			</div>
		</>
	);
}
export default Button;

/*const [currentIndex, setCurrentIndex] = useState(0);

const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const handleNextClick = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
*/
