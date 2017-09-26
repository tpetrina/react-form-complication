import React, { Component } from "react"

import { RegisterForm } from "./RegisterForm"
import { wrap } from "./wrap"

let registration = {
  username: "username",
  password: "password",
  isRegistering: false,

  onRegister: r => {
    r.setState({ isRegistering: true })
    setTimeout(() => {
      r.setState({ isRegistering: false })
    }, 2000)
  },

  setUsername: (r, e) => {
    let value = e.target.value
    value = value.replace("-", "")
    r.setState({ username: value })
  }
}

export const WrappedRegisterForm = wrap(registration, RegisterForm)
