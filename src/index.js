const action = require("./action");

action
  .main()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
