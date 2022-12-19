export type Film = {
  id: string;
  title: string;
  original_title: string;
  description: string;
  image: string;
  movie_banner: string;
  people: string[];
};

export async function getFilms(): Promise<Film[]> {
  const res = await fetch('https://ghibliapi.herokuapp.com/films');
  const films: Film[] = await res.json();
  return films;
}
