// Model Classes -  Handle Data, used to represent Users, Blog Posts, Images, etc
import { User } from './models/User'
// View Classes - Handle HTML and events caused by the user

const user = new User({ name: "Louis", age: 5 })

user.on('save', () => {
    console.table(user.attributes.getAll())
})

user.save()