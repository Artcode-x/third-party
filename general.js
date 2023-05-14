import { renderLevelDiff } from "./components/someRender.js"
const globalState = {
  // глобальное состояние проекта
  difficult: "",
  renderElement: document.getElementById("levels"),
}

renderLevelDiff()
export { globalState }
