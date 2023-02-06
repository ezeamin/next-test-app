'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './movie.module.css';

const Movie = (props) => {
  const { id, title, poster_path, release_date } = props;

  const imagePath = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <article className={styles.movie}>
      <h3>{title}</h3>
      <h4>Release: {release_date}</h4>
      <Link href={`/${id}`}>See more</Link>
      <Image src={imagePath} alt={title} width={300} height={300} />
    </article>
  );
};

export default Movie;
