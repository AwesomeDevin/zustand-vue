import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header 
      className={clsx('hero hero--primary', styles.heroBanner)} 
      // style={{backgroundImage: `url(${require('@site/static/img/bear.png').default})`}}
    >
      <div className={clsx('container', styles.con)}>
        <h1 className={clsx("hero__title", styles.title)}>{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Link
            className={clsx('button button--secondary button--lg',styles.btn)}
            to="/docs/introduce/start/zustand">
              <Translate
                id="homepage.title.zustand"
                description="The homepage Button Title"
              >
                React 应用 教程 
            </Translate>
          </Link>
          <Link
            className={clsx('button button--secondary button--lg',styles.btn)}
            to="/docs/introduce/start/zustand-vue">
              <Translate
                id="homepage.title.zustand_vue"
                description="The homepage Button Title"
              >
                Vue 应用 教程 
            </Translate>
          </Link>
          {/* <Link
            className={clsx('button button--secondary button--lg',styles.btn)}
            to="/docs/introduce/what-is-zustand">
              <Translate
                id="homepage.title.zustand_pub"
                description="The homepage Button Title"
              >
                zustand-pub 教程 
            </Translate>
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
