import { motion } from "framer-motion";
import PlayerCard from "./PlayerCard";
import sharathImg from "@/assets/player-sharath.jpeg";
import junaidImg from "@/assets/player-junaid.jpeg";
import chakiImg from "@/assets/player-chaki.jpeg";
import durgaImg from "@/assets/player-durga.jpeg";
import balaImg from "@/assets/player-bala.jpeg";
import sharath2Img from "@/assets/player-sharath2.jpeg";
import macchuImg from "@/assets/player-macchu.jpg";
import husainImg from "@/assets/player-husain.jpg";
import assaImg from "@/assets/player-assa.jpg";
import kishorImg from "@/assets/player-kishor.jpg";

const players = [
  { name: "Sharath Narladka", role: "Icon Player", badge: "ICON", image: sharathImg },
  { name: "Junaid Adkar", role: "Captain", badge: "CAPTAIN", image: junaidImg },
  { name: "Chaki Kanchilpady", role: "All-Rounder", image: chakiImg },
  { name: "Durga Adkar", role: "All-Rounder", image: durgaImg },
  { name: "Macchu Kadikadka", role: "Batsman", image: macchuImg },
  { name: "Husain Sunnamoole", role: "Batsman", image: husainImg },
  { name: "Bala Jalsoor", role: "All-Rounder", image: balaImg },
  { name: "Assa", role: "Batsman", image: assaImg },
  { name: "Kishor", role: "Batsman", image: kishorImg },
  { name: "Sharath", role: "All-Rounder", image: sharath2Img },
];

const PlayersSection = () => {
  return (
    <section id="players" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading text-primary tracking-[0.3em] text-sm mb-3">THE SQUAD</p>
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-gold-gradient">
            OUR PLAYERS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {players.map((player, i) => (
            <PlayerCard
              key={player.name}
              name={player.name}
              role={player.role}
              badge={player.badge}
              image={player.image}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayersSection;
