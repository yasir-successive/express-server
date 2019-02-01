import userRepository from "./../repositories/user/UserRepository";
export default function seedData() {
  console.log("inside the seed function");
  const repository = new userRepository();
  //repository.createUser({ _id: "1234", name: "ABC" });
  //repository.delete({ name: "Yasir" });
  //repository.updateUser('Ahmar');
  const userRepo = new userRepository();
    userRepo.countData().then((data) => {
      if(data === 0){
        userRepo.createUser({name:"head-trainee",role:"trainer",email:"head.trainer@gmail.com"})
        .then((data) => console.log("user1 created"));
        userRepo.createUser({name:"head-trainee",role:"trainer",email:"head.trainer@gmail.com"})
        .then((data) => console.log("user2 created"));
      }
      else {
        console.log("initial user created");
      }
    });

}
