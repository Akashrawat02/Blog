Blog System

Overview

This is a simple blog system built using React.js. It integrates with a dummy API to fetch blog posts and allows users to like and comment on blog posts.

Features

✅ Display a list of blogs fetched from an API✅ View detailed blog posts✅ Like a blog post✅ Add comments to blog posts✅ Persist likes and comments using local storage✅ Responsive UI using CSS

Technology Stack

Frontend: React.js

Styling: CSS

API Used: JSONPlaceholder

Installation and Setup

Clone the repository:

git clone https://github.com/yourusername/blog-system.git
cd blog-system

Install dependencies:

npm install

Run the application:

npm start

Open in Browser:Navigate to http://localhost:3000/

Project Structure

📂 blog-system
├── 📂 src
│   ├── 📂 components
│   │   ├── BlogPage.js
│   │   ├── BlogDetail.js
│   ├── 📂 api
│   │   ├── api.js
│   ├── App.js
│   ├── index.js
│   ├── styles
│   │   ├── BlogPage.css
│   │   ├── App.css
├── package.json
├── README.md

API Integration

Fetching Blogs: Data is fetched from https://jsonplaceholder.typicode.com/posts

Likes & Comments: Stored locally using localStorage

Future Enhancements

🔹 Add user authentication🔹 Use a real backend for storing likes & comments🔹 Implement search & filter functionality

Contributing
Feel free to contribute by submitting a pull request! 🚀

License

This project is open-source and available under the MIT License.

