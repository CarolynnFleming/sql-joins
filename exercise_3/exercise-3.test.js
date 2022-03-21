const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 3', () => {
  afterAll(() => pool.end());

  it('find all film titles with the category Action', async() => {
    const { rows } = await pool.query(fs.readFileSync(`${__dirname}/exercise-3.sql`, 'utf-8'));
    expect(rows).toEqual([
      { title: 'Amadeus Holy' },
      { title: 'American Circus' },
      { title: 'Antitrust Tomatoes' },
      { title: 'Ark Ridgemont' },
      { title: 'Barefoot Manchurian' },
      { title: 'Berets Agent' },
      { title: 'Bride Intrigue' },
      { title: 'Bull Shawshank' },
      { title: 'Caddyshack Jedi' },
      { title: 'Campus Remember' },
      { title: 'Casualties Encino' },
      { title: 'Celebrity Horn' },
      { title: 'Clueless Bucket' },
      { title: 'Crow Grease' },
      { title: 'Dances None' },
      { title: 'Darko Dorado' },
      { title: 'Darn Forrester' },
      { title: 'Devil Desire' },
      { title: 'Dragon Squad' },
      { title: 'Dream Pickup' },
      { title: 'Drifter Commandments' },
      { title: 'Easy Gladiator' },
      { title: 'Entrapment Satisfaction' },
      { title: 'Excitement Eve' },
      { title: 'Fantasy Troopers' },
      { title: 'Firehouse Vietnam' },
      { title: 'Fool Mockingbird' },
      { title: 'Forrest Sons' },
      { title: 'Glass Dying' },
      { title: 'Gosford Donnie' },
      { title: 'Grail Frankenstein' },
      { title: 'Handicap Boondock' },
      { title: 'Hills Neighbors' },
      { title: 'Kissing Dolls' },
      { title: 'Lawrence Love' },
      { title: 'Lord Arizona' },
      { title: 'Lust Lock' },
      { title: 'Magnolia Forrester' },
      { title: 'Midnight Westward' },
      { title: 'Minds Truman' },
      { title: 'Mockingbird Hollywood' },
      { title: 'Montezuma Command' },
      { title: 'Park Citizen' },
      { title: 'Patriot Roman' },
      { title: 'Primary Glass' },
      { title: 'Quest Mussolini' },
      { title: 'Rear Trading' },
      { title: 'Rings Heartbreakers' },
      { title: 'Rugrats Shakespeare' },
      { title: 'Shrunk Divine' },
      { title: 'Side Ark' },
      { title: 'Sky Miracle' },
      { title: 'South Wait' },
      { title: 'Speakeasy Date' },
      { title: 'Stagecoach Armageddon' },
      { title: 'Story Side' },
      { title: 'Suspects Quills' },
      { title: 'Trip Newton' },
      { title: 'Truman Crazy' },
      { title: 'Uprising Uptown' },
      { title: 'Waterfront Deliverance' },
      { title: 'Werewolf Lola' },
      { title: 'Women Dorado' },
      { title: 'Worst Banger' },
    ]);
  });
});
