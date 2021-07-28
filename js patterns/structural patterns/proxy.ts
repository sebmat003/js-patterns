(function () {
  class User {
    user = "";
    password = "";
    constructor(user: string, pass: string) {
      this.user = user;
      this.password = pass;
    }
  }
  class LoggerService {
    user: User = new User("", "");
    public log(user: string, pass: string) {
      this.user = new User(user, pass);
      this.authenticate(this.user);
    }

    private authenticate(user: User) {
      console.log("user authentication", user);
    }
  }

  class LoggerProxy {
    loggerService = new LoggerService();
    userName: string = "";
    userPassword: string = "";

    constructor(user: string, pass: string) {
      this.userName = user;
      this.userPassword = pass;
    }

    public log() {
      this.loggerService.log(this.userName, this.userPassword);
    }
  }

  const loggerProxy = new LoggerProxy("xyz", "passwd");
  loggerProxy.log();
})();
