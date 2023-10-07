import React from 'react';

const Footer = () => {

    return (
        <div className='footerContainer'>
            <div className='root'>
                <h1 className='heading'>Åpningstider kundeservice</h1>
                <section className='section'>
                    <strong>Mandag til Fredag:</strong>
                    <p>09:00 til 16:00</p>
                </section>
                <section className='section'>
                    <strong>Lørdag og Søndag:</strong>
                    <p> Stengt</p>
                </section>
            </div>
            <div className='root'>
                <h1 className='heading'>Kontakt Apomed</h1>
                <section className='section'>
                    <strong>epost:</strong>
                    <p>post@apomed.no</p>
                </section>
                <section className='section'>
                    <strong>Telefon:</strong>
                    <p>24 17 90 01</p>
                </section>
                <section className='section'>
                    <strong>Fax for resept:</strong>
                    <p>24 17 90 01</p>
                </section>
            </div>
            <div className='root'>
                <h1 className='heading'>Kontakt Apomed</h1>
                <section className='section'>
                    <p>Grenseveien 99,</p>
                    <p>0663 Oslo</p>
                </section>
                <section className='section'>
                    <strong>Org.nr:</strong>
                    <p>924 957 034</p>
                </section>
                <section className='section'>
                <p>
                    Apomeds konsesjons nr. hos Statens Legemiddelverkets: 2259
                </p>
                <a
                    href="https://legemiddelverket.no/import-og-salg/apotekdrift/registreringsordning-for-netthandel-med-legemidler/godkjente-utsalgssteder#oversikt-over-godkjente-nettapotek"
                    target="_blank"
                >
                    <img
                        className="image"
                        src=""
                        alt="logo link"
                    />
                </a>
                </section>
            </div>
        </div>
    );
};

export default Footer;