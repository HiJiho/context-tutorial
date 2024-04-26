import { createContext, useState } from "react";

const ColorContext = createContext({ // Provider의 value의 객체의 형태와 일치시키기
	state: { color: "black", subcolor: "red" },
	actions: {
		setColor: () => {},
		setSubcolor: () => {},
	},
});

const ColorProvider = ({ children }) => {
	const [color, setColor] = useState("black");
	const [subcolor, setSubcolor] = useState("red");

	const value = { // state와 actions 객체를 따로따로 분리해 주면 Context 값 사용하기 편함
		state: { color, subcolor },
		actions: { setColor, setSubcolor },
	};

	return (
		<ColorContext.Provider value={value}>{children}</ColorContext.Provider>
	);
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
