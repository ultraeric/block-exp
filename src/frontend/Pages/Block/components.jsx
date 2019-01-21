import * as React from 'react';
import {Guac} from 'guac-hoc/lib/Guac';
import {Card, CardTextArea} from 'yui-md/lib/Card';
import {withRouter} from 'react-router';
import {Row, Col} from 'yui-md/lib';
import {Divider} from 'yui-md/lib/Divider';

class TxnRow extends React.Component {
  render() {
    let url = '/block/' + this.props.blockHash + '/txn/' + this.props.hash;

    return (
      <Row id={this.props.slot}
           style={{display: 'flex'}}
           className={this.props.bold ? 'bold-row' : 'clickable'}
           onClick={() => {if (!this.props.bold) { this.props.history.push(url); }}}>
        <Col xs={2}>{this.props.amt}</Col>
        <Col xs={4}>{this.props.from}</Col>
        <Col xs={4}>{this.props.to}</Col>
        <Col xs={2}>{this.props.slot}</Col>
      </Row>
    );
  }
}

TxnRow = withRouter(TxnRow);


function createRow(amt, from, to, slot, hash, blockHash, bold=false) {
  return ( <TxnRow amt={amt} from={from} to={to} slot={slot} bold={bold} hash={hash} blockHash={blockHash}/>);
}

/**
 * Available props:
 * - date <str>
 * - blockNum <int>
 * - blockHash <str>
 * - txns <list<txn>>
 */
class BlockCard extends React.Component {
  render() {
    return (
      <Card vertical depth={1} id={this.props.blockNum}>
        <CardTextArea>
          <div className={'title'}>Block&nbsp;
            <a onClick={() => {this.props.history.push('/block/' + this.props.blockNum)}} className={'link'}>
              #{this.props.blockNum}
            </a>
          </div>
          <div className={'subheader'}>{this.props.date}</div>
          <div className={'subheader'}><b>Block Hash:</b> <span className={'hash'}>{this.props.blockHash}</span></div>
          <div>{this.props.txns.length} <b>Transactions:</b></div>
          <div>
            {createRow('Amount', 'From', 'To', 'Slot', null, null, true)}
            <Divider horizontal margin/>
            {this.props.txns.map((txn) => createRow(txn.amt, txn.from, txn.to, txn.slot, txn.hash, this.props.blockHash))}
          </div>
        </CardTextArea>
      </Card>
    );
  }
}

BlockCard = withRouter(BlockCard);


export default BlockCard;
export {BlockCard};