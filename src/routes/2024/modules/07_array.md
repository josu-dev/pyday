```py
import array
```

---

El módulo `array` proporciona una forma de crear arrays homogéneos

---

Esto quiere decir que son mas eficientes que las listas normales
para almacenar datos de un solo tipo

---

```py
import array
import sys

l = list(range(1))
a = array.array('i', range(1))

print(f"List : {sys.getsizeof(l)} bytes")
print(f"Array: {sys.getsizeof(a)} bytes")
```

---

```txt
List : 72 bytes
Array: 96 bytes
```

---

Para pero no que deberia ser mas eficiente?

---

A ver, probemos con mas datos

```py
import array
import sys

print(f"List : {sys.getsizeof(list(range(10_000)))} bytes")
print(f"Array: {sys.getsizeof(array.array('i', range(10_000)))} bytes")

print(f"List : {sys.getsizeof(list(range(1_000_000)))} bytes")
print(f"Array: {sys.getsizeof(array.array('i', range(100_000)))} bytes")
```

---

```txt
List : 80056 bytes
Array: 40420 bytes
List : 8000056 bytes
Array: 408360 bytes
```

Ahora si (menos mal)

---

Probemos con mas datos aun

```py
lis = list(range(1_000_000_000))
arr = array.array('i', range(1_000_000_000))

print(f"List: {sys.getsizeof(lis)} bytes")
print(f"Array: {sys.getsizeof(arr)} bytes")
```

---

Bueno, se me fue la mano y me estaba quedando sin ram

---

_task manager me salvaste la vida(?_

---

Solo impacta en la memoria?

---

```py
import array
import random
import timeit

l_seq = list(random.randint(1, 100) for _ in range(10_000))
t_seq = tuple(l_seq)
a_seq = array.array("i", l_seq)

print(f"List : {timeit.timeit(lambda: l_seq.count(14))}")
print(f"Tuple: {timeit.timeit(lambda: t_seq.count(14))}")
print(f"Array: {timeit.timeit(lambda: a_seq.count(14))}")
```

---

```txt
List : 123.40756099999999
Tuple: 80.49820690000342
Array: 105.94930929999828
```

---

Pero, ¿por que el array no es el mas rapido?

---

Porque los arrays no tienen metodos optimizados/especificos
por lo tanto se pierde tiempo en conversiones

---

Al menos esa es mi teoria

---

En resumen, los arrays son mas eficientes en memoria
pero no en tiempo de ejecucion, o para un par de cositas
si

---

Ah, la 'i' en `array.array('i')`,
es el tipo de dato que se va a almacenar

<div class="text-2xl mt-4">

| Codigo | Tipo de C | Tipo de Python | Tamaño mínimo en bytes |
|--------|-----------|----------------|------------------------|
| `'b'` | signed char | int | 1 |
| `'B'` | unsigned char | int | 1 |
| `'u'` | wchar_t | Unicode character | 2 |
| `'h'` | signed short | int | 2 |
| `'H'` | unsigned short | int | 2 |
| `'i'` | signed int | int | 2 |
| `'I'` | unsigned int | int | 2 |
| `'l'` | signed long | int | 4 |
| `'L'` | unsigned long | int | 4 |
| `'q'` | signed long long | int | 8 |
| `'Q'` | unsigned long long | int | 8 |
| `'f'` | float | float | 4 |
| `'d'` | double | float | 8 |

</div>
