import Movie from '@/components/home/Movie';

const fetchMovies = async () => {
  const API_KEY = process.env.API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&region=AR&language=ES`
  );
  return await res.json();
};

export const generateStaticParams = async () => {
  const movies = await fetchMovies();

  return movies.results.map((movie) => ({
    id: movie.id.toString()
  }));
};

const Home = async () => {
  const movies = await fetchMovies();

  return (
    <main>
      <section className='grid gap-16 grid-cols-fluid'>
        {movies.results.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </section>
    </main>
  );
};

export default Home;
