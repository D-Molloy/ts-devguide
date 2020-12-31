import { UserList } from './views/UserList'
import { Collection } from './models/Collection'
import { User, UserProps } from './models/User'

const users = new Collection('http://localhost:4000/users', (json: UserProps) => {
    return User.buildUser(json)
})
console.log('users', users)
users.on("change", () => {
    const root = document.getElementById("root")

    if (root) {
        new UserList(root, users).render()
    }
})

users.fetch()
// import { UserEdit } from './views/UserEdit'
// import { User } from './models/User'

// const user = User.buildUser({
//     name: "Boogie",
//     age: 20
// })

// const root = document.getElementById('root')
// if (root) {
//     const userEdit = new UserEdit(
//         root,
//         user
//     )
//     userEdit.render()
// } else {
//     throw new Error("Root element not found")
// }
