#instrucciones

## `al crear proyecto de react se debe instalar tambien `
` npm install --save-dev @electron-forge/cli`
para luego añadir los imports necesarios 
[si no tiene electron de manera global se lo debe instalar ]
## no se debe olvidar poner el main en el package.json
## añadir todo con npx electron-forge import
##`IMPORTANTE `
`A LA HORA DE HACER BUILD SI ESTA TRABAJANDO CON VITE JS `
APARECERA DE LA SIGUIENTE MANERA 

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>camara web</title>
    <script type="module" crossorigin src="/assets/index.2cea6cd7.js"></script>
    <link rel="stylesheet" href="/assets/index.3c4ca1ab.css">
  </head>
  <body>
    <div id="root"></div>
    
  </body>
</html>
```

Y SE TIENE QUE AGREGAR EL `.` DELANTE PARA INDICAR LA RUTA QUEDANDO ASI 

```

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>camara web</title>
    <script type="module" crossorigin src="./assets/index.2cea6cd7.js"></script>
    <link rel="stylesheet" href="./assets/index.3c4ca1ab.css">
  </head>
  <body>
    <div id="root"></div>
    
  </body>
</html>
```
