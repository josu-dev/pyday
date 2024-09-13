
--- animate

```py
import timeit
```

--- animate

```py
import timeit
```

Medir tiempo de ejecucion de pequeños fragmentos de codigo, de forma simple

--- animate

```py
import timeit

print(timeit.timeit('8 / 2 * (2 + 2)'), "segundos")
```

--- animate

```py
import timeit

print(timeit.timeit('8 / 2 * (2 + 2)'), "segundos")
```

```plain
0.014247099999920465
```

--- animate

```py
import timeit

print(timeit.timeit('8 / 2 * (2 + 2)'), "segundos")
```

```plain
0.014247099999920465
```

_[el resultado es](https://www.youtube.com/watch?v=Me4FmtdEuIA)_

--- animate

Esta bien, que mas?

--- animate

Permite definir el número de muestras

<nobr>

`timeit.timeit(number=<default 1_000_000>){:py}`</nobr>

--- animate

Permite definir la funcion de tiempo

<nobr>

`timeit.timeit(timer=<default time.perf_counter>){:py}`</nobr>

--- animate

Permite definir la funcion de tiempo

<nobr>

`timeit.timeit(timer=<default time.perf_counter>){:py}`</nobr>

Algunas opciones

`time.perf_counter{:py}`

`time.perf_counter_ns{:py}`

`time.process_time{:py}`

--- animate

Permite repetir la medicion

<nobr>

`timeit.repeat(repeat=<default 5>){:py}`</nobr>

--- animate

Permite repetir la medicion

<nobr>

`timeit.repeat(repeat=<default 5>){:py}`</nobr>

Util para acercarnos al lower bound

--- animate

Si lo juntamos todo

--- animate class="text-3xl"

Si lo juntamos todo

```py
import time
import timeit

medidas = timeit.repeat(
    "pow(2, 200)",
    number=1_000,
    repeat=100,
    timer=time.perf_counter_ns
)
print(len(medidas), "mediciones")
print(min(medidas), "ns")
```

--- animate class="text-3xl"

```py
import time
import timeit

medidas = timeit.repeat(
    "pow(2, 200)",
    number=1_000,
    repeat=100,
    timer=time.perf_counter_ns
)
print(len(medidas), "mediciones")
print(min(medidas), "ns")
```

```plain
100 mediciones
240900 ns
```

--- animate

Para casos mas complejos, estan los parametros `setup{:py}` o `globals{:py}`

--- animate

Para casos mas complejos, estan los parametros `setup{:py}` o `globals{:py}`

`setup{:py}` se ejecuta una vez antes de cada medicion

--- animate

Para casos mas complejos, estan los parametros `setup{:py}` o `globals{:py}`

`setup{:py}` se ejecuta una vez antes de cada medicion

`globals{:py}` se usa para pasar el contexto de ejecucion

<!-- --- animate class="!text-[0.6em]"

`setup{:py}` se ejecuta una vez antes de cada medicion

```py

import timeit

setup = """import random
random.seed(0)
l = [round(random.random() * 1000) for _ in range(10000)]"""

stmt1 = """x = []
for v in l:
    if v % 5 == 0:
        x.append(v)"""
stmt2 = "x = list(filter(lambda v: v % 5 == 0, l))"
stmt3 = "x = [v for v in l if v % 5 == 0]"

print(timeit.timeit(stmt1, setup=setup))
print(timeit.timeit(stmt2, setup=setup))
print(timeit.timeit(stmt3, setup=setup))
```

--- animate class="!text-[0.6em]"

```py

import timeit

setup = """import random
random.seed(0)
l = [round(random.random() * 1000) for _ in range(10000)]"""

stmt1 = """x = []
for v in l:
    if v % 5 == 0:
        x.append(v)"""
stmt2 = "x = list(filter(lambda v: v % 5 == 0, l))"
stmt3 = "x = [v for v in l if v % 5 == 0]"

print(timeit.timeit(stmt1, setup=setup))
print(timeit.timeit(stmt2, setup=setup))
print(timeit.timeit(stmt3, setup=setup))
```

```plain
593.8029416999998
1058.3315170000005
560.2973896999993
``` -->

--- animate class="!text-[0.6em]"

`globals{:py}` se usa para pasar el contexto de ejecucion

```py
import timeit

s1 = "sum(map(ord, s))"
s2 = """\
x = 0
for c in s:
    x += ord(c)
"""
s3 = "sum(s.encode('utf-8'))"

s = 'un caso de prueba' * 100

print(timeit.timeit(s1, globals=globals()))
print(timeit.timeit(s2, globals=globals()))
print(timeit.timeit(s3, globals=globals()))
```

--- animate class="!text-[0.6em]"

```py
import timeit

s1 = "sum(map(ord, s))"
s2 = """\
x = 0
for c in s:
    x += ord(c)
"""
s3 = "sum(s.encode('utf-8'))"

s = 'un caso de prueba' * 100

print(timeit.timeit(s1, globals=globals()))
print(timeit.timeit(s2, globals=globals()))
print(timeit.timeit(s3, globals=globals()))
```

```plain
36.25424589999966
90.68637050000143
8.36053659999925
```

--- animate

Hay una mas rapida?

--- animate

Hay una mas rapida?

Mirando bien el escenario a medir

--- animate class="!text-[0.75em]"

Mirando bien el escenario a medir

```py
import timeit

s4 = """\
slice_len = len(s) // 100
slice = s[:slice_len].encode('utf-8')
sum(slice) * 100
"""

s = 'un caso de prueba' * 100

print(timeit.timeit(s4, globals=globals()))
```

--- animate class="!text-[0.75em]"

```py
import timeit

s4 = """\
slice_len = len(s) // 100
slice = s[:slice_len].encode('utf-8')
sum(slice) * 100
"""

s = 'un caso de prueba' * 100

print(timeit.timeit(s4, globals=globals()))
```

```plain
0.42981549999967683
```

--- animate

Casi me olvido

--- animate

Casi me olvido

Tambien puede ser usado desde la terminal

--- animate

Tambien puede ser usado desde la terminal

```sh
python -m timeit -s "import math; x=48; y=-1.9" "math.copysign(x, y)"
```

--- animate

Tambien puede ser usado desde la terminal

```sh
python -m timeit -s "import math; x=48; y=-1.9" "math.copysign(x, y)"
2000000 loops, best of 5: 114 nsec per loop
```

--- animate

Tambien puede ser usado desde la terminal

```sh
python -m timeit -s "import math; x=48; y=-1.9" "math.copysign(x, y)"
2000000 loops, best of 5: 114 nsec per loop

python -m timeit "x=48; y=-1.9" "float(x if y >= 0 else -x)"
```

--- animate

Tambien puede ser usado desde la terminal

```sh
python -m timeit -s "import math; x = 48; y = -1.9" "math.copysign(x, y)"
2000000 loops, best of 5: 114 nsec per loop

python -m timeit "x = 48; y = -1.9" "x * 1.0 if y > 0 else -1.0 * x"
5000000 loops, best of 5: 91.8 nsec per loop
```
