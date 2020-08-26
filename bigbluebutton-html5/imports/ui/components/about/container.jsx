import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import AboutComponent from './component';

const AboutContainer = props => (
  <AboutComponent {...props}>
    {props.children}
  </AboutComponent>
);

const getClientBuildInfo = function () {
  return {
    companyName: Meteor.settings.public.app.companyName,
    copyright: Meteor.settings.public.app.copyright,
    companyPhone: Meteor.settings.public.app.companyPhone,
    companyAddress: Meteor.settings.public.app.companyAddress,
    clientBuild: Meteor.settings.public.app.html5ClientBuild,
  };
};

export default withTracker(() => getClientBuildInfo())(AboutContainer);
