In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `pages`

The biggest change to this folder structure is the addition of the pages folder. This folder should contain one folder for each page in your application. Inside of those page specific folders should be a single root file that is your page (generally index.js) alongside all the files that are only applicable to that page. For example in the above image we have a Login page which contains the root file index.js, a component called LoginForm, and a custom hook called useLogin. This component and hook are only ever used in the Login page so they are stored with this page instead of being stored in the global hooks or components folders.

This separation of page specific code from your more general global code is the biggest benefit of this system over the simple folder structure. It is easier to see what your application is doing when all the relevant code is collocated in a single folder.

### `components`

Another big change you will notice with this example is that our components folder is further broken down into subfolders. These subfolders are really useful since they help keep your components organized into different sections instead of just being one massive blob of components. In our example we have a ui folder which contains all our UI components like buttons, modals, cards, etc. We also have a form folder for form specific controls like checkboxes, inputs, date pickers, etc.

You can customize and breakdown this components folder however you see fit based on your project needs, but ideally this folder shouldn’t get too large as many of your more complex components will be stored in the pages folder.
