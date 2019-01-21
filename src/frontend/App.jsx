import * as React from 'react';
import {Route} from 'react-router-dom';

import {Content} from 'yui-md/lib/Content';

import {Header} from './Header';
import {Pages} from './Pages';
import {Footer} from './Footer';


class App extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <Route path={'/'}>
        <div className={'app-root'}>
          <Header/>
          <Content footerComponent={<Footer/>}>
            <Pages/>
          </Content>
        </div>
      </Route>
    );
  }
}

export default App;
export {App};
