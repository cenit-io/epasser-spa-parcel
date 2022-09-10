# ePasser

## Introduction

ePasser is a SPA application made with Javascript [Material-UI] and packaged with [Parcel](https://parceljs.org).

You can try the app at the link below: https://epasser.onrender.com/

## Install

```
 git clone https://github.com/cenit-io/epasser-spa-parcel

 cd epasser-spa-parcel

 yarn install
```

## Environment Variables

**Base URL of the Cenit-IO server:**

```
 CENIT_BACKEND_BASE_URL="https://server.cenit.io"
```

**Base URL of the Cenit-UI application:**

```
 CENIT_FRONTEND_BASE_URL="https://app.cenit.io"
```

**Cenit-IO-eCommerce-API application ID:**

```
 eCAPI_APP_ID="ecapi_v1_dev"
```

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
