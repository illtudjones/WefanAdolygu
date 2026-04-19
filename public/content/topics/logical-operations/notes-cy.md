---
id: "logical-operations"
title: "Gweithrediadau Rhesymegol"
description: "Gatiau rhesymeg AND, NEU, NID, NEUA, tablau gwirionedd, a chylchedau digidol"
category: "core"
difficulty: "beginner"
estimatedMinutes: 35
specSection: "1.6"
prerequisites: ["data-representation"]
tags: ["rhesymeg", "gatiau", "tablau-gwirionedd", "booolean"]
lastUpdated: "2026-04-19"
---

## Algebra Boole

Datblygwyd **Algebra Boole** gan George Boole yn y 19eg ganrif. Dim ond dau werth sydd: **GWIR (1)** neu **ANGHYWIR (0)**.

Mae gweithrediadau Boole yn sylfaen i gylchedau digidol — mae cofrifiaduron yn defnyddio'r un egwyddorion hyn i brosesu data.

---

## Y Pedwar Gweithrediad Sylfaenol

### AND (AC)
Mae **AC** yn allbynnu GWIR dim ond os yw **y ddau fewnbwn** yn GWIR.

| A | B | A AC B |
|---|---|--------|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | **1** |

**Mynegiant:** `A AC B` neu `A AND B` neu `A · B`

**Enghraifft:** Mae drws yn agor dim ond os yw sain GWIR AC yw olau GWIR.

---

### NEU (OR)
Mae **NEU** yn allbynnu GWIR os yw **o leiaf un mewnbwn** yn GWIR.

| A | B | A NEU B |
|---|---|---------|
| 0 | 0 | 0 |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | **1** |

**Mynegiant:** `A NEU B` neu `A OR B` neu `A + B`

**Enghraifft:** Mae larwm yn canu os yw synwyrydd A NEU synwyrydd B wedi'i danio.

---

### NID (NOT)
Mae **NID** yn gwrthdroi'r mewnbwn — mae 0 yn mynd yn 1 a 1 yn mynd yn 0.

| A | NID A |
|---|-------|
| 0 | **1** |
| 1 | **0** |

**Mynegiant:** `NID A` neu `NOT A` neu `Ā` (bar dros A)

**Enghraifft:** Mae golau'n goleuo os NID yw'r switsh ymlaen.

---

### NEUA (XOR — Exclusive OR)
Mae **NEUA** yn allbynnu GWIR dim ond os yw **union un mewnbwn** yn GWIR (nid y ddau).

| A | B | A NEUA B |
|---|---|----------|
| 0 | 0 | 0 |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | 0 |

**Mynegiant:** `A NEUA B` neu `A XOR B` neu `A ⊕ B`

**Enghraifft:** Mae switsh dwy-ffordd — mae'r golau ymlaen os yw un switsh neu'r llall ymlaen, ond NID y ddau.

---

## Cyfuno Gweithrediadau

Gellir cyfuno gweithrediadau i greu mynegiant cymhleth.

**Enghraifft 1:** `(A AC B) NEU NID C`

| A | B | C | A AC B | NID C | Canlyniad |
|---|---|---|--------|-------|-----------|
| 0 | 0 | 0 | 0 | 1 | **1** |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 1 | **1** |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | **1** |
| 1 | 0 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | **1** |
| 1 | 1 | 1 | 1 | 0 | **1** |

---

## Gatiau Rhesymeg a Chylchedau Digidol

Mae pob gweithrediad Boole yn cyfateb i **gât rhesymeg** mewn cylched electronig.

| Gât | Symbol | Gweithrediad |
|-----|--------|-------------|
| Gât AC | D-siâp gyda dau fewnbwn | AND |
| Gât NEU | Cromlin gyda dau fewnbwn | OR |
| Gât NID | Triongl gyda chylch bach | NOT |
| Gât NEUA | Cromlin gyda chroes fach | XOR |

### Pam Mae Hyn yn Bwysig?
Mae cyfrifiaduron wedi'u hadeiladu o **biliynau o gatiau rhesymeg** — mae pob cyfrifiad sy'n bosibl yn y pen draw yn dibynnu ar y gweithrediadau syml hyn.

Mae celloedd cof (flipfflops) hefyd wedi'u hadeiladu o gatiau rhesymeg.

---

## Cyd-destun Hanesyddol

- **George Boole (1847):** Cyhoeddodd "The Mathematical Analysis of Logic" — yn sefydlu algebra Boole
- **Claude Shannon (1937):** Dangos y gellir defnyddio algebra Boole i gynrychioli cylchedau trydan
- **Cyfrifiaduron modern:** Wedi'u hadeiladu ar y sylfeini hyn — mae miliynau o gatiau rhesymeg ar un sglodyn

