import React from "react";
import ReactDOM from "react-dom/client";

import "./main.css";

import { App as AppClass } from "./class/app";
import { App as AppHook } from "./hook/app";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<center>
			<h1>Vite.js</h1>
		</center>

		<AppClass />
		<AppHook />
	</React.StrictMode>
);
