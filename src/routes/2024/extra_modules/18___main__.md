--- animate

```py
import __main__
```

---

animate

El modulo `__main__{:py}` es especial

--- animate

El modulo `__main__{:py}` es especial

Es una referencia al script con el que se inicio la ejecucion

--- animate

El modulo `__main__{:py}` es especial

Es una referencia al modulo que representa el script con el que se inicio la ejecucion

o la referencia a la sesion interactiva

--- animate

Por ejemplo

<div class="flex gap-4">

```py
# utils.py
import __main__

def quien_es_main():
    print(__main__.__file__)
```

```py
# main.py
import utils

utils.quien_es_main()
```

```py
# test.py
import utils

utils.quien_es_main()
```

<div>

--- animate

```sh
$ python main.py
main.py
```

--- animate

```sh
$ python main.py
main.py
$ python test.py
test.py
```

--- animate

De que es util?

--- animate

De que es util?

Podemos usarlo para acceder al namespace principal del la ejecucion actual

--- animate

Podemos usarlo para acceder al namespace principal del la ejecucion actual

<div class="flex justify-between gap-8">

```py style="margin-top:0px;"
# utils.py
import __main__

def adivinar():
    import random

    if (random.choice([False, True])):
        print(__main__.x)
    else:
        print(__main__.y)
```

```py
# main.py
import utils
import sys

if (sys.argv[1] == 'x'):
    x = 'Le toca a la x'
else:
    y = 'Le toca a la y'

utils.adivinar()
```

</div>

--- animate

```ansi data-id="3"
$ python main.py x
```

--- animate

```ansi data-id="3"
$ python main.py x
Le toco a la x
```

--- animate

```ansi data-id="4"
$ python main.py y
```

--- animate

```ansi data-id="4"
$ python main.py y
[0;31mTraceback (most recent call last):
  File "C:\Users\suare\projects\personal\pyday\xd.py", line 35, in <module>
    utils.adivinar()
  File "C:\Users\suare\projects\personal\pyday\utils.py", line 8, in adivinar
    print(__main__.x)
          ^^^^^^^^^^
AttributeError: module '__main__' has no attribute 'x'[0m
```

--- animate

```plain data-id="5"
$ python main.py y
```

--- animate

```plain data-id="5"
$ python main.py y
Le toco a la y
```
