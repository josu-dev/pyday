
--- animate

```py
import shutil
```

--- animate

El modulo `shutil` provee una forma simple de manipular archivos y directorios.

--- animate

El modulo `shutil` provee una forma simple de manipular archivos y directorios.

Mas comoda que usar `os` y `os.path`

--- animate

Simples?

--- animate

Simples?

como?

--- animate

asi

```py
import shutil

shutil.copy('test.py', 'test2.py')
```

--- animate

```py
import shutil

shutil.copy('test.py', 'test2.py')
```

```sh
$ ls
no_tengo_cosas tengo_cosas test.py

$ python test.py

$ ls
no_tengo_cosas tengo_cosas test.py test2.py
```

--- animate

A hay cosas ahi?

--- animate

```sh
$ tree
.
├─test.py
├─test2.py
├─no_tengo_cosas
│ ├─estoy_vacio
│ └─no_estoy
│   └─yo_tampoco.md
└─tengo_cosas
```

---

Arreglemos eso

--- animate

```py
import shutil

shutil.copytree('tengo_cosas', 'no_tengo_cosas')
```

--- animate

```py
import shutil

shutil.copytree('tengo_cosas', 'no_tengo_cosas', dirs_exist_ok=True)
```

```sh
$ python test.py
$ tree
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

---

Uh lo duplicamos

--- animate

```py
import shutil

shutil.rmtree('no_tengo_cosas')
```

--- animate

```py
import shutil

shutil.rmtree('no_tengo_cosas')
```

```sh
$ python test.py
$ tree
.
├─test.py
├─test2.py
└─tengo_cosas
  ├─estoy_vacio
  └─no_estoy
    └─yo_tampoco.md
```

---

para pero hay muchos archivos

--- animate

```py
import shutil

shutil.move('tengo_cosas', 'comprimido')
shutil.move('test.py', 'comprimido')
shutil.move('test2.py', 'comprimido')
shutil.make_archive('comprimido', 'zip', 'comprimido')
shutil.rmtree('comprimido')
```

--- animate

```py
import shutil

shutil.move('tengo_cosas', 'comprimido')
shutil.move('test.py', 'comprimido')
shutil.move('test2.py', 'comprimido')
shutil.make_archive('comprimido', 'zip', 'comprimido')
shutil.rmtree('comprimido')
```

```sh
$ python test.py
$ tree
.
└─comprimido.zip
```

--- animate

Ahora si

--- animate

Me pregunto donde esta tree

--- animate

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
$ python test.py
C:\Windows\system32\tree.COM
```

--- animate

```sh
$ python test.py
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
