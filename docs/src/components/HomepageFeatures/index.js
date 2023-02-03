import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';


const style={display: 'flex', height: 210, alignItems: 'center', justifyContent: 'center', margin: '20px 0'}

const FeatureList = [
  {
    title: <span className={styles.title}><Translate>轻量，使用简单</Translate></span>,
    Svg: ()=><div style={style}>
      <img src={require('@site/static/img/easy.png').default} width="200" /></div>,
    description: (
      <>
       <Translate id="homepage.feature.zustand.desc1">体积极轻，5分钟上手。</Translate>
      </>
    ),
  },
  {
    title: <span className={styles.title}><Translate>支持 React / Vue 跨应用状态共享</Translate></span>,
    Svg: ()=><div style={style}><img src={require('@site/static/img/react-vue.png').default} width="370" /></div>,
    description: (
      <>
        <Translate id="homepage.feature.zustand-pub.desc1">对模块化、组件化、微前端等业务场景，提供</Translate><span><Translate id="homepage.feature.zustand-pub.desc2">跨应用、跨框架</Translate></span><Translate id="homepage.feature.zustand-pub.desc3">的状态管理能力。</Translate>
      </>
    ),
  },
  {
    title: <span className={styles.title}><Translate>拓展性好</Translate></span>,
    Svg: ()=><div style={style}>
    <img src={require('@site/static/img/scalable.png').default} width="200" /></div>,
    description: (
      <>
        <Translate id="homepage.feature.zustand-vue.desc1">支持基于</Translate><span>middleware</span><Translate id="homepage.feature.zustand-vue.desc2">扩展 store，你可以用任何你喜欢的方式来构建你的 store。</Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
