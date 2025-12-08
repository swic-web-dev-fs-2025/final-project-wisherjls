import Footer from "./components/Footer";
import Header from "./components/Header";
import SoundBoard from "./components/SoundBoard";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="grow">
        <SoundBoard />
      </main>
      <Footer />
    </div>
  );
}
