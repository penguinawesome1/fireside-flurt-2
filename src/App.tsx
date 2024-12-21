import Header from './components/Header.tsx';
import Card from './components/Card.tsx';

function App() {
	const names = ["John Doe", "Name 2", "John Smith", "Jane Smith", "John Johnson", "Jane Johnson", "John Williams", "Jane Williams", "last"];
	const urls = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg", "./images/6.jpg", "./images/7.jpg", "./images/8.jpg", "./images/9.jpg"];
	const descriptions = ["First description", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna t", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna t", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna t", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna t", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna t", "Hola", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna t", "last"];

	return (
		<>
			<Header />
			<div className="w-[100vw] h-[100svh] flex justify-start items-center gap-12 overflow-x-scroll snap-x snap-proximity px-[40%]">
				{names.map((name, i) => (
					<Card name={name} url={urls[i]} description={descriptions[i]} />
				))}
			</div>
		</>
	);
};

export default App;