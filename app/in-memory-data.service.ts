import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let movies = [
      {
        id: 11, 
        title: 'Fantastic Beasts and Where to Find Them (2016)', 
        rating: 4, 
        synopsis: 'The year is 1926 and Newt Scamander has just completed a global excursion to find and document an extraordinary array of magical creatures. Arriving in New York for a brief stopover, he might have come and gone without incident...were it not for a No-Maj (American for Muggle) named Jacob, a misplaced magical case, and the escape of some of Newts fantastic beasts, which could spell trouble for both the wizarding and No-Maj worlds.'
      },
      {
        id: 12, 
        title: 'Avengers: Age of Ultron (2015)', 
        rating: 3, 
        synopsis: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's Mightiest Heroes to stop the villainous Ultron from enacting his terrible plans."
      },
      {
        id: 13, 
        title: 'Vicky Cristina Barcelona (2008)', 
        rating: 3, 
        synopsis: "Sexually adventurous Cristina and her friend Vicky, who is bright but cautious, holiday in Barcelona where they meet the celebrated and wholly seductive painter, Juan Antonio. Vicky is not about to dive into a sexual adventure being committed to her forthcoming marriage. But Cristina is immediately captivated by Juan Antonio's free spirit and his romantic allure is enhanced when she hears the delicious details of his divorce from fellow artist, the tempestuous Maria Elena."
      },
      {
        id: 14, 
        title: 'Definitely, Maybe (2008)', 
        rating: 3, 
        synopsis: "A political consultant tries to explain his impending divorce and past relationships to his 11-year-old daughter."
      },
      {
        id: 15, 
        title: 'Harry Potter and the Deathly Hallows: Part 2 (2011)', 
        rating: 4, 
        synopsis: "Harry, Ron, and Hermione continue their quest of finding and destroying the Dark Lord's three remaining Horcruxes, the magical items responsible for his immortality. But as the mystical Deathly Hallows are uncovered, and Voldemort finds out about their mission, the biggest battle begins and life as they know it will never be the same again."
      },
      {
        id: 16, 
        title: 'Batman v Superman: Dawn of Justice (2016)', 
        rating: 3, 
        synopsis: "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs."
      },
      {
        id: 17, 
        title: 'Ant-Man (2015)', 
        rating: 3, 
        synopsis: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world."
      },
      {
        id: 18, 
        title: 'Man of Steel (2013)', 
        rating: 2, 
        synopsis: "Clark Kent, one of the last of an extinguished race disguised as an unremarkable human, is forced to reveal his identity when Earth is invaded by an army of survivors who threaten to bring the planet to the brink of destruction."
      },
      {
        id: 19, 
        title: 'The Avengers (2012)', 
        rating: 4, 
        synopsis: "Nick Fury is the director of S.H.I.E.L.D., an international peace-keeping agency. The agency is a who's who of Marvel Super Heroes, with Iron Man, The Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When global security is threatened by Loki and his cohorts, Nick Fury and his team will need all their powers to save the world from disaster."
      },
      {
        id: 20, 
        title: 'Captain America: The First Avenger (2011)', 
        rating: 1, 
        synopsis: "It is 1942, America has entered World War II, and sickly but determined Steve Rogers is frustrated at being rejected yet again for military service. Everything changes when Dr. Erskine recruits him for the secret Project Rebirth. Proving his extraordinary courage, wits and conscience, Rogers undergoes the experiment and his weak body is suddenly enhanced into the maximum human potential. When Dr. Erskine is then immediately assassinated by an agent of Nazi Germany's secret HYDRA research department (headed by Johann Schmidt, a.k.a. the Red Skull), Rogers is left as a unique man who is initially misused as a propaganda mascot; however, when his comrades need him, Rogers goes on a successful adventure that truly makes him Captain America, and his war against Schmidt begins."
      }
    ];
    return {movies};
  }
}