namespace user {
  export class UserController {
    createView() {
      let view = new user.UserView();
    }
  }

  export class UserView {
    constructor() {
      let div = document.createElement("div");
      div.innerHTML = "This is a UserView";
  
      document.body.appendChild(div);
    }
  }
}

let mvc = new user.UserController();
mvc.createView();