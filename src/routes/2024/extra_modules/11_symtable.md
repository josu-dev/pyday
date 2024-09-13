```py
import symtable
```

---

El modulo `symtable` permite examinar la table de simbolos de un bloque de codigo.

--- animate

Pero, que es una tabla de simbolos?

--- animate

Pero, que es una tabla de simbolos?

Una tabla de simbolos es lo que permite resolver el alcance de los identificadores en un codigo

---

Por ejemplo

```py
import symtable

st = symtable.symtable('''
def afuera(): pass

def enlasada():
    def adentro(): pass

class Test:
    def test_a(self):
        def test_a_1(self): pass

    @staticmethod
    def test_c():
        enlasada()

''', 'test', 'exec')

print(st_childs:=st.get_children())
print(st_childs[2].get_methods())
```

---

```plain
[
  <Function SymbolTable for afuera in test>,
  <Function SymbolTable for enlasada in test>,
  <Class SymbolTable for Test in test>
]
('test_a', 'test_c')
```

---

Nos permite ver los simbolos y realizar consultas sobre ellos

```py
import symtable

st = symtable.symtable('''
import math

x: int = 1

def test(z: int) -> float:
    global x
    x = y + z
    return math.sqrt(x)
''', 'test', 'exec')

print(st.get_symbols())
print(st.lookup('math').is_imported())
print(st.lookup('test').get_namespace().get_locals())
```

---

```plain
[
  <symbol 'math'>,
  <symbol 'x'>,
  <symbol 'int'>,
  <symbol 'test'>,
  <symbol 'float'>
]
True
('z',)
```

--- animate

Como que int y float?

--- animate

Como que int y float?

La explicacion es que `int` y `float` al ser usados en las anotaciones de tipo son considerados simbolos

---

Tambien se pueden examinar funciones

```py
st = symtable.symtable('''
a = 1
def afuera(x: int) -> None:
    global a
    def dentro():
        nonlocal b
        z = b
    b = 2
    z
''', 'test', 'exec')

print(st_test:=st.get_children()[0])
print("parametros", st_test.get_parameters())
print("locales", st_test.get_locals())
print("globales", st_test.get_globals())
print("no_locales dentro()", st_test.get_children()[0].get_frees())
```

---

```plain
<Function SymbolTable for afuera in test>
parametros ('x',)
locales ('x', 'dentro', 'b')
globales ('a', 'z')
no_locales dentro() ('b',)
```
