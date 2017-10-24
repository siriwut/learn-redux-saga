import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as searchAction from './search-action'
import SearchBox from './SearchBox'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  handleSubmit = () => {
    const { searchKeyword } = this.props

    this.props.search(searchKeyword)
  }

  onChangeSearchKeyword = (event) => {
    const { value } = event.target
    const { searchKeyword } = this.props

    this.props.changeSearchKeyword(value)
  }

  render() {
    const { searchKeyword } = this.props

    return (
      <SearchBox
        value={ searchKeyword }
        onChange={ this.onChangeSearchKeyword }
        onSubmit={ this.handleSubmit } />
    )
  }
}

App.propTypes = {
  searchKeyword: PropTypes.string,
  search: PropTypes.func,
  changeSearchKeyword: PropTypes.func,
}

const mapStateToProps = state => ({
  searchKeyword: state.search.searchKeyword,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  search: searchAction.search,
  changeSearchKeyword: searchAction.changeSearchKeyword
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
