# online-bank-react

# *The concept*
This is a test web application that I built while learning the library React.js. 
Its aim is to be a self contained project to flesh out the things I have been learning and researching and therefore scalability has not been the number one priority.
Instead my focus has been on translating my previous knowledge of web delopment into a project using React.s and investigating a bit about Bootstrap components with React.js.

# *The functionality*
This web application is a small an functional bank application for handling the deposits and withdrawals of money from a certain account, a well as keeping a register of the movements 
done in this account.

Since this is a Front-End project and has no Back-End, the initial data is recieved via a JSON inside the project itself. The application automatically calculates the previous movements along 
the balance before and after it, depending on if it is a withdrawal or a deposit. This means the data in the JSON can be completely changed and the previous movements will still be calculated

Along the basic functionalities of withdrawals and deposits, there are also some basic quality of life features such as the posibility to order the results from most recent to oldest and vice-versa, 
as well as a search by id feature and pagination to make the visualization of the data easier.

# *How to run it*
Simply download de proyect, open it with your IDE of choice (I have used Visual Studio Code), `run npm install` and then use the comando `npm run dev`
