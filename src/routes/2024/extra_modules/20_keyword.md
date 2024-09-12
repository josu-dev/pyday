```py
import keyword
```

--- animate

El modulo `keyword{:py}` provee funciones para determinar si una string es una keyword o una soft keyword

--- animate

El modulo `keyword{:py}` provee funciones para determinar si una string es una keyword o una soft keyword

Pero, que es una keyword?

--- animate

Pero, que es una keyword?

Una keyword es una identificador (palabra) que tiene un significado especial y se reserva su uso para el lenguaje

--- animate

Una keyword es una identificador (palabra) que tiene un significado especial y se reserva su uso para el lenguaje

Por ejemplo: `if, True, lamda, yield, ...{:py}`

--- animate

Y una soft keyword?

--- animate

Y una soft keyword?

A partir de python 3.10, se introdujo el concepto de soft keyword

--- animate

A partir de python 3.10, se introdujo el concepto de soft keyword

Una soft keyword es un identificador que tiene un significado especial bajo ciertas circunstancias, por lo que se reservan solo en esos casos

--- animate

Una soft keyword es un identificador que tiene un significado especial bajo ciertas circunstancias, por lo que se reservan solo en esos casos

Las soft keywords son: `match, case, type y _{:py}`

--- animate

Una soft keyword es un identificador que tiene un significado especial bajo ciertas circunstancias, por lo que se reservan solo en esos casos

Las soft keywords son: `match, case, type y _{:py}`

_`type{:py}` se añadió en python 3.12_

--- animate

Por ejemplo

```py
match = 4
print(match ** match)

listado = [n for n in range(10)]

match listado:
    case [0, *vals, 9] if len(vals) == 7:
        print(vals)
    case [1, *vals, 10]:
        print(vals)
    case _:
        print('todos mal')
```

--- animate

```py
match = 4
print(match ** match)

listado = [n for n in range(10)]

match listado:
    case [0, *vals, 9] if len(vals) == 7:
        print(vals)
    case [1, *vals, 10]:
        print(vals)
    case _:
        print('todos mal')
```

```plain
256
todos mal
```

--- animate

El modulo dispone de las siguientes funciones:

--- animate

El modulo dispone de las siguientes funciones:

```py
import keyword

print(keyword.iskeyword('if'))
print(keyword.iskeyword('true'))
```

--- animate

El modulo dispone de las siguientes funciones:

```py
import keyword

print(keyword.iskeyword('if'))
print(keyword.iskeyword('true'))
```

```plain
True
false
```

--- animate

El modulo dispone de las siguientes funciones:

```py
import keyword

print(keyword.issoftkeyword('types'))
print(keyword.issoftkeyword('_'))
```

--- animate

El modulo dispone de las siguientes funciones:

```py
import keyword

print(keyword.issoftkeyword('types'))
print(keyword.issoftkeyword('_'))
```

```plain
False
True
```

--- animate

Y tambien las listas de keywords y soft keywords

--- animate

Y tambien las listas de keywords y soft keywords

```py
import keyword

print(keyword.kwlist)
print(keyword.softkwlist)
```

--- animate

```py
import keyword

print(keyword.kwlist)
print(keyword.softkwlist)
```

```sh
[
  'False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await',
  'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except',
  'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is',
  'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try',
  'while', 'with', 'yield'
]
['_', 'case', 'match', 'type']
```
