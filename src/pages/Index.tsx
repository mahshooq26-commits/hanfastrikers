import HeroSection from "@/components/HeroSection";
import TeamInfo from "@/components/TeamInfo";
import PlayersSection from "@/components/PlayersSection";
import { Instagram } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TeamInfo />
      <PlayersSection />

      <footer className="py-12 bg-black text-center border-t border-white/10 relative z-10">
        <p className="font-heading text-primary tracking-[0.2em] text-sm md:text-base font-bold drop-shadow-md">
          HANFA STRIKERS — ADKAR PREMIER LEAGUE 2025
        </p>
        <p className="font-body text-gray-400 text-xs md:text-sm mt-3 font-medium uppercase tracking-widest">
          Presented by Royal Boys Adkar
        </p>
        
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col items-center justify-center gap-2">
          <p className="font-body text-xs text-gray-500 uppercase tracking-widest">
            Created by
          </p>
          <a
            href="https://www.instagram.com/__moush?igsh=MW1xaTlzNzVpamZtbQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-300 hover:text-gold transition-colors duration-300 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-gold/50"
          >
            <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-heading font-bold text-sm tracking-widest text-white group-hover:text-gold transition-colors">
              Moushu Adkar
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Index;
