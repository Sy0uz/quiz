export const Store = [
    {
        title: 'Кто твой отец?',
        id: '1',
        img: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
        questions: [
            { type: 'radio', title: 'Сколько тебе лет?', correct: '1', variants: ['8', '9', '4', '12', '32'] },
            { type: 'check', title: 'Сколько тебе лет1?', correct: ['1'], variants: ['8', '9', '4', '12'] },
            { type: 'input', title: 'Сколько тебе лет2?', correct: '12', variants: [] }
        ]
    },
    {
        title: 'Как тебя зовут?',
        id: '2',
        img: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
        questions: [
            { type: 'radio', title: 'Сколько тебе лет1?', correct: '4', variants: ['8', '9', '4', '12'] },
            { type: 'check', title: 'Сколько тебе лет2?', correct: ['1'], variants: ['8', '9', '4', '12'] },
            { type: 'input', title: 'Сколько тебе лет3?', correct: '34', variants: [] }
        ]
    },
    {
        title: 'Какая у тебя мечта?',
        id: '3',
        img: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
        questions: [
            { type: 'radio', title: 'Сколько тебе лет3?', correct: '3', variants: ['8', '9', '4', '12'] },
            { type: 'check', title: 'Сколько тебе лет2?', correct: ['1'], variants: ['8', '9', '4', '12'] },
            { type: 'input', title: 'Сколько тебе лет1?', correct: 'Кто я такой', variants: [] }
        ]
    },

]