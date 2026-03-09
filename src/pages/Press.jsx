import './Press.css';
import PressCard from '../components/ui/Cards/PressCard';
import img from '../assets/images/press-1.jpg';

function Press() {
  return (
    <section className='press' >
        <div className="container">
            <div className="container__press">
                <h1>Mediji o nama</h1>
                <div className="press__list">
                    <PressCard 
                    title="Vraćanje spomen ploče u Žrnovnici"
                    press="Dalmacija Danas"
                    text="Vraćena spomen ploča na kuću iz koje su 1942. 24 glazbara iz Žrnovnice krenula u Drugi svjetski rat, nakon dugo vremena u orkestru zasvirale i žene."
                    image={img}/>
                    <PressCard 
                    title="Najstarija splitska limena glazba iznenadila građane koncertom s panoramskog autobusa"
                    press="Dalmacija Danas"
                    text="Orkestar Hrvatskog glazbenog društva “Stjepan Radić” nastupom s panoramskog autobusa oduševio je Žrnovčane i Stobrečane. Na takav način obilježili su blagdan Velike Gospe."
                    image={img}/>
                    <PressCard 
                    title="Limena glazba na Zelenoj čistki u Žrnovnici"
                    press="Dalmacija Danas"
                    text="Na samom početku akcije Limena glazba 'Stjepan Radić' iz Žrnovnice je zasvirala nekoliko budnica, kako bi dodatno podigla atmosferu. Također su njihovi glazbari sudjelovali u čišćenju rijeke i njezina okoliša."
                    image={img}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Press;