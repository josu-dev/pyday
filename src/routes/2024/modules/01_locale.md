```py
import locale
```

---

El modulo locale permite trabajar con configuraciones regionales del sistema

---

En otras palabras

---

Permite obtener y modificar la configuracion actual para adaptar la aplicacion a las preferencias del usuario

---

```py
import locale

print(locale.getlocale())
```

---

Que significa esto?

---

Sigue la forma de (idioma, codificacion)

---

```txt
<codigo lenguage>_<codigo pais>.<codificacion>
```

---

```txt
('es_AR', 'UTF-8')
Español, Argentina, UTF-8
```

---

Tambien se puede cambiar la configuracion

---

```py
import locale

locale.setlocale(locale.LC_ALL, 'zu_ZA.UTF-8')
print(locale.getlocale())
```

---

```txt
('zu_ZA', 'UTF-8')
Zulu, South Africa, UTF-8
```

---

De que sirve?

---

Para formatos de fecha, moneda, numeros, etc

Usados en funciones como strftime, strptime, currency, etc

O modulos como calendar, datetime, etc

---

Todos los ejemplos de salida son con:

```py
import locale

locale.setlocale(locale.LC_ALL, 'es_AR.UTF-8')
```

---

Para mas informacion:

- https://docs.python.org/3/library/locale.html
- https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes
- https://en.wikipedia.org/wiki/ISO_3166-2
