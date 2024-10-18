import { PureComponent } from 'react';

type footerProps = {
  copyright: string;
}

export default class Footer extends PureComponent<footerProps> {
  render() {
    return (
      <footer>Footer {this.props.copyright}</footer>
    )
  }
}

