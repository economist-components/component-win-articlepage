import React from 'react';
import codify from 'slugger';

export default function Industry({
  title,
  children = null,
} = {}) {
  return (
    <div className="industry">
      <header className="industry__header">
        <a name={codify(title, { decode: false })} />
        <h1 className="industry__title" itemProp="name">{title}</h1>
      </header>
      <div className="industry__content">
        {children}
      </div>
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Industry.propTypes = {
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
  };
}
