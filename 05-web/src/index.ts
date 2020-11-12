// Model Classes -  Handle Data, used to represent Users, Blog Posts, Images, etc
import { User } from './models/User'
// View Classes - Handle HTML and events caused by the user

const user = new User({ name: 'new record', age: 0 })

user.on("change", () => {
    console.log("Works");

})

user.events.trigger("change")


// user.events.on('change', () => {
//     console.log("hello change")
// })

// user.events.trigger('change')