import type { User } from '~~/types'

// Fake users data
const users: User[] = [
  {
    id: '41dbc5f7-9a4e-42e6-832b-1d3dd8c7c4b6',
    email: 'admin@gmail.com',
    password: '$2a$10$XLEGbbEKPN6WUHyV6Iv9zeT90nZTJl3uz4HPelKblOaQQgEicWijW',
    roles: ['ADMIN'],
  },
  {
    id: 'd0065700-1707-4ad9-811b-8bbed0364318',
    email: 'user@gmail.com',
    password: '$2a$10$XLEGbbEKPN6WUHyV6Iv9zeT90nZTJl3uz4HPelKblOaQQgEicWijW',
    roles: ['USER'],
  },
]

export default users
