import type { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getFilms } from '~/api/film';
import type { Film } from '~/api/film';

// SERVER SIDE
export const loader: LoaderFunction = async () => {
  return getFilms();
};

// CLIENT SIDE
export const meta: MetaFunction = () => {
  return {
    title: 'Films | Studio Ghibli',
    description: 'A list of films'
  };
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: '/films.css' }];
};

const Films = () => {
  const data = useLoaderData<Film[]>();

  return (
    <div className="p-16 font-sans">
      <h1 className="text-5xl font-bold text-center">Studio Ghibli Films</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((film) => (
          <div
            key={film.id}
            className="cursor-pointer hover:shadow-2xl hover:scale-105 hover:font-bold"
          >
            <h2>{film.title}</h2>
            <img src={film.image} alt={film.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Films;
