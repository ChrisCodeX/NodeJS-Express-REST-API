import faker from 'faker';
import {User} from '../models/users.models'

export class UsersService {
  users: User[] = []
  constructor(){
    this.generate()
  }

  private generate() {
    const size = 10
    for (let i = 0; i < size; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: faker.datatype.number(80)
      })
    }
  }
}
