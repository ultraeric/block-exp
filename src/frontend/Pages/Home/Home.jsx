import * as React from 'react';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';
import {BlockCard} from './components';
import {Row, Col} from 'yui-md/lib';

class Home extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
  }

  render() {
    return (
      <div className={'home-page'}>
        <Row>
          <Col xs={12} md={6}>
            <div className={'title'} style={{marginLeft: '10px'}}>Plasma Testnet</div>
            <BlockCard
              date={'12/10/18 4:12 PM'}
              blockNum={12345}
              blockHash={'0x1234567890'}
              numTxns={123}/>
          </Col>
          <Col xs={12} md={6}>
            <div className={'title'} style={{marginLeft: '10px'}}>Ethereum Mainnet</div>
            <BlockCard
              date={'12/10/18 4:12 PM'}
              blockNum={12345}
              blockHash={'0x1234567890'}
              numTxns={123}/>
          </Col>
        </Row>
      </div>
    );
  }
}

Home = withRouter(Guac(Home));

export default Home;
export {Home};
