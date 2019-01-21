import * as React from 'react';
import {Guac} from 'guac-hoc/lib/Guac';
import {Route, Switch} from 'react-router-dom';

import {Home} from './Home';
import {Block} from './Block';
import {Txn} from './Txn';

class Pages extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
  }

  render() {
    return (
      <div className={'page'}>
        <Route path='*' render={() => {window.scrollTo(0, 0); return null;}}/>
        <Switch>
          <Route path={'/block/:id/txn/:txnid'} component={Txn}/>
          <Route path={'/block/:id'} component={Block}/>
          <Route path={'/'} component={Home}/>
        </Switch>
      </div>
    );
  }
}

/* More pages
          <Route path='/about' component={About}/>
          <Route path='/blogs' component={Blogs}/>
 */

Pages = Guac(Pages);

export default Pages;
export {Pages};
