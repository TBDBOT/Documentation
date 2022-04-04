import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Auto Moderation',
    description: (
      <>
        With this feature heavy system, you can easily detect bad behaviour and punish the user behind it.
      </>
    ),
  },
  {
    title: '99.99% Uptime',
    description: (
      <>
        R-Tex is online, 24/7 meaning you do not have to worry over downtimes.
      </>
    ),
  },
  {
    title: 'Ticket System',
    description: (
      <>
        R-Tex comes with an amazing tickets system, allowing you to talk privately to members from the comfort of your server.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

const FeatureList2 = [
  {
    title: 'Customisable Logging',
    description: (
      <>
        Want to see that deleted message? Our logging allows you to select a different channel for each log so you can effectively manage your members.
      </>
    )
  },
  {
    title: 'Moderation',
    description: (
      <>
        Easily and efficently manage and punish members with commands from within your server. You can timeout, kick, ban and more!
      </>
    )
  }
];

/*function Feature2({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> *//*}
</div>
<div className="text--center padding-horiz--md">
<h3>{title}</h3>
<p>{description}</p>
</div>
</div>
)
}*/

export default function HomepageFeatures() {
  return (
    <div>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList2.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
