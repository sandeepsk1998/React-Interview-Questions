import "./App.css";
import Counter from "./Error-Boundary/Counter";
import ErrorBoundary from "./Error-Boundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Counter title="First" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Counter title="Second" />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
