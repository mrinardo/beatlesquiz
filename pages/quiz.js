import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import db from '../db.json';

export default function Quiz() {
  const router = useRouter();
  const { name } = router.query;

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
