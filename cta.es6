import React from 'react';

export default function CallToAction({
  generateClassNameList,
}) {
  return (
    <div
      className={[
        ...generateClassNameList(`ArticleTemplate--app-cta`),
      ].join(' ')}
    >
      <div className="app-cta">
        <div className="app-cta__mobile"><img src="/assets/mobile.png" alt="" /></div>
        <div className="app-cta__text">Thank you for reading The World in 2016. Get access to all
        articles straight away on your mobile device.</div>
        <div className="app-cta__images">
          <div className="app-cta__image app-cta__image--apple">
            <a href="https://itunes.apple.com/gb/app/world-in-2016-insights-predictions/id479904046">
              <img src="/assets/apple.png" alt="Download 'The World In 2016 iOS app'" />
            </a>
          </div>
          <div className="app-cta__image app-cta__image--google">
            <a href="https://play.google.com/store/apps/details?id=com.economist.worldin">
              <img src="/assets/google.png" alt="Download 'The World In 2016 Android app'" />
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
