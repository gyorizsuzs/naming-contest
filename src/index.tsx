import { createRoot } from "react-dom/client";

const App = () => {
  return <div>Hello React</div>;
  //   return React.createElement("Div", null, "Hello React");
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
