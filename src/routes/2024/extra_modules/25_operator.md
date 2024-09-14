```py
import operator
```

--- animate

El modulo `operator{:py}` exporta funciones que implementan las operadores intrinsecos de Python

--- animate

El modulo `operator{:py}` exporta funciones que implementan las operadores intrinsecos de Python

> [intrinseco](https://www.rae.es/diccionario-estudiante/intr%C3%ADnseco): adj. Que pertenece a la esencia o naturaleza propias de algo o de alguien

--- animate

De que sirve esto?

--- animate

De que sirve esto?

En principio, nada que no puedas hacer con los operadores directamente

--- animate

De que sirve esto?

En principio, nada que no puedas hacer con los operadores directamente

Excepto que en su version funcion, se oueden pasar como argumento, serializar/deserializar y no estar hardcodeados

--- animate

Algunos ejemplos practicos

--- animate

Algunos ejemplos practicos

```py
import operator

print(operator.add(1, 2))
print(operator.concat('a', 'b'))
print(operator.eq(1, 2))
```

--- animate

Algunos ejemplos practicos

```py
import operator

print(operator.add(1, 2))
print(operator.concat('a', 'b'))
print(operator.eq(1, 2))
```

```plain
3
ab
False
```

--- animate

Algunos ejemplos practicos

```py
import operator

users = ['user1', 'user2', 'user3']
# users += ['user4', 'user5']
print(operator.iadd(users, ['user4', 'user5']))
print(users)
```

--- animate

Algunos ejemplos practicos

```py
import operator

users = ['user1', 'user2', 'user3']
# users += ['user4', 'user5']
print(operator.iadd(users, ['user4', 'user5']))
print(users)
```

```plain
['user1', 'user2', 'user3', 'user4', 'user5']
['user1', 'user2', 'user3', 'user4', 'user5']
```

--- animate

Algunos ejemplos practicos

```py
import operator

x = 1
# x *= 2
print(operator.imul(x, 2))
print(x)
```

--- animate

Algunos ejemplos practicos

```py
import operator

x = 1
# x *= 2
print(operator.imul(x, 2))
print(x)
```

```plain
2
1
```

--- animate class="text-3xl"

Algunos ejemplos practicos

```py
import operator
import sys

calculadora = {
    '+': operator.add,
    '-': operator.sub,
    '*': operator.mul,
    '/': operator.truediv,
}

def calcular(sentencia: str) -> None:
    a, op, b = sentencia.split()
    return calculadora[op](int(a), int(b))

print(calcular(sys.argv[1]))
```

--- animate

```ansi data-id="1"
$ python xd.py "1 - 2"
```

--- animate

```ansi data-id="1"
$ python xd.py "1 - 2"
-1
```

--- animate

```ansi data-id="2"
$ python xd.py "100000000 / 0"
```

--- animate

```ansi data-id="2"
$ python xd.py "100000000 / 0"
[0;31mTraceback (most recent call last):
  File "C:\Users\suare\projects\personal\pyday\xd.py", line 52, in <module>
    print(calcular(sys.argv[1]))
          ^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\suare\projects\personal\pyday\xd.py", line 50, in calcular
    return calculadora[op](int(a), int(b))
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
ZeroDivisionError: division by zero[0m
```
