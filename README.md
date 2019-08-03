# Yarn workspaces solution

While trying to introduce a material-ui based component library to a monorepo
I ran into the famous issues with duplicate versions of react etc when using
`yarn link` and `file:../relative/repos` in the package.json.

Yarn workspaces is by far the easiest to implement, and easiest to explain to
a junior developer. It also prevents them from accidentally installing the
deps in the wrong place.

I guess I'll find out more issues in the future and will try to solve them in an
isolated manner here.

## System requirements

- node >= 11
- yarn >= 1.17.3

## Up and running

- In the root directory run `yarn`.
- In the app directory run `yarn start`.

And the application will be at http://localhost:8080. It's a button. Yay.

## Live updating of the app while you edit the components

You'll need to go to the `components` folder and run `yarn link`.

Then to the `app` folder and run `yarn link "@test/components"`.

Stop the webpack build and restart it again with `yarn start` and now you should
be able to edit the `components/Button` file and see the updates in the browser.
