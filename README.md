### Contact Manager

The application will be split in two parts:

1. **Contacts** on the **left** hand side
2. **Contact Details** on the right hand side

On details for each **contact** are his/her **BIO** and **NOTES**
The notes functionality will serve as a to-do application, allowing the **manager** to add ***dated*** *tasks* in the backlog for each individual contact.

## Dependencies

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