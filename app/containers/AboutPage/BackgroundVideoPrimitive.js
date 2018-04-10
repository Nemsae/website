import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class BackgroundVideo extends React.PureComponent {
// const BackgroundVideo = ({ ...props }) => {
  render() {
    console.log('<BackgroundVideo />     rendered!!!');     //  eslint-disable-line no-console
    // console.log('this.props: ', this.props);
    // console.log('this.props.className: ', this.props.className);
    const BackgroundVideoPrimitive = styled.video`
      ${''/* height: 100vh; */}
      height: 100%;
      max-width: 100%;

      background: transparent;
    `;

    return (
      <BackgroundVideoPrimitive {...this.props} autoPlay>{ this.props.children }</BackgroundVideoPrimitive>
    );
  }
}

BackgroundVideo.propTypes = {
  children: PropTypes.any,
  // className: PropTypes.string,
};

export default BackgroundVideo;
