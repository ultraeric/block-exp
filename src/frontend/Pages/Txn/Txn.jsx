import * as React from 'react';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';
import {TxnCard} from './components';
import {Row, Col} from 'yui-md/lib';

class Txn extends React.Component {
  constructor() {
    super();
    this.state = {
      inputs: [{blockNum: 123, outputIndex: 0}],
      outputs: [{to: '0x222', amt: 123}]
    };
    this.bindAllMethods();
  }

  render() {
    return (
      <div className={'txn-page'}>
        <TxnCard
          txnHash={'0x1234567890'}
          ownerHash={'0x111'}
          amt={123}
          slot={1}
          inputs={this.state.inputs}
          outputs={this.state.outputs}/>
      </div>
    );
  }
}

Txn = withRouter(Guac(Txn));

export default Txn;
export {Txn};
