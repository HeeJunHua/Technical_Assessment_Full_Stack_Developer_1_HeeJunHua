<h1>Express.js Backend with TypeScript</h1>

  <h2>Setup Instructions</h2>
  <ol>
    <li><strong>Clone the repository</strong>:
      <pre><code>git clone &lt;repository_url&gt;</code></pre>
      <pre><code>cd backend</code></pre>
    </li>
    <li><strong>Install Dependencies</strong>: 
      Make sure you have Node.js installed. Then, run:
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Configure Database</strong>: 
      Open the <code>src/database.ts</code> file and set your database credentials (host, username, password, database name) for MySQL.
      <pre><code>const sequelize = new Sequelize('mysql://root:password@localhost:3306/itemsdb');</code></pre>
    </li>
    <li><strong>Run the Server</strong>: 
      After installing dependencies and configuring the database, you can start the server with:
      <pre><code>npm run dev</code></pre>
      This will start the server at <code>http://localhost:3000</code>.
    </li>
  </ol>

  <h2>API Endpoint Details</h2>

  <h3>GET /api/items</h3>
  <p><strong>Description</strong>: Fetch all items in the database.</p>
  <p><strong>Response</strong>: A JSON array of all items.</p>
  <pre><code>
  [
    {
      "id": 1,
      "name": "Item 1",
      "description": "Description of item 1",
      "price": 10.99,
      "createdAt": "2025-01-03T12:00:00Z",
      "updatedAt": "2025-01-03T12:00:00Z"
    },
    ...
  ]
  </code></pre>

  <h3>GET /api/items/:id</h3>
  <p><strong>Description</strong>: Fetch a single item by its <code>id</code>.</p>
  <p><strong>Params</strong>: <code>id</code> (integer)</p>
  <p><strong>Response</strong>: A JSON object with the item's details.</p>
  <pre><code>
  {
    "id": 1,
    "name": "Item 1",
    "description": "Description of item 1",
    "price": 10.99,
    "createdAt": "2025-01-03T12:00:00Z",
    "updatedAt": "2025-01-03T12:00:00Z"
  }
  </code></pre>

  <h3>POST /api/items</h3>
  <p><strong>Description</strong>: Create a new item.</p>
  <p><strong>Body</strong>:
    <pre><code>
    {
      "name": "New Item",
      "description": "Description of the new item",
      "price": 15.50
    }
    </code></pre>
  </p>
  <p><strong>Response</strong>: The created item with its generated <code>id</code>.</p>
  <pre><code>
  {
    "id": 3,
    "name": "New Item",
    "description": "Description of the new item",
    "price": 15.50,
    "createdAt": "2025-01-03T12:30:00Z",
    "updatedAt": "2025-01-03T12:30:00Z"
  }
  </code></pre>

  <h3>PUT /api/items/:id</h3>
  <p><strong>Description</strong>: Update an existing item by its <code>id</code>.</p>
  <p><strong>Params</strong>: <code>id</code> (integer)</p>
  <p><strong>Body</strong>:
    <pre><code>
    {
      "name": "Updated Item",
      "description": "Updated description",
      "price": 20.00
    }
    </code></pre>
  </p>
  <p><strong>Response</strong>: The updated item.</p>
  <pre><code>
  {
    "id": 1,
    "name": "Updated Item",
    "description": "Updated description",
    "price": 20.00,
    "createdAt": "2025-01-03T12:00:00Z",
    "updatedAt": "2025-01-03T12:40:00Z"
  }
  </code></pre>

  <h3>DELETE /api/items/:id</h3>
  <p><strong>Description</strong>: Delete an item by its <code>id</code>.</p>
  <p><strong>Params</strong>: <code>id</code> (integer)</p>
  <p><strong>Response</strong>: <code>204 No Content</code> if successfully deleted.</p>

  <h2>Additional Notes</h2>
  <ul>
    <li><strong>Database</strong>: This project uses MySQL as the database. Ensure you have MySQL installed and running, and create a database named <code>itemsdb</code> or change the connection string accordingly in <code>src/database.ts</code>.</li>
    <li><strong>Error Handling</strong>: Basic error handling is implemented. You can expand it as needed to handle different cases such as invalid input, database errors, etc.</li>
    <li><strong>Environment Variables</strong>: You might want to configure environment variables for sensitive data (e.g., database credentials) using <code>.env</code> files. The current setup is hard-coded for simplicity.</li>
    <li><strong>API Validation</strong>: The API endpoints assume that incoming requests will have valid data. You can further implement more robust validation using libraries like Joi, Zod, or class-validator to ensure data integrity.</li>
  </ul>

  <h2>Known Issues</h2>
  <ul>
    <li>None</li>
  </ul>

  <h2>Future Enhancements</h2>
  <ul>
    <li><strong>Authentication</strong>: Implement authentication (e.g., JWT) for secure access to certain API endpoints.</li>
    <li><strong>Pagination</strong>: Add pagination to the <code>GET /api/items</code> endpoint to improve performance when dealing with large datasets.</li>
    <li><strong>Validation</strong>: Improve request validation and error handling for edge cases.</li>
    <li><strong>Testing</strong>: Implement unit and integration tests using Jest or Mocha.</li>
  </ul>

  <h2>Example:</h2>

  <h3>Running the Project Locally</h3>
  <p>After setting up your database and installing dependencies, run the following commands to get your backend up and running:</p>
  <ol>
    <li>Install the dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Run the development server:
      <pre><code>npm run dev</code></pre>
      Your backend should now be accessible at <code>http://localhost:3000</code>.
    </li>
  </ol>

  <h2>Database Setup</h2>
<p>The backend uses MySQL as the database. You can use XAMPP to set up MySQL on your local machine, or use any MySQL server of your choice.</p>

<h3>Steps to Set Up MySQL Using XAMPP:</h3>
<ol>
  <li>Download and install <a href="https://www.apachefriends.org/index.html" target="_blank">XAMPP</a> if you haven't already.</li>
  <li>Launch the XAMPP Control Panel and start the Apache and MySQL services.</li>
  <li>Open phpMyAdmin by navigating to <a href="http://localhost/phpmyadmin" target="_blank">http://localhost/phpmyadmin</a> in your browser.</li>
  <li>In phpMyAdmin, click on the "Databases" tab and create a new database with the name <code>items_db</code>.</li>
  <li>Once the database is created, you can run the following SQL code to create the <code>items</code> table:</li>
</ol>

<h3>SQL Code to Create the Database and Table:</h3>
<pre>
-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS items_db;

-- Use the created database
USE items_db;

-- Create the items table
CREATE TABLE IF NOT EXISTS items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(500),
  price DECIMAL(10, 2) NOT NULL CHECK (price > 0),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Optionally, you can add some sample data:
INSERT INTO items (name, description, price) VALUES
  ('Item 1', 'This is a description of Item 1', 10.50),
  ('Item 2', 'This is a description of Item 2', 15.75),
  ('Item 3', 'This is a description of Item 3', 20.00);
</pre>
<p>Once you've created the database and table, the backend will be able to interact with it for the CRUD operations.</p>
