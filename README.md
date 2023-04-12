# Welcome to Virtuoso Query Interface
This project has the intention to provide a online web based query interface for Virtuoso. Till now, you can only save queries with a name and run query and see the result with the response time of virtuoso.

Used technologies:
-  [Next.js](https://nextjs.org/) 
Probably everyone is aware of this great and trending framework of Javascript. Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.
- [Redux](https://redux.js.org/)
Great tool to manage states and actions among components.Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture.
- [Firebase](https://firebase.google.com/)
Firebase is a set of backend cloud computing services and application development platforms provided by Google.

Run the application locally:
1. You must have [Node.js](https://nodejs.org/en) installed in your local machine that is your computer/laptop.
2. Download the full source code into your local machine or you can clone it by running 
`git clone https://github.com/Brainless-Loco/virtuoso-query-interface.git`
from your git bash or console. For the cloning process, I am assuming that you have already installed the git in your local machine.
3. Extract the files if you have downloaded the zip file.
4. Got to ***virtuoso-query-interface*** folder.
5. Now open console and run
		`npm install`
		or just
		`npm i`
		This will install all the necessary dependency packages for the project to run.
6. After the installation, the project is ready to run in your local machine. Now run the command
`npm run dev`
which will start the server at port (default) at http://localhost:3000. Go to the port from your browser and run query.
7. You can also save a query with a name from the address http://localhost:3000/insertQuery.
8. Don't forget to give feedbacks at tonmoy.csecu@gmail.com and give the Github [Repository](https://github.com/Brainless-Loco/virtuoso-query-interface) a star if you liked it.