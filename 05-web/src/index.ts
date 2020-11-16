// Model Classes -  Handle Data, used to represent Users, Blog Posts, Images, etc
import { User } from './models/User'
// View Classes - Handle HTML and events caused by the user
const user = User.buildUser({ id: 1 })

user.on('change', () => {
    console.log(user)
})

user.fetch()