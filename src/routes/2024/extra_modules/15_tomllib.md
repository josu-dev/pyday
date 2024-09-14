```py
import tomllib
```

--- animate

El modulo `tomllib{:py}` provee una interfaz para parsear [TOML](https://toml.io/en/)

--- animate

Esos que se ven así:

```toml
[persona]
nombre = "Guido van Rossum"
edad = 68

[relaciones]
casado = ["con Python", "y con su esposa"]

# Un formato de configuracion para humanos
```

--- animate

Podemos cargarlo desde una string

--- animate

Podemos cargarlo desde una string

```py
import tomllib

print(tomllib.loads('''
[persona]
nombre = "Guido van Rossum"
edad = 68

[relaciones]
casado = ["con Python", "y con su esposa"]
'''))
```

--- animate

```plain
{
  'persona': {
    'nombre': 'Guido van Rossum',
    'edad': 68
  },
  'relaciones': {
    'casado': ['con Python', 'y con su esposa']
  }
}
```

--- animate

O desde un archivo:

--- animate

O desde un archivo:

```py
import tomllib

with open('settings.toml') as f:
    print(tomllib.load(f))
```

--- animate

```py
import tomllib

with open('settings.toml') as f:
    print(tomllib.load(f))
```

```plain
Traceback (most recent call last):
  File "C:\Users\suare\projects\personal\pyday\xd.py", line 23, in <module>
    print(tomllib.load(f))
          ^^^^^^^^^^^^^^^
  File "C:\Users\suare\.pyenv\pyenv-win\versions\3.12.1\Lib\tomllib\_parser.py", line 63, in load
    raise TypeError(
TypeError: File must be opened in binary mode, e.g. use `open('foo.toml', 'rb')`
```

--- animate

```plain
Traceback (most recent call last):
  File "C:\Users\suare\projects\personal\pyday\xd.py", line 23, in <module>
    print(tomllib.load(f))
          ^^^^^^^^^^^^^^^
  File "C:\Users\suare\.pyenv\pyenv-win\versions\3.12.1\Lib\tomllib\_parser.py", line 63, in load
    raise TypeError(
TypeError: File must be opened in binary mode, e.g. use `open('foo.toml', 'rb')`
```

No se olviden de abrir el archivo en modo binario

--- animate

No se olviden de abrir el archivo en modo binario

```py
import tomllib

with open('settings.toml', 'rb') as f:
    print(tomllib.load(f))
```

--- animate

```plain
{
  'server': {
    'host': 'localhost',
    'port': 8080,
    'database': {
      'uri': 'mongodb://localhost:27017',
      'name': 'app'
    }
  },
  'log': {
    'level': 'info',
    'path': '/var/log/app.log'
  }
}
```

---

Genial ahora puedo leer archivos de configuracion en TOML

--- animate

Y si quiero escribir uno?

--- animate

Y si quiero escribir uno?

hmmm...

--- animate

hmmm...

los docs dicen que uses una libreria

--- animate

hmmm...

los docs dicen que uses una libreria

[Tomli-W package](https://pypi.org/project/tomli-w/) o [TOML Kit package](https://pypi.org/project/tomlkit/)

--- animate

hmmm...

--- animate

hmmm...

Y si lo hago a mano?

--- animate

Y si lo hago a mano?

no, no y no

--- animate

Y si lo hago a mano?

no, no y no

lo digo por experiencia, mejor usa una libreria
