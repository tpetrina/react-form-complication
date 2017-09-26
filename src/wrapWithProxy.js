import React from "react"

export const wrapWithProxy = (state, WrappedComponent) =>
  class extends React.Component {
    foos = {}
    state = state || {}

    set = e => {
      this.setState({ [e.target.name]: e.target.value })
    };

    componentWillMount() {
      let proxy = {}

      for (var i in this.state) {
        if (!this.state.hasOwnProperty(i)) continue

        if (typeof this.state[i] === "function") {
          this.foos[i] = state[i].bind(null, proxy)
        } else {
          let key = i
          Object.defineProperty(proxy, key, {
            set: value => this.setState({ [key]: value }),
            get: () => this.state[key]
          })
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
