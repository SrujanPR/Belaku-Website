You can make this webpage your own by doing the following! It's a little long process so be patient :)

Adding your center details, data and images!

Make sure in public/assets you have the following FOLDERS: ContactForm, Footer, ImpactStories, Experiences, Navbar, Home, Gallery, (if you want, then) Extras. If any are missing, please create empty folders first.

Next, Go to src/data. Here are all the jsons that need your help.

1. About.json : Add your center name, describe your center and add the stats.

2. contact.json : add the leader's contact info and center name. Give an email ID you are ok to get spam email from. Lastly go setup an EMailJS account and do the following: 1. Make a gmail service and get the service ID. paste it here. 2. Get the public key of emailJS and paste it here. 3. Make the template shown below and paste it here!

EMailJS Template to make:

    1. subject - Someone just sent {{centerName}} a query on the Website!

    2. content - Hey Change Maker!

        {{name}} just sent you a query from {{centerName}}'s Website!

        Message: {{message}}.

        Here are their details:

        Name: {{name}}

        Interested to Volunteer: {{interest}}

        Contact Number: {{contact}}

        Email ID: {{email}}

        Please get in touch and clear their query soon!

        Regards,
        {{centerName}} Learning Center

    3. to email - {{toEmail}}

    4. From Name - {{centerName}}'s Website

3. experiences.json: the format has already been given there. Add proper volunteer name, age, link to images stored in /assets/experiences/

4. Gallery.json: fill up assets/gallery/ with all your center photographs, add them one by one to this json file, yes i know it is a little time consuming, and add captions and dates.

5. home.json currently has 1 picture link, change them to pictures u want in the home carousel by adding them in assets/home/ and linking them all here.

6. impact.json: Again, similar to experiences.json, all the format is given with dummy data. Just add your own center impact stories as per cpp.

7. then run app and enjoy. Play around with colour scheme, exchange components and structures! Go crazy!


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
