import { PartnersCarousel } from '@/components/Partners/Carousel';
import { RaceQuickinks } from '@/components/RaceQuicklinks';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../library/components/Button';
import { Card } from '../../library/components/Card';
import { Countdown } from '../../library/components/Countdown';
import { Hero } from '../../library/components/Hero';
import { Map } from '../../library/components/Map';
import { SearchField } from '../../library/components/SearchField';
import { VideoPlayer } from '../../library/components/VideoPlayer';
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
            <div className="bento">
                <Card
                    title="La course la plus folle de l'année"
                    actionTitle="À propos"
                    actionTo="/about"
                    style={{ flex: 2 }}
                >
                    La CapybaRun est un trail de 200Km sans assistance au cœur des Vosges. La course
                    se déroule sur 3 jours et vous emmènera à travers les plus beaux paysages de la
                    région. Prenez le départ d&apos;une aventure humaine et sportive qui vous
                    permettra de repousser vos limites et de découvrir des paysages à couper le
                    souffle.
                </Card>
                <Card
                    title={'Aftermovie 2023'}
                    actionTo="/2023"
                    actionTitle="Édition 2023"
                    style={{ flex: 3 }}
                >
                    <VideoPlayer
                        src="https://youtu.be/f--yONEDwC0?si=E2cdf1JvO6INsWN-"
                        height={300}
                        width={'auto'}
                    />
                </Card>
            </div>
            <Card
                title={'Une question ?'}
                actionTo="/about/questions"
                actionTitle="FAQ"
                style={{ flex: 3 }}
            >
                <Link href="/about/questions">
                    <SearchField placeholder="Rechercher une information" />
                </Link>
            </Card>
            <div className="bento">
                <Card
                    title="Localisation"
                    actionTitle="Accès"
                    actionTo="/about/access"
                    style={{ flex: 2 }}
                >
                    <span
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                        }}
                    >
                        <p>
                            Les Vosges seront le décor de la Capybarace, avec un départ et une
                            arrivée au Markstein (68).
                        </p>
                        <Map
                            longitude={7.028784}
                            latitude={47.926232}
                        />
                    </span>
                </Card>
                <Card
                    title="Dernières actualités"
                    actionTitle="Toutes les actualités"
                    actionTo="/events"
                    style={{ flex: 3 }}
                >
                    todo
                </Card>
            </div>
            <Card
                title="Partenaires"
                actionTitle="Tous nos partenaires"
                actionTo="/about/partners"
            >
                <p>Ils rendent la course possible :</p>
                <PartnersCarousel />
            </Card>
            <Card>
                <span>
                    Vous n&apos;avez pas trouvé la réponse à votre question ? Contactez-nous !
                    <Button
                        to="/contact"
                        style={{
                            width: 'fit-content',
                            margin: 'auto',
                            marginTop: '1rem',
                        }}
                    >
                        Contacter l&apos;organisation
                    </Button>
                </span>
            </Card>
        </main>
    );
}
