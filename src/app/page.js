
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>

      <Footer />
    </div>
  );
}
