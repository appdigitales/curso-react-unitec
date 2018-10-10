## Bienvenidos al curso!
Este curso esta basado en varios cursos libres respecto a React, la mayoria de su contenido fue creado por otros autores los cuales han donado su tiempo para crear dichos materiales con licencia open-source para que podamos hacer uso de ellos, lo cual agradezco infinatemnte. Algunos de dichos autores son [Brian Holt](https://github.com/btholt)

### Solamente React
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

* Veras que es una estructura basica de una pagina con HTML5
* Hemos agregado un div llamado root. En este div es donde vamos a insertar/renderizar nuestra aplicacion de React. No es obligatorio que se llame root, es solamente una practica comun.
* Tenemos 2 etiquetas de tipo script
  * El primero es la libreria de React
  * EL segundo es la libreria para renderizar React. Debido a que usaremos el navegador, usamos React DOM. Existen otras librerias de React como React Native (veremos mas adelante), React 360 (Realidad Virtual) y otras. Vamos a ocupar ambas librerias, el orden no importa
  * La ultima etiqueta <script> es donde vamos a colocar nuestro codigo.

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
* El primer paso es hacer nuestro propio Componente, App. React es todo relacionado a crear componentes. Luego tomar dichos componentes y crear otros componentes basados en esos.
* Hay 2 tipos de Componentes, componentes funcionales y componentes de clases. Este es un componente funcional. Luego veremos los componentes de clases.
* Un componente funcional _debe_ retornar siempre codigo de HTML (lo cual `React.createElement` genera).
* Basicamente estamos creando una etiqueta div con una etiqueta h1 y el texto de dicho titulo.
* `ReatDOM.render` es quien tomar nuestro componente `App` y lo agrega al DOM (en nuestro caso lo estamos agregando al elemento `root`)
* Puedes notar que estamos usando `React.createElement` con `App` como parametro para `ReactDOM.render`. Necesitamos instanciar `App` para poder renderizarlo.
