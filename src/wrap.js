import React from "react"

export const wrap = (state, WrappedComponent) =>
  class extends React.Component {
    foos = {}
    state = state || {}

    set = e => {
      this.setState({ [e.target.name]: e.target.value })
    };

    componentWillMount() {
      for (var i in this.state) {
        if (!this.state.hasOwnProperty(i)) continue

        if (typeof this.state[i] === "function") {
          this.foos[i] = state[i].bind(null, this)
        }
      }
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          {...this.foos}
          set={this.set}
        />
      )
    }
  }
