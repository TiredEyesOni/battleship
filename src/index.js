import "./styles/index.scss";
import "./styles/board.scss";
import "./styles/win-screen.scss";
import "./styles/how-to-play.scss";
import "./styles/drag-and-drop.scss";
import { initGame } from "./scripts/game";
import { initHeaderBtn } from "./scripts/domFunctions";

initHeaderBtn();
initGame();
