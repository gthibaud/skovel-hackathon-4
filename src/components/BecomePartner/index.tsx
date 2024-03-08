import { ArrowRight } from 'gthibaud-icons-react';
import { FC } from 'react';
import { Button } from '../../../library/components/Button';
import { Card } from '../../../library/components/Card';
import './styles.css';

export const BecomePartner: FC = () => {
    return (
        <Card>
            <div className="contact-section">
                <h3>Vous souhaitez devenir partenaire de la CapybaRun ?</h3>
                <p>Contactez-nous !</p>
                <Button
                    to="/contact"
                    style={{
                        width: 'fit-content',
                        margin: 'auto',
                        marginTop: '1rem',
                    }}
                >
                    Devenir partenaire <ArrowRight />
                </Button>
            </div>
        </Card>
    );
};
