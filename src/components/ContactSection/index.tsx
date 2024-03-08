import { ArrowRight } from 'gthibaud-icons-react';
import { FC } from 'react';
import { Button } from '../../../library/components/Button';
import { Card } from '../../../library/components/Card';
import './styles.css';

export const ContactSection: FC = () => {
    return (
        <Card>
            <div className="contact-section">
                <h3>Vous n&apos;avez pas trouvé la réponse à votre question ?</h3>
                <Button
                    to="/contact"
                    style={{
                        width: 'fit-content',
                        margin: 'auto',
                        marginTop: '1rem',
                    }}
                >
                    Contactez nous <ArrowRight />
                </Button>
            </div>
        </Card>
    );
};
