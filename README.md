# Strapct Base

Este proyecto nacio con la finalidad de acelerar la producción de aplicaciones React con el backend Strapi. Utilizando docker para mayor portabilidad.

## Requisitos previos

Es recomendable tener instalado maketools para poder utilizar las herramientas y los scripts para automatizar la configuración tanto de Docker como de las otras aplicaciones.

Para ubuntu:
```
sudo apt-get install build-essential
```

### Documentación

*En progreso.*

Ejecuta el siguiente comando para crear un volumen para ser utilizado por node.
```
make setup
```

Ahora instalamos node y procedemos a hacer pull a las imagenes necesarias de docker.
```
make install
```

Iniciamos docker y todos los procesos para iniciar strapi + react
```
make dev
```

Para ingresar a node podemos utilizar el siguiente comando:
```
make nodebox
```