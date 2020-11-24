import React, { useContext } from "react";
import { MyContext } from "./MyContext";

export const Test2 = () => {
	const { value, setValue } = useContext(MyContext);
	return (
		<div>
			<button onClick={() => setValue("again")}>Change Value Again</button>
		</div>
	);
};
