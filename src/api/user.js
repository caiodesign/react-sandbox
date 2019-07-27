const UserProvider = {
  getUserProfile: () => fetch('/v1/user', { method: 'GET' }),
}

export default UserProvider
