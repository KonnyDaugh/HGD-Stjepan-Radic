import divider from "../assets/decorations/divider.webp";
import "./About.css";
import { useState } from "react";
import OrchestraMap from "../components/Orchestra/OrchestraMap";
import { orchestraSeats } from "../data/orchestraSeats";


function About() {
    const [activeSeat, setActiveSeat] = useState(null);
    const handleSeatClick = (seat) => {
        if (activeSeat?.id === seat.id) {
            setActiveSeat(null); // закрыть
        } else {
            setActiveSeat(seat); // открыть
        }
    };

  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
            <h1 className="about__title" >Povijest limene glazbe</h1>
            <p className="about__text" >Limena glazba u Žrnovnici osnovana je davne 1911. godine. Tada započeta tradicija glazbarstva u Žrnovnici održala se do danas, uz dva prekida u radu: nakon 1. svjetskog rata te za vrijeme i neposredno nakon 2. svjetskog rata. Danas djelujemo pod nazivom Hrvatsko glazbeno društvo "Stjepan Radić".U našoj bogatoj povijesti imali smo niz zapaženih nastupa, i to u kultnim Smojinim serijama „Naše malo misto“ i „Ča smo na ovom svitu“, na otvaranju obnovljene Marmontove ulice u Splitu, kao i na gospodarskim događajima poput otvaranja prvog splitskog McDonaldsa. Dugo smo svirali i na brojnim gradskim feštama poput proslave Svetog Duje i Dana Radunice, a u Žrnovnici tradicionalno nastupamo za Veliku Gospu, maškare te na svim drugim važnijim obilježavanjima i obljetnicama. Do sada smo izdali i jednu ploču, i to 1984. godine u izdanju tadašnjeg Jugotona.Svojedobno smo u suradnji s OŠ Žrnovnica dugi niz godina održavali školu limene glazbe, koju smo početkom 2020. godine obnovili pokretanjem besplatnih glazbenih poduka za djecu, mladež i odrasle koje se održavaju u novouređenoj učionici Doma kulture na Korešnici koja je adaptirana i opremljena upravo za te svrhe. Polaznici uče solfeggio te sviranje instrumenta po izboru: truba, trombon, eufonij, saksofon, flauta, klarinet, bubnjevi, klavir i gitara, a voditelj poduka je magistar glazbene kulture Danijel Curić, koji od početka 2019. godine uspješno vodi i naš orkestar.</p>
            <img src={divider} alt="divider" className="divider" />

            <OrchestraMap
                seats={orchestraSeats}
                onSeatClick={handleSeatClick}
            />

            {activeSeat && (
                <div className="modal-overlay" onClick={() => setActiveSeat(null)}>
                    <div
                        className="modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {activeSeat.musician ? (
                            <>
                                <img
                                    src={activeSeat.musician?.photo}
                                    alt={activeSeat.musician?.name}
                                    className="modal-photo"
                                />
                                <h3>{activeSeat.musician.name}</h3>
                                <p>{activeSeat.section}</p>
                            </>
                        ) : (
                            <>
                                <h3>Slobodno mjesto</h3>
                                <p>Možda baš ti možeš biti dio orkestra 🎺</p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
      </div>
    </section>
  ) 
}

export default About;