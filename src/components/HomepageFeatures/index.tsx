import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        Use the Fullup API ecosystem, including webhooks, to integrate with any
        third-party service.
      </>
    ),
  },
  {
    title: 'Flexible',
    Svg: require('@site/static/img/flexibility.svg').default,
    description: (
      <>
        Fullup APIs are built with a flexible architecture that allow you to
        customize them to your needs.
      </>
    ),
  },
  {
    title: 'Powerful',
    Svg: require('@site/static/img/energetic.svg').default,
    description: (
      <>
        Extend the functionality of your Fullup site with Fullup APIs and amaze
        your customers with a powerful, feature-rich site.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
