import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import { Test2 } from "./Test2";

export const Test = () => {
	const { value, setValue } = useContext(MyContext);
	return (
		<div>
			<button onClick={() => setValue("changed")}>Change Value</button>
			<div>
				<Test2 />
			</div>
		</div>
	);
};
