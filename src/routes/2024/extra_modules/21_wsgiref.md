```py
import wsgiref
```

--- animate

El modulo `wsgiref{:py}` es la implementacion de referencia de [WSGI](https://wsgi.readthedocs.io/en/latest/)

--- animate

El modulo `wsgiref{:py}` es la implementacion de referencia de [WSGI](https://wsgi.readthedocs.io/en/latest/)

Pero, que es WSGI?

--- animate

Pero, que es WSGI?

WSGI es una especificacion para interfaces entre servidores web y aplicaciones web o frameworks web en Python con el objetivo de promover la portabilidad de aplicaciones web en diferentes servidores web

--- animate

WSGI es una especificacion para interfaces entre servidores web y aplicaciones web o frameworks web en Python con el objetivo de promover la portabilidad de aplicaciones web en diferentes servidores web

La especificacion esta definida en el [PEP3333](https://pep3333.readthedocs.io/en/latest/)

--- animate

El modulo `wsgiref{:py}` contiene los siguientes submodulos

--- animate

El modulo `wsgiref{:py}` contiene los siguientes submodulos

- `wsgiref.handlers{:py}`: Provee clases bases que manejan el trabajo de comunicacion entre servidores web y aplicaciones WSGI

--- animate

El modulo `wsgiref{:py}` contiene los siguientes submodulos

- `wsgiref.handlers{:py}`: Provee clases bases que manejan el trabajo de comunicacion entre servidores web y aplicaciones WSGI
- `wsgiref.headers{:py}`: Provee una unica clase `Headers{:py}` para manejar cabeceras HTTP mediante una interface similar a un mapa

--- animate

El modulo `wsgiref{:py}` contiene los siguientes submodulos

- `wsgiref.handlers{:py}`: Provee clases bases que manejan el trabajo de comunicacion entre servidores web y aplicaciones WSGI
- `wsgiref.headers{:py}`: Provee una unica clase `Headers{:py}` para manejar cabeceras HTTP mediante una interface similar a un mapa
- `wsgiref.simple_server{:py}`: Provee una implementacion de un servidor HTTP simple basado en el modulo `http.server{:py}` de la std lib para aplicaciones WSGI (solo para pruebas)

--- animate

El modulo `wsgiref{:py}` contiene los siguientes submodulos

- `wsgiref.handlers{:py}`: Provee clases bases que manejan el trabajo de comunicacion entre servidores web y aplicaciones WSGI
- `wsgiref.headers{:py}`: Provee una unica clase `Headers{:py}` para manejar cabeceras HTTP mediante una interface similar a un mapa
- `wsgiref.simple_server{:py}`: Provee una implementacion de un servidor HTTP simple basado en el modulo `http.server{:py}` de la std lib para aplicaciones WSGI (solo para pruebas)
- `wsgiref.util{:py}`: Provee utilidades principalmente para trabajar con ambientes WSGI (diccionarios con variables de solicitudes HTTP)

--- animate

El modulo `wsgiref{:py}` contiene los siguientes submodulos

- `wsgiref.handlers{:py}`: Provee clases bases que manejan el trabajo de comunicacion entre servidores web y aplicaciones WSGI
- `wsgiref.headers{:py}`: Provee una unica clase `Headers{:py}` para manejar cabeceras HTTP mediante una interface similar a un mapa
- `wsgiref.simple_server{:py}`: Provee una implementacion de un servidor HTTP simple basado en el modulo `http.server{:py}` de la std lib para aplicaciones WSGI (solo para pruebas)
- `wsgiref.util{:py}`: Provee utilidades principalmente para trabajar con ambientes WSGI (diccionarios con variables de solicitudes HTTP)
- `wsgiref.validate{:py}`: Provee una funcion `validate{:py}` para validar ambos lados de la comunicacion entre el servidor/gateway y la aplicacion WSGI

--- animate

El modulo `wsgiref{:py}` contiene los siguientes submodulos

`wsgiref.handlers{:py}`: Provee clases bases que manejan el trabajo de comunicacion entre servidores web y aplicaciones WSGI

`wsgiref.headers{:py}`: Provee una unica clase `Headers{:py}` para manejar cabeceras HTTP mediante una interface similar a un mapa

`wsgiref.simple_server{:py}`: Provee una implementacion de un servidor HTTP simple basado en el modulo `http.server{:py}` de la std lib para aplicaciones WSGI (solo para pruebas)

`wsgiref.util{:py}`: Provee utilidades principalmente para trabajar con ambientes WSGI (diccionarios con variables de solicitudes HTTP)

`wsgiref.validate{:py}`: Provee una funcion `validate{:py}` para validar ambos lados de la comunicacion entre el servidor/gateway y la aplicacion WSGI

`wsgiref.types{:py}`: Provee varios typos de datos para tipado estatico sobre la especificacion WSGI

--- animate


El modulo `wsgiref{:py}` contiene los siguientes submodulos

## `wsgiref.handlers{:py}`

Provee clases bases que manejan el trabajo de comunicacion entre servidores web y aplicaciones WSGI

--- animate


El modulo `wsgiref{:py}` contiene los siguientes submodulos

## `wsgiref.headers{:py}`

Provee una unica clase `Headers{:py}` para manejar cabeceras HTTP mediante una interface similar a un mapa

--- animate


El modulo `wsgiref{:py}` contiene los siguientes submodulos

## `wsgiref.simple_server{:py}`

Provee una implementacion de un servidor HTTP simple basado en el modulo `http.server{:py}` de la std lib para aplicaciones WSGI (solo para pruebas)

--- animate

El modulo `wsgiref{:py}` contiene los siguientes submodulos

## `wsgiref.util{:py}`

Provee utilidades principalmente para trabajar con ambientes WSGI (diccionarios con variables de solicitudes HTTP)

--- animate

El modulo `wsgiref{:py}` contiene los siguientes submodulos

## `wsgiref.validate{:py}`

Provee una funcion `validate{:py}` para validar ambos lados de la comunicacion entre el servidor/gateway y la aplicacion WSGI

--- animate

El modulo `wsgiref{:py}` contiene los siguientes submodulos

## `wsgiref.types{:py}`

Provee varios typos de datos para tipado estatico sobre la especificacion WSGI

---

Hmmm

--- animate

Buenisimo pero no entendi nada

--- animate

Buenisimo pero no entendi nada

Esta bien, nombremos algunos servidores web que implementan WSGI

--- animate

Esta bien, nombremos algunos servidores web que implementan WSGI

<div class="text-6xl [&_*]:flex [&_*]:gap-8 [&_*]:flex-wrap [&_*]:justify-center" style="display: flex; gap: 1rem;">

[Gunicorn](https://github.com/benoitc/gunicorn) [mod_wsgi](https://github.com/GrahamDumpleton/mod_wsgi/)
[Netius](https://github.com/hivesolutions/netius) [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/) [Werkzeug](https://werkzeug.palletsprojects.com/en/3.0.x/) 

</div>

--- animate

Esta bien, nombremos algunos servidores web que implementan WSGI

<div class="text-6xl [&_*]:flex [&_*]:gap-8 [&_*]:flex-wrap [&_*]:justify-center" style="display: flex; gap: 1rem;">

[Gunicorn](https://github.com/benoitc/gunicorn) [mod_wsgi](https://github.com/GrahamDumpleton/mod_wsgi/)
[Netius](https://github.com/hivesolutions/netius) [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/) [Werkzeug](https://werkzeug.palletsprojects.com/en/3.0.x/)

</div>

_hay mas pero quedemosnos con esos_

--- animate

Despues estan los frameworks web que implementan WSGI

--- animate

Despues estan los frameworks web que implementan WSGI

Pero se los dejo de tarea
