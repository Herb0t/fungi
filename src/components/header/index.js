import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class="header">
		<nav>
			<Link activeClassName="active" href="/shop">Shop</Link>
			<Link class="homelink" activeClassName="active" href="/"><h1>Fungi</h1></Link>
			<Link activeClassName="active" href="/about">About</Link>
		</nav>
	</header>
);

export default Header;
