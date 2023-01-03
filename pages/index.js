import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Supantha Paul. I'm a software engineer and indie game developer. You can find me on <a href="https://twitter.com/supanthapaul">Twitter</a>.</p>
      </section>
    </Layout>
  );
}