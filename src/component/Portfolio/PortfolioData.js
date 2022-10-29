import gitFinder from '../../assets/images/GithubFinder.jpeg';
import conferenceApp from '../../assets/images/conferenceBookingApp.jpeg';
import nasaMediaLibrary from '../../assets/images/nasaMediaLibrary.jpeg';

const Data = [
  {
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
    screenShot: nasaMediaLibrary,
    title: 'Nasa Media Library',
    description: 'This web application gets NASA media library data of different centers. User can filter search by some parameters such as start and end date and will be able to search individual media items using item properties such as title, photographer, center etc.',
    tech: ['React', 'JavaScript', 'REST-API', 'Tailwind'],
    alt: 'Project screenshot',
    liveDemo: 'https://nasa-media-library.herokuapp.com/',
    sourceCode: 'https://github.com/KingsleyIbe/NAZA-media-library',
  },
];

export default Data;
