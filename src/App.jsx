import './App.css';
import Welcome from './Welcome';
import Footer from './Footer';
import Counter from './Counter';

function App() {
  return (
    <div>
      <h1>Willkommen beim WISS-Quiz!</h1>
      <p>Hier wird bald unser Quiz starten.</p>
      <Welcome />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;