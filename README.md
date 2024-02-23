# Cabedelo Estate Market Application
![Captura de tela 2024-02-23 071035](https://github.com/igor32648/mern-market/assets/92551032/6c666665-9464-4028-8e38-df8896fcf969)
Welcome to my Real Estate Speculation Website project! This project aims to provide users with a platform to buy, sell, or rent houses and apartments. Users can either create an account or log in with their Google account to start creating listings for properties they want to sell or rent out.
![Captura de tela 2024-02-23 070830](https://github.com/igor32648/mern-market/assets/92551032/c69d95c6-bc97-4fef-af1d-64a3a54f7d4d)

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
![Captura de tela 2024-02-23 065715](https://github.com/igor32648/mern-market/assets/92551032/124771c8-1cfd-4303-92cf-68bf49ec5f51)

The home page features a beautifully stylized slider showcasing the latest offers, providing an inviting and intuitive first look that encourages users to browse through the listings. Additionally, there's a small list displaying the latest offers, rentals, and sales added to the website. Each listing is presented in a card format, showing key information such as price (with offer if available), number of bathrooms and bedrooms represented with intuitive icons. Grammar is corrected dynamically, ensuring singular forms when necessary.

### Sign In & Sign Up Pages
![Captura de tela 2024-02-23 070932](https://github.com/igor32648/mern-market/assets/92551032/760bcc47-23dd-4bd7-8189-91953c0ce5ca)
![Captura de tela 2024-02-23 070953](https://github.com/igor32648/mern-market/assets/92551032/868c98e5-e66a-42e6-9635-137192e5bf9b)
The Sign In and Sign Up pages offer users the flexibility to either create a new account or log in using their existing Google account. 

### Ad Page
![Captura de tela 2024-02-23 071453](https://github.com/igor32648/mern-market/assets/92551032/d0afef33-148b-48df-90fe-bc625f2df3fb)
![Captura de tela 2024-02-23 071527](https://github.com/igor32648/mern-market/assets/92551032/d6144495-a867-4386-86ed-86fe6687473a)

Clicking on the slider or individual listing cards redirects users to a detailed ad page. Here, users can view a slider displaying photos of the listing. A share button located in the top-right corner allows users to copy the listing's URL to their device's clipboard. Pricing, description, number of bedrooms, bathrooms, furniture status, and parking availability are intuitively displayed using icons.

![Captura de tela 2024-02-23 074354](https://github.com/igor32648/mern-market/assets/92551032/20df865f-319e-4bc7-9195-be8b2a03139a)

If you like the listing, you can click on "Contact the Landlord" and send an email to the property owner.

### User Profile
![Captura de tela 2024-02-23 071102](https://github.com/igor32648/mern-market/assets/92551032/40fef085-144b-4cec-a0dd-bd385491b58e)
![Captura de tela 2024-02-23 071126](https://github.com/igor32648/mern-market/assets/92551032/86ddbe1b-bef0-4347-9d8c-15aacf452833)

In the user profile section, users can modify their user information, change their profile picture, create a new listing, view the list of created listings, edit listing information, or delete listings. If there are any issues changing user data or if no listings have been created yet, relevant information is displayed to the user.

### Create/Edit Listing Page
![Captura de tela 2024-02-23 071156](https://github.com/igor32648/mern-market/assets/92551032/c70fd5fa-facb-4687-8371-5dd932dfb465)
![Captura de tela 2024-02-23 071344](https://github.com/igor32648/mern-market/assets/92551032/70ef6cd5-57d2-4d87-9532-bd10bdbfc650)

The create and edit listing page features an intuitive form. Users can input a name, description, specify whether it's a rental or sale listing, mark the number of bedrooms, bathrooms, parking availability, and whether the property is furnished. Additionally, users can advertise an offer if desired. Listings with offers are prominently displayed on the home page, and prices dynamically update with the listing. Users can easily save the listing after uploading between one to six photos. If there are any errors, messages are displayed to the user indicating what needs to be corrected to meet listing requirements.

### Advanced Search Page
![Captura de tela 2024-02-23 074117](https://github.com/igor32648/mern-market/assets/92551032/c9ee5ffc-d1e5-41b5-982c-d9ef445d7b37)

The advanced search page allows users to specify detailed criteria for their desired property and sort the results intuitively. This ensures that all users can find the type of property they desire in detail.

## Repository Structure

The codebase is divided into two main repositories: `client` for the frontend and `api` for the backend.

### Client Repository
- **Frontend**: Developed using Vite + React 18.2.48, providing a modern and efficient user interface.
- **Styling**: Tailwind CSS 3.4.1 is used for styling, offering a utility-first CSS framework that helps in creating elegant, responsive designs with minimal effort.
- **Sliders**: Sliders on the home page and ad page are implemented using the Swiper package and Swiper Core, enhancing user experience with smooth and interactive image navigation.
- **Icons**: Icons are sourced from the React Icons package (Font Awesome), adding visual elements to the user interface and improving usability.
- **State Management**: Redux Toolkit and Redux Persistor are employed for saving user and theme information, facilitating state management across multiple pages and components. Redux Toolkit simplifies the usage of Redux in complex React applications, while Redux Persistor ensures persistent storage of state data, crucial for maintaining user preferences and data consistency.
- **Navbar and Footer**: A highly dynamic and interactive navbar is created using Flowbite-React, adapting seamlessly to various screen sizes. It also allows users to switch between light and dark themes according to their preferences, enhancing user experience and accessibility.

![Captura de tela 2024-02-23 071714](https://github.com/igor32648/mern-market/assets/92551032/a1599b41-5c55-450e-9886-d9795ff9e48c)
![Captura de tela 2024-02-23 071830](https://github.com/igor32648/mern-market/assets/92551032/e3196939-82ec-4f9c-8185-e8ecdbfaa360)

### Backend (API) Repository
- **Backend**: Built using Express.js 4.18.2, facilitating the creation of RESTful APIs and handling HTTP requests efficiently.
- **Database**: MongoDB is utilized with Mongoose, simplifying data modeling and interaction with the database. Mongoose aids in defining schemas, performing queries, and handling validations.
- **Authentication**: Dependencies like bcryptjs, jsonwebtoken, and cookie-parser are employed for user authentication and account creation. bcryptjs secures passwords by hashing them, jsonwebtoken generates authentication tokens, and cookie-parser parses cookies from HTTP requests.
- **Efficiency**: The backend efficiently handles encrypted authentication and storage of complex files, including images and different datasets, with relatively few lines of code. This minimalist approach maximizes the power of Node.js and Express.js in creating complex APIs.

### Additional Notes
- **Theme Switching**: The theme switching feature is implemented by creating a `themeSlice` using Redux, allowing users to seamlessly transition between light and dark themes. This enhances the modernity and comfort of the application, providing a personalized experience for users.

![Captura de tela 2024-02-23 071630](https://github.com/igor32648/mern-market/assets/92551032/8892afb0-ab66-49ae-bcc4-cf24f371fad9)
![Captura de tela 2024-02-23 071605](https://github.com/igor32648/mern-market/assets/92551032/c5d91d5e-b672-40df-8bb4-337c39951a13)

- **Development Process**: The project follows the structure and concepts presented in the 11-hour YouTube tutorial from the "React & Next.js Projects with Sahand" channel. Additional features, such as optimizing the mobile view with the Flowbite package for crating a Header/Footer and implementing theme switching with Redux Toolkit, Redux Persistor, and Tailwind CSS, were added to enhance functionality and user experience.

- ### Cloning the Backend Repository

1. **Clone the Repository**: Open your terminal and navigate to the directory where you want to clone the repository. Then, execute the following command:
    ```
    git clone https://github.com/igor32648/mern-market/
    ```

### Installing Dependencies

2. **Install Dependencies for Frontend**: Navigate to the frontend directory and install the dependencies:

    ```bash
    cd client
    npm install
    ```

3. **Install Dependencies for Backend**: Similarly, on the project root directory, install the dependencies:
    
     ```bash
     npm install
     ```

### Setting Up Environment Variables

4. **Create `.env` Files**: Inside the root and in client directory, create a new file named `.env`.

5. **Save Database and JWT Secret Variables**: In the root `.env` file, save the variables for database access and JWT secret like this:
    ```
    MONGO=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    ```
6. **Save the Firebase API key secret**: Within the client repository, create another `.env` file with your secret key for the Firebase API.
    ```
    VITE_FIREBASE_API_KEY=<your-firebase-api-key>

### Setting Up Firebase Configuration

7. **Create `firebase.js` File**: Inside the client directory, create a new file named `firebase.js`.

8. **Save Firebase Configuration**: In the `firebase.js` file, save the Firebase configuration for authentication and image storage like this:
    ```javascript
    import firebase from 'firebase/app';
    import 'firebase/auth';
    import 'firebase/storage';

    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
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

9. **Run Frontend**: In the client directory, start the frontend server:

    ```bash
    npm start
    ```

    This will start the frontend server on a default port (usually port 5173).

10. **Run Backend**: In the root directory, start the backend server:

    ```bash
    npm start
    ```

    This will start the backend server on a different port, usually port 3000.

### Accessing the Application

11. **Access the Application**: With both frontend and backend servers running, you can access the application in your web browser. Typically, the frontend will be accessible at `http://localhost:5173`, and the backend API endpoints will be accessible at `http://localhost:3000`.

### Setting the Databases

## Creating a MongoDB Account and Getting Access Link

1. **Create a MongoDB Account**: Go to the MongoDB website and create an account if you don't have one already.

2. **Get Database Access Link**: After logging in, create a new cluster and database. Once created, navigate to the "Connect" tab and copy the connection string.

## Creating a Firebase Account and Setting Up a Project

3. **Create a Firebase Account**: Go to the Firebase website and sign in with your Google account or create a new one.

4. **Set Up a Project**: Once logged in, click on "Add project" and follow the prompts to create a new Firebase project.

5. **Enable Authentication and Storage**: In your Firebase project dashboard, navigate to the "Authentication" section and enable Google sign-in. Then, go to the "Storage" section and enable storage for your project.

6. **Get Firebase Configuration**: In the Firebase project settings, you'll find the configuration details needed for `firebase.js`.

### Conclusion

By following these steps, you'll have successfully cloned the backend repository, installed dependencies, set up environment variables, configured Firebase, and run the backend code. Additionally, you'll have created accounts on MongoDB and Firebase, obtained the database access link, and set up a Firebase project for authentication and image storage.
