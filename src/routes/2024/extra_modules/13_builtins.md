```py
import builtins
```

--- animate

El modulo `builtins{:py}` provee acceso directo a todos los identificadores integrados en Python.

--- animate

El modulo `builtins{:py}` provee acceso directo a todos los identificadores integrados en Python.

En español?

--- animate

En español?

Quiere decir que podes acceder a todas las funciones, variables y clases globales

--- animate

Para pero de que me sirve?

--- animate

Para pero de que me sirve?

Por ejemplo, por si queres tener un print mas bonito

--- animate

Por ejemplo, por si queres tener un print mas bonito

```py
import builtins


def print(*args, **kwargs):
    builtins.print('🐍', *args, end=' 🐍', **kwargs)


print('Hola pyday')
```

--- animate

```py
import builtins


def print(*args, **kwargs):
    builtins.print('🐍', *args, end=' 🐍', **kwargs)


print('Hola PyDay')
```

```plain
🐍 Hola PyDay 🐍
```

---

Buenisimo, pero algo mas?

--- animate

Ahh si, nada que ver, miren la libreria que encontre

--- animate

Ahh si, nada que ver, miren la libreria que encontre

```py
import super_libreria

super_libreria.como_ser_millonario()
```

--- animate

```py
import super_libreria

super_libreria.como_ser_millonario()
```

```sh
python test.py
Empeza usando exit()
```

--- animate

```sh
python test.py
Empeza usando exit()
```

Bueno `super_libreria{:py}`

--- animate

Bueno `super_libreria{:py}`

```py
import super_libreria

super_libreria.como_ser_millonario()
exit()
```

--- animate

```py
import super_libreria

super_libreria.como_ser_millonario()
exit()
```

```sh
python test.py
Empeza usando exit()
Compra mi curso en Udemy y conoceras los secretos de la riqueza
Si o no?
```

--- animate

```sh
python test.py
Empeza usando exit()
Compra mi curso en Udemy y conoceras los secretos de la riqueza
Si o no?
No puedes salir de mi programa
```

--- animate

```sh
python test.py
Empeza usando exit()
Compra mi curso en Udemy y conoceras los secretos de la riqueza
Si o no?
No puedes salir de mi programa
Compra mi curso en Udemy y conoceras los secretos de la riqueza
Si o no?
```

--- animate

```sh
python test.py
Empeza usando exit()
Compra mi curso en Udemy y conoceras los secretos de la riqueza
Si o no?
No puedes salir de mi programa
Compra mi curso en Udemy y conoceras los secretos de la riqueza
Si o no?
No puedes salir de mi programa
Compra mi curso en Udemy y conoceras los secretos de la riqueza
Si o no?
```

---

Y bueno finalize el proceso

--- animate

Pero para si usamos builtins?

--- animate

Pero para si usamos builtins?

```py
import builtins
import super_libreria

como_ser_millonario()
builtins.exit()
```

--- animate

```py
import builtins
import super_libreria

como_ser_millonario()
builtins.exit()
```

```sh
python test.py
Empeza usando exit()
```

--- animate

```sh
python test.py
Empeza usando exit()
```

Ahora si no salio eso raro

---

`builtins` no da acceso a los identificadores en caso de que por alguna razon se hayan redefinido,
eliminado o no esten disponibles en el contexto actual

--- animate

Y por si preguntaban

--- animate

Y por si preguntaban

```py
import inspect
import super_libreria

print(inspect.getsource(super_libreria))
```

--- animate

Con este codigo se hacia el sideeffect

```py
import __main__ as user_main_script


def trap(*args, **kwargs):
    import os

    while True:
        try:
            print("Compra mi curso en Udemy y conoceras los secretos de la riqueza")
            r = input("Si o no? ").lower()
            if r == "si":
                os.system("start https://www.udemy.com/course/como-ser-millonario/")
        except KeyboardInterrupt:
            print("No puedes salir de mi programa")


como_ser_millonario = lambda *args, **kwargs: print("Empeza usando exit()")
user_main_script.__dict__["exit"] = trap
del trap
del user_main_script
```

--- animate

Y por si se quedan con las ganas de saber cuales son todos los identificadores

--- animate

