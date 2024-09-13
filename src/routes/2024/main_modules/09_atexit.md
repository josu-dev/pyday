
--- animate

```py
import atexit
```

--- animate

```py
import atexit
```

Registrar funciones de limpieza para ejecutar cuando el programa termina

--- animate

```py
import atexit

def chau():
    print("termine la ejecucion 👌")

atexit.register(chau)
```

--- animate

```py
import atexit

def chau():
    print("termine la ejecucion 👌")

atexit.register(chau)
```

```plain
termine la ejecucion 👌
```

--- animate

De que es util?

--- animate

De que es util?

Para guardar logs, cerrar conexiones, liberar recursos, etc

--- animate

Si, pero no es lo mismo que un `finally{:py}` o usar un `context manager`?

--- animate

Si, pero no es lo mismo que un `finally{:py}` o usar un `context manager`?

No, `finally{:py}` o `context manager` se ejecutan siempre, `atexit{:py}` solo si el interprete termina normalmente o se llama a `exit(){:py}` o `sys.exit(){:py}`

--- animate

Se pueden registrar multiples funciones

--- animate

Se pueden registrar multiples funciones

Se ejecutan en orden inverso al que se registraron

--- animate

```py
import atexit

primera = lambda: print("primera")
segunda = lambda: print("segunda")
otra = lambda x: print(x)

atexit.register(primera)
atexit.register(segunda)
atexit.register(otra, "tercera")
```

--- animate

```plain
tercera
segunda
primera
```

--- animate

Y si queremos des-registrar una funcion?

--- animate

Y si queremos des-registrar una funcion?

```py
atexit.unregister(<una_funcion>)
```

--- animate class="text-3xl"

```py
import atexit

desapareci = lambda name: print(f"{name} desapareci")

me_quede = lambda name: print(f"{name} me_quede")

atexit.register(desapareci, "primera")
atexit.register(me_quede, "segunda")
atexit.register(desapareci, name="tercera")
atexit.unregister(desapareci)
```

--- animate class="text-3xl"

```py
import atexit

desapareci = lambda name: print(f"{name} desapareci")

me_quede = lambda name: print(f"{name} me_quede")

atexit.register(desapareci, "primera")
atexit.register(me_quede, "segunda")
atexit.register(desapareci, name="tercera")
atexit.unregister(desapareci)
```

```plain
segunda me_quede
```
