# startup-stack
A Firebase based Startup-Stack

I build this to have something to came back to when starting a new project. 

I use always the same stack (branch is in parenthesis): 
*  I use Typescript everywhere, in the Cloud Functions as well as in the vueJS Frontend. (initial)
*  Hot-Reloading everywhere (initial)
*  Firebase Hosting for Hosting a VueJS Frontend (initial)
*  Typed Vuex on the client side (add-typed-vuex)
*  Firestore for storage on the server side
*  Anonymous Authentication with merging user data in case of a later Sign-In. 
*  Firebase Authentication with all possible Social-SignIns
*  Magic-Sign-In Links (So you need no sign in when you remind users in an eMail)
*  Cloud functions for Backend
*  Sendgrid for sending Mails
*  Progressive Webapp (Caches the VueJS-Frontend, beeing offline usable)
*  Material-Design-Components as Design Framework (add-material-design-components)
*  Google Tag Manager Support (add-google-tag-manager-with-gdpr)
*  GDPR Privacy View (add-google-tag-manager-with-gdpr)
*  auto-deployment using gitlab pipelines

When starting a new project just fork this project and merge the needed branches together. 
You should get a fully working app in less than a day. 

Here you can see how the branches relate to each other. You can find a short description below. For more details check the branchs README.

```
master
+- initial
   +- add-typed-vuex
      +- add-Firestore
        +- add-auth
          +- add-magic-signin-links
   +- add-material-design-components
   +- add-google-tag-manager-with-gdpr
```

## master

nothing except the README.

## initial

This is a plain firebase project, configured with cloud functions and a plain vueJS project configured in the frontend folder. Cloud Functions and VueJs project are used with Typescript and Hot-Reloading is enabled everywhere. You can run it by run `npm run serve`.

## add-typed-vuex

Adds a typed vuex to the initial configuration

## add-Firestore

Adds Firestore usage. 

## add-auth

Adds a login screen and all necessary parts for login with facebook/twitter. 

## add-magic-signin-links 

adds a cloud function that creates a link for a given user that signs that user in without seeing a login screen. Useful in emails, but also a threat to security.

## add-material-design-components

Adds material-design-components to the initial configuration

## add-google-tag-manager-with-gdpr

Adds Google Tag Manager and a View to fullfill the GDPR requirements (without warranty).
