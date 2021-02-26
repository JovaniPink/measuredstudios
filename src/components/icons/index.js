import React from 'react';
import PropTypes from 'prop-types';

import IconInstagram from './instagram';
import IconLinkedIn from './linkedin';
import IconTwitter from './twitter';
import IconGitHub from './github';
import IconFacebook from './facebook';
import IconExternal from './external';

// Utility function to grab Icons by name
const Icon = ({ name, color }) => {
  switch (name.toLowerCase()) {
    case 'xing':
      return <IconInstagram color={color} />;
    case 'linkedin':
      return <IconLinkedIn color={color} />;
    case 'medium':
      return <IconTwitter color={color} />;
    case 'github':
      return <IconGitHub color={color} />;
    case 'behance':
      return <IconFacebook color={color} />;
    case 'external':
      return <IconExternal color={color} />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Icon;
