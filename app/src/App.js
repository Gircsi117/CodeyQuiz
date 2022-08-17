import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import Menu from './Components/Menu';
import Table from './Components/Table';

export const GameContext = createContext();

function App() {
	const [game, setGame] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [point, setPoint] = useState(0);

	const getQuizData = () => {
		axios({ method: 'GET', url: 'https://opentdb.com/api.php?amount=10' })
			.then((res) => {
				setQuestions(res.data.results);
				setPoint(0);
				setGame(true);

				console.log(res.data.results);
			})
			.catch((err) => {});
	};

	const newGame = () => {
		getQuizData();
	};

	return (
		<GameContext.Provider value={{ game, setGame, questions, setQuestions, point, setPoint, newGame }}>
			<div className="App">{game ? <Table /> : <Menu />}</div>
		</GameContext.Provider>
	);
}

export default App;
