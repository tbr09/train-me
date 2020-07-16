export class Constants {
  static auth = {
    // auth0
    apiRoot: 'https://localhost:5001',
    stsAuthority: 'https://xxxxxxxx.auth0.com/',
    clientId: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
    clientRoot: 'http://localhost:4200/',

    // local
    // apiRoot: 'http://localhost:2112/api/',
    // stsAuthority: 'http://localhost:4242/',
    // clientRoot: 'http://localhost:4200/',
    // clientId: 'spa-client',
  };

  static categories = [
    'Calisthenics',
    'Strength',
    'Durability',
    'Speed',
    'Stretching',
  ];

  static bodyParts = ['Legs', 'Arms', 'Chest', 'Back', 'Butt'];

  static trainingTypes = [
    'Split',
    'Push-pull',
    '5x5',
    'Condition',
    'Full Body Workout',
  ];

  static config = {
     apiUrl: 'https://localhost:5001',
    // apiUrl: 'https://trainme-webapp-cdn-dev.azurewebsites.net',
  };
}
