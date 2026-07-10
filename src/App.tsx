import { ContactFlow } from "./components/ContactFlow";
import { FeaturedIsland } from "./components/FeaturedIsland";
import { FlowIdentity } from "./components/FlowIdentity";
import { Header } from "./components/Header";
import { HeroFlow } from "./components/HeroFlow";

export function App() {
  return (
    <main className="flow-page">
      <Header />
      <div className="flow-canvas">
        <HeroFlow />
        <FlowIdentity />
        <FeaturedIsland />
        <ContactFlow />
      </div>
    </main>
  );
}
