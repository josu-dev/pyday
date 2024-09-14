
--- animate

```py
import tempfile
```

--- animate

```py
import tempfile
```

Crear archivos y directorios temporales

--- animate

Crear archivos y directorios temporales

De que nos sirve?

--- animate

De que nos sirve?

Para trabajar con grandes volumenes de datos, haciendo transformaciones y otras operacioens que no necesitamos persistir en disco

--- animate

Para trabajar con grandes volumenes de datos, haciendo transformaciones y otras operacioens que no necesitamos persistir en disco

Es ahi donde entra `tempfile{:py}` y nos simplifica la vida

--- animate

Es ahi donde entra `tempfile{:py}` y nos simplifica la vida

```py
import tempfile

with tempfile.TemporaryFile() as f:
    f.write(b'hello world')
    f.seek(0)
    print(f.read())
```

--- animate

```py
import tempfile

with tempfile.TemporaryFile() as f:
    f.write(b'hello world')
    f.seek(0)
    print(f.read())
```

```sh
b'hello world'
```

--- animate

Por defecto, los archivos son abiertos en modo `w+b`

--- animate

Por defecto, los archivos son abiertos en modo `w+b`

Con `mode=<modo apertura>{:py}` podemos cambiarlo

--- animate

Con las funciones

`tempfile.mkstemp{:py}` se crea un archivo temporal

`tempfile.mkdtemp{:py}` se crea un directorio temporal

--- animate

Con las funciones

`tempfile.mkstemp{:py}` se crea un archivo temporal

`tempfile.mkdtemp{:py}` se crea un directorio temporal

Pero hay que hacer la limpieza manualmente

--- animate

Por lo que es mejor usar

`tempfile.TemporaryFile{:py}`, `tempfile.NamedTemporaryFile{:py}` y `tempfile.TemporaryDirectory{:py}`

--- animate

Por lo que es mejor usar

`tempfile.TemporaryFile{:py}`, `tempfile.NamedTemporaryFile{:py}` y `tempfile.TemporaryDirectory{:py}`

Ya que al ser context managers, hacen el cierre y eliminacion del archivo/directorio automaticamente

--- animate

```py
import os
import tempfile

with tempfile.NamedTemporaryFile() as f:
    print(f.name)
    print(os.path.exists(f.name))

print(os.path.exists(f.name))
```

--- animate class="text-3xl"

```py
import os
import tempfile

with tempfile.NamedTemporaryFile() as f:
    print(f.name)
    print(os.path.exists(f.name))

print(os.path.exists(f.name))
```

```plain
C:\Users\suare\AppData\Local\Temp\tmpkjh2rj8i
True
False
```

--- animate

Algo totalmente innecesario

--- animate class="text-3xl"

Algo totalmente innecesario

```py data-id="1"
import os
import tempfile

with tempfile.TemporaryDirectory() as d:
    for i in range(100):
        with open(f'{d}/file_{_}.txt', 'w') as f:
            f.write(f'Hola soy el archivo {i}')

    print(sum(
        os.path.getsize(f)
        for f in os.listdir(d)
        if os.path.isfile(f)
    ))
```

--- animate class="text-3xl"

```py data-id="1"
import os
import tempfile

with tempfile.TemporaryDirectory() as d:
    for i in range(100):
        with open(f'{d}/file_{_}.txt', 'w') as f:
            f.write(f'Hola soy el archivo {i}')

    print(sum(
        os.path.getsize(f)
        for f in os.listdir(d)
        if os.path.isfile(f)
    ))
```

```plain
0
```

--- animate class="text-3xl"

```py data-id="1"
import os
import tempfile

with tempfile.TemporaryDirectory() as d:
    for i in range(100):
        with open(f'{d}/file_{_}.txt', 'w') as f:
            f.write(f'Hola soy el archivo {i}')

    print(sum(
        os.path.getsize(f)
        for f in os.listdir(d)
        if os.path.isfile(f)
    ))
```

Como que pesa 0?

--- animate class="text-3xl"

```py data-id="1"
import os
import tempfile

with tempfile.TemporaryDirectory() as d:
    for i in range(100):
        with open(f'{d}/file_{_}.txt', 'w') as f:
            f.write(f'Hola soy el archivo {i}')

    print(sum(
        os.path.getsize(f)
        for f in os.listdir(d)
        if os.path.isfile(f)
    ))
```

Me falto el `d/` en el `os.path.getsize(f){:py}` e `if os.path.isfile(f){:py}`

--- animate class="text-3xl"

```py data-id="1"
import os
import tempfile

with tempfile.TemporaryDirectory() as d:
    for i in range(100):
        with open(f'{d}/file_{_}.txt', 'w') as f:
            f.write(f'Hola soy el archivo {i}')

    print(sum(
        os.path.getsize(f"{d}/{f}")
        for f in os.listdir(d)
        if os.path.isfile(f"{d}/{f}")
    ))
```

Ahora si

--- animate class="text-3xl"

```py data-id="1"
import os
import tempfile

with tempfile.TemporaryDirectory() as d:
    for i in range(100):
        with open(f'{d}/file_{_}.txt', 'w') as f:
            f.write(f'Hola soy el archivo {i}')

    print(sum(
        os.path.getsize(f"{d}/{f}")
        for f in os.listdir(d)
        if os.path.isfile(f"{d}/{f}")
    ))
```

```plain
2190
```
