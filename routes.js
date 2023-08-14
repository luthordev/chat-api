const UserController = require("./controllers/UserController");
const Authentication = require("./controllers/Authentication");

let auth = [
  {
    method: "get",
    path: "/auth/login",
    controller: Authentication.Login,
  },
  {
    method: "get",
    path: "/auth/getUserInfo",
    controller: Authentication.GetUserInfo,
  },
];

module.exports = [
  ...auth,
  {
    method: "get",
    path: "/user/get",
    controller: UserController.Get,
  },
  {
    method: "post",
    path: "/user/add",
    controller: UserController.Add,
  },
  {
    method: "patch",
    path: "/user/update/:id",
    controller: UserController.Update,
  },
  {
    method: "delete",
    path: "/user/delete/:id",
    controller: UserController.Delete,
  },
];
