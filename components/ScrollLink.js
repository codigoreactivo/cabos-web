import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Link = ({ to, smooth, duration, offset, children, ...rest }) => {
  return (
    <ScrollLink to={to} smooth={smooth} duration={duration} offset={offset} {...rest}>
      {children}
    </ScrollLink>
  );
};

export default Link;
