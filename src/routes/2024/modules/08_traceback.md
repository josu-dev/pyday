```py
import traceback
```

---

El module `traceback` provee funciones para manipular excepciones y sus trazas de pila.

---

Las exepciones son lo que ves en la terminal cuando te pones triste

---

```txt
Traceback (most recent call last):
  File "C:\Users\suare\projects\personal\pyday1\2024\xd.py", line 47, in <module>
    print(f"List time: {timeit.timeit(lambda: list_seq.count(14), number=1_000_000)}")
                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\suare\.pyenv\pyenv-win\versions\3.12.1\Lib\timeit.py", line 237, in timeit
    return Timer(stmt, setup, timer, globals).timeit(number)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\suare\.pyenv\pyenv-win\versions\3.12.1\Lib\timeit.py", line 180, in timeit
    timing = self.inner(it, self.timer)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "<timeit-src>", line 6, in inner
  File "C:\Users\suare\projects\personal\pyday1\2024\xd.py", line 47, in <lambda>
    print(f"List time: {timeit.timeit(lambda: list_seq.count(14), number=1_000_000)}")
                                              ^^^^^^^^^^^^^^^^^^
KeyboardInterrupt
```

---

Y eso de `traza de pila` es lo que se conoce como TraceStack

Es la lista de llamadas (a funciones) que se hicieron hasta llegar al momento de la excepción

---

```py
def funcion_hiper_segura(ups):
    try:
        ups()
    except (IndexError, SystemError, TypeError, ZeroDivisionError):
        print("donde ibas tan rapido")


def funcion_que_puede_explotar():
    int("el numero catorce")

funcion_hiper_segura(funcion_que_puede_explotar)
```

---

```txt
Traceback (most recent call last):
  File "C:\Users\suare\projects\personal\pyday1\2024\xd.py", line 26, in <module>
    funcion_hiper_segura(funcion_que_puede_explotar)
  File "C:\Users\suare\projects\personal\pyday1\2024\xd.py", line 18, in funcion_hiper_segura
    ups()
  File "C:\Users\suare\projects\personal\pyday1\2024\xd.py", line 24, in funcion_que_puede_explotar
    int("el numero catorce")
ValueError: invalid literal for int() with base 10: 'el numero catorce'
```

---

Que podemos hacer con el modulo?

---

Ademas de imprimir y formatear

Podemos obtener la traza de pila actual

---

```py
import traceback

def afuera_fuera():
    for values in traceback.extract_stack():
        print(*values, sep="\n")

def afuera():
    def dentro():
        afuera_fuera()
    dentro()

afuera()
```

---

```txt
C:\Users\suare\projects\personal\pyday1\2024\xd.py | 28 | <module> | afuera()
C:\Users\suare\projects\personal\pyday1\2024\xd.py | 26 | afuera | dentro()
C:\Users\suare\projects\personal\pyday1\2024\xd.py | 25 | dentro | afuera_fuera()
C:\Users\suare\projects\personal\pyday1\2024\xd.py | 20 | afuera_fuera | for values in traceback.extract_stack():
```

Se pueden acceder por las propiedades del objeto tambien

---

O tambien se pueden generar excepciones a mano

---

```py
import traceback

frames = [
    ('date.py', 15, '<module>', 'process_dates()\n'),
    ('date.py', 11, 'process_dates', 'print(validate_date(*date))\n'),
    ('date.py', 4, 'validate_date', 'raise ValueError(f"Invalid month {month}")\n'),
]

print(
    *traceback.format_list(frames),
    *traceback.format_exception_only(ValueError, ValueError('Invalid month 14')),
    sep=""
)
```

---

```txt
  File "date.py", line 15, in <module>
    process_dates()
  File "date.py", line 11, in process_dates
    print(validate_date(*date))
  File "date.py", line 4, in validate_date
    raise ValueError(f"Invalid month {month}")
ValueError: Invalid month 14
```
