import * as genresAPI from "./fakeGenreService";

let movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    profile_name: "Muhammad Salman Hafeez",
    username: "sallu_says",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    comments: { name: "Mahjbeen", comment: "Nice" },
    likes: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    posts:"678",
    bios:"Dont DM Me",
    folowers:"5962",
    following:"1230",
    liked:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    profile_name: "Ashiq",
    username: "Ashiq_says",
    comments: { name: "Laiba", comment: "('')" },
    bios:"Jeeta tha tere liy",
    likes: 4,
    posts:"1",
    folowers:"294",
    following:"400",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    liked:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    bios:"Pakistan Zindabad",
   
    profile_name: "Hafeez",
    username: "hafeez543",
    comments: { name: "roxail", comment: "Nice" },
    likes: 3,
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    posts:"1",
    folowers:"664",
    following:"770",
    liked:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    bios:"DM Me gralz",
    title: "Trip to Italy",
    profile_name: "Muhammad Ali",
    username: "Pk123",
    comments: { name: "Ali", comment: "ok" },
    likes: 9,
    posts:"1",
    folowers:"134",
    following:"900",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    bios:"Dont DM Me",
    profile_name: "Jannat Hafeez",
    username: "jannat86",
    comments: { name: "Ahmd", comment: "f" },
    likes: 2,
    posts:"1",
    folowers:"234",
    following:"300",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    profile_name: "Ayesha",
    username: "ayesh653",
    bios:"Dm me for paid shoutOut",
    comments: { name: "Ali", comment: "hell" },
    likes: 1,
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    posts:"1",
    folowers:"654",
    following:"987",
    liked:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    profile_name: "MAlik Kosar",
    bios:"I am Sheikh",
    username: "kosri65",
    comments: { name: "Kaiser", comment: "Nice" },
    likes: 3,
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    posts:"1",
    folowers:"321",
    following:"654",
    liked:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    profile_name: "Zareen Choondi",
    bios:"Papa ki Pari",
    username: "ChoondiPyarDi",
    comments: { name: "Hammad", comment: "K0" },
    likes: 5,
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    posts:"1",
    folowers:"48",
    following:"121",
    liked:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    profile_name: "Alex Braad",
    bios:"DM block",
    username: "alex_123",
    comments: { name: "Ali", comment: "Nice" },
    likes: 7,
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    posts:"1",
    folowers:"333",
    following:"310",
    liked:false
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}

export function Like (id, status){
  let temMovies = movies
  let index
  
  temMovies.forEach((movie, i)=>{
    if(movie._id==id){
      index =  i
    }
  })
  console.log("mymov start", id, status)
  let likedPost= status==1?true:false;
  temMovies[index].liked=likedPost
  let prevLike = temMovies[index].likes
  prevLike = prevLike+(status)
  temMovies[index].likes = prevLike
  movies = temMovies

  
}