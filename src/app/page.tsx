import { PartnersCarousel } from '@/components/Partners/Carousel';
import { RaceQuickinks } from '@/components/RaceQuicklinks';
import Image from 'next/image';
import { Button } from '../../library/components/Button';
import { Card } from '../../library/components/Card';
import { Countdown } from '../../library/components/Countdown';
import { Hero } from '../../library/components/Hero';
import { Map } from '../../library/components/Map';
import './page.css';

export default function Home() {
    return (
        <main className="home">
            <Hero
                imageSrc="banner.jpeg"
                imageAlt="Banner image"
                foregroundElement={
                    <>
                        <Image
                            src="/capybarace-logo.png"
                            alt="CapybaRun 2024"
                            width={140}
                            height={140}
                        />
                        <br />
                        <h1>CapybaRun 2024</h1>
                        <p className="presentation">
                            200Km de trail sans assistance au cœur des Vosges...
                        </p>
                        <p className="date">Départ le 24/08/2024 au Markstein (68)</p>
                        <div className="actions">
                            <Button
                                to="/about"
                                size="large"
                            >
                                Plus d&apos;infos
                            </Button>
                            <Button
                                to="/register"
                                variant="inverted"
                                size="large"
                            >
                                S&apos;inscrire
                            </Button>
                        </div>
                    </>
                }
            />
            <div className="bento">
                <Card
                    title="Les épreuves"
                    style={{ flex: 3 }}
                    actionTitle="Toutes les épreuves"
                    actionTo="/races"
                >
                    <RaceQuickinks />
                </Card>
                <Card
                    style={{ flex: 2 }}
                    variant="centered"
                >
                    <Countdown startDate={1724493600} />
                </Card>
            </div>
            <Card
                title="La course la plus folle de l'année"
                actionTitle="À propos"
                actionTo="/about"
            >
                La CapybaRun est un trail de 200Km sans assistance au cœur des Vosges. La course se
                déroule sur 3 jours et vous emmènera à travers les plus beaux paysages de la région.
                Prenez le départ d&apos;une aventure humaine et sportive qui vous permettra de
                repousser vos limites et de découvrir des paysages à couper le souffle.
            </Card>
            <div className="bento">
                <Card
                    title="Localisation"
                    actionTitle="Accès"
                    actionTo="/about/access"
                    style={{ flex: 2 }}
                >
                    <Map
                        longitude={7.028784}
                        latitude={47.926232}
                    />
                </Card>
                <Card
                    title={'Une question ?'}
                    actionTo="/about/questions"
                    actionTitle="En savoir plus"
                    style={{ flex: 3 }}
                >
                    <p>Last questions</p>
                </Card>
            </div>
            <Card
                title="Partenaires"
                actionTitle="Tous nos partenaires"
                actionTo="/partners"
            >
                <p>Ils rendent la course possible :</p>
                <PartnersCarousel />
            </Card>
            <Card
                title="Dernières actualités"
                actionTitle="Toutes les actualités"
                actionTo="/events"
            >
                todo
            </Card>
        </main>
    );
}
