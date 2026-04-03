import HeroSection from "@/components/HeroSection";
import TeamInfo from "@/components/TeamInfo";
import PlayersSection from "@/components/PlayersSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TeamInfo />
      <PlayersSection />

      <footer className="py-10 text-center border-t border-border">
        <p className="font-heading text-primary tracking-[0.2em] text-sm">
          HANFA STRIKERS — ADKAR PREMIER LEAGUE 2025
        </p>
        <p className="font-body text-muted-foreground text-xs mt-2">
          Presented by Royal Boys Adkar
        </p>
      </footer>
    </main>
  );
};

export default Index;
