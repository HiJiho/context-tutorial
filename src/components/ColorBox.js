import { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
	return (
		<ColorConsumer>
			{(value) => ( // 객체 비구조화 할당으로 value 대신 { state } 사용해도 됨
				<>
					<div
						style={{
							width: "64px",
							height: "64px",
							background: value.state.color, // => { state } 사용 시, state.color로 바뀜
						}}
					/>
					<div
						style={{
							width: "32px",
							height: "32px",
							background: value.state.subcolor,
						}}
					/>
				</>
			)}
		</ColorConsumer>
	);
};

export default ColorBox;
