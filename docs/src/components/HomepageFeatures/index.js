import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';


const style={display: 'flex', height: 210, alignItems: 'center', justifyContent: 'center', margin: '20px 0'}

const FeatureList = [
  {
    title: <span className={styles.title}><Translate>状态管理方案轻量，使用简单</Translate></span>,
    Svg: ()=><div style={style}>
      <img src={require('@site/static/img/easy.png').default} width="200" /></div>,
    description: (
      <>
       <Translate>体积极轻，5分钟上手</Translate>
      </>
    ),
  },
  {
    title: <span className={styles.title}>支持 React / Vue 跨应用状态共享</span>,
    Svg: ()=><div style={style}><img src={require('@site/static/img/react.png').default} width="150" /><img src={require('@site/static/img/brands.png').default} width="150" /></div>,
    description: (
      <>
        zustand 自身已支持 react 应用，zustand-vue 支持 Vue 应用，zustand-pub 用于跨应用共享状态管理
      </>
    ),
  },
  {
    title: <span className={styles.title}>拓展性好</span>,
    Svg: ()=><div style={style}>
    <img src={require('@site/static/img/scalable.png').default} width="200" /></div>,
    description: (
      <>
        支持基于 基于 middleware 扩展 store，你可以用任何你喜欢的方式来构建你的 store。
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
