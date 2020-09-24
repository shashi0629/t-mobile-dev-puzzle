Code Review:

Below are the three problems and improvments found after the code review
1) Loading Icon should show on search or until we have the complete filtered list to show.
2) There is no unsubscribe code for ngrx/store when a component get destroyed.
   **Note: As a part of best practice we should always dispose the open connection and components. We disposed the subsription on 'ngDestroy' event as part of task 2.
3) We should use 'angular-pipe' for converting book publish dates into date format.


Below are the three Accessibility issues found after code review
1) All images tags do not have proper "Alt" attribute.
2) buttons do not have aria-label.
3) When user navigates the page using keyboard, the keyboard focus is not visible on the 'Want to Read' button.
