---
id: "software"
title: "Meddalwedd"
description: "Egwyddorion rhaglennu, ieithoedd lefel uchel/isel, cyfieithwyr, SDLC, a chamgymeriadau"
category: "core"
difficulty: "intermediate"
estimatedMinutes: 50
specSection: "1.5"
prerequisites: []
tags: ["rhaglennu", "cyfieithwyr", "sdlc", "ieithoedd-rhaglennu"]
lastUpdated: "2026-04-19"
---

## Egwyddorion Rhaglennu Da

Mae rhaglen dda yn:

| Egwyddor | Disgrifiad |
|----------|-----------|
| **Darllenadwy (Readable)** | Hawdd i raglenydd arall ei ddeall — enwau newidynnau clir, esgyniad cyson |
| **Cynhaliadwy (Maintainable)** | Hawdd newid neu gywiro heb achosi problemau newydd |
| **Ehanogadwy (Extensible)** | Hawdd ychwanegu nodweddion newydd |
| **Modiwlar (Modular)** | Wedi'i rannu'n isrhalenni annibynnol clir |

### Pam Mae Hyn yn Bwysig?
- Mae'r rhan fwyaf o raglenni'n cael eu **cynnal am flynyddoedd** ar ôl eu hysgrifennu
- Yn aml mae rhaglenwr **gwahanol** yn cynnal y cod
- Mae modiwlariaeth yn caniatáu **ailddefnyddio** cod mewn prosiectau eraill

---

## Ieithoedd Lefel Uchel

Mae **ieithoedd lefel uchel** yn debyg i iaith ddynol ac yn annibynnol ar y caledwedd.

**Enghreifftiau:** Python, Java, C#, JavaScript

**Manteision:**
- Hawdd i'w dysgu ac i'w ddarllen
- Annibynnol ar bensaernïaeth (rhedeg ar unrhyw gyfrifiadur gyda chyfieithydd)
- Cynhyrchu cod yn gyflymach

**Anfanteision:**
- Arafach na chod peiriannau yn uniongyrchol (angen cyfieithiad)
- Llai o reolaeth dros caledwedd

---

## Ieithoedd Lefel Isel

### Iaith Cynulliad (Assembly Language)
- Mae **iaith cynulliad** yn defnyddio **mnemonegau** (symbolau byr) sy'n cynrychioli cyfarwyddiadau'r prosesydd
- Mae pob mnemonego'n cyfateb yn uniongyrchol i gyfarwyddyd y caledwedd
- Enghraifft: `MOV AX, 5` (symud y gwerth 5 i gofrestr AX)

**Manteision:** Cyflym iawn, rheolaeth union dros y caledwedd
**Anfanteision:** Anodd i'w ddysgu, penodol i brosesydd

### Cod Peiriant (Machine Code)
- Mae **cod peiriant** yn ddeuaidd yn uniongyrchol
- Dyma'r unig iaith y gall yr UBG ei phrosesu'n uniongyrchol
- Enghraifft: `10110000 01100001`

---

## Cyfieithwyr (Translators)

Mae cyfieithwyr yn trosi rhaglenni iaith uchel i god peiriant.

### Cydosodydd (Assembler)
- Yn trosi **iaith cynulliad → cod peiriant**
- Mae pob llinell o iaith cynulliad yn cynhyrchu un cyfarwyddyd cod peiriant

### Cyfunydd (Compiler)
- Yn trosi **cod ffynhonnell cyfan** (iaith lefel uchel) i god gweithredadwy
- Mae'r cyfan yn digwydd **unwaith cyn rhedeg**
- Y canlyniad yw ffeil weithredadwy annibynnol (e.e. .exe)
- **Camau cyfuno:**

