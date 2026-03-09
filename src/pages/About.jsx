import divider from "../assets/decorations/divider.webp";

function About() {
  return (
    <div className="about__wrap">
        <h1>Povijest limene glazbe</h1>
        <p>Limena glazba u Žrnovnici osnovana je davne 1911. godine. Tada započeta tradicija glazbarstva u Žrnovnici održala se do danas, uz dva prekida u radu: nakon 1. svjetskog rata te za vrijeme i neposredno nakon 2. svjetskog rata. Danas djelujemo pod nazivom Hrvatsko glazbeno društvo "Stjepan Radić".U našoj bogatoj povijesti imali smo niz zapaženih nastupa, i to u kultnim Smojinim serijama „Naše malo misto“ i „Ča smo na ovom svitu“, na otvaranju obnovljene Marmontove ulice u Splitu, kao i na gospodarskim događajima poput otvaranja prvog splitskog McDonaldsa. Dugo smo svirali i na brojnim gradskim feštama poput proslave Svetog Duje i Dana Radunice, a u Žrnovnici tradicionalno nastupamo za Veliku Gospu, maškare te na svim drugim važnijim obilježavanjima i obljetnicama. Do sada smo izdali i jednu ploču, i to 1984. godine u izdanju tadašnjeg Jugotona.Svojedobno smo u suradnji s OŠ Žrnovnica dugi niz godina održavali školu limene glazbe, koju smo početkom 2020. godine obnovili pokretanjem besplatnih glazbenih poduka za djecu, mladež i odrasle koje se održavaju u novouređenoj učionici Doma kulture na Korešnici koja je adaptirana i opremljena upravo za te svrhe. Polaznici uče solfeggio te sviranje instrumenta po izboru: truba, trombon, eufonij, saksofon, flauta, klarinet, bubnjevi, klavir i gitara, a voditelj poduka je magistar glazbene kulture Danijel Curić, koji od početka 2019. godine uspješno vodi i naš orkestar.</p>
        <img src={divider} alt="divider" className="divider" />
    </div>
  )
  
}

export default About;