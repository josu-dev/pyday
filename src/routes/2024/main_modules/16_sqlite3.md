--- animate

```py
import sqlite3
```

---

animate

```py
import sqlite3
```

Trabajar con bases de datos SQLite

--- animate

Trabajar con bases de datos SQLite

_locales_

--- animate

Simple, rapido, y facil de usar

--- animate

Simple, rapido, y facil de usar

```py
import sqlite3

con = sqlite3.connect('example.db')
cur = con.cursor()
cur.execute("CREATE TABLE chiki (nombre TEXT, edad INTEGER)")
print(cur.execute("SELECT name FROM sqlite_master").fetchall())
```

--- animate

```py
import sqlite3

con = sqlite3.connect('example.db')
cur = con.cursor()
cur.execute("CREATE TABLE chiki (nombre TEXT, edad INTEGER)")
print(cur.execute("SELECT name FROM sqlite_master").fetchall())
```

```plain
[('chiki',)]
```

--- animate class="text-3xl"

```py
chikis = [
    ('Guido van Rossum', 68),
    ('Raymond Hettinger', 50),
    ('Brett Cannon', 45)
]
cur.executemany("INSERT INTO chiki VALUES (?, ?)", chikis)
con.commit()
print(cur.execute("SELECT * FROM chiki WHERE edad >= 50").fetchall())
```

--- animate class="text-3xl"

```py
chikis = [
    ('Guido van Rossum', 68),
    ('Raymond Hettinger', 50),
    ('Brett Cannon', 45)
]
cur.executemany("INSERT INTO chiki VALUES (?, ?)", chikis)
con.commit()
print(cur.execute("SELECT * FROM chiki WHERE edad >= 50").fetchall())
```

```plain
[('Guido van Rossum', 68), ('Raymond Hettinger', 50)]
```

--- animate

No te olvides de cerrar la conexion

--- animate

No te olvides de cerrar la conexion

```py
con.close()
```

--- animate

No te olvides de cerrar la conexion

```py data-id="commit"
con.close()
```

Pero tampoco te olvides de usar commit

--- animate

No te olvides de cerrar la conexion

```py data-id="commit"
con.commit()
con.close()
```

Pero tampoco te olvides de usar commit

---

Genial, ahora ya sabes como trabajar con SQLite en Python

--- animate

Algo mas?

--- animate class="text-3xl"

Algo mas?

```py
import sqlite3

con = sqlite3.connect(':memory:')
cur = con.cursor()
cur.execute("CREATE TABLE temp (msg TEXT)")
cur.execute("INSERT INTO temp VALUES ('Solo en memoria')")
cur.execute("INSERT INTO temp VALUES (', en otros terminos, no persistente')")
print("".join(*cur.execute("SELECT * FROM temp").fetchall()))
```

--- animate class="text-3xl"

```py
import sqlite3

con = sqlite3.connect(':memory:')
cur = con.cursor()
cur.execute("CREATE TABLE temp (msg TEXT)")
cur.execute("INSERT INTO temp VALUES ('Solo en memoria')")
cur.execute("INSERT INTO temp VALUES (', en otros terminos, no persistente')")
print("".join(*cur.execute("SELECT * FROM temp").fetchall()))
```

```plain
Solo en memoria, en otros terminos, no persistente
```

--- animate

Algo mas?

--- animate

Algo mas?

```py
import sqlite3

original = sqlite3.connect('example.db')
nueva = sqlite3.connect(':memory:')
original.backup(nueva)
original.close()
nueva.close()
```

--- animate class="text-3xl"

```py
import sqlite3

original = sqlite3.connect('example.db')
nueva = sqlite3.connect(':memory:')
original.backup(nueva)
original.close()
nueva.close()
```

Creanme que hace el backup bien

--- animate

Un poco de error handling no vendria mal

--- animate class="text-3xl"

Un poco de error handling no vendria mal

```py
import sqlite3

con = sqlite3.connect(':memory:')
cur = con.cursor()
cur.execute("CREATE TABLE escribime_bien (msg TEXT)")
try:
    cur.execute("INSERT INTO escribime_mal VALUES ('no_quiero')")
except sqlite3.Error as e:
    print("capturamos un error, no se cual")
finally:
    con.close()
```

--- animate class="text-3xl"

```py
import sqlite3

con = sqlite3.connect(':memory:')
cur = con.cursor()
cur.execute("CREATE TABLE escribime_bien (msg TEXT)")
try:
    cur.execute("INSERT INTO escribime_mal VALUES ('no_quiero')")
except sqlite3.Error as e:
    print("capturamos un error, no se cual")
finally:
    con.close()
```

```sh
capturamos un error, no se cual
```

--- animate

```sh
capturamos un error, no se cual
```

Tranquilos, hay mas especificos

--- animate

Tranquilos, hay mas especificos

```py
import sqlite3

print(*(
  "sqlite3" + name
  for name in dir(sqlite3)
  if "Error" in name
))
```

--- animate class="text-3xl"

```py
import sqlite3

print(*(
  "sqlite3" + name
  for name in dir(sqlite3)
  if "Error" in name
))
```

```plain
sqlite3.DataError sqlite3.DatabaseError sqlite3.Error sqlite3.IntegrityError
sqlite3.InterfaceError sqlite3.InternalError sqlite3.NotSupportedError
sqlite3.OperationalError sqlite3.ProgrammingErro
```
