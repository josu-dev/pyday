```py
import pathlib
```

---

El modulo `pathlib` provee una interfaz orientada a objetos para manipular rutas de archivos y directorios.

---

![https://docs.python.org/3/_images/pathlib_inheritance.png](/2024/pathlib_inheritance.png)

---

Que dice el grafico?

---

Que depende de donde se ejecute el codigo, Path instanciara el objeto para el SO subyacente.

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

```txt
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

print(*path.glob('b*a*n*c*o*'), sep="\n")
```

---

```txt
c:\Windows\System32\BluetoothPairingSystemToastIcon.contrast-black.png
c:\Windows\System32\BluetoothPairingSystemToastIcon.contrast-high.png
c:\Windows\System32\BluetoothPairingSystemToastIcon.contrast-white.png
c:\Windows\System32\BluetoothPairingSystemToastIcon.png
c:\Windows\System32\BluetoothSystemToastIcon.contrast-white.png
c:\Windows\System32\BthpanContextHandler.dll
```

---

O algo mas simple

---

```py
import pathlib

print(Path.cwd())
```

---

```txt
C:\Users\Usuario\Documents\GitHub\python-101\2024\presentation
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

```txt
DB_URI=postgresql://por:quemeestas@localhost:5432/leyendo

OPENAPI_KEY=sk_test_4eC39HqLyjWDarjtT1zdp7dc

OAUTH_CLIENT_ID=1234567890-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com
OAUTH_CLIENT_SECRET=GOCSPX-abcdefgHIJKLMNopqrstuvwxyz12345
```
