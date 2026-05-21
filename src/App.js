import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <ProductCard title="Ноутбук" price="35000" category="Техніка" />
      <ProductCard title="Телефон" price="20000" category="Гаджети" />
      <ProductCard title="Навушники" price="3000" category="Аксесуари" />

      <Footer />
    </div>
  );
}

export default App;