import { useContext } from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
	const { state } = useContext(ColorContext);
	return (
		<>
			<div
				style={{
					width: "64px",
					height: "64px",
					background: state.color, // => { state } 사용 시, state.color로 바뀜
				}}
			/>
			<div
				style={{
					width: "32px",
					height: "32px",
					background: state.subcolor,
				}}
			/>
		</>
	);
};

export default ColorBox;
