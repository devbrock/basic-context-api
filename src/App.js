import { useState } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import { Test } from "./Test";

function App() {
	//create state variables at the app level
	const [value, setValue] = useState("start");
	return (
		<div className="App">
			{/* Wrap the app in a provider.
          This way all of the children components can access the context.
          Pass the provider the app level state variables as n object.
       */}
			<MyContext.Provider value={{ value, setValue }}>
				<header className="App-header">
					<p>{value}</p>
					<Test />
				</header>
			</MyContext.Provider>
		</div>
	);
}

export default App;
