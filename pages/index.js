import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Button from '../src/components/Button';
import Input from '../src/components/Input';
import Link from '../src/components/Link';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Beatles Quiz - Imersão React Alura</title>
        <meta property="og:image" content={db.bg} />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, x: '0' },
            hidden: { opacity: 0, x: '-100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (e) {
              e.preventDefault();

              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="NomeDoUsuario"
                // eslint-disable-next-line react/jsx-no-bind
                onChange={(e) => setName(e.target.value)}
                placeholder="Qual é o seu nome?"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0} title="Iniciar quiz!">
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, x: '0' },
            hidden: { opacity: 0, x: '-100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <ul>
              {db.external.map((link) => {
                const [projectName, userName] = link.replace(/\//g, '')
                  .replace('.vercel.app', '')
                  .replace('https:', '')
                  .split('.');

                const textDoLink = `${projectName}/${userName}`;

                return (
                  <li key={link}>
                    <Widget.Topic
                      as={Link}
                      href={name.length > 0 ? `/quiz/${projectName}___${userName}` : '/'}
                      data-disabled={name.length === 0}
                      title={`Acessar quiz ${projectName.toUpperCase()} de ${userName.toUpperCase()}...`}
                    >
                      {textDoLink}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/mrinardo" />
    </QuizBackground>
  );
}
