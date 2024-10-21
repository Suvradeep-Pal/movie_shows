import { DateTime } from "luxon";
export const movieList = {
  movies: [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      genre: ["Action", "Sci-Fi"],
      director: "Christopher Nolan",
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      rating: 8.8,
      text: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      trailers: [
        {
          title: "Official Trailer",
          url: "https://youtu.be/8hP9D6kZseM?si=ntNwkT9Umtsy0BqA",
        },
      ],
      showTimes: [
        { time: DateTime.now().set({ hour: 9, minute: 0 }) },
        { time: DateTime.now().set({ hour: 12, minute: 0 }) },
        { time: DateTime.now().set({ hour: 14, minute: 0 }) },
      ],
      thumbnail:
        "https://ntvb.tmsimg.com/assets/p7825626_v_h10_aa.jpg?w=960&h=540",
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      year: 1994,
      genre: ["Drama"],
      director: "Frank Darabont",
      cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      rating: 9.3,
      text: "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
      trailers: [
        {
          title: "Official Trailer",
          url: "https://youtu.be/PLl99DlL6b4?si=VZwBjt_wNvBt6fE9",
        },
      ],
      showTimes: [
        { time: DateTime.now().set({ hour: 10, minute: 0 }).plus({ days: 1 }) },
        { time: DateTime.now().set({ hour: 14, minute: 0 }).plus({ days: 1 }) },
        { time: DateTime.now().set({ hour: 18, minute: 0 }).plus({ days: 1 }) },
      ],
      thumbnail:
        "https://thegoodwillblog.in/wp-content/uploads/2023/07/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce._ur19201080_.jpg?w=1568",
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
      genre: ["Action", "Crime, ", "Drama"],
      director: "Christopher Nolan",
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      rating: 9.0,
      text: "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
      trailers: [
        {
          title: "Official Trailer",
          url: "https://youtu.be/EXeTwQWrcwY?si=GnfDYTY0DGC7cpwU",
        },
      ],
      showTimes: [
        { time: DateTime.now().set({ hour: 11, minute: 0 }).plus({ days: 1 }) },
        { time: DateTime.now().set({ hour: 15, minute: 0 }).plus({ days: 2 }) },
        { time: DateTime.now().set({ hour: 19, minute: 0 }).plus({ days: 3 }) },
      ],
      thumbnail:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*nbTYqvBxS320GOdHCvx4sA.jpeg",
    },
    {
      id: 4,
      title: "Pulp Fiction",
      year: 1994,
      genre: ["Crime", "Drama"],
      director: "Quentin Tarantino",
      cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      rating: 8.9,
      text: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      trailers: [
        {
          title: "Official Trailer",
          url: "https://youtu.be/tGpTpVyI_OQ?si=lfXz3GolWctLtKIf",
        },
      ],
      showTimes: [
        { time: DateTime.now().set({ hour: 9, minute: 0 }).plus({ days: 0 }) },
        { time: DateTime.now().set({ hour: 11, minute: 0 }).plus({ days: 0 }) },
        { time: DateTime.now().set({ hour: 13, minute: 0 }).plus({ days: 0 }) },
      ],
      thumbnail:
        "https://waterfire.org/wp-content/uploads/2020/12/maxresdefault-5.jpg",
    },
    {
      id: 5,
      title: "Forrest Gump",
      year: 1994,
      genre: ["Drama, ", "Romance"],
      director: "Robert Zemeckis",
      cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      rating: 8.8,
      text: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
      trailers: [
        {
          title: "Official Trailer",
          url: "https://youtu.be/bLvqoHBptjg?si=ZBJzWKh7LwJZSWqP",
        },
      ],
      showTimes: [
        { time: DateTime.now().set({ hour: 11, minute: 0 }).plus({ days: 2 }) },
        { time: DateTime.now().set({ hour: 13, minute: 0 }).plus({ days: 2 }) },
        { time: DateTime.now().set({ hour: 16, minute: 0 }).plus({ days: 1 }) },
      ],
      thumbnail:
        "https://ntvb.tmsimg.com/assets/p15829_v_h8_aw.jpg?w=960&h=540",
    },
    {
      id: 6,
      title: "The Matrix",
      year: 1999,
      genre: ["Action", "Sci-Fi"],
      director: "Lana Wachowski, Lilly Wachowski",
      cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      rating: 8.7,
      text: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      trailers: [
        {
          title: "Official Trailer",
          url: "https://youtu.be/vKQi3bBA1y8?si=xO6QjXHrWpAdumOR",
        },
      ],
      showTimes: [
        { time: DateTime.now().set({ hour: 10, minute: 0 }).plus({ days: 1 }) },
        { time: DateTime.now().set({ hour: 12, minute: 0 }).plus({ days: 1 }) },
        { time: DateTime.now().set({ hour: 14, minute: 0 }).plus({ days: 1 }) },
      ],
      thumbnail:
        "https://www.radiollanuradecolon.icrt.cu/wp-content/uploads/2024/04/The-Matrix-1-675x360.jpg",
    },
    {
      id: 7,
      title: "Fight Club",
      year: 1999,
      genre: ["Drama"],
      director: "David Fincher",
      cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
      rating: 8.8,
      text: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      trailers: [
        {
          title: "Official Trailer",
          url: "https://youtu.be/qtRKdVHc-cE?si=PSoFhaN4w-QvGZmM",
        },
      ],
      showTimes: [
        { time: DateTime.now().set({ hour: 12, minute: 0 }).plus({ days: 1 }) },
        { time: DateTime.now().set({ hour: 15, minute: 0 }).plus({ days: 2 }) },
        { time: DateTime.now().set({ hour: 19, minute: 0 }).plus({ days: 3 }) },
      ],
      thumbnail:
        "https://static.toiimg.com/thumb/msid-105908016,imgsize-85016,width-400,resizemode-4/105908016.jpg",
    },
    {
      id: 8,
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
      genre: ["Action", "Adventure", "Drama"],
      director: "Peter Jackson",
      cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
      rating: 8.9,
      text: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      trailers: [
        {
          title: "Official Trailer",
          url: "https://youtu.be/r5X-hFf6Bwo?si=Gb1yo_msQ4LNnanx",
        },
      ],
      showTimes: [
        { time: DateTime.now().set({ hour: 13, minute: 0 }).plus({ days: 0 }) },
        { time: DateTime.now().set({ hour: 16, minute: 0 }).plus({ days: 0 }) },
        { time: DateTime.now().set({ hour: 18, minute: 0 }).plus({ days: 0 }) },
      ],
      thumbnail:
        "https://facts.net/wp-content/uploads/2023/06/49-facts-about-the-movie-the-lord-of-the-rings-the-return-of-the-king-1687250236.jpg",
    },
    {
      id: 9,
      title: "The Godfather",
      year: 1972,
      genre: ["Crime, ", "Drama"],
      director: "Francis Ford Coppola",
      cast: ["Marlon Brando", "Al Pacino", "James Caan"],
      rating: 9.2,
      text: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      trailers: [
        {
          title: "Official Trailer",
          url: "https://youtu.be/UaVTIH8mujA?si=gYP2vk6rmhvn0_6y",
        },
      ],
      showTimes: [
        { time: DateTime.now().set({ hour: 11, minute: 0 }).plus({ days: 1 }) },
        { time: DateTime.now().set({ hour: 15, minute: 0 }).plus({ days: 0 }) },
        { time: DateTime.now().set({ hour: 19, minute: 0 }).plus({ days: 3 }) },
      ],
      thumbnail:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Nxaz2PmGHZYJv0gIcBOOWg.jpeg",
    },
    {
      id: 10,
      title: "The Social Network",
      year: 2010,
      genre: ["Biography", "Drama"],
      director: "David Fincher",
      cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
      rating: 7.7,
      text: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea and by the co-founder who was later squeezed out of the business.",
      trailers: [
        {
          title: "Official Trailer",
          url: "https://youtu.be/lB95KLmpLR4?si=FnwxWzgbaTrN5hOF",
        },
      ],
      showTimes: [
        { time: DateTime.now().set({ hour: 10, minute: 0 }).plus({ days: 0 }) },
        { time: DateTime.now().set({ hour: 13, minute: 0 }).plus({ days: 1 }) },
        { time: DateTime.now().set({ hour: 16, minute: 0 }).plus({ days: 2 }) },
      ],
      thumbnail:
        "https://static.wixstatic.com/media/0e78f4_91532b7df4aa4103a8eecbf52be71305~mv2.jpeg/v1/fill/w_438,h_246,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0e78f4_91532b7df4aa4103a8eecbf52be71305~mv2.jpeg",
    },
  ],
};
