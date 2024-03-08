import './styles.css';

import Link from 'next/link';
import { Card } from '../../../../library/components/Card';
import { NavigationFooter } from '../../../../library/components/NavigationFooter';

export default function Page() {
    return (
        <main>
            <h1>
                <Link
                    href={'/races'}
                    style={{ opacity: 0.5 }}
                >
                    Épreuves /
                </Link>{' '}
                90 Km
            </h1>
            <Card>
                {`
hello
`}
            </Card>
            <NavigationFooter />
        </main>
    );
}
