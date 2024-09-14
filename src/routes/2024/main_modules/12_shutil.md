
--- animate

```py
import shutil
```

--- animate

```py
import shutil
```

Utilidades simples para manipular archivos y directorios

--- animate

Utilidades simples para manipular archivos y directorios

Mas comodas que usar `os{:py}` y `os.path{:py}`

--- animate

Simples?

--- animate

Simples?

Como?

--- animate

Asi

```py
import shutil

shutil.copy('test.py', 'test2.py')
```

--- animate class="text-3xl"

```py
import shutil

shutil.copy('test.py', 'test2.py')
```

```sh
ls
no_tengo_cosas tengo_cosas test.py

python test.py

ls
no_tengo_cosas tengo_cosas test.py test2.py
```

--- animate

A hay cosas ahi?

--- animate class="text-3xl"

A hay cosas ahi?

```sh
tree
.
├─test.py
├─test2.py
├─no_tengo_cosas
│ ├─estoy_vacio
│ └─no_estoy
│   └─yo_tampoco.md
└─tengo_cosas
```

--- animate

Arreglemos eso

--- animate class="text-3xl"

Arreglemos eso

```py
import shutil

shutil.copytree('no_tengo_cosas', 'tengo_cosas', dirs_exist_ok=True)
```

--- animate class="text-3xl"

```sh
python test.py
tree
.
├─test.py
├─test2.py
├─no_tengo_cosas
│ ├─estoy_vacio
│ └─no_estoy
│   └─yo_tampoco.md
└─tengo_cosas
  ├─estoy_vacio
  └─no_estoy
    └─yo_tampoco.md
```

--- animate class="text-3xl"

```sh
python test.py
tree
.
├─test.py
├─test2.py
├─no_tengo_cosas
│ ├─estoy_vacio
│ └─no_estoy
│   └─yo_tampoco.md
└─tengo_cosas
  ├─estoy_vacio
  └─no_estoy
    └─yo_tampoco.md
```

Uh lo duplicamos

--- animate

Solucionado

```py
import shutil

shutil.rmtree('no_tengo_cosas')
```

--- animate

```sh
python test.py
tree
.
├─test.py
├─test2.py
└─tengo_cosas
  ├─estoy_vacio
  └─no_estoy
    └─yo_tampoco.md
```

--- animate

Para para para, pero hay muchos archivos

--- animate

Para para para, pero hay muchos archivos

```py
import shutil

shutil.move('tengo_cosas', 'comprimido')
shutil.move('test.py', 'comprimido')
shutil.move('test2.py', 'comprimido')
shutil.make_archive('comprimido', 'zip', 'comprimido')
shutil.rmtree('comprimido')
```

--- animate class="text-3xl"

```py
import shutil

shutil.move('tengo_cosas', 'comprimido')
shutil.move('test.py', 'comprimido')
shutil.move('test2.py', 'comprimido')
shutil.make_archive('comprimido', 'zip', 'comprimido')
shutil.rmtree('comprimido')
```

```sh
python test.py
tree
.
└─comprimido.zip
```

--- animate

Ahora si

--- animate

Me pregunto donde esta el comando `tree{:sh}`

--- animate

Me pregunto donde esta el comando `tree{:sh}`

```py
import shutil

shutil.which('tree')
```

--- animate

```py
import shutil

shutil.which('tree')
```

```sh
python test.py
C:\Windows\system32\tree.COM
```

--- animate

```sh
python test.py
C:\Windows\system32\tree.COM
```

A mira, esta en system32

--- animate

A mira, esta en system32

Mejor dejemos de jugar

--- animate

A mira, esta en system32

Mejor dejemos de jugar

<br/>

_siguiente modulo 🙃_
