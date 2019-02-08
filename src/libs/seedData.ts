import UserRepository from '../repositories/user/UserRepository';
import { userModel } from './../repositories/user/UserModel';
export default function seedData() {
  const user = new UserRepository();
  user.countData().then((res) => {
    if (res === 0) {
      user.createUser({
        email: 'head.trainee@successive.tech',
        name: 'HEAD-TRAINEE',
        role: 'Head-Trainee',
      });
      user.createUser({
        email: 'trainee@successive.tech',
        name: 'TRAINEE',
        role: 'trainee',
      });
    }
  });
  const emailid = 'head.trainee@successive.tech';
  user.findData({email: emailid}).then((result) => {
    console.log(result);
  });
}
