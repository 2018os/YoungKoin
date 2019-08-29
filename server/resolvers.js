let login = false;
const dummyUser = {
  id: "Lee",
  password: "1234",
  nickName: "gangwoo",
  money: 1000
};

let Message = {
  msg: ""
};

const resolvers = {
  Query: {
    hello: async (_, __, { User }) => {
      // signup
      const newUser = {
        id: "lee",
        password: "1234",
        nickName: "gangwoo",
        isLoggedIn: "true"
      };
      await User.create(newUser);
      return "HELLO";
    },
    CheckLogin: () => {
      return login;
    },
    Logout: () => {
      login = false;
      return login;
    }
  },
  Mutation: {
    Login: (_, { id, password }) => {
      console.log(id + " " + password);
      if (login === true) {
        Message.msg = "already login";
        return Message;
      } else if (id === dummyUser.id && password === dummyUser.password) {
        login = true;
        Message.msg = "login success";
        return Message;
      } else {
        Message.msg = "login fail";
        return Message;
      }
    }
  }
};

export default resolvers;
