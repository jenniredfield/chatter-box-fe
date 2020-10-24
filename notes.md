# My notes

Install dependencies

## Webpack

```
npm install --save-dev webpack webpack-dev-server webpack-cli

```

## Babel && Babel Loader

```

npm install --save-dev @babel/core @babel/preset-env
npm install --save-dev babel-loader
npm install --save-dev @babel/preset-react

```

## React

```

npm install --save react react-dom

```

## Typescript

```

npm install typescript
npm install --save-dev @types/react @types/react-dom
@babel/preset-typescript

```

## Typescript checker

```

npm install --save-dev fork-ts-checker-webpack-plugin @types/fork-ts-checker-webpack-plugin

```

## Sass

```

npm install node-sass sass-loader style-loader css-loader
css-modules-typescript-loader
@types/node-sass

To use sass you need a declaration file declaring the '*.scss' module to use it. You can crete it on top folder like so:

declare module '*.scss' {
    const content: {[className: string]: string};
    export default content;
}

Then tell the tsconfig.json to read that file in the 'include' array.

```
