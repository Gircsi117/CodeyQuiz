import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../App';
import Answers from './Answers';

const Table = () => {
	const [questionCount, setQuestionCount] = useState(0);
	const global = useContext(GameContext);
	const [selected, setSelected] = useState(global.questions[questionCount]);

	useEffect(() => {
		if (questionCount <= global.questions.length) setSelected(global.questions[questionCount]);
	}, [questionCount]);

	return (
		<div>
			{questionCount < global.questions.length ? (
				<>
					<h1>
						{questionCount + 1}. {selected.question}
					</h1>
					<Answers selected={selected} setQuestionCount={setQuestionCount} />
				</>
			) : (
				<>
          <h1>Játék vége!</h1>
          <h1>{global.point} / {global.questions.length}</h1>
          <button onClick={()=>{global.setGame(false)}}>Back to Menu</button>
        </>
			)}
		</div>
	);
};

export default Table;
