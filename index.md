## Bienvenidos al curso!

Este curso esta basado en varios cursos libres respecto a React, la mayoria de su contenido fue creado por otros autores los cuales han donado su tiempo para crear dichos materiales con licencia open-source para que podamos hacer uso de ellos, lo cual agradezco infinatemnte. Algunos de dichos autores son [Brian Holt](https://github.com/btholt)

## Tabla de Contenido

1. [Solamente React](#react)
2. [Herramientas - npm, ESLint, Prettier, Webpack, Babel](#herramientas)
3. [JSX](#jsx)
4. [Challenge: Mas React](#challenge1)
5. [React Router](#react-router)
6. [PropTypes](#prop-types)

### <a name="react">Solamente React</a>

Vamos a iniciar el curso usando solamente la libreria de React sin ninguna otra herramienta como Babel, Webpack y demas utilidades.

Para comenzar, debes crear una carpeta con el nombre del proyecto en este caso lo llamaremos `gitList`. Dentro de dicha carpeta crea una mas llamada `src`, esta carpeta sera la carpeta principal donde ira el codigo de la aplicacion, ahora crea el archivo **index.html** dentro de `/src`

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./style.css">
  <title>Github List</title>
</head>

<body>
  <div id="root">not rendered</div>
  <script src="https://unpkg.com/react@16.4.1/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.4.1/umd/react-dom.development.js"></script>
  <script>
    // Tu codigo ira aqui
  </script>
</body>

</html>
```

Ahora abre el proyecto en el editor de texto de tu preferencia, puedes usar cualquier sistema operativo ya sea Windows, Mac o Linux. Ahora navega en tu computadora a la ubicacion del proyecto y abre el archivo index.html en el navegador web. Lo unico que veras el texto que dice "not rendered".

- Veras que es una estructura basica de una pagina con HTML5
- Hemos agregado un div llamado root. En este div es donde vamos a insertar/renderizar nuestra aplicacion de React. No es obligatorio que se llame root, es solamente una practica comun.
- Tenemos 2 etiquetas de tipo script
  - El primero es la libreria de React
  - EL segundo es la libreria para renderizar React. Debido a que usaremos el navegador, usamos React DOM. Existen otras librerias de React como React Native (veremos mas adelante), React 360 (Realidad Virtual) y otras. Vamos a ocupar ambas librerias, el orden no importa
  - La ultima etiqueta <script> es donde vamos a colocar nuestro codigo.

En la ultima etiqueta, agrega el siguiente codigo.

```
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Lista de proyectos de GitHub!")
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

Esta es la aplicacion de React mas simple que podamos construir.

- El primer paso es hacer nuestro propio Componente, App. React es todo relacionado a crear componentes. Luego tomar dichos componentes y crear otros componentes basados en esos.
- Hay 2 tipos de Componentes, componentes funcionales y componentes de clases. Este es un componente funcional. Luego veremos los componentes de clases.
- Un componente funcional _debe_ retornar siempre codigo de HTML (lo cual `React.createElement` genera).
- Basicamente estamos creando una etiqueta div con una etiqueta h1 y el texto de dicho titulo.
- `ReatDOM.render` es quien tomar nuestro componente `App` y lo agrega al DOM (en nuestro caso lo estamos agregando al elemento `root`)
- Puedes notar que estamos usando `React.createElement` con `App` como parametro para `ReactDOM.render`. Necesitamos instanciar `App` para poder renderizarlo.

Ahora bien, vamos a separar nuestros componentes de React de nuestro archivo index.html, dentro de la carpeta `/src` crea un archivo nuevo llamado `App.js`, lueg corta el codigo de React de index.html y pegalo dentro del archivo recien creado.

```
// ./src/App.js
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Lista de proyectos de GitHub!")
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

Ahora hacemos referencia al nuevo archivo de Javascript dentro del index.html.

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./style.css">
  <title>Github List</title>
</head>

<body>
  <div id="root">not rendered</div>
  <script src="https://unpkg.com/react@16.4.1/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.4.1/umd/react-dom.development.js"></script>
  <script src="./App.js"></script>
</body>

</html>
```

### <a name="herramientas">Herramientas - npm, ESLint, Prettier, Webpack, Babel</a>

#### npm

npm no significa Node Package Manager. Sin embargo, es el package manager para Node.

Para poder iniciar un proyecto de npm, necesitas ejecutar `npm init` en la ruta principal de tu proyecto Si no tienes Node.js instalado, favor instalalo. Cuando ejecutes `npm init` te hara una serie de preguntas. Si no sabes las respuestas o no te interesan, solamente presiona enter. Siempre podras modifica el archivo package.json luego. Esto nos permitira poder dar inicio y poder agregar paquetes.

#### Calidad de Codigo

Es muy importante escribir codigo de calidad. Puede que existan otras librerias para mantener un codigo de calidad, pero las siguientes son las que yo uso y recomiendo.

#### Prettier

Prettier es una excelente herramienta que se encarga de "mejorar" la estetica de nuestro cdigo, donde agregar identacion, cuanta identacion, cuando hacer enters, etc etc.

Vamos a integrar Prettier en nuestro proyecto, puedes instalar Prettier de forma global `npm install --global prettier`. Para probar prettier y ver los resultados de nuestro codigo formateado con las configuraciones predeterminadas de Prettier, debes ejecutar el siguiente codigo dentro de la carpeta `./src` de tu proyecto `prettier App.js`. Si dicho formato te parece bien, puedes ejecutar `prettier --write App.js` y de esa forma Prettier formateara tu codigo por ti (Cool!, ;)).

Prettier funciona de maravilla con Visual Studio Code (editor que Yo les recomendaria). Solo se debe descargar la extension de Prettier. Pro tip: Configuralo para que solamente se ejecute cuando detecte un archivo de configuracion de Prettier.

Para que la herramienta sepa que tenemos un proyecto con Prettier, vamos a crear un archivo llamado `.prettierrc` en la ruta principal de nuestro proyecto y colocar `{}` dentro. Esto le avisa a Prettier de que usaremos la configuracion predeterminada.

#### npm/Yarn scripts

Puede ser muy dificil tener recordar todos los comandos de nuestro CLI para ejecutarlos en nuestro proyecto. Podemos agregar comandos a nuestro proyecto y luego simplemente ejecutarlos.

Primero ejecuta `npm install -D prettier`. `-D` significa solamente para ambiente de desarrollo. Luego dentro del archivo `package.json` en la seccion de "scripts" agrega lo siguiente:

```
"scripts": {
	"format": "prettier --write \"src/**/*.{js,jsx}\"",
},
```

Ahora puedes ejecutar `yarn format` o `npm run format` y ejecutara dicho comando automaticamente.

#### ESLint

Aparte de Prettier que se encarga de formatear nuestro codigo, se recomienda usar una herramienta que obligue a seguir algunos estilos.

Primero que nada ejecuta, `npm install -D eslint` para instalar eslint como dependencia de tu proyecto, luego configuras tu proyecto para que use eslint.

Existen decenas de configuraciones para ESLint y puedes usar la que quieras. La Airbnb es sin duda la mas popular. Vamos a crear el archivo `.eslintrc.json` el cual es el archivo de configuracion de eslint para nuestro proyecto.

```
{
  "extends": ["eslint:recommended", "prettier", "prettier/react"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```

Esta es una combinacion de configuracions para ESLint y Pretier. Lo mas probable ocupes instalar un par de librerias mas para la configuracion entre ESLint y Prettier, ejecuta el siguiente comando en la carpeta principal de tu proyecto `npm install -D eslint-config-prettier`

Ejecuta el comando `./node_modules/.bin/eslint src/App.js` y veras que te muestra posiblemente varios errores.

Ahora agrega el siguiente comando dentro del package.json

```
"lint": "eslint **/*.{js,jsx} --quiet"
```

ESLint tambien tiene un plugin para integrarlo con Visual Studio Code, lo cual te sugiero que lo hagas. Al final, luego de implementar Prettier y ESLint, la seccion de scripts del package.json luce de la siguiente manera:

```
"scripts": {
    "format": "prettier --write \"src/**/*.{js,jsx}\"",
    "lint": "eslint **/*.{js,jsx} --quiet"
  },
```

#### Webpack y Babel

Ya que tenemos asegurado nuestro codigo limpio usando un linter y que podemos ejecutar nuestros comandos cortesia de npm, vamos a trabajar en la compilacion/build de nuestro codigo. Para esto, vamos a utilizar Webpack y Babel.

#### Webpack

Webpack es una increible herramienta que salio hace unos 3 años al mercado y los desarrolladores con React lo han tomado como una de las herramientas principales debido a sus funcionalidades. En este curso solamente cubriremos los conceptos basicos de Webpack (debido a que es extenso) y nos concentraremos unicamente en 2 funcionalidades: compilacion de modulos y la habilidad de insertarle loaders.

Mas adelante durante la clase usaremos `create-react-app` para crear nuestros proyectos de React, pero por ahora, vale la pena que primero conozcamos los fundamentos de React, Webpack y Babel para que sepamos que sucede detras del telon de `create-react-app`.

Basicamente, **el trabajo de Webpack es combinar todos nuestros archivos de Javascript donde residen nuestros componentes en un solo archivo.**

Lo siguiente que debemos hacer es agregar la libreria de React y ReactDOM como dependencias de nuestro proyecto, pare ello ejecuta el siguiente comando `npm install -S react react-dom`

Dentro de nuestro componente `./src/App.js` vamos a escribir el siguiente codigo al inicio.

```
import React from "react";
import { render } from "react-dom";
...
render(React.createElement(App), document.getElementById("root"));
```

Seguido de eso, vamos a instalar Webpack como dependencia de desarrollo para nuestro proyecto, ejecuta el siguiente comando en la ruta principal de tu proyecto `npm install -D webpack webpack-cli`.

Ahora, vamos a reestructurar los archivos en nuestro proyecto, vamos a crear una carpeta llamada `dist` en la ruta principal y moveremos nuestro archivo index.html de `./src/index.html` hacia `./dist/index.html`.

```
dist
  index.html
src
  App.js
```

Luego, necesitamos modificar nuestro archivo `index.html` de la siguiente manera.

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./style.css">
  <title>Github List</title>
</head>

<body>
  <div id="root">not rendered</div>
  <script src="main.js"></script>
</body>

</html>
```

Como ya tenemos importadas las librerias de React y ReactDOM, ya no ocupamos hacer referencia a ellas desde el index.html, de ahora en adelante, solamente haremos referencia a un nuevo archivo que todavia no tenemos `<script src="main.js"></script>`.

Ahora si, vamos a ver Webpack en accion (finalmente :smile:), para ello desde nuestro terminal en la ruta de nuestro proyecto ejecutamos el siguiente comando
`./node_modules/.bin/webpack src/App.js`

Lo que acabamos de hacer es indicarle a webpack que nos haga un bundle(unificacion) de nuestro componente App.js y automaticamente nos crea el archivo `./dist/main.js`. Dentro de dicho archivo tenemos compilado nuestro codigo de React de nuestro componente App.js, mas adelante, cuando hagamos mas componentes de React para nuestro proyecto, crearemos mas archivos con extension `*.js`, es alli donde webpack entra en escena, creando un solo archivo para nuestros componentes junto con todas y cada una de las dependencias entre dichos archivos.

![Webpack](/img/webpack.png)
Imagen: [Ejemplo grafico de la utilidad de webpack](https://webpack.js.org/)

Para corroborar que todo salio bien, desde la carpeta `dist` de tu proyecto, abre el archivo index.html en el navegador y veras renderizado nuestro unico componente hasta ahora.

#### Babel

Babel es una excelente herramienta, Babel transforma nuestro codigo de React el cual usa la sintaxis conocida como JSX (veremos mas adelante), en sintaxis de Javascript normal. Tambien transforma nuestro codigo de ES6 (version reciente de JS que incorpora bastantes cambios y mejorar al lenguaje) en Javascript que todos los navegadore puedan entender.

A continuacion instala las siguientes librerias de babel desde tu terminal:

```
npm install -D babel-core babel-loader@7 babel-preset-env babel-preset-react
```

En esta ocasion estamos usando Babel6, para ello debemos usar babel-loader version 7. La version actual de Babel que recien salio hace un par de meses es Babel7, el cual usa por default babel-loade@8.

Crea un nuevo archivo en la ruta de tu proyecto llamado `.babelrc`, y pega:

```
{
  "presets": [
    "react",
    ["env", {
      "targets": {
        "browsers": "last 2 versions"
      },
      "loose": true,
      "modules": false
    }]
  ]
}
```

Babel maneja los conceptos de Plugins, cada una de las transformaciones de nuestro codigo vienen en forma de Plugins, para ello Babel usa el concepto de presets o plugins. En este caso le estamos indicando a babel que use el plugin para transformar codigo de react `react` y de ES6 cuando le indicamos `env`.

Ademas, le estamos indicando a Babel que transforme nuestro codigo para que sea compatible con las ultimas 2 versiones de los navegadores donde se cargue nuestra aplicacion de React. Por ultimo le estamos indicando a Babel que No transforme los modulos.

#### Webpack Loaders

Loaders son utilidades que Webpack tomara codigo de entrada, transpilarlo, y generara una salida, tu puedes usars loaders para transpilar codigo como CfeeScript, TypeScript o PureScript. Los loaders de Webpack tambien pueden hacer otras funcionalidades como incluir CSS, imagenes y transformar SVGs. En este ejemplo solamente vamos a utilizar la transformacion de JS.

Ejecuta el siguiente comando desde tu terminal `./node_modules/.bin/webpack --module-bind 'js=babel-loader' src/App.js`

Ahora vamos a crear un archivo de configuracion para Webpack donde especificaremos ademas babel-loader. Para ello en la ruta del proyecto crea un archivo llamado `webpack.config.js`

```
const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/App.js",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  },
  mode: "development"
};
```

Le estamos indicando a Webpack cual es el archivo de entrada (entry) para que compile, este es el componente principal de nuestra aplicacion. Tambien le especificamos una ruta de salidad (output), asi como el nombre del archivo que contiene el build,`main.js`. Tambien le especificamos las extensiones que debe buscar (.js, .jsx, .json), seguido algunas estadisticas (stats) que se mostraran en la terminal, luego algunos loaders en este caso babel-loader, y para terminar, especificamos el mode en development/production.

Ahora bien, si ejecutamos el comando `./node_modules/.bin/webpack` estaremos haciendo el build de nuestro proyecto. En ese caso, podemos agregar un comando en nuestro package.json para que sea mucho mas facil hacer el build. Agrega el siguiente comando en scripts `"build": "webpack"`. Al final, los scripts que tenemos hasta ahora son los siguientes:

Con dicho script de `build` creado, para ejecutarlo, solamente escribes el comando `npm run build` desde tu terminal.

Ahora bien, cada vez que hagamos un cambio a nuestro codigo, tenemos que ejecutar el build, pero, podemos modificar ese comportamiento. Webpack acepta que le pasemos un comando asi `webpack --watch`, lo que hace watch es ejecutar el build y en cada cambio de codigo automaticamente volvera a hacer el build por nosotros.

Podemos tomar ventaja de --watch, asi que agreguemos otro script a nuestro package.json asi `"watch": "webpack --watch"`

```
...
"scripts": {
    "format": "prettier --write \"src/**/*.{js,jsx}\"",
    "lint": "eslint **/*.{js,jsx} --quiet",
    "build": "webpack",
    "watch": "webpack --watch"
  },
...
```

Ahora bien, que pasa si ejecutamos el comando de ESLint `npm run lint`, pasa que ESLint nos mostrara todos los "errores" de nuestro archivo `main.js` (creado por webpack), y no queremos que ESLint se preocupe por dicho archivo, para ello, agregamos un archivo llamado `.eslintignore`, y agregamos:

```
/dist
/node_modules
```

### <a name="jsx">JSX</a>

Hemos estado escribiendo React usando vanila Javascript y hoy en dia nadie hace eso. La mayoria hace uso de JSX el cual es esencialmente sintaxis similar a HTML/XML. Lo que JSX hace al final es tomar el HTML que escribimos para nuestros componentes y lo traduce al mismo codigo de vanila Javascript que estamos usando.

```
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Lista de proyectos de GitHub!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

Ahora si, finalmente estamos usando JSX!! :bowtie:. Como veras, es una combinacion de HTML dentro de JS, ten cuidado en usar los signos `<App />` como parte del nombre del componente App que creamos, esta es la forma en JSX para llamar/referenciar nuestros componentes.

Vamos a crear un segundo componente para el Header de nuestro proyecto, para ello, crea un archivo llamado `./src/Header.js`

```
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <p className="logo">GitHub Demo Project</p>
    </div>
  );
};

export default Header;
```

Hemos agregado un segundo componente, en este caso un Componente Funcional, que simplemente retorna un div con una etiqueta de parrafo, veras tambien que para definir estilos mediante clases en JSX en lugar de class, se utiliza `className` en formato de camelCase, el cambio es debido a que `class` en JS es una palabra reservada. Al final, se exporta el componente mediante `export default Header`, esta es la forma de exportar componentes, variables, funciones via ES6.

Ahora, dentro de nuestro `./src/App.js` agregamos lo siguiente:

```
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js'; // Importamos componente Header

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Lista de proyectos de GitHub!</h1>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

Hemos importado el componente Header y hemos agregado un nuevo div con la clase `container`. Para los estilos usaremos una libreria ligera y bastante util conocida como [skeleton](http://getskeleton.com/), dicha librerias no se considera un framework de CSS, es mas bien una utileria, donde trae su propio grid system y demas estilos que sirven como base para nuestro proyecto. En ese caso, descarga la libreria, copia y pega los estilos dentro de nuestro archivo `./dist/style.css`.

Al final agrega los siguientes estilos a `style.css`, son para el `.header` y `.logo`

```
.header {
  overflow: hidden;
  background-color: #373636;
  padding: 20px 10px;
  box-shadow: 0 0 40px 0 #000000;
}

.header p {
  float: left;
  color: #fff;
  text-align: center;
  padding: 12px;
  padding-left: 70px;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header p.logo {
  font-size: 25px;
  font-weight: bold;
}
```

Bien, lo siguiente que haremos sera ejecutar ESLint automaticamente cuando nuestro codigo se compila por parte de Webpack, asi, ESLint nos hara saber cuando existan errores en nuestro codigo.

Asi como usamos babel-loader para transformar nuestro codigo, vamos a usar el eslint-loader para ejecutar el linter por nosotros, eslint-loader es similar a babel-loader, excepto que No transformara nuestro codigo, solamente nos dara la advertencia de errores. A continuacion, instalemos eslint-loader.

```
npm install -D eslint-loader babel-eslint eslint-plugin-prettier eslint-plugin-react eslint-config-react
```

Dentro de nuestro archivo de configuracion de webpack agregamos:

```
// dentro de rules, antes de babel-loader
{
  enforce: "pre",
  test: /\.jsx?$/,
  loader: "eslint-loader",
  exclude: /node_modules/
}
```

Luego dentro de nuestro archivo de cofiguracion de ESLint `.eslintrc.json` agregamos la siguiente extension:

```
"extends": [
  ...
    "plugin:react/recommended"
  ],
```

Ahora vamos a cambiarnos al servidor web local de Webpack, el cual nos hace las cosas mucho mas sencillas. El servidor web de Webpack acelera nuestro proceso de desarrollo permitiendonos correr un servidor local y servir el contenido desde el servidor web. Guarda todo en memoria y acelera la velocidad del rebuild. Agrega la siguiente libreria:

```
npm install -D webpack-dev-server
```

Ahora, dentro de `webpack.config.js`, agrega:

```
...
// agregalo como propiedad antes de module
devServer: {
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  port: 9000
},
```

Agregamos el siguiente script al package.json, de esta forma levantaremos el servidor de desarrollo en el puerto `localhost:8080` y se ejecutara la compilacion/build del proyecto.

```
"dev": "webpack-dev-server"
```

### <a name="challenge1">Challenge: Mas React</a>

Bien, vamos a continuar creando el landing page de nuestro proyecto, vamos a editar los estilos para eliminar los margenes que se muestran al rededor del componente Header.

```
// dentro de nuestro archivo style.css
body {
  ...
  margin: 0;
}
```

Super!. Asi como dice el titulo de esta seccion, llego el momento de nuestro primer Challenge. El objetivo en este challenge sera terminar de configurar nuestra landing page, la cual debe quedar de la siguiente manera:

![Landin Page](/img/landing-page.png)
Imagen: Asi debe quedar nuestra landing page

**Instrucciones** para resolver este challenge:

1. Deben crear un componente nuevo llamado `Search`
2. Dicho componente esta compuesto por un Input de HTML
3. Deben lograr que luzca lo mas parecido a la imagen, con esquinas redondeadas, color de fondo, etc..
4. Para el icono (cheque), deben usar FontAwesome.
5. Debe ser Responsive

### <a name="react-router">React Router</a>

React Router es una excelente herramienta para el manejo de las rutas en nuestra aplicacion, vamos a utilizar la version mas reciente de dicha libreria, la cual ha tenido bastantes cambios y actualizaciones desde la primera version hasta la version 4, la mas estable hasta ahora.

```
npm install -S react-router react-router-dom
```

Vamos a crear el componente `Search.js` del challenge anterior, para ello, creamos el archivo Search.js en el src del proyecto

```
import React from 'react';
import Header from './Header.js';

const Search = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <section className="search six offset-by-three columns">
          <form>
            <button type="submit">
              <span className="fa fa-check-circle fa-3x" />
            </button>
            <input
              className="u-full-width"
              type="text"
              name="username"
              placeholder="Enter Github Username"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Search;
```

Como habran notado, hemos incluido aca el llamado al componente `<Header />`, este sera uno de los cambios que haremos a la estructura de nuestra aplicacion.

Ahora agregamos un par de clases a nuestro archivo `style.css`

```
@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css');

/* Search component
_________________________________________________ */
.search {
  position: relative;
  top: 50%;
  margin-top: 200px;
}
.search {
  display: inline-block;
}

.search button {
  position: absolute;
  top: 7px;
  left: 10px;
  color: green;
  background: transparent;
  border: none;
}

.search button {
  left: auto;
  right: 10px;
  background: transparent;
}
```

Hemos importado FontAwesome en nuestro archivo de hoja de estilos mediante la URL de un CDN (Content Delivery Network), esta es una de las tantas formas de importar frameworks de CSS en React.

Seguido, importaremos el componente a nuestro App.js y utilizaremos `BrowserRouter` junto con `Route` de React Router.

```
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Search} />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

Hemos importado `BrowserRouter`, esto debido a que nos permite usar el historial de navegacion del API de HTML5, en lugar de `HashRouter`. Y `Route` lo utilizamos para crear las rutas de nuestro proyecto, en este caso, para la ruta principal le agregamos la propiedad `exact`, esto para especificar que la ruta principal de nuestra aplicacion en este caso el `path='/'` debe ser exacto, si no lo agregamos podemos confundir a React Router, ya que por ejemplo; podria tomar las subsecuentes rutas que lleven el `/` como rutas principales. El prop `component={Search}` es donde le indicamos que componente carga al usuario ingresar dicha ruta.

Lo siguiente que haremos es agregarle funcionalidad al formulario de Search.js, usaremos la propiedad `onSubmit` para indicarle al formulario que hacer con los datos ingresados en el `<input type="text" />`

```
// ./src/Search.js
import React from 'react';
import Header from './Header.js';

const Search = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(e.target.username.value);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <section className="search six offset-by-three columns">
          <form onSubmit={handleSubmit}>
            <button type="submit">
              <span className="fa fa-check-circle fa-3x" />
            </button>
            <input
              className="u-full-width"
              type="text"
              name="username"
              placeholder="Enter Github Username"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Search;
```

Aparte, hemos creado una funcion `handleSubmit` para tomar los valores del Input e imprimirlos en este caso en la consola del navegador.

```
  const handleSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(e.target.username.value);
  };
```

La linea `e.preventDefault()` se utiliza para evitar que el navegador intente llamar a un servidor al momento de darle submit al formulario. La siguiente linea `// eslint-disable-next-line` es para decirle a ESLint que ignore la linea del console.log(e.target.username.value), debido a que No es permitido console.log al momento de hacer deploy a produccion, claro, esto es solamente con motivos de prueba, para asegurarnos que recibimos los datos que se ingresan en el Input.

### <a name="props">Props</a>

Props en React son variables que se pasan de componentes padres a hijos, pero el hijo no puede modificar los props que recibe. Esta simple restriccion nos ayuda muchisimo en el futuro cuando un bug aparece, ya sabrias que el hijo no modifico la variable porque simplemente no puede.

Lo siguiente que haremos sera modificar la ruta principal de nuestro proyecto dentro de App.js.

```
...
<BrowserRouter>
  <Route exact path='/' render={({ history }) => (
    <Search
      onSubmitUsername={(username) => {
        history.push(`/${username}/projects`)
      }}
    />
  )} />
</BrowserRouter>
...
```

Hemos reemplazado la Prop `component` por `render`, esto nos permite ampliar el llamado del componente hijo Search; pasandole una funcion como Props (onSubmitUsername). `onSubmitUsername` es una funcion que creamos como Prop para el componente Search, dicha funcion recibe un parametro; username. Todavia no tenemos el valor de dicho parametro, el valor de `username` sera asignado por el componente hijo Search.

`history`, es un parametro que BrowserRoute nos proporciona, y como podran observar es un arreglo al cual le podemos especificar a que ruta deseamos que nos redireccione, en este caso la ruta es `` history.push(`/${username}/projects`) ``, a pesar de que todavia No hemos definido dicha ruta. Ademas, podran notar que usamos "backticks" para definir la ruta a llamar, esto nos permite usar una variable dentro de una cadena de string, es parte de las funcionalidades de ES6. En ES5 seria diferente; `history.push('/' + username + '/projects')`.

Regresando al componente Search.js, vamos a recibir el Prop `onSubmitUsername` que el componente padre App.js le envia. Los Props se reciben como parametros en componentes funcionales sin estado y son usados mediante el objeto contextual de ES6 `this` para componentes que manejan sus propios estados (class components).

```
// ./src/Search.js
import React from 'react';
import Header from './Header.js';

const Search = ({ onSubmitUsername }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    if (onSubmitUsername && username) {
      onSubmitUsername(username);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <section className="search six offset-by-three columns">
          <form onSubmit={handleSubmit}>
            <button type="submit">
              <span className="fa fa-check-circle fa-3x" />
            </button>
            <input
              className="u-full-width"
              type="text"
              name="username"
              placeholder="Enter Github Username"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Search;
```

Hemos declarado un parametro para el componente Search.js `{ onSubmitUsername }`, dicho parametro proviene del componente padre, y ademas es una funcion, esto nos da la pauta que podemos enviar simples variables y/o funciones como parametros.

```
const handleSubmit = e => {
  e.preventDefault();
  const username = e.target.username.value;
  if (onSubmitUsername && username) {
    onSubmitUsername(username);
  }
};
```

Ademas, hemos modificado la funcion handleSubmit creando una constante para alojar el valor del Input del formulario, aparte hacemos una validacion para poder llamar la funcion onSubmitUsername que recibimos como Prop y pasarle el parametro que dicha funcion necesita, en este ejemplo, estamos recibiendo Props de padre a hijo y ademas estamos enviando parametros de hijo a padre (username), comunicacion de dos vias.

Ahora bien, es probable que ESLint nos de problemas; `'onSubmitUsername' is missing in props validation`, para solucionar dicho asunto usaremos una libreria llamada `prop-types`

### <a name="prop-types">PropTypes</a>

React tiene una funcionalidad que nos permite establecer propTypes los cuales se validad en tiempo de ejecucion. Estos terminan siendo bastante utiles para debugear, debido a que React sabe que tipos de Props deberia de estar recibiendo el componente. Asi que vamos a configurarlo.

```
npm install -S prop-types
```

Importamos PropTypes en la linea `import PropTypes from 'prop-types';` luego definimos las props que Search recibe

```
import React from 'react';
import PropTypes from 'prop-types'; // Importamos PropTypes
import Header from './Header.js';

const Search = ({ onSubmitUsername }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    if (onSubmitUsername && username) {
      onSubmitUsername(username);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <section className="search six offset-by-three columns">
          <form onSubmit={handleSubmit}>
            <button type="submit">
              <span className="fa fa-check-circle fa-3x" />
            </button>
            <input
              className="u-full-width"
              type="text"
              name="username"
              placeholder="Enter Github Username"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

// Aca definimos las propTypes del componente Search
Search.propTypes = {
  onSubmitUsername: PropTypes.func
};

export default Search;
```

En este caso definimos los props del componente Search, seguido usamos la property propTypes el cual es un objeto que nos permite definir las props y el tipo de prop que es, en este caso es una funcion (`PropTypes.func`).
