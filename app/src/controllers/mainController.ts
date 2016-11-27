/// <reference path="../_all.ts"/>

module ContactManagerApp {
    export class MainController {

        static $inject = [
            'userService',
            '$mdSidenav',
            '$mdToast',
            '$mdDialog',
            '$mdMedia',
            '$mdBottomSheet'];
        constructor(
            private userService: IUserService,
            private $mdSidenav: angular.material.ISidenavService,
            private $mdToast: angular.material.IToastService,
            private $mdDialog: angular.material.IDialogService,
            private $mdMedia: angular.material.IMedia,
            private $mdBottomSheet){

            var self = this;
            this.userService
                .loadAllUsers()
                .then((users: User[]) => {
                    self.users = users;
                    // as default, the selected user is the first in the list
                    self.selectedUser = users[0];
                    self.userService.selectedUser = self.selectedUser;
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
            this.userService.selectedUser = user;

            var sidenav = this.$mdSidenav('left');
            if(sidenav.isOpen()) {
                sidenav.close();
            }

            this.tabIndex = 0;
        }

        showContactOptions($event) {
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: './dist/views/contactSheet.html',
                controller: ContactPanelController,
                controllerAs: 'cp',
                bindToController : true,
                targetEvent: $event
            }).then((clickedItem) => {
                clickedItem && console.log(clickedItem.name + ' clicked!')
            })
        }

        addUser($event) {
            var self = this;
            var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));

            this.$mdDialog.show({
                templateUrl: 'dist/views/newUserDialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: AddUserDialogController,
                controllerAs: 'ctrl',
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            }).then((user: User) => {
                self.openToast('User added');
            }, () => {
                console.log('You canceled the dialog.')
            })
         }

        clearNotes($event) {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you want to delete all the notes ?')
                .textContent('All notes will be deleted, you can\'t undo this action.')
                .targetEvent($event)
                .ok('Yes')
                .cancel('No');

            var self = this;
            this.$mdDialog.show(confirm).then(() => {
                self.selectedUser.notes = [];
                self.openToast('Cleared notes');
            });
        }

        removeNote(note: Note): void {
            var foundIndex = this.selectedUser.notes.indexOf(note);
            this.selectedUser.notes.splice(foundIndex, 1);
            this.openToast("Note was removed")
        }

        openToast(message: string): void {
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(message)
                    .position('top right')
                    .hideDelay(3000)
            );
        }
    }
}