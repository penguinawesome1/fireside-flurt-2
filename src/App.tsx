import Header from './components/Header.tsx';
import Card from './components/Card.tsx';

function App() {
	return (
		<>
			<Header />
			<div className="w-[100vw] h-[100svh] flex justify-start items-center gap-12 overflow-x-scroll snap-x snap-proximity px-[40%]">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>
	);
};

export default App;