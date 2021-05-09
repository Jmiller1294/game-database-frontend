import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


class ProfilePage extends Component {

  render() {
    return (
      <div>ProfilePage</div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  loggedIn: state.user.loggedIn
})

export default connect(mapStateToProps)(ProfilePage);