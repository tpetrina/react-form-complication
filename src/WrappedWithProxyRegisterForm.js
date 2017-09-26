import React, { Component } from "react"

import { RegisterForm } from "./RegisterForm"
import { wrapWithProxy } from "./wrapWithProxy"

let registrationWithProxy = {
  username: "username",
  password: "password",
  isRegistering: false,

  onRegister: r => {
    r.isRegistering = true
    setTimeout(() => {
      r.isRegistering = false
    }, 2000)
  },

  setUsername: (r, e) => {
    let value = e.target.value
    value = value.replace("-", "")
    r.username = value
  }
}

export const WrappedWithProxyRegisterForm = wrapWithProxy(
  registrationWithProxy,
  RegisterForm
)
