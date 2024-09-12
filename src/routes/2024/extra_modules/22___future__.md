```py
import __future__
```

--- animate

El modulo `__future__{:py}` provee acceso a caracteristicas futuras de Python que se estan desarrollando

--- animate

Pero si es un `import{:py}`

--- animate

Pero si es un `import{:py}`

Como funciona?

--- animate

Como funciona?

Los imports de la forma

`from __future__ import feature{:py}`

son llamados [declaraciones futuras](https://docs.python.org/3/reference/simple_stmts.html#future-statements)

--- animate

`from __future__ import feature{:py}`

Las [declaraciones futuras](https://docs.python.org/3/reference/simple_stmts.html#future-statements) son siguen siendo un import como cualquier otro, pero tratados especialmente por el compilador para habilitar el uso de caracteristicas futuras que se encuentren disponibles antes de que sean parte del standard

--- animate

Y cuales son esas caracteristicas?

--- animate

Y cuales son esas caracteristicas?

Esta linda tabla de la documentacion oficial nos lo dice

--- animate

Esta linda tabla de la documentacion oficial nos lo dice

| Caracteristica | Opcional | Mandatoria | Efecto |
| --- | --- | --- | --- |
| `nested_scopes{:py}` | 2.1 | 2.2 | [PEP 227](https://peps.python.org/pep-0227/) |
| `generators{:py}` | 2.2 | 2.3 | [PEP 255](https://peps.python.org/pep-0255/) |
| `division{:py}` | 2.2 | 3.0 | [PEP 238](https://peps.python.org/pep-0238/) |
| `absolute_import{:py}` | 2.5 | 3.0 | [PEP 328](https://peps.python.org/pep-0328/) |
| `with_statement{:py}` | 2.5 | 2.6 | [PEP 343](https://peps.python.org/pep-0343/) |
| `print_function{:py}` | 2.6 | 3.0 | [PEP 3105](https://peps.python.org/pep-3105/) |
| `unicode_literals{:py}` | 2.6 | 3.0 | [PEP 3112](https://peps.python.org/pep-3112/) |
| `generator_stop{:py}` | 3.5 | 3.7 | [PEP 479](https://peps.python.org/pep-0479/) |
| `annotations{:py}` | 3.7 | [TDB](https://docs.python.org/3/library/__future__.html#id2) | [PEP 563](https://peps.python.org/pep-0563/) |

--- animate

Hoy en dia, la mayoria de estas caracteristicas ya son parte del standard de Python

--- animate

Hoy en dia, la mayoria de estas caracteristicas ya son parte del standard de Python

Excepto por `annotations{:py}` que sigue siendo opcional

--- animate

Excepto por `annotations{:py}` que sigue siendo opcional

Cual es la ventaja de usar `annotations{:py}`?

--- animate

Cual es la ventaja de usar `annotations{:py}`?

Esta caracteristica hace que las anotaciones de tipo sean tratadas como strings postponiendo la evaluacion de las expresiones

--- animate

Esta caracteristica hace que las anotaciones de tipo sean tratadas como strings postponiendo la evaluacion de las expresiones

El problema se hacerlo estandar es que el codigo existente que dependa de la evaluacion de las anotaciones de tipo como expresiones para funcionar correctamente dejaria de funcionar, rompiendo la retrocompatibilidad

--- animate

El problema se hacerlo estandar es que el codigo existente que dependa de la evaluacion de las anotaciones de tipo como expresiones para funcionar correctamente dejaria de funcionar, rompiendo la retrocompatibilidad

Por ejemplo librerias como `FastAPI` o `Pydantic` utilizan anotaciones de tipo como parte de su API para la definicion de esquemas de datos, comportamientos, etc
