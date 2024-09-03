```py
import json
```

---

El modulo `json` nos permite trabajar con datos en formato JSON.

---

Esos que se ven así:

```json
{
  "nombre": "Guido van Rossum",
  "edad": 68,
  "casado": ["con python", "y con su esposa"]
}
```

---

Para convertir un objeto de Python a JSON, usamos `json.dumps()`:

```py
import json

un_tipaso = {
  "nombre": "Guido van Rossum",
  "edad": 68,
  "casado": "con python"
}

un_tipaso_str = json.dumps(un_tipaso)
print(un_tipaso_str)
```

---

```json
{"nombre": "Guido van Rossum", "edad": 68, "casado": "con python"}
```

---

Para convertir un JSON a un objeto de Python, usamos `json.loads()`:

```py
un_json = '{"nombre": "Guido van Rossum", "edad": 68, "casado": "con python"}'

print(json.loads(un_json))
```

---

```py
{'nombre': 'Guido van Rossum', 'edad': 68, 'casado': 'con python'}
```

---

listo?

---

na, python es lindo mira

---

Formatearlo con:

```py
print(json.dumps(un_tipaso, indent=2, sort_keys=True))
```

```json
{
  "casado": "con python",
  "edad": 68,
  "nombre": "Guido van Rossum"
}
```

---

Trabaja directo con el protocolo de Lectura/Escritura:

```py
with open('guido.json', 'w') as f:
  json.dump(un_tipaso, f, separators=(',', ':'))

with open('guido.json', 'r') as f:
  print(f.read())
  f.seek(0)
  print(json.load(f))
```

---

```txt
{"nombre":"Guido van Rossum","edad":68,"casado":"con python"}
{'nombre': 'Guido van Rossum', 'edad': 68, 'casado': 'con python'}
```

---

Soporta conversiones custom:

```py
class CustomEncoder(json.JSONEncoder):
  def default(self, obj):
    if isinstance(obj, set):
      return list(obj)

    return json.JSONEncoder.default(self, obj)

print(json.dumps({1, 2, 3}, cls=CustomEncoder))
```

---

```json
[1, 2, 3]
```

---

O revivir objetos custom:

```py
class Point:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Point({self.x}, {self.y})"


print(json.loads(
  '{"x": 1.023, "y": -2}',
  object_hook=lambda d: Point(**d)
))
```

```py
Point(1.023, -2)
```

---

O desde la terminal:

```sh
$ python -m json.tool --tab guido.json
```

```json
{
        "nombre": "Guido van Rossum",
        "edad": 68,
        "casado": "con python"
}
```
