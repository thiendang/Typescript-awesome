enum Role {
  ADMIN = 'ADMIN',
  AUTHOR = 'AUTHOR',
  MEMBER = 'MEMBER'
}

const user = {
  name: 'Donna',
  role: Role.ADMIN
}

if (user.role === Role.ADMIN) {
  console.log('is admin')
}