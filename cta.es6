import React from 'react';

export default function CallToAction({
  generateClassNameList = (defaultClass) => (defaultClass),
}) {
  return (
    <div
      className={[
        ...generateClassNameList(`ArticleTemplate--app-cta`),
      ].join(' ')}
    >
      <div className="app-cta">
        <div className="app-cta__mobile"><img src="/assets/mobile.svg" alt="" /></div>
        <div className="app-cta__text">You are reading a small selection of content from <i>The World in 2016</i>.
        To read all the articles in this year&rsquo;s edition download <i>The World in 2016</i> app.</div>
        <div className="app-cta__images">
          <div className="app-cta__image app-cta__image--apple">
            <a href={`https://188807.measurementapi.com/serve?action=click&
              publisher_id=188807&site_id=111257&agency_id=96&
              my_campaign=Web_theworldin_marketingpages_ios`}
            >
              <img src="/assets/apple.svg" alt="Download 'The World In 2016 iOS app'" />
            </a>
          </div>
          <div className="app-cta__image app-cta__image--google">
            <a href={`https://188807.measurementapi.com/serve?action=click&
              publisher_id=188807&site_id=111259&agency_id=96&
              my_campaign=Web_Theworldin_marketingpages_Android`}
            >
              <img src="/assets/google.svg" alt="Download 'The World In 2016 Android app'" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  CallToAction.propTypes = {
    generateClassNameList: React.PropTypes.func,
  };
}
