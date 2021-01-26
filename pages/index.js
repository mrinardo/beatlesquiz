import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'

export default function Home() {
  return (
  <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Beatles Quiz - Imersão React Alura</title>
        <meta property="og:image" content={db.bg} />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/mrinardo" />
    </QuizBackground>
  );
}
