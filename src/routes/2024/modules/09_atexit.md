```py
import atexit
```

---

El modulo `atexit{:py}` nos permite registrar funciones que se ejecutaran al finalizar la ejecucion del programa

---

```py
import atexit

def chau():
    print("termine la ejecucion papu")

atexit.register(chau)
```

---

```txt
termine la ejecucion papu
```

---

Y de que nos sirve?

---

Para liberar guardar logs y otras tareas de limpieza

---

Si, pero no es lo mismo que un `finally{:py}` o usar un `context manager`?

---

No, `finally{:py}` o `context manager` se ejecuta siempre, `atexit{:py}` solo si el programa termina normalmente o se llama a `exit(){:py}` o `sys.exit(){:py}`

---

Tambien podemos registrar multiples funciones, se ejecutaran en orden inverso

---

```py
import atexit

primera = lambda: print("primera")
segunda = lambda: print("segunda")
otra = lambda x: print(x)

atexit.register(primera)
atexit.register(segunda)
atexit.register(otra, "tercera")
```

---

```txt
tercera
segunda
primera
```

--- animate

Y si queremos des-registrar una funcion?

--- animate

Y si queremos des-registrar una funcion?

```py
atexit.unregister(tu_funcion)
```

--- animate

```py
import atexit

desapareci = lambda name: print(f"{name} desapareci")

me_quede = lambda name: print(f"{name} me_quede")

atexit.register(me_quede, name="primera")
atexit.register(desapareci, "segunda")
atexit.register(me_quede, "tercera")
atexit.register(desapareci, name="cuarta")
atexit.unregister(desapareci)
```

--- animate

```py
import atexit

desapareci = lambda name: print(f"{name} desapareci")

me_quede = lambda name: print(f"{name} me_quede")

atexit.register(me_quede, name="primera")
atexit.register(desapareci, "segunda")
atexit.register(me_quede, "tercera")
atexit.register(desapareci, name="cuarta")
atexit.unregister(desapareci)
```

```txt
tercera me_quede
primera me_quede
```
