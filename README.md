# Cabedelo Estate Market Application
Welcome to my Real Estate Speculation Website project! This project aims to provide users with a platform to buy, sell, or rent houses and apartments. Users can either create an account or log in with their Google account to start creating listings for properties they want to sell or rent out.

## Technologies Used
MERN Stack
This project utilizes the MERN stack, which stands for MongoDB, Express.js, React, and Node.js. Here's a brief overview of each technology and its role:

### MongoDB 
MongoDB is a NoSQL database used to store our application's data. It provides flexibility and scalability, making it suitable for handling various types of data, including property listings, user information, etc.

### Express.js 
Express.js is a web application framework for Node.js. It simplifies the process of building robust web applications by providing a set of features for web and mobile applications.

### React 
React is a JavaScript library for building user interfaces. It allows us to create interactive and dynamic UI components, making the user experience smooth and engaging.

### Node.js
Node.js is a JavaScript runtime environment that allows us to run JavaScript on the server-side. It enables us to build scalable and high-performance web applications.

### Authentication with JWT and Firebase
We implement authentication using JWT (JSON Web Tokens) for user authentication. JWT tokens are securely stored and verified during user login and access to protected routes. Additionally, authentication with Google accounts is facilitated through Firebase Authentication.

### Storage and Image Handling with Firebase
Firebase is used for storing images and handling image uploads within the application. Firebase provides a secure and scalable solution for storing user-generated content, such as property images.

## Pages

### Home Page
The home page features a beautifully stylized slider showcasing the latest offers, providing an inviting and intuitive first look that encourages users to browse through the listings. Additionally, there's a small list displaying the latest offers, rentals, and sales added to the website. Each listing is presented in a card format, showing key information such as price (with offer if available), number of bathrooms and bedrooms represented with intuitive icons. Grammar is corrected dynamically, ensuring singular forms when necessary.

### Ad Page
Clicking on the slider or individual listing cards redirects users to a detailed ad page. Here, users can view a slider displaying photos of the listing. A share button located in the top-right corner allows users to copy the listing's URL to their device's clipboard. Pricing, description, number of bedrooms, bathrooms, furniture status, and parking availability are intuitively displayed using icons.

### User Profile
In the user profile section, users can modify their user information, change their profile picture, create a new listing, view the list of created listings, edit listing information, or delete listings. If there are any issues changing user data or if no listings have been created yet, relevant information is displayed to the user.

### Create Listing Page
The create listing page features an intuitive form. Users can input a name, description, specify whether it's a rental or sale listing, mark the number of bedrooms, bathrooms, parking availability, and whether the property is furnished. Additionally, users can advertise an offer if desired. Listings with offers are prominently displayed on the home page, and prices dynamically update with the listing. Users can easily save the listing after uploading between one to six photos. If there are any errors, messages are displayed to the user indicating what needs to be corrected to meet listing requirements.

### Advanced Search Page
The advanced search page allows users to specify detailed criteria for their desired property and sort the results intuitively. This ensures that all users can find the type of property they desire in detail.

## Repository Structure

The codebase is divided into two main repositories: `client` for the frontend and `api` for the backend.

### Client Repository
- **Frontend**: Developed using Vite + React 18.2.48, providing a modern and efficient user interface.
- **Styling**: Tailwind CSS 3.4.1 is used for styling, offering a utility-first CSS framework that helps in creating elegant, responsive designs with minimal effort.
- **Sliders**: Sliders on the home page and ad page are implemented using the Swiper package and Swiper Core, enhancing user experience with smooth and interactive image navigation.
- **Icons**: Icons are sourced from the React Icons package (Font Awesome), adding visual elements to the user interface and improving usability.
- **State Management**: Redux Toolkit and Redux Persistor are employed for saving user and theme information, facilitating state management across multiple pages and components. Redux Toolkit simplifies the usage of Redux in complex React applications, while Redux Persistor ensures persistent storage of state data, crucial for maintaining user preferences and data consistency.
- **Navbar**: A highly dynamic and interactive navbar is created using Flowbite-React, adapting seamlessly to various screen sizes. It also allows users to switch between light and dark themes according to their preferences, enhancing user experience and accessibility.

