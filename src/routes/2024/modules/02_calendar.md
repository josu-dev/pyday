```python
import calendar
```

---

El modulo calendar permite trabajar con calendarios

---

En que sentido?

---

Literalmente dibujar calendarios, tipo almanaques pero como strings

---

```python
import calendar

calendar.prmonth(2024, calendar.SEPTEMBER)
```

```txt
  septiembre 2024                           
lu ma mi ju vi sá do
                   1
 2  3  4  5  6  7  8
 9 10 11 12 13 14 15
16 17 18 19 20 21 22
23 24 25 26 27 28 29
30
```

---

Que se puede hacer?

---

Y por ejemplo ver cuando es el proximo viernes 13

```python
import calendar

calendar.setfirstweekday(calendar.SUNDAY)

for year in range(2024, 2029):
    for month in range(9, 13):
        if calendar.weekday(year, month, 13) == calendar.FRIDAY:
            print(f"Viernes 13 en {calendar.month_name[month]} de {year}")
```

---

```txt
Viernes 13 en septiembre de 2024
Viernes 13 en diciembre de 2024
Viernes 13 en noviembre de 2026
Viernes 13 en octubre de 2028
```

---

O bueno ver que dia de la semana fueron los PyDay pasados

---

Un poco de google

---

```python
import calendar

past_events = ((2023, 9, 17),(2023, 9, 9), (2024, 9, 14))

for year, month, day in past_events:
    print(f"PyDay {year} fue un {calendar.day_name[calendar.weekday(year, month, day)]}")
```

---

```txt
PyDay 2023 fue un domingo
PyDay 2023 fue un sábado
PyDay 2024 fue un sábado
```

---

Obviamente, podemos usarlo como ejecutable

```shell
python -m calendar -L es_ES -e utf-8 -m 4
```

---

```shell
                                               2024

       enero                    febrero                    marzo                     abril
lu ma mi ju vi sÃ do      lu ma mi ju vi sÃ do      lu ma mi ju vi sÃ do      lu ma mi ju vi sÃ do
 1  2  3  4  5  6  7                1  2  3  4                   1  2  3       1  2  3  4  5  6  7
 8  9 10 11 12 13 14       5  6  7  8  9 10 11       4  5  6  7  8  9 10       8  9 10 11 12 13 14
15 16 17 18 19 20 21      12 13 14 15 16 17 18      11 12 13 14 15 16 17      15 16 17 18 19 20 21
22 23 24 25 26 27 28      19 20 21 22 23 24 25      18 19 20 21 22 23 24      22 23 24 25 26 27 28
29 30 31                  26 27 28 29               25 26 27 28 29 30 31      29 30

        mayo                     junio                     julio                     agosto
lu ma mi ju vi sÃ do      lu ma mi ju vi sÃ do      lu ma mi ju vi sÃ do      lu ma mi ju vi sÃ do
       1  2  3  4  5                      1  2       1  2  3  4  5  6  7                1  2  3  4
 6  7  8  9 10 11 12       3  4  5  6  7  8  9       8  9 10 11 12 13 14       5  6  7  8  9 10 11
13 14 15 16 17 18 19      10 11 12 13 14 15 16      15 16 17 18 19 20 21      12 13 14 15 16 17 18
20 21 22 23 24 25 26      17 18 19 20 21 22 23      22 23 24 25 26 27 28      19 20 21 22 23 24 25
27 28 29 30 31            24 25 26 27 28 29 30      29 30 31                  26 27 28 29 30 31

     septiembre                 octubre                  noviembre                 diciembre
lu ma mi ju vi sÃ do      lu ma mi ju vi sÃ do      lu ma mi ju vi sÃ do      lu ma mi ju vi sÃ do
                   1          1  2  3  4  5  6                   1  2  3                         1
 2  3  4  5  6  7  8       7  8  9 10 11 12 13       4  5  6  7  8  9 10       2  3  4  5  6  7  8
 9 10 11 12 13 14 15      14 15 16 17 18 19 20      11 12 13 14 15 16 17       9 10 11 12 13 14 15
16 17 18 19 20 21 22      21 22 23 24 25 26 27      18 19 20 21 22 23 24      16 17 18 19 20 21 22
23 24 25 26 27 28 29      28 29 30 31               25 26 27 28 29 30         23 24 25 26 27 28 29
30                                                                            30 31
```
