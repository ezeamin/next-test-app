import BackButton from '@/components/common/BackButton';
import Image from 'next/image';

const fetchMovies = async (id) => {
  const API_KEY = process.env.API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ES`,
    {
      next: { revalidate: 20 },
    }
  );
  return await res.json();
};

const MovieDetail = async (props) => {
  const {
    params: { id },
  } = props;

  const movie = await fetchMovies(id);
  const backdropPath = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const imagePath = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <section>
      <BackButton />
      <article className='flex justify-between'>
        <div>
          <h1 className='text-2x1 font-bold'>{movie.title}</h1>
          <h2>Fecha de estreno: {movie.release_date}</h2>
          <h2>Duración: {movie.runtime} minutos</h2>
          <h2 className='text-small bg-green-600 inline-block my-2 py-2 px-4 rounded-md'>
            {movie.status}
          </h2>
        </div>
        <Image
          priority
          className='rounded-md'
          src={imagePath}
          alt={movie.title}
          width={100}
          height={100}
        />
      </article>
      <Image
        priority
        className='my-12 rounded-md'
        src={backdropPath}
        alt={movie.title}
        width={800}
        height={800}
      />
      <p>{movie.overview}</p>
    </section>
  );
};

export default MovieDetail;
