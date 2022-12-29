import { h } from 'preact';
import style from './style.css';
import Block from '../../components/block';


const Home = () => {
	const numBlocks = 4;
	const blockContent = [
		{
			title: 'Block 1',
			type: "vtext",
			content: 'This is the content for block 1.'
		},
		{
			title: 'Spore',
			type: "block",
			content: "I come rough, tough like an Elephant tusk. Approachin me, you out of respect, chops ya neck, I get vexed, like crashing up a phat-ol Lex'. I grew up on the crime side, the New York Times side, Stayin' alive was no jive."
		},
		{
			title: 'Mycelium',
			type: "block",
			content: "So uhh, tic toc and keep ticking, while I get you flipping off what I'm kicking. Life as a shorty shouldn't be so rough."
		},
		{
			title: 'Fruitbody',
			type: "block",
			content: "My DJ the catcher, he's my man, anyway he's the one who devised the plan. Approachin me, you out of respect, chops ya neck, I get vexed, like crashing up a phat-ol Lex'."
		}
	]


	const blocks = () => {
		let blocks = [];

		// foreach block in blockContent send the data to the block component
		blockContent.forEach(e => {
			blocks.push(<Block title={e.title} type={e.type} content={e.content} />);
		});

		return blocks;
	}

	return (
		<div class={style.home}>
			<p>This is the Home component.</p>
			<div class="blocks">{blocks()}</div>
		</div>
	);
}

export default Home;
