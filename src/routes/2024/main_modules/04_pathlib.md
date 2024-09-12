
--- animate

```py
import pathlib
```

--- animate

```py
import pathlib
```

Interfaz orientada a objetos para manipular rutas de archivos y directorios

---

![https://docs.python.org/3/_images/pathlib_inheritance.png](/2024/pathlib_inheritance.png)

---

Que dice el grafico?

---

Que depende de donde se ejecute el codigo, Path instanciara el objeto para el SO subyacente

---

Entonces felizmente usamos Path y es cross-platform

---

```py
import pathlib

path = pathlib.Path('.')

for p in path.iterdir():
    print(p)
```

---

```plain
.venv
presentation
sections
sys.html
test.py
xd.py
```

---

Solo para listar?

---

A ver la magia

---

```py
import pathlib

path = pathlib.Path('c:/')

path = path / 'Windows' / 'System32'

print(*path.glob('m*o*d*u*l*o*'), sep="\n")
```

---

```plain
c:\Windows\System32\MediaFoundation.DefaultPerceptionProvider.dll
```

---

O algo mas simple

---

```py
import pathlib

print(pathlib.Path.cwd())
```

---

```plain
C:\Users\suare\projects\personal\pyday1\2024
```

---

O algo comodo como

---

```py
import pathlib

path = pathlib.Path('.')

with path.joinpath('.env').open() as f:
    print(f.read())
```

---

```plain
DB_URI=postgresql://por:quemeestas@localhost:5432/leyendo

OPENAPI_KEY=sk_test_4eC39HqLyjWDarjtT1zdp7dc

OAUTH_CLIENT_ID=1234567890-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com
OAUTH_CLIENT_SECRET=GOCSPX-abcdefgHIJKLMNopqrstuvwxyz12345
```
