# ONCHANGE.FYI

### What is it?
<details>
  <summary>
    tl;dr: <>: The frontend for the forthcoming `onChange.fyi`.
  </summary>
  <br />

  The minimal-ish frontend for the newest app! `OnChange.fyi` seeks to allow anyone to track developments on websites and respond ASAP when *anything™* changes

</details>
<br/>

### How to use it?
<details>
  <summary>
    tl;dr: <code>yarn && yarn start</code>
  </summary>
  <br />

  start doing development with `yarn storybook` and `yarn start`!


  #### Some of the scripts, and what they do

  | Command | Description |
  | :---------------: | :---------------: |
  | `yarn start` | starts a hot reload server running the app |
  | `yarn build` | builds a set of production assets into `./docs` |
  | `yarn test` | runs through the tests |
  | `yarn coverage` | runs through the tests, outputting coverage into `./coverage` |
  | `yarn lint` | lints the project, trying to fix any issues automatically |


  #### More details:

  `yarn build` doesn't remove the CNAME file that `gh-pages` puts into the docs directory, if you choose to deploy things using the `master/docs` deployment route on GH.

  There's a pre-commit hook that builds production assets on every commit. It might be worthwhile to disable this if you care about your git history being clean. **I really really don't** *however*, so I left it as the default action. `prepush` doesn't push new compiled assets, so you have to run it twice, and that sucks. If you ever want to get moving **fast** leave it in. 
  
  If someday you want to clean all that out and use something *not* **incredibly shoestring** like `precommit` compiling the assets, it's stupendously easy to clean your git history and keep rolling like you were never in the ghetto at all.


</details>
<br/>

### TODO:
<details>
<summary>tl;dr: A fair amount!</summary>
<br />

  0. React-router
  0. Add graphql integration
  1. Add user sign-in
  3. Add strip integration
  4. Add a visual way to select what you want to track on a website
  5. Add resetting/changing your password/email
  6. Tests for everything above!

</details>
<br/>