### Backend (API) Repository
- **Backend**: Built using Express.js 4.18.2, facilitating the creation of RESTful APIs and handling HTTP requests efficiently.
- **Database**: MongoDB is utilized with Mongoose, simplifying data modeling and interaction with the database. Mongoose aids in defining schemas, performing queries, and handling validations.
- **Authentication**: Dependencies like bcryptjs, jsonwebtoken, and cookie-parser are employed for user authentication and account creation. bcryptjs secures passwords by hashing them, jsonwebtoken generates authentication tokens, and cookie-parser parses cookies from HTTP requests.
- **Efficiency**: The backend efficiently handles encrypted authentication and storage of complex files, including images and different datasets, with relatively few lines of code. This minimalist approach maximizes the power of Node.js and Express.js in creating complex APIs.

### Additional Notes
- **Theme Switching**: The theme switching feature is implemented by creating a `themeSlice` using Redux, allowing users to seamlessly transition between light and dark themes. This enhances the modernity and comfort of the application, providing a personalized experience for users.
- **Development Process**: The project follows the structure and concepts presented in the 11-hour YouTube tutorial series "React & Next.js Projects with Sahand." Additional features, such as optimizing the mobile view with the Flowbite package and implementing theme switching with Redux Toolkit, Redux Persistor, and Tailwind CSS, were added to enhance functionality and user experience.

- ### Cloning the Backend Repository

1. **Clone the Repository**: Open your terminal and navigate to the directory where you want to clone the repository. Then, execute the following command:
    ```
    git clone <backend-repository-url>
    ```

### Installing Dependencies

2. **Install Dependencies for Frontend**: Navigate to the frontend directory and install the dependencies:

    ```bash
    cd client
    npm install
    ```

  **Install Dependencies for Backend**: Similarly, navigate to the backend directory and install the dependencies:

    ```bash
    npm install
    ```

### Setting Up Environment Variables

3. **Create `.env` File**: Inside the backend directory, create a new file named `.env`.

4. **Save Database and JWT Secret Variables**: In the `.env` file, save the variables for database access and JWT secret like this:
    ```
    MONGODB_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    ```

### Setting Up Firebase Configuration

5. **Create `firebase.js` File**: Inside the client directory, create a new file named `firebase.js`.

6. **Save Firebase Configuration**: In the `firebase.js` file, save the Firebase configuration for authentication and image storage like this:
    ```javascript
    import firebase from 'firebase/app';
    import 'firebase/auth';
    import 'firebase/storage';

    const firebaseConfig = {
      apiKey: "<your-api-key>",
      authDomain: "<your-auth-domain>",
      projectId: "<your-project-id>",
      storageBucket: "<your-storage-bucket>",
      messagingSenderId: "<your-messaging-sender-id>",
      appId: "<your-app-id>"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    export const auth = firebase.auth();
    export const storage = firebase.storage();
    ```

### Running the Code

6. **Run Frontend**: In the client directory, start the frontend server:

    ```bash
    npm start
    ```

    This will start the frontend server on a default port (usually port 5173).

7. **Run Backend**: In the root directory, start the backend server:

    ```bash
    npm start
    ```

    This will start the backend server on a different port, usually port 3000.

### Accessing the Application

8. **Access the Application**: With both frontend and backend servers running, you can access the application in your web browser. Typically, the frontend will be accessible at `http://localhost:5173`, and the backend API endpoints will be accessible at `http://localhost:3000`.

### Creating a MongoDB Account and Getting Access Link

8. **Create a MongoDB Account**: Go to the MongoDB website and create an account if you don't have one already.

9. **Get Database Access Link**: After logging in, create a new cluster and database. Once created, navigate to the "Connect" tab and copy the connection string.

### Creating a Firebase Account and Setting Up a Project

10. **Create a Firebase Account**: Go to the Firebase website and sign in with your Google account or create a new one.

11. **Set Up a Project**: Once logged in, click on "Add project" and follow the prompts to create a new Firebase project.

12. **Enable Authentication and Storage**: In your Firebase project dashboard, navigate to the "Authentication" section and enable Google sign-in. Then, go to the "Storage" section and enable storage for your project.

13. **Get Firebase Configuration**: In the Firebase project settings, you'll find the configuration details needed for `firebase.js`.

### Conclusion

By following these steps, you'll have successfully cloned the backend repository, installed dependencies, set up environment variables, configured Firebase, and run the backend code. Additionally, you'll have created accounts on MongoDB and Firebase, obtained the database access link, and set up a Firebase project for authentication and image storage.
