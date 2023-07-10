import gitFinder from '../../assets/images/GithubFinder.jpeg';
import conferenceApp from '../../assets/images/conferenceBookingApp.jpeg';
import prudenceconcept from '../../assets/images/prudenceconcept.png';

const Data = [
  {
    id: 1,
    screenShot: gitFinder,
    title: 'GitHub Finder',
    description: 'Github finder react application makes a call to Github API. '
    + 'For each call, it fetches information about github users and returns the result. '
    + 'The application gets the following information from the API: Username, User unique ID, '
    + 'public repositories, likes, followers, following, profile info, location, social media links, '
    + 'and others.',
    tech: ['Nodejs', 'JavaScript', 'React', 'REST API'],
    alt: 'Project screenshot',
    liveDemo: 'https://githubfinder83948989.netlify.app/',
    sourceCode: 'https://github.com/KingsleyIbe/Github-Finder',
  },
  {
    id: 2,
    screenShot: conferenceApp,
    title: 'Online Conference Page',
    description: `${'Online conference application is a website that hosts conferences and other events. '
    + 'Participants will be able to register for events, join online, invite friends, view program details, '}${
      'access speakers bio information, contact event planners, etc. '}`,
    tech: ['CSS', 'JavaScript', 'HTML', 'SCSS'],
    alt: 'Project screenshot',
    liveDemo: 'https://kingsleyibe.github.io/microverse-capstone-1/',
    sourceCode: 'https://github.com/KingsleyIbe/microverse-capstone-1',
  },
  {
    id: 3,
    screenShot: prudenceconcept,
    title: 'Prudence Concept',
    description: 'This project is a landing page for Prudence Concept business. '
    + 'In this project you will find links that would help you learn more about Prudence Concept and its business operations. Also, you will discover the technologies '
    + 'Prudence Concept uses in delivering high performing web application and the contact section for a DM.',
    tech: ['React', 'JavaScript', 'REST-API', 'Tailwind'],
    alt: 'Project screenshot',
    liveDemo: 'https://prudenceconcept.vercel.app/',
    sourceCode: 'https://github.com/Prudence-Concept/prudenceconcept',
  },
];

export default Data;
