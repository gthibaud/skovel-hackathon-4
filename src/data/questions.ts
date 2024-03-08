export type Category = {
    id: string;
    name: string;
};

export type Question = {
    id: string;
    question: string;
    answer: string;
    categoryId: string;
    source?: string;
};

export const questionsCategories: Category[] = [
    {
        id: '1',
        name: 'Accès',
    },
    {
        id: '2',
        name: 'Programme',
    },
    {
        id: '3',
        name: 'Communication',
    },
    {
        id: '4',
        name: 'Inscription',
    },
    {
        id: '5',
        name: 'Tarifs',
    },
    {
        id: '6',
        name: 'Désinscription',
    },
    {
        id: '7',
        name: 'Parcours',
    },
    {
        id: '8',
        name: 'Ravitaillements',
    },
    {
        id: '9',
        name: 'Résultats',
    },
    {
        id: '10',
        name: 'Autre',
    },
];

export const questions: Question[] = [
    {
        id: '1',
        question: 'Où se déroule la course ?',
        answer: "La course se déroule dans les Vosges. Le départ et l'arrivée se font au Markstein (adresse : 33 rue du Markstein, Route de la forêt, 68 830 Oderen.).",
        source: '/about/access',
        categoryId: '1',
    },
    {
        id: '2',
        question: 'Quand se déroule la course ?',
        answer: 'La course débutera le 15 août 2024 (8h pour le 200Km, 10h pour le 90Km, 11h pour le challenge entreprises).',
        source: '/about/program',
        categoryId: '2',
    },
    {
        id: '3',
        question: 'Qui est le référent de presse ?',
        answer: 'Pour toute demande de presse, merci de contacter M. Capy au [capy@capybarace.com](mailto:capy@capybarace.com).',
        categoryId: '3',
    },
    {
        id: '4',
        question: "Comment s'inscrire ?",
        answer: 'Pour vous inscrire à la CapybaRun 2024, rendez-vous sur notre site internet. Vous y trouverez toutes les informations nécessaires pour vous inscrire.',
        categoryId: '4',
    },
    {
        id: '5',
        question: 'Quel est le tarif des inscriptions ?',
        answer: 'Le tarif des inscriptions dépend de la catégorie de la course. Retrouvez toutes les informations sur notre site internet.',
        categoryId: '4',
    },
    {
        id: '6',
        question: 'Quand se terminent les inscriptions ?',
        answer: 'Les inscriptions se terminent le 31 décembre 2023.',
        categoryId: '4',
    },
    {
        id: '7',
        question: 'Puis-je me désinscrire ?',
        answer: "Vous pouvez vous désinscrire jusqu'au 31 décembre 2023. Passé cette date, les inscriptions ne sont plus remboursables.",
        categoryId: '4',
    },
    {
        id: '9',
        question: 'Le parcours est-il balisé ?',
        answer: 'Le parcours est entièrement balisé. Vous ne pouvez pas vous perdre !',
        categoryId: '7',
    },
    {
        id: '10',
        question: 'Y a-t-il des ravitaillements ?',
        answer: 'Des ravitaillements sont prévus tout au long du parcours. Vous ne manquerez de rien !',
        categoryId: '7',
    },
    {
        id: '11',
        question: 'Où puis-je consulter les résultats ?',
        answer: 'Les résultats seront disponibles sur notre site internet.',
        categoryId: '9',
    },
    {
        id: '12',
        question: 'Quand sont publiés les résultats ?',
        answer: 'Les résultats seront publiés le 16 août 2024.',
        categoryId: '9',
    },
    {
        id: '13',
        question: "Quel est le numéro de téléphone de l'association ?",
        answer: "Le numéro de téléphone de l'association est le 01 23 45 67 89.",
        categoryId: '10',
    },
    {
        id: '14',
        question: "Quelle est l'adresse email de l'association ?",
        answer: "L'adresse email de l'association est [hello@capybarun.com](mailto:hello@capybarun.com).",
        categoryId: '10',
    },
    {
        id: '15',
        question: 'Comment devenir bénévole ?',
        answer: "Pour devenir bénévole, contactez l'association Capyland. Vous trouverez toutes les informations nécessaires sur notre site internet.",
        categoryId: '10',
    },
    {
        id: '16',
        question: 'Quels sont les avantages à devenir bénévole ?',
        answer: "En tant que bénévole, vous bénéficiez de nombreux avantages : un t-shirt de l'association, un repas offert, une boisson offerte, une entrée gratuite pour la course, une réduction sur les produits de l'association.",
        categoryId: '10',
    },
];
