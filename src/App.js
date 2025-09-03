import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://github.com/fellanz"
              target="_blank"
              rel="noreferrer"
            >
              Felicia Z
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/FellanZ/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
            and{" "}
            <a
              href="https://dictionary-the-project.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
