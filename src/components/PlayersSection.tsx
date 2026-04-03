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
    <section id="players" className="py-24 md:py-32 px-4 relative overflow-hidden bg-background">
      {/* Decorative blurry background element */}
      <div className="absolute top-1/4 -left-1/4 w-[50vh] h-[50vh] rounded-full bg-gold/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[50vh] h-[50vh] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="font-heading text-primary tracking-[0.3em] text-sm md:text-base mb-4 font-bold">THE SQUAD</p>
          <h2 className="font-heading text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6">
            OUR MERCILESS <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-500">PLAYERS</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-yellow-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10">
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
