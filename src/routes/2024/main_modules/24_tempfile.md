
--- animate

```py
import tempfile
```

--- animate

El modulo `tempfile{:py}` crea archivos y directorios temporales

--- animate

El modulo `tempfile{:py}` crea archivos y directorios temporales

De que nos sirve?

--- animate

De que nos sirve?

Algunas veces estamos trabajando con grandes volumenes de datos, haciendo transformaciones, y otras cosas que no necesitamos persistir en disco

--- animate

Algunas veces estamos trabajando con grandes volumenes de datos, haciendo transformaciones, y otras cosas que no necesitamos persistir en disco

Es ahi donde entra `tempfile{:py}` y nos simplifica la vida

--- animate

```py
import os
import tempfile

with tempfile.TemporaryFile() as f:
    f.write(b'hello world')
    f.seek(0)
    print(f.read())
```

--- animate

```py
import os
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

Exceptuando `tempfile.mkstemp{:py}` y `tempfile.mkdtemp{:py}`, todos son context managers que hacen el cierre y eliminacion del archivo/directorio automaticamente

--- animate

```py
import os
import tempfile

with tempfile.NamedTemporaryFile() as f:
    print(f.name)
    print(os.path.exists(f.name))

print(os.path.exists(f.name))
```

--- animate

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

--- animate class="text-3xl"

O algo totalmente inneceario

--- animate class="text-3xl"

O algo totalmente inneceario

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

O algo totalmente inneceario

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

```plain
0
```

Como que 0?

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

Ah, si, me falto el `d/` en el `os.path.getsize(f){:py}` e `if os.path.isfile(f){:py}`

--- animate class="text-3xl"

Ahora si

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
