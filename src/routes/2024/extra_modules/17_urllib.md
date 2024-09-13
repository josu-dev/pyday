
--- animate

```py
import urllib
```

--- animate

El modulo `urllib{:py}` contiene varios modulos para trabajar con URLs

--- animate

El modulo `urllib{:py}` contiene varios modulos para trabajar con URLs

- `urllib.request{:py}`: Para abrir y leer URLs
- `urllib.error{:py}`: Para manejar errores
- `urllib.parse{:py}`: Para parsear URLs
- `urllib.robotparser{:py}`: Para parsear archivos `robots.txt`

---

hmmm, como?

--- animate

Vamos por partes

--- animate

Vamos por partes

`urllib.request{:py}`

--- animate

`urllib.request{:py}`

En dos palabras: operaciones HTTP

--- animate

En dos palabras: operaciones HTTP

```py
import urllib.request

url = 'https://docs.python.org/3/py-modindex.html'

with urllib.request.urlopen(url) as response:
    html = response.read()
    print(html)
```

--- animate

```py
import urllib.request

url = 'https://docs.python.org/3/py-modindex.html'

with urllib.request.urlopen(url) as f:
    print(f.read())
```

```html
b'<!DOCTYPE html>\n\n
<html lang="en" data-content_root="./">\n<head>\n
<meta charset="utf-8" />\n<meta name="viewport" content="width=device-width,
initial-scale=1.0" />\n
<title>Python Module Index &#8212;Python 3.12.5 documentation</title>
...
</div>\n\n
<script type="text/javascript" src="_static/switchers.js"></script>\n
</body>\n</html>'
```

--- animate

```html
b'<!DOCTYPE html>\n\n
<html lang="en" data-content_root="./">\n<head>\n
<meta charset="utf-8" />\n<meta name="viewport" content="width=device-width,
initial-scale=1.0" />\n
<title>Python Module Index &#8212;Python 3.12.5 documentation</title>
...
</div>\n\n
<script type="text/javascript" src="_static/switchers.js"></script>\n
</body>\n</html>'
```

Cuidado que el contenido es un string de bytes, con `f.read().decode('utf-8')` se convierte a string

--- animate

Por defecto `urlopen` usa el metodo `GET` para hacer la peticion

--- animate

Por defecto `urlopen` usa el metodo `GET` para hacer la peticion

Podemos usar `urllib.request.Request` para, por ejemplo, un metodo `POST`

--- animate

Podemos usar `urllib.request.Request` para, por ejemplo, un metodo `POST`

```py
import urllib.request

url = 'https://httpbin.org/post'

data = b'{"que_soy": "una prueba"}'

req = urllib.request.Request(url, data=data, method='POST')

with urllib.request.urlopen(req) as f:
    print(f.status, f.reason)
```

--- animate

```py
import urllib.request

url = 'https://httpbin.org/post'

data = b'{"que_soy": "una prueba"}'

req = urllib.request.Request(url, data=data, method='POST')

with urllib.request.urlopen(req) as f:
    print(f.status, f.reason)
```

```plain
200 OK
```

--- animate

Si, la pagina me la dijo Copilot, ¿como se que es verdad?

--- animate

Si, la pagina me la dijo Copilot, ¿como se que es verdad?

La visite y era una pagina de pruebas

--- animate

`urllib.error{:py}`

--- animate

`urllib.error{:py}`

En dos palabras: manejo de errores

--- animate

`urllib.error{:py}`

En tres palabras: manejo de errores

--- animate

En tres palabras: manejo de errores

```py
import urllib.error
import urllib.request

url = 'https://httpbin.org/status/404'

try:
    with urllib.request.urlopen(url) as f:
        print(f.read())
except urllib.error.HTTPError as e:
    print(e.code, e.reason, "😢")
```

--- animate

```py
import urllib.error
import urllib.request

url = 'https://httpbin.org/status/404'

try:
    with urllib.request.urlopen(url) as f:
        print(f.read())
except urllib.error.HTTPError as e:
    print(e.code, e.reason, "😢")
```

```plain
404 Not Found 😢
```

--- animate

`urllib.parse{:py}`

--- animate

`urllib.parse{:py}`

En tres palabras: parseo de URLs

--- animate

`urllib.parse{:py}`

En tres palabras: parseo de URLs

_(separar una url en partes)_

--- animate

En tres palabras: parseo de URLs

```py
import urllib.parse

url = 'httpnoseguro://docs.python.org/3/py-modindex.html'

parsed = urllib.parse.urlparse(url)
print(parsed)
```

--- animate

```py
import urllib.parse

url = 'httpnoseguro://docs.python.org/3/py-modindex.html'

parsed = urllib.parse.urlparse(url)
print(parsed)
```

```plain
ParseResult(
  scheme='httpnoseguro',
  netloc='docs.python.org',
  path='/3/py-modindex.html',
  params='',
  query='',
  fragment=''
)
```

--- animate

Podemos cambiar partes de la URL

--- animate

Podemos cambiar partes de la URL y mas cosas

```py
import urllib.parse

url = 'httpnoseguro://docs.python.org/3/py-modindex.html'

parsed = urllib.parse.urlparse(url)
parsed = parsed._replace(scheme='https')

new_url = urllib.parse.urljoin(parsed.geturl(), 'library/urllib.parse.html')
print(new_url)
```

--- animate

```py
import urllib.parse

url = 'httpnoseguro://docs.python.org/3/py-modindex.html'

parsed = urllib.parse.urlparse(url)
parsed = parsed._replace(scheme='https')

new_url = urllib.parse.urljoin(parsed.geturl(), 'library/urllib.parse.html')
print(new_url)
```

```plain
https://docs.python.org/library/urllib.parse.html
```

--- animate

`urllib.robotparser{:py}`

--- animate

`urllib.robotparser{:py}`

En tres palabras: parseo de `robots.txt`

--- animate

`urllib.robotparser{:py}`

En tres palabras: parseo de `robots.txt`

_(para respetar las reglas de los sitios)_

--- animate

En tres palabras: parseo de `robots.txt`

```py
import urllib.robotparser

rp = urllib.robotparser.RobotFileParser()

PAGINA = 'https://pypi.org/'

rp.set_url(urllib.parse.urljoin(PAGINA, '/robots.txt'))
rp.read()

print(rp.can_fetch('*', PAGINA))
print(rp.can_fetch('*', urllib.parse.urljoin(PAGINA, '/search/?q=libreria')))
```

--- animate

```py
import urllib.robotparser

rp = urllib.robotparser.RobotFileParser()

PAGINA = 'https://pypi.org/'

rp.set_url(urllib.parse.urljoin(PAGINA, '/robots.txt'))
rp.read()

print(rp.can_fetch('*', PAGINA))
print(rp.can_fetch('*', urllib.parse.urljoin(PAGINA, '/search/?q=libreria')))
```

```plain
True
True
```
