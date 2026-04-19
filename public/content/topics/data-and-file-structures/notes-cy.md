---
id: "data-and-file-structures"
title: "Strwythurau Data a Ffeiliau a Systemau Awtomataidd"
description: "Cofnodion, araeau, dewis strwythurau priodol, a systemau awtomataidd"
category: "core"
difficulty: "intermediate"
estimatedMinutes: 40
specSection: "1.2.2–1.2.3"
prerequisites: ["data-representation"]
tags: ["araeau", "cofnodion", "strwythurau-data", "systemau-awtomataidd"]
lastUpdated: "2026-04-19"
---

## Strwythurau Data

### Cofnodion (Records)
Mae **cofnod** yn casgliad o feysydd cysylltiedig sy'n cynrychioli un endid.

```
MATH Myfyriwr
  enw: LLINYN
  oedran: CYFANRIF
  sgôr: REAL
DIWEDD MATH
```

- Mae pob maes yn gallu bod o fath data gwahanol
- Defnyddir mewn cronfeydd data i storio gwybodaeth am bynciau
- Enghraifft: cofnod am lyfr (teitl, awdur, ISBN, blwyddyn)

---

## Araeau (Arrays)

### Araeau 1D
Mae **arae 1D** yn casgliad o elfennau o'r un math data wedi'u storio mewn bloc dilynol.

```
# Datgan arae o 5 rhif cyfan
rhifau ← [10, 20, 30, 40, 50]

# Cyrchu elfen (0-seiliedig)
ALLBWN rhifau[0]  # Yn allbynnu 10
ALLBWN rhifau[2]  # Yn allbynnu 30
```

**Enghreifftiau o Ddefnydd:**
- Storio graddau myfyrwyr
- Cadw rhestr o enwau

### Araeau 2D
Mae **arae 2D** fel tabl â rhesi a cholofnau.

```
# Arae 2D 3×3 (tabl amserau bach)
bwrdd ← [[1,2,3], [2,4,6], [3,6,9]]

# Cyrchu elfen [rhes][colofn]
ALLBWN bwrdd[1][2]  # Yn allbynnu 6
```

**Enghreifftiau o Ddefnydd:**
- Cynrychioli grid bwrdd gwyddbwyll
- Cadw data sgriniau (picseli)
- Tabl amserau

### Prosesu Araeau gyda Dolenni

```
# Cyfrifo cyfanswm arae
rhifau ← [4, 7, 2, 9, 1]
cyfanswm ← 0

AR GYFER i ← 0 I 4
  cyfanswm ← cyfanswm + rhifau[i]
NESAF i

ALLBWN cyfanswm  # 23
```

---

## Dewis Strwythur Data Priodol

| Sefyllfa | Strwythur Gorau | Pam |
|----------|----------------|-----|
| Rhestr o rifau cyfatebol o'r un math | Arae 1D | Mynediad uniongyrchol yn ôl indecs |
| Tabl o ddata gyda rhesi a cholofnau | Arae 2D | Trefn naturiol tabl |
| Cofnod ag amlddewis o feysydd | Cofnod/Record | Meysydd o wahanol fathau data |
| Dilyniant o gamau | Arae 1D | Mynediad fesul indecs |

**Ystyriaethau:**
- Pa mor hawdd yw cyrchu'r data?
- A oes angen chwilio neu drefnu'r data?
- A yw'r maint yn hysbys ymlaen llaw?

---

## Systemau Awtomataidd

Mae **system awtomataidd** yn system sy'n monitro'r amgylchedd ac yn gweithredu heb ymyrraeth ddynol barhaus.

### Strwythur System Awtomataidd

```
[Synwyryddion] → [Rheolwr] → [Actiwadyddion]
                    ↑
           [Rhyngwyneb Defnyddiwr (HMI)]
```

### Cydrannau Allweddol

| Cydran | Swyddogaeth | Enghraifft |
|--------|-------------|-----------|
| **Synwyrydd (Sensor)** | Yn casglu data o'r amgylchedd | Thermomedr, camera, mesurydd golau |
| **Actiwadydd (Actuator)** | Yn gweithredu fel ymateb | Motor, rheiddiadur, larwm |
| **Rheolwr (Controller)** | Yn prosesu data a gwneud penderfyniadau | Microreolwr, cyfrifiadur |
| **Rhyngwyneb Defnyddiwr (HMI)** | Yn caniatáu i bobl fonitro/rheoli'r system | Panel rheoli, sgrin gyffwrdd |

### Swyddogaethau System Awtomataidd

1. **Caffael data (Data acquisition)** — Yn casglu data gan synwyryddion
2. **Prosesu** — Dadansoddi a gwneud penderfyniadau
3. **Rheoli** — Anfon signal i actiwadyddion
4. **Adborth (Feedback)** — Monitro effaith y weithred a chywiro

**Enghraifft — System Wresogi Awtomataidd:**
1. Mae synwyrydd tymheredd yn mesur tymheredd yr ystafell
2. Os yw'n rhy oer, mae'r rheolwr yn troi'r gwresogydd ymlaen
3. Pan fo'r tymheredd yn cyrraedd y pwynt gosod, mae'r gwresogydd yn diffodd
4. Mae'r system yn monitro'n barhaus ac yn addasu

---

## Systemau Awtomataidd ac AI

Mae **deallusrwydd artiffisial (AI)** yn galluogi systemau i wneud penderfyniadau cymhleth.

### Cymwysiadau AI
- **Ceir hunan-yrru** — yn prosesu data camera, lidar, a GPS
- **Adnabod wynebau** — mewn ffonau a chamerâu diogelwch
- **Argymhellion** — Netflix, Amazon yn rhagfynegi beth rydych chi eisiau

### Ystyriaethau Moesegol ac Ariannol AI

| Mater | Trafodaeth |
|-------|-----------|
| **Swyddi** | A fydd AI yn cymryd swyddi dynol? Gall AI gynyddu effeithlonrwydd ond gallai hefyd olygu llai o weithwyr |
| **Rhagfarn (Bias)** | Os yw'r data hyfforddi yn rhagfarnllyd, gall AI wneud penderfyniadau rhagfarnllyd |
| **Preifatrwydd** | Mae AI yn aml yn casglu llawer o ddata personol |
| **Atebolrwydd** | Os yw AI yn gwneud penderfyniad anghywir, pwy sy'n gyfrifol? |
| **Tryloywder** | Nid yw penderfyniadau AI bob amser yn eglur ("blwch du") |

### Deddfwriaeth Berthnasol
- **Deddf Diogelu Data** — yn rheoleiddio casglu a phrosesu data personol mewn systemau AI
- **Hawlfraint** — mae AI yn creu cynnwys newydd, ond pwy sy'n berchen arno?