| Cam | Disgrifiad |
|-----|-----------|
| 1. Dadansoddiad Geirfaol (Lexical Analysis) | Yn rhannu cod yn **tocynnau** (enwau, geiriau allweddol, gweithredwyr) |
| 2. Dadansoddiad Cystrawen (Syntax Analysis) | Yn gwirio a yw'r cod yn dilyn rheolau gramadeg yr iaith |
| 3. Dadansoddiad Semantig (Semantic Analysis) | Yn gwirio ystyr y cod (e.e. a yw math data'n gywir) |
| 4. Cynhyrchu Cod (Code Generation) | Yn cynhyrchu cod peiriant cyfatebol |
| 5. Optimeiddio Cod (Code Optimisation) | Yn gwella effeithlonrwydd y cod allbwn |

### Dehonglwr (Interpreter)
- Yn cyfieithu **fesul llinell** ac yn gweithredu'n uniongyrchol
- **Nid yw'n creu ffeil weithredadwy** — rhaid dehongli bob tro
- **Enghraifft:** Python, JavaScript (fel arfer)

| Nodwedd | Cyfunydd | Dehonglwr |
|---------|---------|-----------|
| Pryd mae'n cyfiethu? | Cyn rhedeg | Wrth redeg |
| Cyflymder gweithredu | Cyflym | Arafach |
| Gwall yn cael ei ganfod? | Cyn rhedeg | Yn ystod rhedeg |
| Ffeil weithredadwy? | Ie | Na |

---

## Mathau o Gamgymeriad

| Math | Disgrifiad | Enghraifft |
|------|-----------|-----------|
| **Gwall cystrawen (Syntax error)** | Torri rheolau gramadeg yr iaith | `PRINT "helo` (dyfynodau ar goll) |
| **Gwall rhedeg (Runtime error)** | Yn digwydd wrth redeg y rhaglen | Rhannu â sero, mynediad y tu allan i'r arae |
| **Gwall rhesymeg (Logic error)** | Rhaglen yn rhedeg ond yn rhoi canlyniad anghywir | `cyfanswm ← cyfanswm - eitem` yn lle adio |

---

## Egwyddorion Rheoli Prosiect

Mae datblygu meddalwedd mawr angen **rheolaeth brosiect effeithiol**:
- **Nodau clir** — beth yn union sydd angen ei gyflawni?
- **Cerrig milltir (milestones)** — dyddiadau cwblhau cyfnodau allweddol
- **Dyrannu adnoddau** — pwy sy'n gwneud beth?
- **Rheoli risg** — beth allai fynd o'i le a sut i'w atal?

---

## Cylchred Datblygu Systemau (SDLC)

Mae'r **SDLC** yn disgrifio cyfnodau datblygu system feddalwedd:

### 6 Cyfnod

| Cyfnod | Gweithgaredd |
|--------|-------------|
| **1. Cynllunio** | Diffinio'r broblem, astudiaeth ddichonoldeb |
| **2. Dylunio** | Pensaernïaeth y system, rhyngwyneb defnyddiwr |
| **3. Datblygu** | Ysgrifennu'r cod |
| **4. Profi** | Profi unedau, profi integreiddio, profi defnyddiwr |
| **5. Lleoli** | Gosod y system ar gyfer defnyddwyr |
| **6. Cynnal a Chadw** | Cywiro gwallau, diweddariadau, gwelliannau |

### Modelau SDLC

**Model Rhaeadr (Waterfall):**
- Mae pob cyfnod yn cael ei gwblhau cyn symud i'r nesaf
- **Mantais:** Hawdd ei gynllunio a'i reoli
- **Anfantais:** Anodd newid gofynion ar ôl dechrau

**Model Ystwyth (Agile):**
- Datblygu mewn **cylchoedd byr (sprints)** o 2-4 wythnos
- Mae gofynion yn gallu newid yn barhaus
- **Mantais:** Hyblyg, yn ymateb i anghenion sy'n newid
- **Anfantais:** Anodd amcangyfrif costau a chymryd amser

**Model Troellog (Spiral):**
- Cyfuniad o gynllunio a phrototeipiau ailadroddol
- Canolbwyntio ar **rheoli risg** ym mhob cylchred
- Ddefnyddir ar gyfer systemau mawr, cymhleth

**Model Ailadroddol (Iterative):**
- Datblygu fersiynau cynnar ac yna eu gwella'n raddol
- **Mantais:** Mae defnyddwyr yn gweld y cynnydd cynnar
- **Anfantais:** Gall nod y prosiect fod yn aneglur

