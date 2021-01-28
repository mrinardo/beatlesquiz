import React from 'react';
import Head from 'next/head';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import db from '../db.json';

export default function Quiz() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Beatles Quiz - Imersão React Alura</title>
        <meta property="og:image" content={db.bg} />
      </Head>
      <div>
        {name}
      </div>
      <GitHubCorner projectUrl="https://github.com/mrinardo" />
    </QuizBackground>
  );
}
