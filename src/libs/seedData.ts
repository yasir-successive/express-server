import userRepository from "../repositories/user/UserRepository";
export default function seedData() {
  console.log("inside the seed function");
  const repository = new userRepository();
  repository.create({ _id: "13123", name: "Yasir" });
}
