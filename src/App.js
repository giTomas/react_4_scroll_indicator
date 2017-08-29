import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import throttle from 'lodash.throttle';
// import actionCreators from './redux/actionCreators';
import Page from './styled/page';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: 0,
      scrollDown: false,
      scrollUp: false,
      showElement: true,
      progress: 0,
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 100), false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.handleScroll, 100), false);
  }

  handleScroll = () => {
    const scrollY = parseInt(window.pageYOffset);
    const height = this.refElem.offsetHeight
    const wHeight = window.innerHeight
    const progress = Math.ceil(scrollY / ((height-wHeight)/100))
    this.setState({progress});
  }

  render() {
    return (
      <Page
        progress={this.state.progress}
        parentRef={(elem) => {this.refElem = elem}}
      />
    );
  }
}

export default App;
