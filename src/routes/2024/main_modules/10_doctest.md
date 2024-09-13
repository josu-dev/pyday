
--- animate

```py
import doctest
```

--- animate

```py
import doctest
```

Validar ejemplos en las docstrings de un modulo, tal que representen la implementacion

--- animate class="text-2xl"

```py
def baskara(a, b, c):
    """
    Calcula las raices de una ecuacion cuadratica
    >>> baskara(1, 0, -1)
    (1.0, -1.0)
    >>> baskara(1, 0, 1)
    Traceback (most recent call last):
        ...
    ValueError: math domain error
    """
    from math import sqrt
    x1 = (-b + sqrt(b**2 - 4*a*c)) / (2*a)
    x2 = (-b - sqrt(b**2 - 4*a*c)) / (2*a)
    return x1, x2

if __name__ == "__main__":
    import doctest
    doctest.testmod()
```

--- animate

```sh
python mi_modulo.py
```

--- animate

```plain

```

--- animate

Y el resultado?

--- animate

Y el resultado?

Si el resultado esta bien, no se imprime nada

--- animate

Y el resultado?

Si el resultado esta bien, no se imprime nada

Sino, se imprime el reporte de errores

--- animate

Para ver que esta pasando, podemos usar el flag `-v`

--- animate

Para ver que esta pasando, podemos usar el flag `-v`

```sh
python mi_modulo.py -v
```

--- animate class="text-2xl"

```sh
python mi_modulo.py -v
```

```plain
Trying:
    baskara(1, 0, -1)
Expecting:
    (1.0, -1.0)
ok
Trying:
    baskara(1, 0, 1)
Expecting:
    Traceback (most recent call last):
        ...
    ValueError: math domain error
ok
1 items had no tests:
    __main__
1 items passed all tests:
   2 tests in __main__.baskara
2 tests in 2 items.
2 passed and 0 failed.
Test passed.
```

--- animate class="text-2xl"

O podemos correr los tests de un modulo

```py
"""
>>> count_letters("me leiste")
{'m': 1, 'e': 3, 'l': 1, 'i': 1, 's': 1, 't': 1}
"""
import collections
import string

def count_letters(text: str):
    """>>> count_letters("hola")
    {'h': 1, 'o': 1, 'l': 1, 'a': 1}
    >>> count_letters(43)
    Traceback (most recent call last):
        ...
    ValueError: text must be a string
    """
    normalized_text = "".join(c for c in text.lower() if c in string.ascii_lowercase)
    return {**collections.Counter(normalized_text)}
```

---

```sh
python -m doctest counter.py
```

--- class="text-xl"

```plain
**********************************************************************
File "C:\Users\suare\projects\personal\pyday1\2024\counter.py", line 15, in counter.count_letters
Failed example:
    count_letters(43)
Expected:
    Traceback (most recent call last):
        ...
    TypeError: argument should be a string
Got:
    Traceback (most recent call last):
      File "C:\Users\suare\.pyenv\pyenv-win\versions\3.12.1\Lib\doctest.py", line 1359, in __run
        exec(compile(example.source, filename, "single",
      File "<doctest counter.count_letters[1]>", line 1, in <module>
        count_letters(43)
      File "C:\Users\suare\projects\personal\pyday1\2024\counter.py", line 20, in count_letters
        normalized_text = "".join(c for c in text.lower() if c in string.ascii_lowercase)
                                             ^^^^^^^^^^
    AttributeError: 'int' object has no attribute 'lower'
**********************************************************************
1 items had failures:
   1 of   2 in counter.count_letters
***Test Failed*** 1 failures.
```

Uh, no paso el test

--- animate

Uh, no paso el test

Falto validar que el argumento sea un string

--- animate class="text-2xl"

```py
"""
>>> count_letters("me leiste")
{'m': 1, 'e': 3, 'l': 1, 'i': 1, 's': 1, 't': 1}
"""
import collections
import string

def count_letters(text: str):
    """>>> count_letters("hola")
    {'h': 1, 'o': 1, 'l': 1, 'a': 1}
    >>> count_letters(43)
    Traceback (most recent call last):
        ...
    ValueError: text must be a string
    """
    if not isinstance(text, str):
        raise ValueError("text must be a string")

    normalized_text = "".join(c for c in text.lower() if c in string.ascii_lowercase)
    return {**collections.Counter(normalized_text)}
```

---

```sh
python -m doctest counter.py
```

---

```sh

```

--- animate

`doctest{:py}` prima la exactitud

--- animate

`doctest{:py}` prima la exactitud

Hay casos donde no es lo que queremos, ya que el resultado esta simplificado

--- animate

`doctest{:py}` prima la exactitud

Hay casos donde no es lo que queremos, ya que el resultado esta simplificado

Para eso podemos usar flags

--- animate class="text-3xl"

Para eso podemos usar flags

```py
def numeros():
    """
    >>> numeros()
    [1, 2, ...,        10]
    """
    return list(range(1, 11))

if __name__ == "__main__":
    import doctest

    doctest.testmod(optionflags=doctest.ELLIPSIS | doctest.NORMALIZE_WHITESPACE)
```

---

```sh
python numeros.py
```

---

```plain

```

--- animate

O como modulo

```sh
python -m doctest -o ELLIPSIS -o NORMALIZE_WHITESPACE numeros.py
```

--- animate

Podemos extraer un script desde los ejemplos

--- animate class="text-3xl"

Podemos extraer un script desde los ejemplos

```py
import doctest

print(doctest.script_from_examples(r"""
    Este es un ejemplo sencillo.
    >>> def suma(a, b):
    ...     return a + b
    >>> suma(1, 2)
    3

    o tambien se puede hacer con un lambda

    >>> resta = lambda a, b: a - b
    >>> resta(2, 1)
    1
"""))
```

--- animate class="text-3xl"

Podemos extraer un script desde los ejemplos

```py
# Este es un ejemplo sencillo.
def suma(a, b):
    return a + b
suma(1, 2)
# Expected:
## 3
#
# o tambien se puede hacer con un lambda
#
resta = lambda a, b: a - b
resta(2, 1)
# Expected:
## 1
```
