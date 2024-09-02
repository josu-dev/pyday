```py
import inspect
```

---

El modulo `inspect` nos permite obtener información sobre objetos de Python, como clases, funciones, métodos, módulos, trazas de pila y código fuente.

---

Por ejemplo ver las funciones de un módulo nativo:

```py
import inspect
import math

print(*inspect.getmembers(math, inspect.isbuiltin), sep="\n")
```

---

Por ejemplo ver las funciones de un módulo:

```py
import inspect
import secrets

print("nativas:", *inspect.getmembers(secrets, inspect.isbuiltin), sep="\n  ")
print("normal:", *inspect.getmembers(secrets, inspect.isfunction), sep="\n  ")
```

---

```txt
nativas:
  ('compare_digest', <built-in function compare_digest>)
normal:
  ('randbelow', <function randbelow at 0x000001C268038400>)
  ('token_bytes', <function token_bytes at 0x000001C2680398A0>)
  ('token_hex', <function token_hex at 0x000001C26803BEC0>)
  ('token_urlsafe', <function token_urlsafe at 0x000001C26803BF60>)
```

---

No falta la funcion `secrets.choice`?

---

```py
import inspect
import secrets

print("normal:", *inspect.getmembers(secrets, inspect.ismethod), sep="\n  ")
```

--- class="text-2xl"

```txt
metodo:
  ('choice', <bound method Random.choice of <random.SystemRandom object at 0x000001EB6ED0BE60>>)
  ('randbits', <bound method SystemRandom.getrandbits of <random.SystemRandom object at 0x000001EB6ED0BE60>>)
```

---

Para ver la documentación de un objeto:

```py
import inspect

print(inspect.getdoc(inspect))
```

---

```txt
Generate cryptographically strong pseudo-random numbers suitable for
managing secrets such as account authentication, tokens, and similar.

See PEP 506 for more information.
https://peps.python.org/pep-0506/
```

---

Para ver el código fuente de un objeto:

```py
import inspect

print(inspect.getsource(inspect.SystemRandom))
```

--- class="text-2xl"

```txt
class SystemRandom(Random):
    """Alternate random number generator using sources provided
    by the operating system (such as /dev/urandom on Unix or
    CryptGenRandom on Windows).

     Not available on all systems (see os.urandom() for details).

    """

    def random(self):
        """Get the next random number in the range 0.0 <= X < 1.0."""
        return (int.from_bytes(_urandom(7)) >> 3) * RECIP_BPF

    def getrandbits(self, k):
        """getrandbits(k) -> x.  Generates an int with k random bits."""
        if k < 0:
            raise ValueError('number of bits must be non-negative')
        numbytes = (k + 7) // 8                       # bits / 8 and rounded up
        x = int.from_bytes(_urandom(numbytes))
        return x >> (numbytes * 8 - k)                # trim excess bits

    def randbytes(self, n):
        """Generate n random bytes."""
        # os.urandom(n) fails with ValueError for n < 0
        # and returns an empty bytes string for n == 0.
        return _urandom(n)

    def seed(self, *args, **kwds):
        "Stub method.  Not used for a system random number generator."
        return None

    def _notimplemented(self, *args, **kwds):
        "Method should not be called for a system random number generator."
        raise NotImplementedError('System entropy source does not have state.')
    getstate = setstate = _notimplemented
```

---

Cuidado que los objetos nativos no se puede ver el código fuente:

```py
import inspect

print(inspect.getsource(print))
```

--- class="text-xl"

```txt
Traceback (most recent call last):
  File "C:\Users\suare\projects\personal\pyday1\2024\xd.py", line 25, in <module>
    print(inspect.getsource(print))
          ^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\suare\.pyenv\pyenv-win\versions\3.12.1\Lib\inspect.py",
  line 1282, in getsource
    lines, lnum = getsourcelines(object)
                  ^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\suare\.pyenv\pyenv-win\versions\3.12.1\Lib\inspect.py",
  line 1264, in getsourcelines
    lines, lnum = findsource(object)
                  ^^^^^^^^^^^^^^^^^^
  File "C:\Users\suare\.pyenv\pyenv-win\versions\3.12.1\Lib\inspect.py",
  line 1075, in findsource
    file = getsourcefile(object)
           ^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\suare\.pyenv\pyenv-win\versions\3.12.1\Lib\inspect.py",
  line 952, in getsourcefile
    filename = getfile(object)
               ^^^^^^^^^^^^^^^
  File "C:\Users\suare\.pyenv\pyenv-win\versions\3.12.1\Lib\inspect.py",
  line 932, in getfile
    raise TypeError('module, class, method, function, traceback, frame, or '
TypeError: module, class, method, function, traceback, frame, or code object
was expected, got builtin_function_or_method

```

---

Para ver partes de una función:

```py
import inspect

def BuenEjemplo(a, b: int, c: str = "hola", **kwargs) -> int:
    """Esta es un muy buen ejemplo."""
    return a + b + c

signature = inspect.signature(BuenEjemplo)
print(signature.parameters)
print(signature.return_annotation)
```

--- class="text-xl"

```txt
OrderedDict({'a': <Parameter "a">, 'b': <Parameter "b: int">, 'c': <Parameter "c: str = 'hola'">, 'kwargs': <Parameter "**kwargs">})
<class 'int'>
```
