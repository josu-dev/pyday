```py
import random
```

---

El modulo `random` permite generar numeros pseudoaleatorios.

---

En diversas distribuciones.

---

Pero que es un numero pseudoaleatorio?

---

Es un numero que parece ser aleatorio pero es generado por un algoritmo.

Quiere decir que si se conoce el algoritmo y la semilla, se puede predecir el numero.

---

Semilla: Valor inicial para el algoritmo. Garantiza reproducibilidad.

---

```py
import random

super_magico = random.randint(1, 100) # 1 <= super_magico <= 100
```

---

Solo valores enteros?

---

Porque no elegir un valor de una secuencia?

---

```py
import random

cantantes = ['Roman el Original', 'YSY A', 'Billie Eilish', 'El Pity Alvarez', 'Matias Fisher']

alexa_reproduce = random.choice(cantantes)
```

---

Y lo de las distribuciones?

---

Las distribuciones son funciones matematicas que describen la probabilidad de ocurrencia de un evento.

---

En terminos que si entiendo

---

Son funciones que aumenten/decrecen la probabilidad de que salgan ciertos valores.

---

Por ejemplo la distribucion Pareto

```py
import random

alpha = 1.0

print(random.paretovariate(alpha))
print(random.paretovariate(0.01))
print(random.paretovariate(1_000_000))
```

---

```txt
3.9550995509482316
1.3267028373252112
1.000000607441804
```

---

La distribucion Pareto es una distribucion que se conoce como la regla del 80/20.

---

Que dice que el 80% de los efectos provienen del 20% de las causas.

---

A efectos practicos, se usa para modelar fenomenos donde hay pocos eventos que tienen un gran impacto.

---

Osea, valores de alpha bajos generan valores altos. Y viceversa.
