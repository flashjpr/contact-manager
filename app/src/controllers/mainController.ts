/// <reference path="../_all.ts"/>

module ContactManagerApp {
    export class MainController {

        static $inject = ['userService'];
        constructor(private userService: IUserService){

            var vm = this;
            this.userService
                .loadAllUsers()
                .then((users: User[]) => {
                    vm.users = users;
                    console.log(vm.users);
                });
        }

        users: User[] = [];
        message: string = "Hello from the other side ! "
    }
}