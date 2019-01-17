const users = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  }
];
function validateEmail(email) {
  let regex = /^([A-Za-z0-9_\-\.])+\@(successive.tech)/;
  return regex.test(email);
}

const valid = [];
const invalid = [];
function validateUsers(users) {
  users.forEach(function(i, index) {
    const { traineeEmail, reviewerEmail } = i;
    if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
      valid.push(`user${index + 1}`);
    } else {
      invalid.push(`user${index + 1}`);
    }
  });
}

validateUsers(users);
if (valid.length == 0) {
  console.log(`valid users are 0`);
} else {
  console.log(`valid users are ${valid}`);
}
if (invalid.length == 0) {
  console.log(`invalid users are 0`);
} else {
  console.log(`invalid users are ${invalid}`);
}
console.log(`${valid.length} valid and ${invalid.length} invalid users`);
