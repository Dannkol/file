# Fetch a php

Codigo para  los HEADER

###### index.php

```php
<?php
    $DATA = json_decode(file_get_contents('php://input'), true);
    $METHOD = $_SERVER['REQUEST_METHOD'];
    $HEADER = apache_request_headers();
    echo json_encode($HEADER);
    
```

###### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./app.js" defer></script>
</head>
<body>
    <form method="post">
        <!-- <input type="file" name="archivo" id="archivo"> -->
        <input type="text" name="nombre">
        <input type="number" name="edad">
        <button type="submit">enviar</button>
    </form>
</body>
</html>
```

###### app.js

```js
document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    console.log(data);
    let res = await fetch('index.php' , {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(data)
    })
    let resp = await res.json()
    console.log(resp);
}) 
```

Realizamos una peticion POST por medio que un fetch desde el js a nuestro servidor (index.php) este requiere que una condiguracion de cros por parte del apache para su correcto funcionamiento, peor en este momento usaremos  

```php
file_get_contents('php://input')
```

con el fin de permitir todo el acceso (una muy mala practica)

# Headers

**permite a los  desarrolladores enviar cabeceras HTTP en sus scripts para controlar cómo los navegadores interpretan y procesan las respuestas**

## Tipos de header

El fetch realizado anteriormente devuelve este header

```json
{
  "Host": "172.16.63.100",
  "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0",
  "Accept": "*/*",
  "Accept-Language": "en-US,en;q=0.5",
  "Accept-Encoding": "gzip, deflate",
  "Referer": "http://172.16.63.100/SpUkM01-073/file/",
  "Content-Type": "application/json",
  "Content-Length": "31",
  "Origin": "http://172.16.63.100",
  "Connection": "keep-alive"
}
```

- Host: Indica la dirección IP o el nombre de dominio del servidor al que se está enviando la solicitud. En este caso, el valor es "172.16.63.100", lo que significa que la solicitud se envía a ese servidor.

    

- User-Agent: Especifica el navegador web o el cliente que está utilizando para enviar la solicitud al servidor. En este caso, el valor indica que se está utilizando Mozilla Firefox en Ubuntu Linux.

    

- Accept: Indica el tipo de contenido que el cliente está dispuesto a aceptar como respuesta del servidor. En este caso, el valor es "/", lo que significa que el cliente está dispuesto a aceptar cualquier tipo de contenido.

    

- Accept-Language: Especifica los idiomas que el cliente prefiere para las respuestas. En este caso, el valor indica que el cliente prefiere el idioma en-US (inglés de Estados Unidos) y en (inglés en general) con una prioridad de 0.5 para el idioma en.
  
    
    
- Accept-Encoding: Indica los métodos de compresión que el cliente puede entender. En este caso, el valor indica que el cliente puede entender la compresión con gzip y deflate.
  
    
    
- Referer: Contiene la URL de la página desde la cual se envió la solicitud actual. En este caso, el valor indica que la solicitud se envió desde "http://172.16.63.100/SpUkM01-073/file/".
  
    
    
- Content-Type: Especifica el tipo de contenido del cuerpo de la solicitud. En este caso, el valor es "application/json", lo que indica que el cuerpo de la solicitud contiene datos en formato JSON.
  
    
- Content-Length: Indica la longitud en bytes del cuerpo de la solicitud. En este caso, el valor es "31", lo que significa que el cuerpo de la solicitud tiene 31 bytes de longitud.
  
    
- Origin: Indica el origen de la solicitud, es decir, la URL del documento o recurso que inició la solicitud. En este caso, el valor es "http://172.16.63.100".
    

- Connection: Indica si la conexión con el servidor debe mantenerse abierta después de completar la solicitud. En este caso, el valor es "keep-alive", lo que significa que la conexión debe mantenerse abierta.
