// Panel.js
import ReactDOMServer from "react-dom/server";
import Panel from "./panel";

function createPanelElement() {
  const panelElement = document.createElement("div");
  panelElement.id = "panel-container";

  // Render the Panel component and convert it to HTML
  const panelHTML = ReactDOMServer.renderToString(<Panel />);
  panelElement.innerHTML = panelHTML;

  return panelElement;
}

export default createPanelElement;
