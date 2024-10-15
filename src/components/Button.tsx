interface ButtonProps {
	index: number;
	setIndex: (index: number) => void;
	arrayLength: number;
}

function Button({ index, setIndex, arrayLength }: ButtonProps) {
	const increment = () => {
		if (index < arrayLength - 1) {
			setIndex(index + 1);
		}
	};
	const decrement = () => {
		if (index > 0) {
			setIndex(index - 1);
		}
	};
	console.log(index);
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
