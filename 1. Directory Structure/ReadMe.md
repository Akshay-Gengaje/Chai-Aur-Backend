# Directory Structure For Node Backend

Creating a well-structured Node.js project with Express and Mongoose involves organizing your files and folders in a way that enhances readability, maintainability, and scalability. Below is a suggested directory structure along with detailed explanations for each part of the structure:

### Directory Structure

```
project-root/
├── config/
│   ├── config.js
│   ├── db.js
│   └── logger.js
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── middlewares/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
├── services/
│   └── userService.js
├── utils/
│   ├── constants.js
│   └── helpers.js
├── validators/
│   └── userValidator.js
├── views/
│   └── index.pug
├── tests/
│   └── user.test.js
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

### Explanation of Each Part

1. **config/**:
   
   - **config.js**: Contains application-wide configuration variables (e.g., port, environment, API keys).
   - **db.js**: Contains the database connection setup using Mongoose.
   - **logger.js**: Sets up the logging system, typically using a library like `winston`.

2. **controllers/**:
   
   - **userController.js**: Defines the request handlers for user-related endpoints. Each controller corresponds to a model and contains the business logic for handling requests and responses.

3. **models/**:
   
   - **userModel.js**: Defines the Mongoose schema and model for the user entity. This file will describe the structure of the documents within a collection in MongoDB.

4. **routes/**:
   
   - **userRoutes.js**: Defines the Express routes for user-related endpoints. Routes map HTTP methods and URLs to controller functions.

5. **middlewares/**:
   
   - **authMiddleware.js**: Middleware to handle authentication (e.g., verifying tokens).
   - **errorMiddleware.js**: Middleware to handle errors centrally, ensuring consistent error responses.

6. **services/**:
   
   - **userService.js**: Contains the business logic that may be reused across controllers. It interacts with the model to fetch, create, update, or delete data.

7. **utils/**:
   
   - **constants.js**: Stores application-wide constants.
   - **helpers.js**: Contains utility functions that are used across the application.

8. **validators/**:
   
   - **userValidator.js**: Contains validation logic for user-related requests, ensuring data integrity before it reaches the controllers.

9. **views/**:
   
   - **index.pug**: Stores view templates (if using a templating engine like Pug).

10. **tests/**:
    
    - **user.test.js**: Contains test cases for user-related functionality. Using a testing framework like Mocha, Chai, or Jest.

11. **.env**: Environment variables file to store sensitive information and configuration (e.g., database URIs, API keys).

12. **.gitignore**: Specifies which files and directories Git should ignore.

13. **app.js**: Entry point of the application where the Express app is configured and started. It will set up middleware, routes, and error handling.

14. **package.json**: Contains metadata about the project, including dependencies, scripts, and project information.

15. **README.md**: Documentation file explaining the project, how to set it up, run it, and any other relevant information.

### Example Files

#### config/db.js

```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

#### controllers/userController.js

```javascript
const User = require('../models/userModel');
const userService = require('../services/userService');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.findAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// More controller methods...
```

#### models/userModel.js

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

#### routes/userRoutes.js

```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);

// More routes...

module.exports = router;
```

#### app.js

```javascript
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

This structure allows for clear separation of concerns, making it easier to manage, test, and scale your application. Each part of the application has a specific role, and the modular approach helps in keeping the code organized and maintainable.
