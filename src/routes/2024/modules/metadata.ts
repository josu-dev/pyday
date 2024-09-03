function documentation_for(module: string) {
    return `https://docs.python.org/3/library/${module}.html`;
}

function source_for(module: string) {
    return `"https://github.com/python/cpython/blob/3.12/Lib/${module}.py"`;
}

const pyodide_not_available = new Set([
    /* removed */ ...["curses", "dbm", "ensurepip", "fcntl", "grp", "idlelib",
        "lib2to3", "msvcrt", "pwd", "resource", "syslog", "termios", "tkinter",
        "turtle.py", "turtledemo", "venv", "winreg", "winsound"],
    /* not working */ ...["multiprocessing", "threading", "sockets"],
    /* cant be imported */ ...["pty", "tty"]
]);

type ModuleMetadata = {
    description: string,
    deprecated: boolean,
    pyodide_available: boolean,
    code_snippet: string | false;
    comment?: string;
    interesting_level: number;
    internal?: boolean;
};

const std_modules = {
    _: {
        __future__: {
            description: "Definiciones de características de Python futuras",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
from __future__ import annotations

# Habilita las anotaciones de tipo de Python 3.10+ en Python 3.7-3.9

def greet(name: str) -> str:
    return f"Hello, {name}"
`,
            interesting_level: 3
        },
        __main__: {
            description: "Modulo especial que representa el namespace del script principal, en otras palabras, el script que inició la ejecución.",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        _thread: {
            description: "Módulo de bajo nivel que proporciona una interfaz de subprocesos basada en hilos o procesos ligeros.",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 4
        },
        _tkinter: {
            description: "Interfaz de Python para Tcl/Tk",
            deprecated: false,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 4
        },
    },
    a: {
        abc: {
            description: "Clases abstractas de Python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        return "Woof!"
`,
            interesting_level: 2
        },
        aifc: {
            description: "Lector y escritor de archivos de audio AIFF y AIFC",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
        argparse: {
            description: "Parser de argumentos de línea de comandos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import argparse

parser = argparse.ArgumentParser(description="Suma dos números")
parser.add_argument("num1", type=int, help="Primer número")
parser.add_argument("num2", type=int, help="Segundo número")
args = parser.parse_args()

print(args.num1 + args.num2)
`,
            interesting_level: 2
        },
        array: {
            description: "Secuencias de bytes eficientes ya que el tipo de datos es conocido al crear el objeto",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import array

arr = array.array('i', [1, 2, 3]) # 'i' indica que los elementos son enteros
print(arr)
`,
            comment: "tabla re loca de tipos de datos: https://docs.python.org/3/library/array.html#module-array",
            interesting_level: 2
        },
        ast: {
            description: "Clases para la creación, manipulación y análisis de árboles de sintaxis abstracta de Python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import ast

node = ast.parse("print('Hello, world!')")
print(ast.dump(node))
`,
            interesting_level: 3
        },
        asyncio: {
            description: "Soporte para programación concurrente mediante sintaxis async/await",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        atexit: {
            description: "Define funciones para registrar/limpiar funciones de cleanup al salir del programa",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import atexit

def exit_handler():

    print("Saliendo del programa")

atexit.register(exit_handler)

print("Hola mundo")
`,
            interesting_level: 1
        },
        audioop: {
            description: "Operaciones de audio",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
    },
    b: {
        base64: {
            description: "Codificación y decodificación de datos en base64",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import base64

data = b"Hello, world!"
encoded = base64.b64encode(data)
print(encoded)

decoded = base64.b64decode(encoded)
print(decoded)

print(decoded == data)

`,
            interesting_level: 2
        },
        bdb: {
            description: "Depurador de Python",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        },
        binascii: {
            description: "Operaciones binarias y ASCII",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            comment: "internal module for base64, binhex, uu",
            interesting_level: 4
        },
        bisect: {
            description: "Módulo de búsqueda binaria",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import bisect

arr = [1, 3, 5, 7, 9]
print(bisect.bisect_left(arr, 6))
`,
            interesting_level: 3
        },
        builtins: {
            description: "Funciones y excepciones integradas en Python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import builtins

print(builtins.abs(-5))
`,
            interesting_level: 1,
            comment: "https://docs.python.org/3/library/functions.html#built-in-funcs https://docs.python.org/3/library/constants.html#built-in-consts"
        },
        bz2: {
            description: "Compresión de datos en formato bzip2",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        }
    },
    c: {
        calendar: {
            description: "Funciones para trabajar con calendarios",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
            import calendar

            print(calendar.month(2022, 1))
            `,
            interesting_level: 2
        },
        cgi: {
            description: "Módulo para crear programas CGI",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
        cgitb: {
            description: "Módulo para mostrar excepciones de Python en formato HTML",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
        chunk: {
            description: "Módulo para leer archivos en formato de trozos",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
        cmath: {
            description: "Funciones matemáticas para números complejos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import cmath

print(cmath.sqrt(-1))
`,
            interesting_level: 2
        },
        cmd: {
            description: "Framework para crear intérpretes de línea de comandos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import cmd

class MyCmd(cmd.Cmd):

    def do_hello(self, arg):
        print("Hello, world!")

    def do_exit(self, arg):
        return True

MyCmd().cmdloop()

`,
            interesting_level: 3
        },
        code: {
            description: "Clases para representar código fuente de Python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 4,
            comment: "used for interactive console"
        },
        codecs: {
            description: "Codificadores y decodificadores de texto",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        },
        codeop: {
            description: "Compilador de código Python incompleto",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5,
            comment: "used for interactive console"
        },
        collections: {
            description: "Contenedores especializados, diccionarios y colas",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import collections

d = collections.defaultdict(int)
d['a'] += 1
print(d)
`,
            interesting_level: 2
        },
        colorsys: {
            description: "Conversiones de colores RGB y HLS",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
            import colorsys
colorsys.rgb_to_hsv(0.2, 0.4, 0.4)

colorsys.hsv_to_rgb(0.5, 0.5, 0.4)
            `,
            interesting_level: 3
        },
        compileall: {
            description: "Compila todos los archivos .py en un directorio",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 4
        },
        concurrent: {
            description: "Ejecución de código asincrónico ya sea en hilos o procesos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import concurrent.futures

def greet(name):
    return f"Hello, {name}"

with concurrent.futures.ThreadPoolExecutor() as executor:

    future = executor.submit(greet, "Alice")
    print(future.result())
`,
            interesting_level: 3

        },
        configparser: {
            description: "Parser de configuración de archivos INI",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import configparser

config = configparser.ConfigParser()
config.read('config.ini')

print(config['DEFAULT']['name'])
`,
            interesting_level: 2
        },
        contextlib: {
            description: "Utilidades para trabajar con context managers (with)",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import contextlib

@contextlib.contextmanager
def my_context():
    print("Entrando al contexto")
    yield
    print("Saliendo del contexto")

with my_context():
    print("Dentro del contexto")

`,
            interesting_level: 2
        },
        contextvars: {
            description: "Variables de contexto para pasar valores a través de la pila de llamadas",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import contextvars

var = contextvars.ContextVar("var")
var.set("Hello, world!")

def greet():
    print(var.get())

greet()
`,
            interesting_level: 3,
            internal: true
        },
        copy: {
            description: "Copiado superficial y profundo de objetos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import copy

lst = [1, 2, 3]
lst_copy = copy.deepcopy(lst)
print(lst_copy)

lst_copy.append(4)
print(lst)
print(lst_copy)
`,
            interesting_level: 2
        },
        copyreg: {
            description: "Registro de constructores de objetos para pickle y copy",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        crypt: {
            description: "Interfaz para el cifrado de contraseñas",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
        csv: {
            description: "Lector y escritor de archivos CSV",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `	
import csv

with open('data.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        print(row)
`,
            interesting_level: 3
        },
        ctypes: {
            description: "Acceso a funciones de bibliotecas compartidas escritas en C",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import ctypes

libc = ctypes.CDLL('libc.so.6')
libc.printf(b"Hello, world!")
`,
            interesting_level: 4
        },
        curses: {
            description: "Interfaz de Python para la biblioteca curses (unix)",
            deprecated: true,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 5
        },
    },
    d: {
        dataclasses: {
            description: "Decoradores para crear clases de datos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

p = Point(1, 2)
print(p)
`,
            interesting_level: 3
        },
        datetime: {
            description: "Clases para manejar fechas y horas",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import datetime

now = datetime.datetime.now()
print(now)

print(now.strftime("%Y-%m-%d %H:%M:%S"))
`,
            interesting_level: 3
        },
        dbm: {
            description: "Interfaz de base de datos de estilo dbm",
            deprecated: true,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 5
        },
        decimal: {
            description: "Aritmética decimal de precisión fija",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import decimal

a = decimal.Decimal('0.1')
b = decimal.Decimal('0.2')
print(a + b)
`,
            interesting_level: 2
        },
        difflib: {
            description: "Comparación de secuencias, especialmente útil para la generación de diferencias entre archivos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import difflib

a = ['one\n', 'two\n', 'three\n']
b = ['one\n', 'three\n', 'four\n']

d = difflib.Differ()
diff = d.compare(a, b)
print('\n'.join(diff))
`,
            interesting_level: 2
        },
        dis: {
            description: "Desensamblador de código Python en bytecode para depuración",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
            import dis
            
            def greet(name):
                return f"Hello, {name}"
                
            print(dis.dis(greet))
            `,
            interesting_level: 1
        },
        doctest: {
            description: "Herramienta para probar fragmentos de código en la documentación",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
def greet(name):
    """
    >>> greet("Alice")
    'Hello, Alice'
    """

    return f"Hello, {name}"

if __name__ == "__main__":
    import doctest
    doctest.testmod()
`,
            interesting_level: 1
        },
    },
    e: {
        email: {
            description: "Módulo para la manipulación de correos electrónicos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        },
        encodings: {
            description: "Codificaciones de texto",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 4,
            internal: true
        },
        ensurepip: {
            description: "Asegura que pip esté instalado",
            deprecated: true,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 1,
            internal: true
        },
        enum: {
            description: "Soporte para enumeraciones",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
from enum import Enum

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

print(Color.RED)
`,
            interesting_level: 2
        },
        errno: {
            description: "Códigos de error del sistema definidos por la norma POSIX",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import errno

errno.errorcode[errno.EACCES]
`,
            interesting_level: 2
        },
        faulthandler: {
            description: "Módulo para registrar trazas de pila en caso de fallos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import faulthandler

faulthandler.enable()

def crash():
    return 1 / 0

crash()
`,
            interesting_level: 1
        },
        fcntl: {
            description: "Interfaz para las syscall fcntl() y ioctl()",
            deprecated: true,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 5
        },
        filecmp: {
            description: "Comparación de archivos y directorios",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2,
        },
        fileinput: {
            description: "Iteración sobre múltiples archivos o stdin",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import fileinput

for line in fileinput.input():
    print(line, end="")
`,
            interesting_level: 1
        },
        fnmatch: {
            description: "Comparación de nombres de archivos con comodines unix shell",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import fnmatch

print(fnmatch.fnmatch('foo.txt', '*.txt'))

print(fnmatch.fnmatch('foo.txt', '*.py'))

print(fnmatch.fnmatch('foo.txt', 'foo.*'))
`,
            interesting_level: 2
        },
        fractions: {
            description: "Fracciones racionales",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import fractions

a = fractions.Fraction(1, 3)
b = fractions.Fraction(1, 2)
print(a + b)
`,
            interesting_level: 2
        },
        ftplib: {
            description: "Cliente FTP",
            deprecated: false,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 4
        },
        functools: {
            description: "Herramientas para programación funcional",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import functools

def greet(name):
    return f"Hello, {name}"

greet_alice = functools.partial(greet, "Alice")

print(greet_alice())
`,
            interesting_level: 1
        },
    },
    g: {
        gc: {
            description: "Permite controlar el recolector de basura de Python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import gc

def greet():
    return "Hello, world!"

gc.collect()
print(greet())
gc.collect()
`,
            interesting_level: 1
        },
        getopt: {
            description: "Parser de opciones de línea de comandos estilo Unix (getopt)",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import getopt

opts, args = getopt.getopt(['-a', 'value'], 'a:')
print(opts)
print(args)
`,
            interesting_level: 2,
            comment: "better implementation: argparse"
        },
        getpass: {
            description: "Obtener contraseñas del usuario sin mostrarlas en pantalla",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import getpass

password = getpass.getpass()
print(password)
`,
            interesting_level: 2
        },
        gettext: {
            description: "Internacionalización y localización de mensajes de texto basada en catálogos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        glob: {
            description: "Expansión de comodines de nombres de archivos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import glob

print(glob.glob('*.txt'))
`,
            interesting_level: 2
        },
        graphlib: {
            description: "Algoritmos para trabajar con grafos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        },
        grp: {
            description: "Interfaz para el archivo de grupo",
            deprecated: true,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 5
        },
        gzip: {
            description: "Compresión de datos en formato gzip",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import gzip

data = b"Hello, world!"
compressed = gzip.compress(data)
print(compressed)

decompressed = gzip.decompress(compressed)
print(decompressed)
`,
            interesting_level: 1
        },
    },
    h: {
        hashlib: {
            description: "Hashes seguros de contraseñas y datos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import hashlib

data = b"Hello, world!"
hash = hashlib.sha256(data)
print(hash.hexdigest())
`,
            interesting_level: 2
        },
        heapq: {
            description: "Cola de prioridad implementada con una lista",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        },
        hmac: {
            description: "Algoritmo de autenticación basado en hash",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import hmac

key = b"secret"
data = b"Hello, world!"
h = hmac.new(key, data, 'sha256')

print(h.hexdigest())
`,
            interesting_level: 2
        },
        html: {
            description: "Módulo para generar y analizar documentos HTML",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        http: {
            description: "Módulo para client/servidor/utilidades HTTP",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        }
    },
    i: {
        idlelib: {
            description: "Librería de IDLE",
            deprecated: true,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 1
        },
        imaplib: {
            description: "Cliente IMAP",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        imghdr: {
            description: "Determina el tipo de imagen de un archivo",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
        importlib: {
            description: "Implementación del mecanismo de importación de Python",
            deprecated: false,
            pyodide_available: true,
            interesting_level: 3,
            code_snippet: `
            import importlib
            
            module = importlib.import_module('math')
            print(module.pi)
            `,
            internal: true,
        },
        inspect: {
            description: "Inspección de objetos vivos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import inspect

def greet():
    return "Hello, world!"

print(inspect.getsource(greet))
`,
            interesting_level: 1
        },
        io: {
            description: "Manejo de E/S básico",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        },
        ipaddress: {
            description: "Manipulación de direcciones IP",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import ipaddress

ip = ipaddress.ip_address('127.0.0.1')
print(ip)
`,
            interesting_level: 1
        },
        itertools: {
            description: "Funciones para crear iteradores",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import itertools

for i in itertools.count(1):
    print(i)
    if i == 5:
        break

print(list(itertools.permutations('abc')))
`,
            interesting_level: 2
        },
    },
    j: {
        json: {
            description: "Codificación y decodificación de JSON",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "usar como cli comparable a jq"
        }
    },
    k: {
        keyword: {
            description: "Detecta palabras clave de Python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import keyword

print(keyword.iskeyword('if'))
print(keyword.iskeyword('hello'))
`,
            interesting_level: 2
        }
    },
    l: {
        lib2to3: {
            description: "Herramientas para la migración de código de Python 2 a Python 3",
            deprecated: true,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 1
        },
        linecache: {
            description: "Interfaz para leer líneas de código fuente de archivos procesados",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        locale: {
            description: "Configuración regional",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        logging: {
            description: "Sistema de logeo flexible y fácil de usar",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import logging

logging.basicConfig(level=logging.DEBUG)

logging.debug("Debug message")
logging.info("Info message")
logging.warning("Warning message")
logging.error("Error message")
`,
            interesting_level: 2
        },
        lzma: {
            description: "Compresión de datos en formato LZMA",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2,
            comment: "comparar con bz2, gzip"
        }
    },
    m: {
        mailbox: {
            description: "Manejo de buzones de correo en disco",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "investigar que carajos"
        },
        mailcap: {
            description: "deprecated",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
        marshal: {
            description: "Serialización de objetos Python en formato binario para moverlos entre ambientes?",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        math: {
            description: "Funciones matemáticas",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        mimetypes: {
            description: "Mapeo de nombres de archivo a tipos MIME",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        mmap: {
            description: "Interfaz para archivos mapeados en memoria",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        },
        modulefinder: {
            description: "Encuentra los modulos que un script importa",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        msilib: {
            description: "Creación de archivos MSI",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
        msvcrt: {
            description: "Interfaz para la biblioteca C runtime de Microsoft",
            deprecated: false,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 5
        },
        multiprocessing: {
            description: "Multiprocessing, paralelismo a nivel proceso",
            deprecated: false,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 1
        }
    },
    n: {
        netrc: {
            description: "Parser y encapsulador de archivos .netrc",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3,
        },
        nis: {
            description: "Interfaz para el servicio de información de red",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5,
            comment: "ni idea https://es.wikipedia.org/wiki/Network_Information_Service"
        },
        nntplib: {
            description: "Cliente NNTP",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
        numbers: {
            description: "Clases abstractas para números",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        }
    },
    o: {
        operator: {
            description: "Funciones equivalentes a los operadores de Python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        optparse: {
            description: "Parser de opciones de línea de comandos",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5,
            comment: "reemplazado por argparse"
        },
        os: {
            description: "Interfaz con el sistema operativo",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "pickear algo bien piola"
        },
        ossaudiodev: {
            description: "Interfaz para dispositivos de audio OSS",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
    },
    p: {
        pathlib: {
            description: "Manipulación de rutas de archivos como objetos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2,
            comment: "un grafiquitop piola"
        },
        pdb: {
            description: "Depurador de Python interactivo en codigo",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        pickle: {
            description: "Serialización de objetos Python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "avanzado"
        },
        pickletools: {
            description: "Herramientas para trabajar con datos pickle",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3,
            comment: "solo para usuarios desarrolladores"
        },
        pipes: {
            description: "Interfaz para la llamada al sistema pipe",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
        pkgutil: {
            description: "Utilidades para el soporte de paquetes",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        },
        platform: {
            description: "Información sobre la plataforma de ejecución",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "como carajos que Jython"
        },
        plistlib: {
            description: "Generacion y parseo de archivos plist",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        poplib: {
            description: "Cliente POP3",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        posix: {
            description: "Interfaz para llamadas al sistema POSIX",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "no importar directamente"
        },
        pprint: {
            description: "Impresión de estructuras de datos de forma legible",
            deprecated: false,
            pyodide_available: true,
            code_snippet: `
import pprint

data = {'a': 1, 'b': 2, 'c': 3}
pprint.pprint(data)
`,
            interesting_level: 1
        },
        profile: {
            description: "Herramienta de perfilado",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        pty: {
            description: "Interfaz para pseudo terminales",
            deprecated: false,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 5,
            comment: "unix only"
        },
        pwd: {
            description: "Interfaz para la base de datos de contraseñas",
            deprecated: false,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 3,
            comment: "unix only"
        },
        py_compile: {
            description: "Compila archivos .py en archivos .pyc",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        },
        pyclbr: {
            description: "Módulo para analizar funciones, clases y metodos de Python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 4,
            comment: "no entendi"
        },
        pydoc: {
            description: "Generador de documentación",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
    },
    q: {
        queue: {
            description: "Estructuras de datos para comunicación entre hilos para productor/consumidor",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        },
        quopri: {
            description: "Codificación y decodificación de texto en formato quoted-printable",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        }
    },
    r: {
        random: {
            description: "Generación de números pseudoaleatorios",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "y la seguridad? secrets"
        },
        re: {
            description: "Expresiones regulares",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2,
            comment: "revisar la libreria o un ejemplo re loco"
        },
        readline: {
            description: "Interfaz para la biblioteca readline",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3,
            comment: "unix only"
        },
        reprlib: {
            description: "Generador de representaciones de objetos limitadas",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        resource: {
            description: "Interfaz para llamadas al sistema de recursos",
            deprecated: true,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 5,
            comment: "unix only"
        },
        rlcompleter: {
            description: "Completacion de identificadore sde python y de línea de comandos para la biblioteca readline",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 4
        },
        runpy: {
            description: "Localizador y ejecutor de módulos Python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2,
            comment: "utilizado con -m, (ver codigo fuente de eso?)"
        }
    },
    s: {
        sched: {
            description: "Programación de eventos temporizados",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        secrets: {
            description: "Generación de números criptográficamente seguros",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        select: {
            description: "Interfaz para la llamada al sistema select()",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 4,
            comment: "complicadisimo y plataforma especifico"
        },
        selectors: {
            description: "Abstracción de E/S multiplexada basada en primitivas select",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 4
        },
        shelve: {
            description: "Persistencia de objetos en disco de clave-valor basado en pickle",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        shlex: {
            description: "Parser de líneas de comandos estilo shell",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        shutil: {
            description: "Operaciones de alto nivel en archivos y directorios",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "cuidado con metada en unix"
        },
        signal: {
            description: "Manipulación de señales del sistema",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2,
            comment: "ni idea"
        },
        site: {
            description: "Configuración del sitio de Python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "demasiado interno para mi"
        },
        smtplib: {
            description: "Cliente SMTP",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        sndhdr: {
            description: "Determina el tipo de archivo de audio",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
        socket: {
            description: "Interfaz de red de bajo nivel",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "muy interesante"
        },
        socketserver: {
            description: "Servidores de socket de alto nivel",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        spwd: {
            description: "Interfaz para la base de datos de contraseñas seguras",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3,
            comment: "unix only"
        },
        sqlite3: {
            description: "Interfaz de Python para SQLite",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "aguante sql crudo"
        },
        ssl: {
            description: "Interfaz de SSL/TLS",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        },
        stat: {
            description: "Para interpretar los resultados de os.stat(), os.lstat() y os.fstat()",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        },
        statistics: {
            description: "Estadísticas descriptivas",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        string: {
            description: "Constantes y funciones de cadenas",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2,
            comment: "hablar de las templates?"
        },
        stringprep: {
            description: "prepara cadenas para transmitirlas por el protocolo de internet",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5

        },
        struct: {
            description: "Convierte entre valores de python y estructuras de c representadas como objetos de bytes en python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        },
        subprocess: {
            description: "Ejecución de procesos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        sunau: {
            description: "Lector y escritor de archivos de audio Sun AU",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
        symtable: {
            description: "Analizador de tablas de símbolos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        },
        sys: {
            description: "Acceso a variables y funciones específicas del sistema",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "algo super sucio aca"
        },
        sysconfig: {
            description: "Configuración del sistema Python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        syslog: {
            description: "Interfaz para el sistema syslog",
            deprecated: false,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 5,
            comment: "unix only"
        },
    },
    t: {
        tabnanny: {
            description: "Detecta indentación sospechosa",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        },
        tarfile: {
            description: "Lector y escritor de archivos tar",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        telnetlib: {
            description: "Cliente Telnet",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
        tempfile: {
            description: "Creación de archivos temporales y directorios",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        termios: {
            description: "Interfaz para la base de datos de terminales POSIX",
            deprecated: false,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 5
        },
        test: {
            description: "Framework de pruebas unitarias interno de Python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            internal: true
        },
        textwrap: {
            description: "Formateo de texto con relleno y sangría",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        threading: {
            description: "Interfaz de alto nivel encima del modulo _thread",
            deprecated: false,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 1
        },
        time: {
            description: "Acceso al tiempo y conversiones de tiempo",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        timeit: {
            description: "Herramienta de medición de tiempo de ejecucion para fragmentos de codigo",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        tkinter: {
            description: "Interfaz gráfica de usuario",
            deprecated: false,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 2
        },
        token: {
            description: "Constantes de tokens de Python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        tokenize: {
            description: "Lexer para Python escrito en Python",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        tomllib: {
            description: "Interfaz para parsear archivos TOML",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        trace: {
            description: "Rastreo de llamadas a funciones",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        traceback: {
            description: "Extraccion, formateo y imprecion de stack traces",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        tracemalloc: {
            description: "Rastreo de asignaciones de memoria",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "dificil decir algo aca"
        },
        tty: {
            description: "Interfaz para terminales tty",
            deprecated: false,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 5,
            comment: "unix only"
        },
        turtle: {
            description: "Libreria educativa para dibujar con tortugas",
            deprecated: false,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 2,
            comment: "las de los videos de youtube"
        },
        types: {
            description: "Utilidades para lña creacion dinamica de tipos",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "un ejemplo re loco?"
        },
        typing: {
            description: "Soporte para anotaciones de tipos en runtime",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "las anotaciones de tipos en python estan godlike"
        }
    },
    u: {
        unicodedata: {
            description: "Base de datos de caracteres Unicode",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        unittest: {
            description: "Framework de pruebas unitarias",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        urllib: {
            description: "Herramientas para trabajar con URLs",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        uu: {
            description: "Codificación y decodificación uuencode",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
        uuid: {
            description: "Generador de UUID",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
    },
    v: {
        venv: {
            description: "Creación de entornos virtuales",
            deprecated: false,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 1
        },
    },
    w: {
        warnings: {
            description: "Control de advertencias",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        wave: {
            description: "Lector y escritor de archivos de audio WAV",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        weakref: {
            description: "Referencias débiles",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "algo sobre memory leaks"
        },
        webbrowser: {
            description: "Interfaz para el navegador web",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        winreg: {
            description: "Interfaz para el registro de Windows",
            deprecated: true,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 5
        },
        winsound: {
            description: "Interfaz para la API de sonido de Windows",
            deprecated: true,
            pyodide_available: false,
            code_snippet: false,
            interesting_level: 5
        },
        wsgiref: {
            description: "Implementación de referencia de WSGI",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2,
            comment: "hablar de las wsgi apps"
        }
    },
    x: {
        xdrlib: {
            description: "Codificación y decodificación de datos XDR",
            deprecated: true,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 5
        },
        xml: {
            description: "Procesamiento de XML",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
    },
    z: {
        zipzapp: {
            description: "Crear aplicaciones zipapp",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1,
            comment: "empaquetar un programita"
        },
        zipfile: {
            description: "creacion y manipulacion de archivos zip",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 1
        },
        zipimport: {
            description: "Importar desde archivos zip",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 4,
            internal: true
        },
        zlib: {
            description: "Compresion de datos en formato zlib",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 2
        },
        zoneinfo: {
            description: "Implementacion de la zona horaria de la base de datos de IANA",
            deprecated: false,
            pyodide_available: true,
            code_snippet: false,
            interesting_level: 3
        }
    },
} satisfies Record<string, Record<string, ModuleMetadata>>;


const selected_modules = [
    "__future__",
    "__main__",
    "array",
    "atexit",
    "bisect",
    "builtins",
    "calendar",
    "cmath",
    "copy",
    "collections",
    "dis",
    "doctest",
    "filecmp",
    "functools",
    "gc",
    "getext",
    "hashlib",
    "html",
    "idlelib",
    "inspect",
    "json",
    "keyword",
    "locale",
    "lzma",
    "modulefinder",
    "numbers",
    "operator",
    "pathlib",
    "pickle",
    "platform",
    "pprint",
    "pydoc",
    "random", // secrets
    "sched",
    "shutil",
    "sqlite3",
    "symtable",
    "sys",
    "tempfile",
    "textwrap",
    "timeit",
    "tomllib",
    "trace",
    "traceback",
    "typing",
    "urllib",
    "uuid",
    "wave",
    "wsgiref",
    "xml"
];

const modules_order = [
    [
        1,
        "locale"
    ],
    [
        2,
        "calendar"
    ],
    [
        3,
        "random"
    ],
    [
        4,
        "pathlib"
    ],
    [
        5,
        "inspect"
    ],
    [
        6,
        "json"
    ],
    [
        7,
        "array"
    ],
    [
        8,
        "traceback"
    ],
    [
        9,
        "atexit"
    ],
    [
        10,
        "doctest"
    ],
    [
        11,
        "symtable"
    ],
    [
        12,
        "shutil"
    ],
    [
        13,
        "builtins"
    ],
    [
        14,
        "cmath"
    ],
    [
        15,
        "tomllib"
    ],
    [
        16,
        "sqlite3"
    ],
    [
        17,
        "urllib"
    ],
    [
        18,
        "__main__"
    ],
    [
        19,
        "idlelib"
    ],
    [
        20,
        "keyword"
    ],
    [
        21,
        "wsgiref"
    ],
    [
        22,
        "__future__"
    ],
    [
        23,
        "sys"
    ],
    [
        24,
        "tempfile"
    ],
    [
        25,
        "operator"
    ],
    [
        26,
        "modulefinder"
    ],
    [
        27,
        "bisect"
    ],
    [
        28,
        "sched"
    ],
    [
        29,
        "pickle"
    ],
    [
        30,
        "hashlib"
    ],
    [
        31,
        "lzma"
    ],
    [
        32,
        "filecmp"
    ],
    [
        33,
        "platform"
    ],
    [
        34,
        "getext"
    ],
    [
        35,
        "xml"
    ],
    [
        36,
        "numbers"
    ],
    [
        37,
        "html"
    ],
    [
        38,
        "copy"
    ],
    [
        39,
        "trace"
    ],
    [
        40,
        "timeit"
    ],
    [
        41,
        "gc"
    ],
    [
        42,
        "functools"
    ],
    [
        43,
        "uuid"
    ],
    [
        44,
        "pydoc"
    ],
    [
        45,
        "dis"
    ],
    [
        46,
        "wave"
    ],
    [
        47,
        "collections"
    ],
    [
        48,
        "pprint"
    ],
    [
        49,
        "textwrap"
    ],
    [
        50,
        "typing"
    ]
];

const flat_std_modules = Object.values(std_modules).reduce((acc, m) => {
    for (const k in m) {
        acc.push({ ...m[k], name: k, on_presentation: selected_modules.includes(k) });
    }
    return acc;
}
    , []);

const presented_modules = flat_std_modules.filter(m => m.on_presentation);
const not_presented_modules = flat_std_modules.filter(m => !m.on_presentation);

function generate_modules_table(modules: { name: string; }[], columns: number) {
    return modules.reduce(
        (acc, m, i) => {
            if (i % columns === 0) {
                acc += "| ";
            }
            return acc + `[\`import ${m.name}{:py}\`](${documentation_for(m.name)})` + (i % columns === columns - 1 ? " |\n" : " | ");
        },
        "|   ".repeat(columns) + "|\n" + "| - ".repeat(columns) + "|\n"
    );
}

// console.log(generate_modules_table(presented_modules, 5));

// const selected_letters = {
//     a: [6, 1.8633540372670807, 2],
//     b: [5, 1.5527950310559007, 2],
//     d: [6, 1.8633540372670807, 2],
//     f: [7, 2.1739130434782608, 2],
//     g: [7, 2.1739130434782608, 2],
//     h: [5, 1.5527950310559007, 2],
//     i: [6, 1.8633540372670807, 2],
//     j: [1, 0.3105590062111801, 0],
//     m: [8, 2.484472049689441, 1],
//     o: [2, 0.6211180124223602, 1],
//     p: [16, 4.968944099378882, 5],
//     r: [6, 1.8633540372670807, 1],
//     s: [24, 7.453416149068323, 6],
//     t: [20, 6.211180124223603, 7],
//     u: [4, 1.2422360248447204, 2],
//     w: [5, 1.5527950310559007, 2],
//     z: [5, 1.5527950310559007, 0],
//     _: [4, 1.2422360248447204, 2],
//     c: [16, 4.968944099378882, 4],
//     e: [4, 1.2422360248447204, 2],
//     k: [1, 0.3105590062111801, 1],
//     l: [4, 1.2422360248447204, 1],
//     n: [2, 0.6211180124223602, 1],
//     x: [1, 0.3105590062111801, 1],
//     q: [2, 0.6211180124223602, 0]
// };
// const r = [];
// const l = [...selected_modules].sort((a, b) => Math.random() - 0.5);
// const letters = "lcrpijatadssbctsu_ikw_stombsphlfpgxnhcttgfupdwcptt";
// console.log(letters.length);
// for (let i = 0; i < 50; i++) {
//     const letter = letters[i];
//     for (let j = 0; j < l.length; j++) {
//         if (l[j][0] === letter) {
//             r.push([i+1, l[j]]);
//             l.splice(j, 1);
//             break;
//         }
//     }
// }
// console.log(JSON.stringify(r, null, 2));


// function log_per_interesting_levels(modules: Record<string, Record<string, ModuleMetadata>>) {
//     const modules_by_interesting_level: ({ name: string; } & ModuleMetadata)[] = [];

//     const letter_count = {};
//     let total = 0;
//     let total_modules = 0;
//     for (const letter in modules) {
//         for (const module_name in modules[letter]) {
//             total_modules++;
//             const module = modules[letter][module_name];
//             if (module.deprecated) {
//                 continue;
//             }
//             if (module.pyodide_available) {
//                 modules_by_interesting_level.push({ name: module_name, ...module });
//             }
//             if (!letter_count[module_name[0]]) {
//                 letter_count[module_name[0]] = 0;
//             }
//             letter_count[module_name[0]]++;
//         }
//         total += letter_count[letter];
//     }
//     console.log("Total modules", total_modules);
//     const ratio = {};
//     for (const letter in letter_count) {
//         ratio[letter] = [letter_count[letter], letter_count[letter] / total * 50];
//     }
//     // console.log(ratio);

//     modules_by_interesting_level.sort((a, b) => a.interesting_level - b.interesting_level);
//     const sorted_keys = new Set(modules_by_interesting_level.map(m => m.name[0]));
//     const ordered_ratio = {};
//     for (const letter of sorted_keys) {
//         ordered_ratio[letter] = ratio[letter];
//     }
//     console.log(ordered_ratio);
//     modules_by_interesting_level.splice(42);

//     const letters = modules_by_interesting_level.map(m => m.name[0]).reduce((acc, letter) => {
//         if (!acc[letter]) {
//             acc[letter] = 0;
//         }
//         acc[letter]++;
//         return acc;
//     }
//         , {});
//     const msg_letters = "Namespaces are one honking great idea lets do more of those".toLowerCase().split("").reduce((acc, letter) => {
//         if (!acc[letter]) {
//             acc[letter] = 0;
//         }
//         acc[letter]++;
//         return acc;
//     }
//         , {});
//     for (const letter in msg_letters) {
//         console.log(letter, letters[letter], letter_count[letter], msg_letters[letter]);
//     }

//     // const letter_count = {};
//     // for (const module of modules_by_interesting_level) {
//     //     if (!letter_count[module.]) {
//     //         letter_count[module.interesting_level] = 0;
//     //     }
//     //     letter_count[module.interesting_level]++;
//     // }
//     console.log(letters);
//     let m = "";
//     for (const [k, v] of Object.entries(letters)) {
//         for (let i = 0; i < v; i++) {
//             m += k;
//         }
//     }
//     console.log(m.split("").sort((x, y) => Math.random() - 0.5).join(""));
//     // for (const module of modules_by_interesting_level) {
//     //     console.log(module.interesting_level, module);
//     // }
// }

// log_per_interesting_levels(std_modules);


// console.log(selected_modules.map(m => m[0]).toSorted(_ => Math.random() - 0.5).join(""));
// console.log(selected_modules.length);
// console.log(Object.values(selected_letters).reduce((acc, [_, __, v]) => acc + v, 0));

export { };
