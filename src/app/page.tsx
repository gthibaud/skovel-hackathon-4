import Link from 'next/link';
import { BannerPicture } from '../../library/components/BannerPicture';
import { Button } from '../../library/components/Button';
import { Card } from '../../library/components/Card';
import { Markdown } from '../../library/components/Markdown';
import './page.css';

export default function Home() {
    return (
        <main>
            <BannerPicture
                imageSrc="banner.jpeg"
                imageAlt="Banner image"
                foregroundElement={
                    <>
                        <h1>CapybaRun 2024</h1>
                        <p className="presentation">
                            Bienvenue dans votre prochaine aventure : un trail de 200Km sans
                            assistance au cœur des Vosges...
                        </p>
                        <p className="date">Départ le 24/08/2024 au Markstein (68)</p>
                        <div className="actions">
                            <Button
                                to="/infos"
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
            <Card
                title="La course la plus folle de l'année"
                actionTitle="La course"
                actionTo="/about"
            >
                <Markdown>
                    {`
La CapybaRun est un trail de 200Km sans assistance au cœur des Vosges. La course se déroule sur 3 jours et vous emmènera à travers les plus beaux paysages de la région. Prenez le départ d&apos;une aventure humaine et sportive qui vous permettra de repousser vos limites et de découvrir des paysages à couper le souffle.
`}
                </Markdown>
            </Card>
            <Card
                variant="grid"
                title="Les épreuves"
            >
                <p>90Km</p>
                <p>200Km</p>
            </Card>
            <div className="bento">
                <Card>
                    <h3>Infos</h3>
                    <p>
                        Starting: <b>24/08/2024 - 10h</b>
                    </p>
                    <p>
                        Price: <b>150€</b>
                    </p>
                    <p>
                        Distance: <b>200Km</b>
                    </p>
                    <p>
                        Duration: <b>3 days</b>
                    </p>
                    <p>
                        Difficulty: <b>Hard</b>
                    </p>
                    <Link href="/infos">More infos</Link>
                </Card>
                <Card>
                    <h3>Location</h3>
                    <img
                        src="map.png"
                        alt="Map"
                    />
                </Card>
            </div>
        </main>
    );
}
