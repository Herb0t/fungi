import { h } from 'preact';

const Block = (props) => (
	<div class={"block type-" + props.type}>
    <div class="block-content">
      {props.type === "block" ? <h3>{props.title}</h3> : null}
      <p>{props.content}</p>
    </div>
	</div>
);

export default Block;
