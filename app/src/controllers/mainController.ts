/// <reference path="../_all.ts"/>

module ContactManagerApp {
    export class MainController {

        static $inject = ['userService', '$mdSidenav'];
        constructor(
            private userService: IUserService,
            private $mdSidenav: angular.material.ISidenavService){

            var self = this;
            this.userService
                .loadAllUsers()
                .then((users: User[]) => {
                    self.users = users;
                    // as default, the selected user is the first in the list
                    self.selectedUser = users[0];
                    console.log(self.tabIndex);
                });

        }

        tabIndex: number = 0;
        searchText: string = '';
        users: User[] = [];
        selectedUser: User = null;

        toogleSidenav(): void {
            this.$mdSidenav('left').toggle();
        }

        selectUser(user: User): void {
            this.selectedUser = user;

            var sidenav = this.$mdSidenav('left');
            if(sidenav.isOpen()) {
                sidenav.close();
            }

            this.tabIndex = 0;
        }
    }
}