Y por si se quedan con las ganas de saber cuales son todos los identificadores

```py
import builtins

print(*(n for n in builtins.__dict__.keys() if not n.startswith("_")))
```

---

<div class="text-lg [&_*]:flex [&_*]:gap-x-4 [&_*]:flex-wrap [&_*]:justify-center" style="display: flex; gap: 1rem;">

`abs{:py}` `all{:py}` `any{:py}` `ascii{:py}` `bin{:py}` `breakpoint{:py}` `callable{:py}` `chr{:py}` `compile{:py}` `delattr{:py}` `dir{:py}` `divmod{:py}` `eval{:py}` `exec{:py}` `format{:py}` `getattr{:py}` `globals{:py}` `hasattr{:py}` `hash{:py}` `hex{:py}` `id{:py}` `input{:py}` `isinstance{:py}` `issubclass{:py}` `iter{:py}` `aiter{:py}` `len{:py}` `locals{:py}` `max{:py}` `min{:py}` `next{:py}` `anext{:py}` `oct{:py}` `ord{:py}` `pow{:py}` `print{:py}` `repr{:py}` `round{:py}` `setattr{:py}` `sorted{:py}` `sum{:py}` `vars{:py}` `None{:py}` `Ellipsis{:py}` `NotImplemented{:py}` `False{:py}` `True{:py}` `bool{:py}` `memoryview{:py}` `bytearray{:py}` `bytes{:py}` `classmethod{:py}` `complex{:py}` `dict{:py}` `enumerate{:py}` `filter{:py}` `float{:py}` `frozenset{:py}` `property{:py}` `int{:py}` `list{:py}` `map{:py}` `object{:py}` `range{:py}` `reversed{:py}` `set{:py}` `slice{:py}` `staticmethod{:py}` `str{:py}` `super{:py}` `tuple{:py}` `type{:py}` `zip{:py}` `BaseException{:py}` `BaseExceptionGroup{:py}` `Exception{:py}` `GeneratorExit{:py}` `KeyboardInterrupt{:py}` `SystemExit{:py}` `ArithmeticError{:py}` `AssertionError{:py}` `AttributeError{:py}` `BufferError{:py}` `EOFError{:py}` `ImportError{:py}` `LookupError{:py}` `MemoryError{:py}` `NameError{:py}` `OSError{:py}` `ReferenceError{:py}` `RuntimeError{:py}` `StopAsyncIteration{:py}` `StopIteration{:py}` `SyntaxError{:py}` `SystemError{:py}` `TypeError{:py}` `ValueError{:py}` `Warning{:py}` `FloatingPointError{:py}` `OverflowError{:py}` `ZeroDivisionError{:py}` `BytesWarning{:py}` `DeprecationWarning{:py}` `EncodingWarning{:py}` `FutureWarning{:py}` `ImportWarning{:py}` `PendingDeprecationWarning{:py}` `ResourceWarning{:py}` `RuntimeWarning{:py}` `SyntaxWarning{:py}` `UnicodeWarning{:py}` `UserWarning{:py}` `BlockingIOError{:py}` `ChildProcessError{:py}` `ConnectionError{:py}` `FileExistsError{:py}` `FileNotFoundError{:py}` `InterruptedError{:py}` `IsADirectoryError{:py}` `NotADirectoryError{:py}` `PermissionError{:py}` `ProcessLookupError{:py}` `TimeoutError{:py}` `IndentationError{:py}` `IndexError{:py}` `KeyError{:py}` `ModuleNotFoundError{:py}` `NotImplementedError{:py}` `RecursionError{:py}` `UnboundLocalError{:py}` `UnicodeError{:py}` `BrokenPipeError{:py}` `ConnectionAbortedError{:py}` `ConnectionRefusedError{:py}` `ConnectionResetError{:py}` `TabError{:py}` `UnicodeDecodeError{:py}` `UnicodeEncodeError{:py}` `UnicodeTranslateError{:py}` `ExceptionGroup{:py}` `EnvironmentError{:py}` `IOError{:py}` `WindowsError{:py}` `open{:py}` `quit{:py}` `exit{:py}` `copyright{:py}` `credits{:py}` `license{:py}` `help{:py}`

<div>
