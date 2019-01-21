import * as React from 'react';
import {Guac} from 'guac-hoc/lib/Guac';
import {StickyFooter} from 'shared/components/StickyFooter';

class Footer extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
  }

  className() {
    let className = 'footer';
    return className;
  }

  render() {
    return (
      <StickyFooter className={this.className()}>
        Copyright © 2018 FourthState Labs Inc. All rights reserved.
        Designed by&nbsp;<a href={'https://www.linkedin.com/in/erichouca/'}>Eric Hou</a>.
      </StickyFooter>
    );
  }
}

Footer = Guac(Footer);

export default Footer;
export {Footer};
