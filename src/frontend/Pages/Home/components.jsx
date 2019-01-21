import * as React from 'react';
import {Guac} from 'guac-hoc/lib/Guac';
import {Card, CardTextArea} from 'yui-md/lib/Card';
import {withRouter} from 'react-router';

/**
 * Available props:
 * - date <str>
 * - blockNum <int>
 * - blockHash <str>
 * - numTxns <int>
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
          <div>{this.props.numTxns} <b>Transactions:</b></div>
        </CardTextArea>
      </Card>
    );
  }
}

BlockCard = withRouter(BlockCard);


export default BlockCard;
export {BlockCard};