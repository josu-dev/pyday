
--- animate

```py
import sys
```

--- animate

```py
import sys
```

Acceso a variables usadas/mantenidas por el interprete y funciones para interactuar con este

--- animate

Veamos algunas

--- animate

Veamos algunas

```py
import sys

print(sys.argv)
```

--- animate

Veamos algunas

```py
import sys

print(sys.argv)
```

```sh
python xd.py $HOME "argumento 2"
['xd.py', 'C:\\Users\\suare', 'argumento 2']
```

--- animate

Veamos algunas

```py
import sys

print(sys.orig_argv)
```

--- animate class="text-3xl"

Veamos algunas

```py
import sys

print(sys.orig_argv)
```

```sh
python xd.py $HOME "argumento 2"
[
  'C:\\Users\\suare\\.pyenv\\pyenv-win\\versions\\3.12.1\\python.exe',
  'xd.py', 'C:\\Users\\suare', 'argumento 2'
]
```

--- animate

Veamos algunas

```py
import sys

print(sys.byteorder)
```

--- animate

Veamos algunas

```py
import sys

print(sys.byteorder)
```

```sh
python xd.py
little
```

--- animate class="gap-16"

## [Endianess](https://es.wikipedia.org/wiki/Endianness)

<div class="grid grid-cols-2 gap-8 scale-150">
<div>

![Big Endian](/2024/big_endian.svg)

</div>

<div>

![Little Endian](/2024/little_endian.svg)

</div>
</div>

--- animate

Veamos algunas

```py
import sys

print(len(sys.builtin_module_names))
print(len(sys.stdlib_module_names))
print(len(sys.modules))
```

--- animate class="text-3xl"

Veamos algunas

```py
import sys

print(len(sys.builtin_module_names))
print(len(sys.stdlib_module_names))
print(len(sys.modules))
```

```sh
67
300
35
```

--- animate

Veamos algunas

```py
import sys

print(sys.path)
```

--- animate

Veamos algunas

```py
import sys

print(sys.path)
```

Es la lista de directorios donde Python busca modulos, prepopulada con la variable de entorno `PYTHONPATH` y un por defecto que depende del sistema subyacente

--- animate

Veamos algunas

```py
import sys

print(sys.copyright)
```

--- animate class="text-3xl"

Veamos algunas

```py
import sys

print(sys.copyright)
```

```plain
Copyright (c) 2001-2023 Python Software Foundation.
All Rights Reserved.

Copyright (c) 2000 BeOpen.com.
All Rights Reserved.

Copyright (c) 1995-2001 Corporation for National Research Initiatives.
All Rights Reserved.

Copyright (c) 1991-1995 Stichting Mathematisch Centrum, Amsterdam.
All Rights Reserved.
```

--- animate

Veamos algunas

```py
import sys

print(sys.implementation)
print(sys.platform)
print(sys.version)
print(sys.getrecursionlimit())
```

--- animate class="text-3xl"

Veamos algunas

```py
import sys

print(sys.implementation)
print(sys.platform)
print(sys.version)
print(sys.getrecursionlimit())
```

```plain
namespace(
  name='cpython', cache_tag='cpython-312',
  version=sys.version_info(major=3, minor=12, micro=1, releaselevel='final', serial=0),
  hexversion=51118576)
win32
3.12.1 (tags/v3.12.1:2305ca5, Dec  7 2023, 22:03:25) [MSC v.1937 64 bit (AMD64)]
1000
```

--- animate

Veamos algunas

```py
import sys

x = 1
y = [x, 2, 3]
z = {'x': x, 'y': y}

print(sys.getsizeof(x))
print(sys.getrefcount(x))
```

--- animate class="text-3xl"

Veamos algunas

```py
import sys

x = 1
y = [x, 2, 3]
z = {'x': x, 'y': y}

print(sys.getsizeof(x))
print(sys.getrefcount(x))
```

```sh
28
4294967295
```

--- animate

Veamos algunas

```py
import sys

x = 1
y = [x, 2, 3]
z = {'x': x, 'y': y}

print(sys.getrefcount(y))
```

--- animate

Veamos algunas

```py
import sys

x = 1
y = [x, 2, 3]
z = {'x': x, 'y': y}

print(sys.getrefcount(y))
```

```plain
3
```
