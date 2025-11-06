import { motion } from 'framer-motion';

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="bg-white py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-display italic text-black mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
          data-testid="heading-entourage"
        >
          Entourage
        </motion.h2>

        <motion.div 
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          {/* Parents Section - 2 COLUMNS always */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-parents-groom">
              <h3 className="font-display italic text-sm text-black mb-2">Parents of the Groom</h3>
              <p className="text-black font-normal text-xs">Cynthia Arce</p>
              <p className="text-black font-normal text-xs">Rodolfo Domingo Jr.</p>
            </div>
            <div data-testid="section-parents-bride">
              <h3 className="font-display italic text-sm text-black mb-2">Parents of the Bride</h3>
              <p className="text-black font-normal text-xs">Rosario Collado</p>
              <p className="text-black font-normal text-xs">Ruben Collado</p>
            </div>
          </div>

          {/* Principal Sponsors - 2 COLUMNS always */}
          <div>
            <h3 className="font-display italic text-lg text-black mb-4" data-testid="heading-principal-sponsors">Principal Sponsors</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-0.5">
              <p className="text-black font-normal text-xs">Hon. Walfredo "Arman" Dimaguila</p>
              <p className="text-black font-normal text-xs">Hon. Lourdes Dimaguila</p>
              <p className="text-black font-normal text-xs">Mr. Rico Arce</p>
              <p className="text-black font-normal text-xs">Mrs. Mary Katherine Arce</p>
              <p className="text-black font-normal text-xs">Mr. Rodolfo Del Rosario</p>
              <p className="text-black font-normal text-xs">Mrs. Ana Afuang</p>
              <p className="text-black font-normal text-xs">Mr. Rey Nicolas</p>
              <p className="text-black font-normal text-xs">Mrs. Soccoro Domingo</p>
              <p className="text-black font-normal text-xs">Mr. Victor Abion</p>
              <p className="text-black font-normal text-xs">Mrs. Emmylou Gloriani</p>
              <p className="text-black font-normal text-xs">Mr. Eduardo Lalic</p>
              <p className="text-black font-normal text-xs">Mrs. Bessie Lalic</p>
              <p className="text-black font-normal text-xs">Mr. Billy Joe Tiedra</p>
              <p className="text-black font-normal text-xs">Mrs. Shyla Tiedra</p>
              <p className="text-black font-normal text-xs">Mr. Elmer Mangaliag</p>
              <p className="text-black font-normal text-xs">Hon. Emi Calixto-Rubiano</p>
            </div>
          </div>

          {/* Secondary Sponsors - 3 COLUMNS always */}
          <div>
            <h3 className="font-display italic text-lg text-black mb-4" data-testid="heading-secondary-sponsors">Secondary Sponsors</h3>
            <div className="grid grid-cols-3 gap-6">
              <div data-testid="section-candle">
                <h4 className="font-bold italic text-xs text-black mb-1">Candle</h4>
                <p className="text-black font-normal text-xs">Celine Kaye Potes</p>
                <p className="text-black font-normal text-xs">John Paul Dominic Potes</p>
              </div>
              <div data-testid="section-veil">
                <h4 className="font-bold italic text-xs text-black mb-1">Veil</h4>
                <p className="text-black font-normal text-xs">Melody Collado</p>
                <p className="text-black font-normal text-xs">Robin Collado</p>
              </div>
              <div data-testid="section-cord">
                <h4 className="font-bold italic text-xs text-black mb-1">Cord</h4>
                <p className="text-black font-normal text-xs">Maria Christina Visaya</p>
                <p className="text-black font-normal text-xs">Christian Visaya</p>
              </div>
            </div>
          </div>

          {/* Wedding Party - 2 COLUMNS */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-matron-honor">
              <h4 className="font-display italic text-sm text-black mb-2">Matron of Honor</h4>
              <p className="text-black font-normal text-xs">Maria Christina Visaya</p>
            </div>
            <div data-testid="section-best-man">
              <h4 className="font-display italic text-sm text-black mb-2">Best Man</h4>
              <p className="text-black font-normal text-xs">Carlo Rosanes</p>
            </div>
          </div>

          {/* Bridesmaids and Groomsmen - 2 COLUMNS */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-bridesmaids">
              <h4 className="font-display italic text-sm text-black mb-2">Bridesmaids</h4>
              <p className="text-black font-normal text-xs">Mikha Ortega</p>
              <p className="text-black font-normal text-xs">Shine Basibas</p>
              <p className="text-black font-normal text-xs">Misty Pepito</p>
              <p className="text-black font-normal text-xs">Hazel Ann Dilla</p>
              <p className="text-black font-normal text-xs">Criselda Gragasin</p>
              <p className="text-black font-normal text-xs">Alyssa Garry Barzaga</p>
              <p className="text-black font-normal text-xs">Maricar Palma</p>
              <p className="text-black font-normal text-xs">Shana Marie Domingo</p>
            </div>
            <div data-testid="section-groomsmen">
              <h4 className="font-display italic text-sm text-black mb-2">Groomsmen</h4>
              <p className="text-black font-normal text-xs">Carlo Rosanes</p>
              <p className="text-black font-normal text-xs">Fhax Basibas</p>
              <p className="text-black font-normal text-xs">Marc Fesarillo</p>
              <p className="text-black font-normal text-xs">Christian Jay Lalic</p>
              <p className="text-black font-normal text-xs">John Mark Ernesto</p>
              <p className="text-black font-normal text-xs">Rayjohn Balasta</p>
              <p className="text-black font-normal text-xs">Immorts Balberan</p>
              <p className="text-black font-normal text-xs">Tyrone Domingo</p>
            </div>
          </div>

          {/* Bearers - 3 COLUMNS always */}
          <div className="grid grid-cols-3 gap-6">
            <div data-testid="section-bible-bearer">
              <h4 className="font-bold italic text-xs text-black mb-1">Bible Bearer</h4>
              <p className="text-black font-normal text-xs">Stefan Keith Domingo</p>
            </div>
            <div data-testid="section-coin-bearer">
              <h4 className="font-bold italic text-xs text-black mb-1">Coin Bearer</h4>
              <p className="text-black font-normal text-xs">Bryce Joaquin Cruz</p>
            </div>
            <div data-testid="section-ring-bearer">
              <h4 className="font-bold italic text-xs text-black mb-1">Ring Bearer</h4>
              <p className="text-black font-normal text-xs">Asher Brey Collado</p>
            </div>
          </div>

          {/* Flower Girls - Single column */}
          <div data-testid="section-flower-girls">
            <h4 className="font-display italic text-sm text-black mb-2">Flower Girls</h4>
            <p className="text-black font-normal text-xs">Adelaine Robyn Collado</p>
            <p className="text-black font-normal text-xs">Ysabella Javier</p>
            <p className="text-black font-normal text-xs">Ashley Domingo</p>
          </div>

          {/* Little Brides - Single column */}
          <div data-testid="section-little-brides">
            <h4 className="font-display italic text-sm text-black mb-2">Little Brides</h4>
            <p className="text-black font-normal text-xs">Siana Aisheya Collado</p>
            <p className="text-black font-normal text-xs">Ysabelle Bagalawis</p>
          </div>

          {/* Wedding Officiant - Single column */}
          <div data-testid="section-officiant">
            <p className="text-black font-normal text-xs">Rev. Father Miguel A. Santillan</p>
            <h4 className="font-display italic text-sm text-black mt-1">Wedding Officiant</h4>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
