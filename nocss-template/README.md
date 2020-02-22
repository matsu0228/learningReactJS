React.js template with typescript and Bootstrap.

## typescript

```
npx create-react-app nocss-template --typescript
```

## bootstap

```
yarn add react-bootstrap bootstrap
```

- ref :https://react-bootstrap.github.io/getting-started/introduction/

* append for CDN

```public/index.html
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

```

## tailwind

Tailwind CSS is a highly customizable, low-level CSS framework.

```
# install
yarn add tailwindcss
yarn add postcss-cli autoprefixer --save-dev

# config
npx tailwindcss init
code tailwind.config.js

# compile
npx tailwind build src/styles.css -o src/tailwind.css
```

- append for CDN

```public/index.html
    <link
      href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet"
    />

```
