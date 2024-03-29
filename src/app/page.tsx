import { ContactSection } from '@/components/ContactSection';
import { PartnersCarousel } from '@/components/Partners/Carousel';
import { RaceQuicklinks } from '@/components/RaceQuicklinks';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../library/components/Button';
import { Card } from '../../library/components/Card';
import { Countdown } from '../../library/components/Countdown';
import { Hero } from '../../library/components/Hero';
import { SearchField } from '../../library/components/SearchField';
import { VideoPlayer } from '../../library/components/VideoPlayer';
import './page.css';

export default function Home() {
    return (
        <main className="home">
            <Hero
                imageSrc="/medias/banner.jpeg"
                imageAlt="Banner image"
                foregroundElement={
                    <>
                        <Image
                            src="/medias/capybarace-logo.png"
                            alt="CapybaRun 2024"
                            width={140}
                            height={140}
                        />
                        <br />
                        <h1>CapybaRun 2024</h1>
                        <p className="presentation">
                            200Km de trail sans assistance au cœur des Vosges
                        </p>
                        <p className="date">du 24 au 25 août 2024</p>
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
                                M&apos;inscrire
                            </Button>
                        </div>
                    </>
                }
            />
            <div className="bento">
                <Card
                    title="Les épreuves"
                    className="races-card"
                    actionTitle="Toutes les épreuves"
                    actionTo="/races"
                >
                    <RaceQuicklinks />
                </Card>
                <Card
                    style={{ flex: 1 }}
                    variant="centered"
                >
                    <Countdown startDate={1724493600} />
                </Card>
            </div>
            <div className="bento">
                <Card
                    title="La course la plus folle de l'année"
                    actionTitle="À propos"
                    actionTo="/about/the-race"
                    style={{ flex: 2 }}
                >
                    {`
Évènement incontournable du trail, la CapybaRun vous attend cet année pour un trail exceptionnel de 200Km à travers les Vosges.
L'aventure est notre ADN, oserez-vous relever le défi d'une course de plusieurs jours sans assistance ?

Préparez-vous à découvrir les plus beaux paysages de la région au cours d'une aventure humaine et sportive sans limites...
            `}
                </Card>
                <Card
                    title={'Aftermovie 2023'}
                    actionTo="/2023"
                    actionTitle="Édition 2023"
                    style={{ flex: 3 }}
                >
                    <VideoPlayer src="https://youtu.be/f--yONEDwC0?si=E2cdf1JvO6INsWN-" />
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
                    title="Résultats"
                    actionTitle="Toutes les éditions"
                    actionTo="/editions"
                    style={{ flex: 2 }}
                >
                    <span
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                        }}
                    >
                        <p>Retrouvez les résultats et photos des années passées :</p>
                        <Button to="/2023">Édition 2023</Button>
                        <Button to="/2022">Édition 2022</Button>
                        <Button to="/2021">Édition 2021</Button>
                    </span>
                </Card>
                <Card
                    title="Dernières actualités"
                    actionTitle="Toutes les actualités"
                    actionTo="/events"
                    style={{ flex: 3 }}
                >
                    Section en cours de développement.
                </Card>
            </div>
            <Card
                title="Partenaires"
                actionTitle="Tous nos partenaires"
                actionTo="/about/partners"
            >
                <PartnersCarousel />
            </Card>
            <ContactSection />
        </main>
    );
}
