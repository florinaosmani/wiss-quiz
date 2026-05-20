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
      <Counter titel="Punktestand" startwert={0} schritt={1} />
      <Counter titel="Lebenspunkte" startwert={100} schritt={10} />
      <Counter titel="Geldbeutel (in CHF)" startwert={500} schritt={50} />
      <Counter startwert={5} schritt={1} titel="Lautstärke" min={0} max={10} />
      <Footer />
    </div>
  );
}

export default App;