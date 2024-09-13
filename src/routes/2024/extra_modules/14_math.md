```py
import math
```

--- animate

El modulo `math{:py}` provee acceso a las funciones matematicas definidas por el estandar C.

--- animate

El modulo `math{:py}` provee acceso a las funciones matematicas definidas por el estandar C.

(Operaciones, constantes y funciones trigonometricas)

--- animate

Por ejemplo si queremos implementar el factorial

--- animate

Por ejemplo si queremos implementar el factorial

con la menor cantidad de lineas

--- animate

con la menor cantidad de lineas

```py
import math

factorial = lambda n: math.factorial(n)

print(factorial(5))
```

--- animate

```py
import math

factorial = lambda n: math.factorial(n)

print(factorial(5))
```

```plain
120
```

---

No usen las lambdas asi

--- animate

O si queremos calcular cuantos pasos nos ahorramos tomando una diagonal

--- animate

O si queremos calcular cuantos pasos nos ahorramos tomando una diagonal

<div class="text-2xl">

```py
import math


METRO_A_PASO = 1.46


def pasos_ahorrados(cuadras_ancho, cuadras_largo):
    ancho = cuadras_ancho * 100
    largo = cuadras_largo * 100
    return (ancho + largo - math.hypot(ancho, largo)) * METRO_A_PASO


print(pasos_ahorrados(4, 8))
```

</div>

--- animate

<div class="text-3xl">

```py
import math


METRO_A_PASO = 1.46


def pasos_ahorrados(cuadras_ancho, cuadras_largo):
    ancho = cuadras_ancho * 100
    largo = cuadras_largo * 100
    return (ancho + largo - math.hypot(ancho, largo)) * METRO_A_PASO


print(pasos_ahorrados(4, 8))
```

</div>

```plain
mas o menos 446.13630114012284 pasos
```

--- animate

O tambien esas cosas que aprendiste y no usaste nunca mas:

--- animate

O tambien esas cosas que aprendiste y no usaste nunca mas:

```py data-id="1"
import math

print(math.comb(5, 2))
print(math.perm(5, 2))
print(math.gcd(10, 15))
print(math.lcm(10, 15))
```

--- animate

```py data-id="1"
import math

print(math.comb(5, 2), "combinaciones")
print(math.perm(5, 2), "permutaciones")
print(math.gcd(10, 15), "maximo comun divisor")
print(math.lcm(10, 15), "minimo comun multiplo")
```

```plain
10 combinaciones
20 permutaciones
5 maximo comun divisor
30 minimo comun multiplo
```

--- animate

O

--- animate

O

No les pasa que

```py
print(0.1 + 0.2 == 0.3)
```

--- animate

No les pasa que

```py
print(0.1 + 0.2 == 0.3)
```

Da

```plain
False
```

--- animate

Como?

--- animate

Como?

pero si es lo mismo?

--- animate

pero si es lo mismo?

```py
print(0.1 + 0.2, 0.3)
```

--- animate

```py
print(0.1 + 0.2, 0.3)
```

```plain
0.30000000000000004 0.3
```

--- animate

Sin entrar en detalles

--- animate

Sin entrar en detalles

Son cosas que pasan con el estandar [IEEE 754](https://es.wikipedia.org/wiki/IEEE_754)

--- animate

Como lo arreglamos?

--- animate

Como lo arreglamos?

con `math.isclose{:py}`

--- animate

```py
import math

print(math.isclose(0.1 + 0.2, 0.3))
```

--- animate

```py
import math

print(math.isclose(0.1 + 0.2, 0.3))
```

```plain
True
```

--- animate

O calcular la distancia entre Buenos Aires y Cordoba

--- animate

O calcular la distancia entre Buenos Aires y Cordoba

Si fueramos volando en linea recta

--- animate class="text-2xl"

Si fueramos volando en linea recta

```py
import math

RADIO_TIERRA = 6371.009 # km
buenos_aires = (-34.61, -58.38)
cordoba = (-31.41, -64.18)

def distancia_volando_entre(
    a: tuple[float, float], b: tuple[float, float]
) -> float:
    lat1, lon1 = math.radians(a[0]), math.radians(a[1])
    lat2, lon2 = math.radians(b[0]), math.radians(b[1])

    return RADIO_TIERRA * math.acos(
        math.sin(lat1) * math.sin(lat2)
        + math.cos(lat1) * math.cos(lat2) * math.cos(lon1 - lon2)
    )

print(distancia_volando_en_linea_recta(buenos_aires, cordoba), "km")
```

--- animate class="text-2xl"

```py
import math

RADIO_TIERRA = 6371.009 # km
buenos_aires = (-34.61, -58.38)
cordoba = (-31.41, -64.18)

def distancia_volando_entre(
    a: tuple[float, float], b: tuple[float, float]
) -> float:
    lat1, lon1 = math.radians(a[0]), math.radians(a[1])
    lat2, lon2 = math.radians(b[0]), math.radians(b[1])

    return RADIO_TIERRA * math.acos(
        math.sin(lat1) * math.sin(lat2)
        + math.cos(lat1) * math.cos(lat2) * math.cos(lon1 - lon2)
    )

print(distancia_volando_en_linea_recta(buenos_aires, cordoba), "km")
```

```plain
647.1898525971513 km
```
