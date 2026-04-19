---
id: "systems-development-lifecycle"
title: "Cylchred Datblygu Systemau"
description: "Cyfnodau SDLC, modelau datblygu, ac ystyriaethau proffesiynol ac etegol"
category: "core"
difficulty: "intermediate"
estimatedMinutes: 40
specSection: "1.8"
prerequisites: []
tags: ["sdlc", "agile", "rhaeadr", "ystyriaethau-etegol"]
lastUpdated: "2026-04-19"
---

## Cylchred Datblygu Systemau (SDLC)

Mae'r **SDLC** yn fframwaith strwythuredig ar gyfer cynllunio, creu, profi, a darparu systemau gwybodaeth.

---

## Cyfnodau'r SDLC

### 1. Cwmpasu ac Astudiaeth Ddichonoldeb
- **Beth:** Diffinio'r broblem a phenderfynu a yw'r prosiect yn werth ei wneud
- **Allbwn:** Adroddiad dichonoldeb — technegol, ariannol, a chyfreithiol
- **Cwestiynau allweddol:** A yw'n bosibl? A yw'n fforddiadwy? A yw'n gyfreithlon?

### 2. Dadansoddiad Gofynion
- **Beth:** Casglu a diffinio'r hyn y mae'r system angen ei wneud yn fanwl
- **Technegau:** Cyfweliadau, holiaduron, arsylwi
- **Mathau o ofynion:**
  - **Swyddogaethol** — Beth mae'r system yn ei wneud (e.e. "mae'r system yn caniatáu i ddefnyddwyr fewngofnodi")
  - **Answyddogaethol** — Sut mae'n gweithio (e.e. "rhaid iddo ymateb o fewn 2 eiliad")

### 3. Dylunio
- **Beth:** Cynllunio strwythur y system — pensaernïaeth, cronfa ddata, rhyngwyneb
- **Allbwn:** Diagramau dylunio system, cynllun rhyngwyneb defnyddiwr, cynllun cronfa ddata
- **Ystyriaethau:** Sgaliadwy, diogel, hawdd ei gynnal

### 4. Gweithredu (Datblygu)
- **Beth:** Ysgrifennu'r cod ar sail y dyluniad
- Mae rhaglenni'n cael eu hysgrifennu, eu profi'n unigol, a'u cyfuno

### 5. Profi
- Mae profion yn gwirio bod y system yn gweithio fel y bwriadwyd
- **Mathau o brofion:**

| Math | Disgrifiad |
|------|-----------|
| **Prawf uned** | Profi pob darn bach o god ar wahân |
| **Prawf integreiddio** | Profi sut mae modiwlau'n gweithio gyda'i gilydd |
| **Prawf defnyddiwr (UAT)** | Defnyddwyr go iawn yn profi'r system yn erbyn y gofynion |
| **Prawf perfformiad** | Profi dan lwyth — a yw'n ymateb yn gyflym? |
| **Prawf diogelwch** | Gwirio am wendidau seiberddiogelwch |

### 6. Lleoli (Deployment)
- **Beth:** Gosod y system i'r defnyddwyr
- **Strategaethau:** Lansio uniongyrchol; rhedeg y hen a'r newydd yn gyfochrog; treialu peilot

### 7. Cynnal a Chadw (Maintenance)
- **Beth:** Cywiro gwallau, gwella nodweddion, addasu i ofynion newydd
- Mae'r rhan fwyaf o gost meddalwedd yn dod o'r cyfnod hwn

---

## Modelau SDLC

### Model Rhaeadr (Waterfall)
```
Cynllunio → Dadansoddiad → Dylunio → Datblygu → Profi → Lleoli
```
- Llinol a sequentiol — pob cyfnod yn gyflawn cyn y nesaf
- **Pryd i ddefnyddio:** Gofynion clir a sefydlog, prosiectau mawr ac ffurfiol

| Manteision | Anfanteision |
|-----------|-------------|
| Hawdd ei gynllunio ac amcangyfrif costau | Anodd newid gofynion |
| Dogfennaeth dda | Defnyddwyr ddim yn gweld y cynnyrch tan y diwedd |
| Addas ar gyfer contractau ffurfiol | Gall risg barhau heb ei ganfod yn hir |

### Model Ystwyth (Agile)
- Datblygu mewn **sprints** byr (2-4 wythnos)
- Mae'r defnyddiwr yn cymryd rhan drwy'r amser
- **Pryd i ddefnyddio:** Gofynion anghyflawn neu'n newid; prosiectau sy'n gofyn am hyblygrwydd

| Manteision | Anfanteision |
|-----------|-------------|
| Hyblyg — gellir addasu wrth fynd | Anodd amcangyfrif cost terfynol |
| Cynnyrch gweithredol yn gynnar | Angen cyfranogiad parhaus y defnyddiwr |
| Risg yn cael ei adnabod yn gyflym | Gall fod yn anodd ei reoli mewn timau mawr |

### Model Ailadroddol (Iterative)
- Datblygu fersiynau cynnar ac yna eu gwella yn olynol
- Mae pob iteriad yn ychwanegu mwy o nodweddion
- **Mantais:** Mae defnyddwyr yn gweld cynnyrch gweithredol yn gynnar

### Model Troellog (Spiral)
- Cyfuniad o Rhaeadr ac Ailadroddol
- Mae **rheoli risg** yn ganolog i bob cylchred
- **Pryd i ddefnyddio:** Prosiectau mawr, cymhleth, risg uchel

---

## Ystyriaethau Proffesiynol, Cyfreithiol ac Etegol

### Eiddo Deallusol (Intellectual Property)
- Mae **hawlfraint (copyright)** yn amddiffyn cod gwreiddiol yn awtomatig
- Mae **patent** yn diogelu dyfeisiau ac arloesedd technegol
- Mae **nod masnach (trademark)** yn diogelu enw a logo brand

### Safonau Proffesiynol
- Dylai datblygwyr proffesiynol ddilyn codau ymddygiad (e.e. BCS — Cymdeithas Cyfrifiadureg Prydain)
- Cyfrifoldeb dros ansawdd a dibynadwyedd y cod

### Ystyriaethau Etegol
| Mater | Trafodaeth |
|-------|-----------|
| **Preifatrwydd data** | Mae systemau'n casglu llawer o ddata personol — sut y mae'n cael ei ddefnyddio a'i ddiogelu? |
| **Mynediadedd** | A yw'r system yn hygyrch i bobl anabl? |
| **Effaith amgylcheddol** | Mae canolfannau data yn defnyddio llawer o drydan |
| **Swyddi** | A yw awtomeiddio'n cymryd swyddi? |
| **Tegwch algorithm** | A yw systemau AI yn rhagfarnllyd? |

### Deddfwriaeth Berthnasol
- **Deddf Diogelu Data 2018 (GDPR)** — yn rheoleiddio casglu a phrosesu data personol
- **Deddf Hawlfraint** — yn diogelu gwaith creadigol, gan gynnwys cod meddalwedd
- **Deddf Camddefnyddio Cyfrifiaduron 1990** — yn gwneud mynediad anawdurdodedig yn drosedd

