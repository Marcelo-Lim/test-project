# SIMPLE PROJECT WITH REACT JS

This project is to train the interns on Git operations

## STEPS

1. **Clone the Project** `git clone https://github.com/arman226/simple-project.git`
2. **Install Dependencies** `npm install`
3. **Run the project** `npm start`
4. **Create a new branch** `git checkout b feature/{specific-feature}`
5. **Stage your changes** `git add .`
6. **Commit your Staged changes** `git commit -m "description of your diffs"
7. **Push your changes** `git push origin {name of the branch that you created}`
8. **Create a Pull Request**

## DEPENDENCIES

1. **react-router-dom** `npm i react-router-dom`
2. **react-router** `npm i react-router`
3. **material-ui** `npm i @material-ui/core`
4. **reactstrap** `npm install --save reactstrap`
5. **bootstrap** `npm install bootstrap --save`

## FOLDER STRUCTURE

1. **components** This contains all presentational components that are reusable to different web pages.
2. **routes** This contains the navigation configuration accross the entire website.
3. **pages** This contains all the web pages.
4. **styles** This contains global styling settings/configuration such as, but not limited to, colors and dimens (for sizes)
5. **assets** This contains all images, fonts and other media files.

### RUNNING THE PROJECT

After cloning the project, make it sure that all dependencies are installed:

`npm install`

If the installation is successful, run the app by exucuting the script below:

`npm start`.

### MAKING CHANGES

Before writing any code, you have to make it sure that the base branch or `master` is always up-to-date. To do that you have to `pull` the latest version of the branch:

`git pull origin master`.

After updating the master branch, create a separate branch to store your changes,

`git checkout -b feature/${your-branch-name}`

after writing and testing your code, stage all your changes...

`git add .`,

commit...

`git commit -m "${descriptive explaination about your changes or diffs}"`

and, finally, push

`git push origin feature/${your-branch-name}`

ENJOY CODING!

Regards,

**ARMANDO I. BIBAY JR.**
