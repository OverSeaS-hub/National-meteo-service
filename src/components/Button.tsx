interface ButtonProps {
	index: number;
	setIndex: (index: number) => void;
}

function Button({ index, setIndex }: ButtonProps) {
	const increment = () => {
		setIndex(index + 1);
	};
	const decrement = () => {
		setIndex(index - 1);
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
