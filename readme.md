# SELFIE

## Introduction

SELFIE is a SPA application made with Javascript [Material-UI] and packaged with [Parcel](https://parceljs.org).

You can try the app at the link below: https://selfie-spa-parcel.herokuapp.com/

## Install

```
 git clone https://github.com/self-ie/selfie-spa-parcel

 cd selfie-spa-parcel

 yarn install
```

## Environment Variables

**Base URL of the API server application and the administration backend:**

```
 OMNA_API_BASE_URL="https://radiant-plains-75765.herokuapp.com"
```

**Backend OAuth Application client id and secret:**

```
 OAUTH_CLIENT_ID="****************************************"
 OAUTH_CLIENT_SECRET="*******************************************"
```

> You can get the values for these variables in the details of the OAuth-Application with name SELFIE-SPA defined 
> in the backend of the project.

## Start the local server:

**Start in development mode:**
 
```
 yarn run parcel:server
```

**Start in production mode:**
 
```
 yarn run parcel:build

 yarn run start
```

## Development Notes

**You can run generate command to add new components to the application:**

```
 yarn run generate

 #### OR ####

 plop
```

**You can run extract-intl command to generate/update the internationalization file:**

```
 yarn run extract-intl

 #### OR ####
 
 extract-messages -l=en -o src/translations 'src/**/messages.js
```


**You can run eslint to check the encoding rules and optimize the codes:**
```
 yarn run lint

 #### OR ####

 yarn run lint:fix

 #### OR ####

 eslint src

 #### OR ####

 eslint src --fix
```
