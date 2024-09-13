
--- animate

```py
import inspect
```

--- animate

```py
import inspect
```

Inspeccion de objetos vivos como

clases, funciones, metodos, modulos, trazas de pila, marcos y codigo fuente

--- animate class="text-3xl"

Ver las funciones de un modulo

```py
import inspect
import secrets

print("nativas:", *inspect.getmembers(secrets, inspect.isbuiltin), sep="\n  ")
print("normal:", *inspect.getmembers(secrets, inspect.isfunction), sep="\n  ")
```

--- animate class="text-3xl"

```plain
nativas:
  ('compare_digest', <built-in function compare_digest>)
normal:
  ('randbelow', <function randbelow at 0x000001C268038400>)
  ('token_bytes', <function token_bytes at 0x000001C2680398A0>)
  ('token_hex', <function token_hex at 0x000001C26803BEC0>)
  ('token_urlsafe', <function token_urlsafe at 0x000001C26803BF60>)
```

--- animate

No falta la funcion `secrets.choice{:py}`?

--- animate class="text-3xl"

No falta la funcion `secrets.choice{:py}`?

```py
import inspect
import secrets

print("normal:", *inspect.getmembers(secrets, inspect.ismethod), sep="\n  ")
```

--- animate class="text-2xl"

```py
import inspect
import secrets

print("normal:", *inspect.getmembers(secrets, inspect.ismethod), sep="\n  ")
```

```plain
metodo:
  ('choice', <bound method Random.choice of <random.SystemRandom object at 0x000001EB6ED0BE60>>)
  ('randbits', <bound method SystemRandom.getrandbits of <random.SystemRandom object at 0x000001EB6ED0BE60>>)
```

--- animate

Ver la documentacion de un objeto

```py
import inspect

print(inspect.getdoc(inspect))
```

--- animate class="text-3xl"

```py
import inspect

print(inspect.getdoc(inspect))
```

```plain
Generate cryptographically strong pseudo-random numbers suitable for
managing secrets such as account authentication, tokens, and similar.

See PEP 506 for more information.
https://peps.python.org/pep-0506/
```

--- animate

Ver el codigo fuente de un objeto

```py
import inspect

print(inspect.getsource(inspect.SystemRandom))
```

--- animate class="text-2xl"

```plain
class SystemRandom(Random):
    """Alternate random number generator using sources provided
    by the operating system (such as /dev/urandom on Unix or
    CryptGenRandom on Windows).

    Not available on all systems (see os.urandom() for details).
    """

    def random(self):
        """Get the next random number in the range 0.0 <= X < 1.0."""
        return (int.from_bytes(_urandom(7)) >> 3) * RECIP_BPF
    ...
    def seed(self, *args, **kwds):
        "Stub method.  Not used for a system random number generator."
        return None

    def _notimplemented(self, *args, **kwds):
        "Method should not be called for a system random number generator."
        raise NotImplementedError('System entropy source does not have state.')
    getstate = setstate = _notimplemented
```

---

Ver el codigo fuente de una funcion

```py
import inspect

print(inspect.getsource(print))
```

--- animate class="text-xl"

```ansi
[0;31mTraceback (most recent call last):
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
was expected, got builtin_function_or_method[0m
```

--- animate

Cuidado con codigo nativo, hay cosas que no se pueden ver

--- animate class="text-3xl"

Ver componentes de una funcion

```py
import inspect

def BuenEjemplo(a, b: int, c: str = "algo", **kwargs) -> int:
    """Esta es un muy buen ejemplo."""
    return a + b + c

signature = inspect.signature(BuenEjemplo)
print(signature.parameters)
print(signature.return_annotation)
```

--- animate class="text-3xl"

```plain
OrderedDict({
  'a': <Parameter "a">,
  'b': <Parameter "b: int">,
  'c': <Parameter "c: str = 'hola'">,
  'kwargs': <Parameter "**kwargs">
})
<class 'int'>
```
