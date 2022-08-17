import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../App';

const Answers = ({ selected, setQuestionCount }) => {
	const [options, setOptions] = useState([]);
	const global = useContext(GameContext);

	const mixing = (answers) => {
		for (let j = 0; j < 10; j++) {
			for (let i = 0; i < answers.length; i++) {
				let random = Math.floor(Math.random() * answers.length);
				let a = answers[i];
				answers[i] = answers[random];
				answers[random] = a;
			}
		}
		return answers;
	};

	useEffect(() => {
		let answers = selected.incorrect_answers;
		answers.push(selected.correct_answer);

		setOptions(mixing(answers));
	}, [selected]);

	const checkAnswer = (actual) => {
		if (actual === selected.correct_answer) {
			global.setPoint((old) => old + 1);
			console.log(global.point);
		}
		setQuestionCount((old) => old + 1);
	};

	return (
		<div className="answers">
			{options.map((answare, index) => {
				return (
					<button
						key={index}
						onClick={() => {
							checkAnswer(answare);
						}}
					>
						{answare}
					</button>
				);
			})}
		</div>
	);
};

export default Answers;
