import styles from './index.module.scss';
import Image from 'next/image';
import Head from 'next/head';

const Main = () => {
  return (
    <div className={styles.parallax}>
      <Head>
        <title>hcn test</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`body {margin: 0}`}</style>
      </Head>
      <div className={styles.section}>
        <div className={styles.container}>
          <h1>Ever Higher</h1>
        </div>

        <Image
          src="/images/mountainBg.svg"
          layout="fill"
          className={styles.back}
        />
        <Image
          src="/images/mountainFg.svg"
          layout="fill"
          className={styles.middle}
        />
        <div className={styles.front}>
          <Image src="/images/mountainMan.svg" layout="fill" />
        </div>
      </div>
      <div className={styles.static}>
        <div className={styles.container}>
          <h2>Lorem proident reprehenderit</h2>
          <div className={styles.split}>
            <p>
              Lorem proident reprehenderit est ex adipisicing dolor sint ullamco
              aute culpa consequat sunt. Et sint deserunt laboris occaecat
              commodo ex in magna duis incididunt. Nulla laborum minim ad nisi
              nostrud elit officia pariatur laborum reprehenderit ut est. Quis
              Lorem Lorem et reprehenderit proident ut.
            </p>
            <p>
              Lorem proident reprehenderit est ex adipisicing dolor sint ullamco
              aute culpa consequat sunt. Et sint deserunt laboris occaecat
              commodo ex in magna duis incididunt. Nulla laborum minim ad nisi
              nostrud elit officia pariatur laborum reprehenderit ut est. Quis
              Lorem Lorem et reprehenderit proident ut.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bg2}></div>
    </div>
  );
};

export default Main;
