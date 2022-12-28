import { h } from 'preact';
import style from './style.css';
import Block from '../../components/block';


const Home = () => {
	const numBlocks = 4;
	const blocks = () => {
		let blocks = [];
		for (let index = 0; index < numBlocks; index++) {			
			blocks.push(<Block />);
		}
		return blocks;
	}

	return (
		<div class={style.home}>
			<p>This is the Home component.</p>
			{blocks()}
		</div>
	);
}

export default Home;
