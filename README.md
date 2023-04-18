# Welcome to Virtuoso Query Interface
This project has the intention to provide a online web based query interface for Virtuoso. Till now, you can only save queries with a name and run query and see the result with the response time of virtuoso.

## **Used Technologies:**
-  [Next.js](https://nextjs.org/) 
Probably everyone is aware of this great and trending framework of Javascript. Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.
- [Redux](https://redux.js.org/)
Great tool to manage states and actions among components.Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture.
- [Firebase](https://firebase.google.com/)
Firebase is a set of backend cloud computing services and application development platforms provided by Google.

## **Run the application locally:**
1. You must have [Node.js](https://nodejs.org/en) installed in your local machine that is your computer/laptop.
2. Download the full source code into your local machine or you can clone it by running\
&nbsp;
`git clone https://github.com/Brainless-Loco/virtuoso-query-interface.git`\
&nbsp;
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
7. You can also save a query with a name from the address http://localhost:3000/insertQuery.\ 
&nbsp;

##  **Others Way to Run**

1. Currently you can use the project  only locally to run  any query and get the result from virtuoso.
2. However, you can always see the preview of the project from the following addresses:
	* [https://virtuoso-query-interface.netlify.app](https://virtuoso-query-interface.netlify.app/?fbclid=IwAR1nMl-fBh0ilOmT9mrIDNau-a5oq0fiVY_C-mI5JUNvJfm2DUmchVOKcms) 
		* Netlify App Environment
	* [https://virtuoso-query-interface-brainless-loco.vercel.app](https://virtuoso-query-interface-brainless-loco.vercel.app/?fbclid=IwAR32ugZJd1H21l55Cx65Vk9gIOytmuRO6T8L8f1EZoRMqg4_OLXevBLikuY)
		* Vercel Environment
3. Obviously you can put 	`/insertQuery` after the default address to have the save query interface.

## **Usage**

1. From the landing page, you can run a previously saved query. For that:
	*  Search and select a ***Dataset*** from the Dataset Selection Menu.
	* After the selection of a dataset, the Query Selection Menu will be unlocked and you will have all the names of saved queries under that dataset to choose.
	* Search and select a query to run. The SPARQL code editor will be filled up with the sparql code of the selected query.
	* Click the **Run** button to run the query. 
	* You will have a new modal on the interface with the query result in tabular form and response time of the virtuoso.
2. If you wish to run a new query but don't wish to save it:
	* Just write your sparql code into the editor and run it.
3. To save a new query under a dataset:
	* Put  `/insertQuery` with the landing page address and click enter.
	* Search and Select a ***Dataset*** from the Dataset Selection Menu.
	* Give a new name of the query in the query name text-field. We suggest you to give a meaningful name to the query.
	* Write or paste your query to the code editor
	* Click **Submit** to save the query. The query is saved now.
4. To save a new query under a new dataset:
	* The process is almost save as ***3***. The difference is instead of selecting for a new dataset, you just have to put a new dataset name in the search field.
	* And then just like ***3***, save a new query.
	* When you click **Submit**, a new dataset name will be added and the query will be saved under that dataset name.

Don't forget to give feedbacks at tonmoy.csecu@gmail.com and give the Github [Repository](https://github.com/Brainless-Loco/virtuoso-query-interface) a star if you liked it.

