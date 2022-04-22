# TaskMaster App

TaskMaster is essentially a digital to-do list for people who wish to stay on top of their tasks and keep track of their progress. The main functionality and purpose is a list so there should not be too many functionalities for users to get distracted with. Interface will be clean and straightforward to use. Users may track their progress as they use the app. The tracker will reflect user’s history of completion rate, so they know which period they have been slacking off and which periods they are staying on top of things. Users may add new lists of their tasks for the day and cross it off when it is done. The crossed-off task will be pushed to a "Done" list and the progress tracker will update the task completion progress of the day.
Users may also track their history of tasks by querying by date or keyword. 

Main Page
<img width="1470" alt="Screen Shot 2022-04-20 at 11 53 37 AM" src="https://user-images.githubusercontent.com/101501539/164302379-e54bd089-86f4-4e36-b2a5-ecd727c407e6.png">

Users may add task, edit, delete individual tasks, or clear the entire task list
When a user clicks on the check in the task section, the completed tasks will be moved to the "Completed Tasks" section, and progress tracker will update
<img width="1478" alt="Screen Shot 2022-04-20 at 11 55 16 AM" src="https://user-images.githubusercontent.com/101501539/164302618-31424d23-6ba4-4e44-8490-86c2d304acc3.png">

Users may also save the tasks log by clicking the save icon on the "Completed Tasks" chart, where tasks will be saved to localDB (implemented with minimongo)

Users may then query their past tasks by typing in the task they want to search (the texts have to be exact). The query function for minimongo is only implemented with findOne, so only one result will return from the query.
<img width="1434" alt="Screen Shot 2022-04-20 at 11 56 21 AM" src="https://user-images.githubusercontent.com/101501539/164302780-8680307d-29ed-4429-aa2f-ea3466e87edb.png">

Users may also query their past tasks by selecting date. Again, for this project only one data will return as it is implemented with findOne() 


# Business Requirements

Business requirements and component diagram [here](https://docs.google.com/document/d/1v9IFRG1XjUBgadWerZoEqaBG7X_TkDjydVirW6L8_Zk/edit)

# Usage

After git clone run ```yarn install```

run ```yarn start```

# Deployment

Project deployed on surge [here](https://oldfashioned-taskmaster.surge.sh/)

# Js Docs

Js Dos included in "doc" folder 

# Tests with Jest and Cypress

Unit tests with Jest and E2E with Cypress
Unit tests in __test__ folder
Cypress tests in Cypress folder

