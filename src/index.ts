/**Main Script */
import App from "./components/app/app";

const app = new App();
window.addEventListener("load", async () => {
	await app.initialize();
});
