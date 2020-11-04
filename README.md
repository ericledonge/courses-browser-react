Small exercise to display public courses on the Festo LX platform.
Those courses are available there: `GET https://lx.festo.com/SearchService/api/search/learning-paths/public`

To test the code: `yarn test`
To visualize components: `yarn storybook`
To start the app: `yarn start`

Before starting the app, you have to allow cross-domain requests and override Request Origin and CORS headers.
To achieve that, you can use a plugin for Chrome, like Moesif Origin & CORS Changer.
