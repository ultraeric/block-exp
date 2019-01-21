import * as React from 'react';
import {Guac} from 'guac-hoc/lib/Guac';

import {AppBar} from 'yui-md/lib/AppBar';
import logo from 'static/images/logos/logo.png';


class Header extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
  }

  render() {
    return (
      <AppBar height={68}
              style={{paddingTop: '0px', boxSizing: 'border-box', paddingBottom: '12px'}}
              className={'z-depth-1'}
              backgroundColor={'white'}>
        <a href={'/'}>
          <img style={{display: 'inline-block',
            height: '40px',
            marginBottom: '-8px'}}
               src={logo}/>
        </a>
        <h4 id={'fourthstate-logo-text'}
            onClick={() => window.location.href = '/'}>&nbsp;&nbsp;Block Explorer</h4>
      </AppBar>
    );
  }
}

Header = Guac(Header);

export default Header;
export {Header};
