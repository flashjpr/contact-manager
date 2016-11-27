/// <reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController(userService, $mdSidenav) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.searchText = '';
            this.users = [];
            this.selectedUser = null;
            var self = this;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                self.users = users;
                // as default, the selected user is the first in the list
                self.selectedUser = users[0];
            });
        }
        MainController.prototype.toogleSidenav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.prototype.selectUser = function (user) {
            this.selectedUser = user;
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen()) {
                sidenav.close();
            }
        };
        MainController.$inject = ['userService', '$mdSidenav'];
        return MainController;
    }());
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=mainController.js.map