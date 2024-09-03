```py
import sqlite3
```

--- animate

El modulo `sqlite3` nos permite trabajar con bases de datos SQLite.

--- animate

El modulo `sqlite3` nos permite trabajar con bases de datos SQLite.

_locales_

--- animate

Simple, rápido, y fácil de usar.

--- animate

Simple, rápido, y fácil de usar.

```py
import sqlite3

con = sqlite3.connect('example.db')
cur = con.cursor()
cur.execute("CREATE TABLE chiki (nombre TEXT, edad INTEGER)")
print(cur.execute("SELECT name FROM sqlite_master").fetchone())
```

--- animate

```py
import sqlite3

con = sqlite3.connect('example.db')
cur = con.cursor()
cur.execute("CREATE TABLE chiki (nombre TEXT, edad INTEGER)")
print(cur.execute("SELECT name FROM sqlite_master").fetchone())
```

```txt
('chiki',)
```

--- animate

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

--- animate

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

```txt
[('Guido van Rossum', 68), ('Raymond Hettinger', 50)]
```

--- animate

No te olvides de cerrar la conexión

--- animate

No te olvides de cerrar la conexión

```py
con.close()
```

--- animate

No te olvides de cerrar la conexión

```py data-id="commit"
con.close()
```

Pero tampoco te olvides de usar commit

--- animate

No te olvides de cerrar la conexión

```py data-id="commit"
con.commit()
con.close()
```

Pero tampoco te olvides de usar commit

---

Genial, ahora ya sabes como trabajar con SQLite en Python.

--- animate

algo mas?

--- animate

algo mas?

```py
import sqlite3

con = sqlite3.connect(':memory:')
cur = con.cursor()
cur.execute("CREATE TABLE temp (msg TEXT)")
cur.execute("INSERT INTO temp VALUES ('Solo en memoria')")
cur.execute("INSERT INTO temp VALUES (', en otros terminos, no persistente')")
print("".join(*cur.execute("SELECT * FROM temp").fetchall()))
```

--- animate

```py
import sqlite3

con = sqlite3.connect(':memory:')
cur = con.cursor()
cur.execute("CREATE TABLE temp (msg TEXT)")
cur.execute("INSERT INTO temp VALUES ('Solo en memoria')")
cur.execute("INSERT INTO temp VALUES (', en otros terminos, no persistente')")
print("".join(*cur.execute("SELECT * FROM temp").fetchall()))
```

```txt
Solo en memoria, en otros terminos, no persistente
```

--- animate

algo mas?

--- animate

algo mas?

```py
import sqlite3

original = sqlite3.connect('example.db')
nueva = sqlite3.connect(':memory:')
original.backup(nueva)
original.close()
nueva.close()
```

--- animate

```py
import sqlite3

original = sqlite3.connect('example.db')
nueva = sqlite3.connect(':memory:')
original.backup(nueva)
original.close()
nueva.close()
```

Creanmen que hace el backup bien

--- animate

Un poco de error handling no vendria mal

--- animate

Un poco de error handling no vendria mal

```py
import sqlite3

con = sqlite3.connect(':memory:')
cur = con.cursor()
cur.execute("CREATE TABLE escribime_bien (msg TEXT)")
try:
    cur.execute("INSERT INTO escribime_mal VALUES ('no_quiero')")
except sqlite3.Error as e:
    print("con sqlite3.Error agarramos cualquier error de SQLite")
finally:
    con.close()
```

--- animate

```py
import sqlite3

con = sqlite3.connect(':memory:')
cur = con.cursor()
cur.execute("CREATE TABLE escribime_bien (msg TEXT)")
try:
    cur.execute("INSERT INTO escribime_mal VALUES ('no_quiero')")
except sqlite3.Error as e:
    print("con sqlite3.Error agarramos cualquier error de SQLite")
finally:
    con.close()
```

```sh
con sqlite3.Error agarramos cualquier error de SQLite
```

--- animate


```sh
con sqlite3.Error agarramos cualquier error de SQLite
```

Tranquilos, hay mas especificos

--- animate

Tranquilos, hay mas especificos

```py
import sqlite3

print(*("sqlite3" + name for name in dir(sqlite3) if "Error" in name))
```

--- animate

```py
import sqlite3

print(*("sqlite3" + name for name in dir(sqlite3) if "Error" in name))
```

```txt
sqlite3.DataError sqlite3.DatabaseError sqlite3.Error sqlite3.IntegrityError
sqlite3.InterfaceError sqlite3.InternalError sqlite3.NotSupportedError
sqlite3.OperationalError sqlite3.ProgrammingErro
```
