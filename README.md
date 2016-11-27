### Contact Manager

Contact Manager is an application written in **typescript** that offers an easy administration of contacts. For each contact, the information required is a name, an avatar and a short bio. The app also offers the feature of adding a note for each contact with a coresponding date. 

![alt text][app]
![alt text][new-contact]
![alt text][clear-all-notes]
![alt text][contact]

The application will be split in two parts:

1. **Contacts** on the **left** hand side as a side navigation
2. **Contact Details** on the right hand side

On details for each **contact** are his/her **BIO** and **NOTES**
The notes functionality will serve as a to-do application, allowing the **manager** to add ***dated*** *tasks* in the backlog for each individual contact.

## Dependencies

-  npm
-  typescript
-  bower

## Installation

```bash
# Get the latest snapshot
git clone --depth=1 https://github.com/flashjpr/contact-manager.git

```

## Usage
```bash
# Install the bower dependencies
projectRoot> $ bower install
# In the path 'app/src' start the typescript comipler in watch mode
app/src>     $ tsc.cmd -w
# Optional: install (npm install -g live-server) and use the live-server package so you don' t have to refresh the page in the browser anymore
projectRoot> $ live-server
```

[app]: https://github.com/flashjpr/contact-manager/blob/master/app/assets/app-screenshot.png "Main Screen"
[new-contact]: https://github.com/flashjpr/contact-manager/blob/master/app/assets/add-new-contact.PNG "Add a new contact feature"
[clear-all-notes]: https://github.com/flashjpr/contact-manager/blob/master/app/assets/clear-all-notes.PNG "Clear all notes feature"
[contact]: https://github.com/flashjpr/contact-manager/blob/master/app/assets/contact.PNG "Contact feature"
