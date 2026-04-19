---
id: "operating-systems"
title: "Systemau Gweithredu"
description: "Pwrpas a swyddogaethau systemau gweithredu a meddalwedd cyfleustod"
category: "core"
difficulty: "beginner"
estimatedMinutes: 30
specSection: "1.7"
prerequisites: ["computer-architecture"]
tags: ["system-weithredu", "rheoli-cof", "cyfleustod"]
lastUpdated: "2026-04-19"
---

## Beth yw System Weithredu?

Mae **system weithredu (OS)** yn feddalwedd sy'n rheoli'r caledwedd ac yn darparu rhyngwyneb rhwng y defnyddiwr a'r cyfrifiadur.

**Enghreifftiau:** Windows, macOS, Linux, Android, iOS

Heb system weithredu, byddai'n rhaid i raglenwyr ysgrifennu cod i ryngweithio'n uniongyrchol â phob darn o galedwedd — mae hyn yn amhosibl yn ymarferol.

---

## Swyddogaethau'r System Weithredu

### 1. Rheoli'r UBG (CPU Management)
- Mae'r OS yn dyrannu amser UBG i wahanol brosesau
- Mae **amserlennu tasgau** yn penderfynu pa raglen sy'n cael defnyddio'r UBG nesaf

### 2. Aml-dasgedd (Multitasking)
- Mae'r OS yn caniatáu i nifer o raglenni redeg yr un pryd
- Mae'r UBG yn symud rhwng tasgau yn gyflym iawn — mae'n ymddangos eu bod yn rhedeg gyda'i gilydd

### 3. Trin Toriadau (Interrupt Handling)
- Mae **toriad** yn signal sy'n stopio'r UBG rhag gwneud ei waith cyfredol dros dro
- Mae toriadau yn digwydd pan fo digwyddiad pwysig (e.e. cliciad llygoden, data rhwydwaith yn cyrraedd, oriawr yn taro)
- Mae'r OS yn prosesu'r toriad ac yna'n dychwelyd i'r dasg wreiddiol

### 4. Rheoli Cof (Memory Management)
- Mae'r OS yn neilltuo darnau o RAM i raglenni wahanol
- Mae'n sicrhau nad yw rhaglenni'n cael mynediad i gof ei gilydd
- Pan fo RAM yn llawn, gall ddefnyddio **cof rhithwir** (rhan o'r ddisg)

### 5. Rheoli Storfa Wrth Gefn (Backing Store Management)
- Mae'r OS yn rheoli'r **system ffeiliau** — ffolder, ffeiliau, a theithiau
- Mae'n gwneud mynediad i ddisgiau a storfa yn dryloyw i raglenni

### 6. Rheoli Dyfeisiau Cyffelyb (Peripheral Management)
- Mae **gyrwyr (drivers)** yn caniatáu i'r OS gyfathrebu â dyfeisiau (argraffwyr, cerdyn sain, ac ati)
- Mae'r OS yn rheoli mynediad i ddisgiau, argraffwyr, ac ati

### 7. Rhyngwyneb Defnyddiwr (User Interface)
- Mae'r OS yn darparu **GUI (Graphical User Interface)** neu **CLI (Command Line Interface)**
- Mae GUI yn defnyddio eiconau, ffenestri, a llygoden
- Mae CLI yn defnyddio testun a llinell orchymyn

### 8. Diogelwch (Security)
- Mae'r OS yn rheoli cyfrifon defnyddwyr a chyfrineiriau
- Mae'n neilltuo lefelau mynediad gwahanol i wahanol ddefnyddwyr
- Mae'n atal mynediad anawdurdodedig i ffeiliau'r system

---

## Crynodeb Swyddogaethau'r OS

| Swyddogaeth | Manylion |
|-------------|----------|
| Rheoli UBG | Amserlennu tasgau, aml-dasgedd |
| Trin toriadau | Ymateb i ddigwyddiadau caledwedd |
| Rheoli cof | Dyrannu RAM, cof rhithwir |
| Rheoli storfa | System ffeiliau, mynediad i ddisg |
| Rheoli dyfeisiau | Gyrwyr, cyfathrebu â chyffelyb |
| Rhyngwyneb | GUI, CLI |
| Diogelwch | Cyfrifon, cyfrineiriau, hawliau mynediad |

---

## Meddalwedd Cyfleustod (Utility Software)

Mae **meddalwedd cyfleustod** yn rhaglenni sy'n cynorthwyo a chynnal y system gyfrifiadurol.

| Cyfleustod | Swyddogaeth |
|-----------|-------------|
| **Gwrth-firws / Gwrth-faleiswedd** | Canfod a dileu bygythiadau |
| **Dadgrynhoad (Defragmentation)** | Yn trefnu'r ffeiliau ar ddisg magnetig yn effeithlon |
| **Glanhau ddisg (Disk cleanup)** | Dileu ffeiliau dros dro a sbwriel |
| **Rheoli archifau (Archiving)** | Cywasgu a storio hen ffeiliau |
| **Gweinyddu copïau wrth gefn** | Yn creu copïau wrth gefn yn awtomatig |
| **Monitro system** | Yn dangos defnydd UBG, RAM, a deusg |
| **Amgryptiad** | Yn amgryptio ffeiliau neu'r ddisg gyfan |

---

## Mathau o Systemau Gweithredu

| Math | Disgrifiad | Enghraifft |
|------|-----------|-----------|
| Amser Real | Yn ymateb yn gyflym iawn i ddigwyddiadau — ar gyfer roboteg, systemau meddygol | VxWorks, FreeRTOS |
| Cyffredinol | Ar gyfer cyfrifiaduron personol a gweithfannau | Windows, macOS, Linux |
| Symudol | Wedi'i optimeiddio ar gyfer batri a chyffyrddiad | Android, iOS |
| Gweinydd | Ar gyfer gweinyddwyr sy'n gwasanaethu nifer o ddefnyddwyr | Windows Server, Ubuntu Server |
| Amlddefnyddiwr | Yn caniatáu i nifer o ddefnyddwyr gysylltu ar yr un pryd | Linux, UNIX |

