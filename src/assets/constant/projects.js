export const projects = [
    {
        title: 'Recipes Dummy App',
        date: '9/2022',
        status: 'completed',
        url: 'https://recipes-for-dummies-dummy.netlify.app/',
        mvp: [
            'Built with Gatsby, Graphql, Contenful, FormSpree, SEO, and deployed on Netlify with continuous integration',
            'Users browse through recipes, can submit his/her contact with a form',
            'Filtered recipes by category, and ',
            'Have to reimplement SEO with new Gatsby Head syntax'
        ],
        image: '../images/projectsScreenShot/Recipes Dummy.png',
        id: 1
    },
    {
        title: 'Spotify Clone',
        date: '9/2022',
        status: 'Not completed',
        url: null,
        mvp: [
            'Created with NextJs, postgresQL, Prisma, Chakra, Bcrypt, JWT ',
            'User can play song on public page. Has to sign in/up to listen to his/her own music.',
            'Jwt token stores as cookies',
            'Need to fix the authentication, prisma client error'
        ],
        image: null,
        id: 2
    },
    {
        title: 'Anime For Each',
        date: '4/2021',
        status: 'completed && need update',
        url: 'https://animeforeach.herokuapp.com/sear',
        mvp: [
            'Developed with React.JS, React Hooks, Grid, Flexbox, Heroku, GitHub, API.',
            'Users search for the best anime shows with a search field option to create quality website experience.',
            'Search field uses React two-way binding.',
        ],
        image: '../images/projectsScreenShot/animeForEach.png',
        id: 3
    },
    {
        title: 'Flashcard game',
        date: '3/2021',
        status: 'completed',
        url: 'https://stephtheitsloth.github.io/Flashcards-How-To-Tricks/',
        mvp: [
            'Created using HTML, Flexbox, JavaScript.',
            'Beta version consists of 3 questions worth 10 points; wrong answer triggers a flip of the card to display the correct answer. Initial answer based in ecmascript 6, then charAt(0)',
            'Flashcard dynamically traverses an array using a simple index updated based on user and DOM manipulations.',
        ],
        image: '../images/projectsScreenShot/flashCardGame.png',
        id: 4
    }
]