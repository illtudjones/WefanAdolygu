# Gweithrediadau Rhesymegol

## Gatiau rhesymeg

Y pedwar gât rhesymeg sylfaenol yw AND, OR, NOT ac XOR. Mae pob un yn cymryd mewnbynnau deuaidd (0 neu 1) ac yn cynhyrchu allbwn deuaidd.

| Gât  | Symbol  | Ymddygiad |
|------|---------|-----------|
| AND  | A AND B | Allbwn yn 1 dim ond pan fo **pob** mewnbwn yn 1 |
| OR   | A OR B  | Allbwn yn 1 pan fo **o leiaf un** mewnbwn yn 1 |
| NOT  | NOT A   | Allbwn yw **gwrthwyneb** y mewnbwn |
| XOR  | A XOR B | Allbwn yn 1 pan fo'r mewnbynnau yn **wahanol** |

## Gwirlenni

**Gât NOT**

| A | NOT A |
|---|-------|
| 0 | 1     |
| 1 | 0     |

**Gât AND**

| A | B | A AND B |
|---|---|---------|
| 0 | 0 | 0       |
| 0 | 1 | 0       |
| 1 | 0 | 0       |
| 1 | 1 | 1       |

**Gât OR**

| A | B | A OR B |
|---|---|--------|
| 0 | 0 | 0      |
| 0 | 1 | 1      |
| 1 | 0 | 1      |
| 1 | 1 | 1      |

**Gât XOR**

| A | B | A XOR B |
|---|---|---------|
| 0 | 0 | 0       |
| 0 | 1 | 1       |
| 1 | 0 | 1       |
| 1 | 1 | 0       |

## Mynegiadau rhesymeg cyfunol

Gellir cyfuno gweithredyddion rhesymegol i ffurfio mynegiadau mwy cymhleth. Gweithredir pob gât yn ei dro, gan ddefnyddio colofnau canolradd i olrhain canlyniadau.

**Enghraifft:** `(A AND B) OR (NOT C)`

| A | B | C | A AND B | NOT C | (A AND B) OR (NOT C) |
|---|---|---|---------|-------|----------------------|
| 0 | 0 | 0 | 0       | 1     | 1                    |
| 0 | 0 | 1 | 0       | 0     | 0                    |
| 0 | 1 | 0 | 0       | 1     | 1                    |
| 0 | 1 | 1 | 0       | 0     | 0                    |
| 1 | 0 | 0 | 0       | 1     | 1                    |
| 1 | 0 | 1 | 0       | 0     | 0                    |
| 1 | 1 | 0 | 1       | 1     | 1                    |
| 1 | 1 | 1 | 1       | 0     | 1                    |

Mae gan wirlenn gyda *n* mewnbwn **2ⁿ rhes**.

## Algebra Boole

Gellir symleiddio mynegiadau Boole gan ddefnyddio unfathiannau a rheolau i leihau nifer y gatiau neu'r termau sydd eu hangen.

**Unfathiannau allweddol**

| Rheol | Mynegiad |
|-------|----------|
| Unfathiant | A AND 1 = A · A OR 0 = A |
| Nwl | A AND 0 = 0 · A OR 1 = 1 |
| Hunaniaeth | A AND A = A · A OR A = A |
| Cyflenwad | A AND NOT A = 0 · A OR NOT A = 1 |
| Negyddu dwbl | NOT (NOT A) = A |
| De Morgan (1) | NOT (A AND B) = NOT A OR NOT B |
| De Morgan (2) | NOT (A OR B) = NOT A AND NOT B |

Mae symleiddio yn ddefnyddiol mewn dylunio cylchedau digidol — mae llai o gatiau yn golygu llai o gost, llai o bŵer a chylchedau cyflymach.

## Cyd-destun hanesyddol

- Datblygodd George Boole algebra Boole yn y 19eg ganrif fel cangen o fathemateg.
- Dangosodd Claude Shannon yn y 1930au y gallai algebra Boole ddisgrifio cylchedau switshio trydanol.
- Mae'r cysylltiad hwn yn sail i'r holl electroneg ddigidol fodern.
