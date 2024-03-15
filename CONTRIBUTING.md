<div align="center">
  <br>
  <h1>Stemly UI Contribution Guide</h1>
  <h6>All the information you need to start contributing</h6>
</div>
<br>

<details>
<summary>TABLE OF CONTENTS</summary>

- [Make Contributions](#make-contributions)
- [Contribute step-by-step](#contribute-step-by-step)
- [Development Environment](#development-environment)
- [Testing](#testing)
- [Sprint Review](#sprint-review)
- [Notes](#notes)

</details>

---


## Make Contributions
Decide your type of contribution, new features or bug-fix:

1) You want to propose a new feature and implement it
    - Check <a href="https://soptai.atlassian.net/">JIRA</a> ticket for story, review description
    - Discuss with team
    - Plan design & implementation with team
2) You want to implement a feature or bug-fix for an outstanding issue
    - Check <a href="https://soptai.atlassian.net/">JIRA</a> Bug, review details and scenarios.
    - Mark issue In Progress in JIRA
    - Update with comments if required

## Contribute step-by-step
1. Fork the repository `https://github.com/soptai/stemly_ui.git`

2. Create branch from `Master` in your fork. 
   
   This makes it easier for you to keep track of your changes.
   Create a new working branch
   
   ```shell
   git checkout -b new-branch-name
   ```

2. Make contributions
   Make the desired changes to the code.
   - If you are adding new functionality or fixing a bug, we recommend you add unit tests that cover it.

3. Push changes to remote github repository
   ```shell
   # Add changes to staging area
   git add .

   # Commit changes
   git commit -m "commit message"


   # Push changes to remote repository

   # For FIRST push to a new working branch, run
   git push --set-upstream origin new-branch-name

   # For subsequent pushes to the same working branch
   git push
   ```
 4. Compare `Master` with own `repository` branch, stable them with rebase/merge & fixing conflicts.
    ```shell
    # To rebase
    git pull
    git stash
    git checkout working_branch
    git rebase master
    git apply
    ```
 5. Every PR should follow version update + tags,<br>
    Syntax will be like : ```sprint.feature.fix```<br>
    version of application should be updated in branch with following definations:
    - 1st digit (Major version): sprint number
    - 2nd digit (Minor version): If feature or story finished.
    - 3rd digit (Patch version): If ui enhancements, issue fixes and minor feedback integrations completed. 
    <br><br>
    ```
    # For example from tomorrow 4.x.x will start so,
    If the feature / task is finished in coming week then it should update the version to 4.1.0
    And if it is a bug or small patch / task then it should be 4.1.1 or 4.0.1
    ```
    Once PR created you can verify if package.json has conflicts for versions if there is update in version greater than you branch version you have to consider develop branch version and then run command for version update
    use this command to update version and put message, it will directly create tag on same comit which can be pushed to develop branch
    ```
    npm version major -m "Upgrade to %s for reasons"`
    ```
    ```
    npm version minor -m "Upgrade to %s for reasons"`
    ```
    ```
    npm version patch -m "Upgrade to %s for reasons"`
    ```
 5. Make a pull request to the `https://github.com/soptai/stemly_ui.git` repository. Submit a pull requests to https://github.com/soptai/stemly_ui.git.
 
 6. In your pull request, please describe in detail:
    - What problem you’re solving
    - Your approach to fixing the problem
    - Any tests you wrote
 
 7. Raise Request for Review.
 
 8. Ensure that all checks have passed
 
 9.  After Review Success & Approval, Merge branch with `Master` and update JIRA with proper details. 

## Development Environment
Running stemly_ui locally:
1. Clone this repository to your local machine
   ```shell
   # Using HTTPS
   git clone https://github.com/soptai/stemly_ui.git

   # Using SSH
   git clone git@github.com:soptai/stemly_ui.git
   ```

2. Download all package dependencies
   ```shell
   # Change into stemly_ui directory
   cd stemly_ui
   
   # Using node package manager
   npm install

   # OR Using yarn package manager
   yarn 
   ```

3. Run stemly ui on local server
   ```shell
   # Using node package manager
   npm run serve
   
   # OR Using yarn package manager
   yarn serve
   ```

   expected outcome:
   ```shell
   App running at:
    - Local:   http://localhost:3000/
    - Network: http://192.168.0.123:3000/
  
    Note that the development build is not optimized.
    To create a production build, run npm run build.
   ```
   To view stemly ui, open `http://localhost:3000/` in your browser.

   To stop local server, hit `ctrl` + `c` in terminal.

Running core_ds locally:
1. Clone core_ds to your local machine
   ```shell
   # Using HTPPS
   git clone https://github.com/soptai/core_ds.git

   # Using SSH
   git clone git@github.com:soptai/core_ds.git
   ```

2. Build application and start local server
   ```shell
   # Change into core_ds directory
   cd core_ds

   # Build application and start local server
   make install
   ```
   If successful, `http://localhost:5000/api/` will load without error.

3. Test API in Postman
   * Get bearer token
     1. Log in to [stemly](https://dev.soptai.sg/) 
        (or stemly_ui on local server)
     2. Open browser devtools
     3. Go to `Network` tab
     4. Refresh page
     5. Locate `token` request
     6. In `Response` tab of `token` request,
        bearer token is the value of `"access_token"`.
   * Add bearer token to Postman `Authentication`
   * Send a `GET` request to `http://localhost:5000/api/user/me`
   * If all's done correctly, you'll get a response with your username and email.
     ```json
     {
        "id": <server-generated-id>,
        "email": "yourEmail",
        "name": "yourName",
        "active": false,
        "oauth": [ <your-oauth-info> ]
     }
     ```
  1. Terminating stemly backend.
     * To stop the backend servers, run
        ```shell
        make clean

        # OR
        docker-compose down
        ```

     * To start up the server again, run
        ```shell
        make start
        ```

## Testing
unit testing...

## Sprint Review
⏰ Every Friday from 🕟 4:30pm(SGT) to 🕔 5:30pm(SGT). 

Sprint meeting to review and demonstrate the user stories that the development team completed during the sprint. 
The sprint review is open to all members in reviewing the sprint’s accomplishments. 
All members get a chance to see progress on the product and provide feedback.

The development team needs to be ready to demonstrate completed, shippable functionality.

Be prepared to present your work!

## Notes
 
