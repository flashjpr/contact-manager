/// <reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController(userService, $mdSidenav, $mdToast, $mdDialog) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.$mdDialog = $mdDialog;
            this.tabIndex = 0;
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
                console.log(self.tabIndex);
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
            this.tabIndex = 0;
        };
        MainController.prototype.clearNotes = function ($event) {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you want to delete all the notes ?')
                .textContent('All notes will be deleted, you can\'t undo this action.')
                .targetEvent($event)
                .ok('Yes')
                .cancel('No');
            var self = this;
            this.$mdDialog.show(confirm).then(function () {
                self.selectedUser.notes = [];
                self.openToast('Cleared notes');
            });
        };
        MainController.prototype.removeNote = function (note) {
            var foundIndex = this.selectedUser.notes.indexOf(note);
            this.selectedUser.notes.splice(foundIndex, 1);
            this.openToast("Note was removed");
        };
        MainController.prototype.openToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(3000));
        };
        MainController.$inject = ['userService', '$mdSidenav', '$mdToast', '$mdDialog'];
        return MainController;
    }());
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=mainController.js.map