import * as bcrypt from 'bcrypt';
import UserRepository from '../repositories/user/UserRepository';
import { userModel } from './../repositories/user/UserModel';
export default  async function seedData() {
  const saltRounds = 10;
  const user = new UserRepository(userModel);
  const pass = await bcrypt.hash(process.env.PASSWORD, saltRounds);
  user.countData().then((res) => {
    if (res === 0) {
      user.createUser({
        email: 'head.trainee@successive.tech',
        name: 'HEAD-TRAINEE',
        password: pass,
        role: 'Head-Trainee',
      });
      user.createUser({
        email: 'trainee@successive.tech',
        name: 'TRAINEE',
        password: pass,
        role: 'trainee',
      });
    }
  });
}
