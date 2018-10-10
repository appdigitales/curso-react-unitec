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
