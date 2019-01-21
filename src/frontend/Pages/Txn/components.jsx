import * as React from 'react';
import {Card, CardTextArea} from 'yui-md/lib/Card';
import {withRouter} from 'react-router';
import {Row, Col} from 'yui-md/lib';
import {Divider} from 'yui-md/lib/Divider';

function createInput(blockNum, outputIndex, index) {
  return (
    <div id={index}>
      <div className={'list-item-header'}>Input {index}:</div>
      <Row>
        <Col xs={3} className={'label'}>Block #:<br/> Output Index:</Col>
        <Col xs={9}>{blockNum}<br/>{outputIndex}</Col>
      </Row>
    </div>
  );
}

function createOutput(to, amt, index) {
  return (
    <div id={index}>
      <div className={'list-item-header'}>Output {index}:</div>
      <Row>
        <Col xs={2} className={'label'}>To:<br/> Amount:</Col>
        <Col xs={10}>{to}<br/>{amt}</Col>
      </Row>
    </div>
  );
}

/**
 * Available props:
 * - txnHash <str>
 * - ownerHash <str>
 * - amt <int>
 * - slot <int>
 * - inputs <list<input>>
 * - outputs <list<output>>
 */
class TxnCard extends React.Component {
  render() {
    return (
      <Card vertical depth={1}>
        <CardTextArea>
          <div className={'title'}>Transaction</div>
          <div className={'subheader'}><b>Txn Hash:</b> <span className={'hash'}>{this.props.txnHash}</span></div>
          <div className={'subheader'}><b>Owner:</b> <span className={'hash'}>{this.props.ownerHash}</span></div>
          <div>
            <Row style={{fontWeight: 'bold'}}><Col xs={6}>Inputs</Col><Col xs={6}>Outputs</Col></Row>
            <Divider horizontal margin/>
            <div><Row>
              <Col xs={6}>{this.props.inputs.map((input, i) => createInput(input.blockNum, input.outputIndex, i))}</Col>
              <Col xs={6}>{this.props.outputs.map((output, i) => createOutput(output.to, output.amt, i))}</Col>
            </Row></div>
          </div>
        </CardTextArea>
      </Card>
    );
  }
}

TxnCard = withRouter(TxnCard);


export default TxnCard;
export {TxnCard};