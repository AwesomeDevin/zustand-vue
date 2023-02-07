import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, { translate } from '@docusaurus/Translate';

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
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          
          {/* <Translate
            id="homepage.subtitle"
          > */}
            <p className={styles.subtitle1}>
              <Translate>
                你习惯了 Redux 或喜欢 React 的自然不可变更新，但期望
              </Translate>
              <span>&nbsp;
                <Translate>
                  更加轻量、便捷
                </Translate> 
              </span>&nbsp;
              <Translate>的状态管理方案</Translate>
            </p>
            <p className={styles.subtitle2}>
              <Translate id="homepage.subtitle.slot1"> </Translate>
              <span><Translate id="homepage.subtitle.slot2"> </Translate></span>
              <Translate id="homepage.subtitle.slot3"> </Translate>
            </p>
            <p className={styles.subtitle2}>
              <Translate>那么试试</Translate>
              <span>&nbsp;<Translate>小、快、可拓展</Translate>&nbsp;</span> 
              <Translate>的 zustand 吧</Translate>
            </p>
          {/* </Translate> */}
        </p>
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
            to="/docs/introduce/start/zustand-pub">
              <Translate
                id="homepage.title.zustand-pub"
                description="The homepage Button Title"
              >
                跨应用、框架状态共享
            </Translate>
          </Link>
          <Link
            className={clsx('button button--secondary button--lg',styles.btn)}
            to="/docs/introduce/start/zustand-vue">
              <Translate
                id="homepage.title.zustand-vue"
                description="The homepage Button Title"
              >
                Vue 应用 教程 
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`HELLO FROM ${siteConfig.title}`}
      description={translate({id:'seo-description',message:"你习惯了 Redux 或喜欢 React 的自然不可变更新，但期望 更加轻量、便捷 的状态管理方案那么试试 小、快、可拓展 的 Zustand 吧~"})}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
