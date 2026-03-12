import './Contacts.css';
import facebook from '../assets/decorations/facebook-icon.svg';
import inst from '../assets/decorations/inst-icon.svg';
import email from '../assets/decorations/mail-icon.svg';
import phone from '../assets/decorations/phone-icon.svg';
import location from '../assets/decorations/location-icon.svg';

function Contacts() {
  return (
        <section className='contacts'>
            <div className="container">
                <h1>Javite nam se</h1>
                <div className="contacts__content">
                    <div className="contacts__info">
                        <p className='contacts__info-text'>Ukoliko se želite uključiti u naš rad, kao i za sve druge informacije o nama, dostupni smo preko kontakt forme te na navedenom broju mobitela.</p>
                        <p className='contacts__info-text'>Predsjednik: Goran Kovačević <br /> Tajnica: Maja Džoja <br /> Voditelj orkestra: Danijel Curić, mag. mus.</p>
                        <div className="contacts__info-connect">
                            <div>
                                <img src={location} alt="location" />
                                <address>Starčevićeva 25, 21251 Žrnovnica</address>
                            </div>
                            <div>
                                <img src={phone} alt="phone" />
                                <a href="tel:+85 91 919 1121">+85 91 919 1121</a>
                            </div>
                            <div>
                                <img src={email} alt="email" />
                                <a href="mailto:limenaglazba.zrnovnica@gmail.com">limenaglazba.zrnovnica@gmail.com</a>
                            </div>
                        </div>
                        <div className="contacts__social-wrap">
                            <h3>Pratite nas na društvenim mrežama</h3>
                            <div className="contacts__social">
                                <a href="https://www.facebook.com/limenaglazba.zrnovnica">
                                    <img src={facebook} alt="facebook" className="contacts__social-icon" />
                                </a>
                                <a href="https://www.instagram.com/limena.glazba.zrnovnica">
                                    <img src={inst} alt="instagram" className="contacts__social-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contacts__form">
                        <input className='contacts__input' type="text" name='name' placeholder='Ime' />
                        <input className='contacts__input' type="email" name='email' placeholder='Email' />
                        <textarea className='contacts__input-text' type="text" name='text' placeholder='Vaša poruka' />
                        <button className='button button__primary' type='submit'>Pošali puruku</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;