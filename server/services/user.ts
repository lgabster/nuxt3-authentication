import users from '~~/server/mock/users'

export async function getUsers() {
  return users
}

export async function getUserByEmail(email: string) {
  return users.find(user => user.email === email)
}

export async function getUserById(id: string) {
  return users.find(user => user.id === id)
}

export async function isAdmin(user: any) {
  return user && user.roles.includes('ADMIN')
}
