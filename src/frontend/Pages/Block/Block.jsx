import * as React from 'react';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';
import {BlockCard} from './components';
import {Row, Col} from 'yui-md/lib';

class Block extends React.Component {
  constructor() {
    super();
    this.state = {
      txns: [{amt: 123, from: '0x000', to: '0x111', slot: 1, hash: '0x1234567890'}]
    };
    this.bindAllMethods();
  }

  render() {
    return (
      <div className={'block-page'}>
        <BlockCard
          date={'12/10/18 4:12 PM'}
          blockNum={12345}
          blockHash={'0x1234567890'}
          txns={this.state.txns}/>
      </div>
    );
  }
}

Block = withRouter(Guac(Block));

export default Block;
export {Block};
