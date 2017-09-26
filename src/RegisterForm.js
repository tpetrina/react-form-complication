import React from "react"

export const RegisterForm = ({
  username,
  password,
  onRegister,
  isRegistering,
  setUsername,
  set
}) => (
  <div>
    <h1>Register</h1>
    <div>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={setUsername}
      />
    </div>
    <div>
      <label>Password</label>
      <input type="password" name="password" value={password} onChange={set} />
    </div>

    {isRegistering ? "registering..." : false}

    <div>
      <button onClick={onRegister} disabled={isRegistering}>
        register
      </button>
    </div>
  </div>
)
