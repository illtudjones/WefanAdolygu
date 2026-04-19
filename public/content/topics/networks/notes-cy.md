---
id: "networks"
title: "Rhwydweithiau a Seilwaith"
description: "Topologïau rhwydwaith, caledwedd, protocolau, a newid pecynnau"
category: "core"
difficulty: "intermediate"
estimatedMinutes: 50
specSection: "1.3.1"
prerequisites: []
tags: ["rhwydweithiau", "protocolau", "topologi", "tcp-ip"]
lastUpdated: "2026-04-19"
---

## Mathau o Rwydwaith

### Rhwydwaith Ardal Leol (LAN)
- Mae **LAN** (Local Area Network) yn cwmpasu ardal ddaearyddol fach
- Enghraifft: rhwydwaith ysgol, swyddfa
- Fel arfer yn eiddo i un sefydliad ac yn cael ei reoli ganddynt

### Rhwydwaith Ardal Eang (WAN)
- Mae **WAN** (Wide Area Network) yn cwmpasu ardal fawr
- Enghraifft: y Rhyngrwyd, rhwydwaith banc cenedlaethol
- Yn cysylltu nifer o LANs gyda'i gilydd dros bellter mawr
- Fel arfer yn defnyddio seilwaith cyfathrebu cyffredinol (e.e. llinellau ffôn)

---

## Topologïau Rhwydwaith

### Topologi Bws
```
[Cyfrifiadur A] --- [Cyfrifiadur B] --- [Cyfrifiadur C]
                  (Prif Gebl)
```
- Mae pob dyfais yn gysylltiedig ag un prif gebl
- **Mantais:** Rhad i'w osod, defnyddio llai o gebl
- **Anfantais:** Os yw'r prif gebl yn methu, mae'r rhwydwaith cyfan yn methu; mae traffig yn arafu gyda mwy o ddefnyddwyr

### Topologi Seren
```
       [A]
        |
[B] -- [CANOLBWYNT] -- [C]
        |
       [D]
```
- Mae pob dyfais yn gysylltiedig â chanolbwynt neu switsh canolog
- **Mantais:** Os yw un cysylltiad yn methu, mae gweddill y rhwydwaith yn parhau; hawdd ychwanegu dyfeisiau
- **Anfantais:** Os yw'r switsh canolog yn methu, mae'r rhwydwaith cyfan yn methu; mae angen mwy o gebl

### Topologi Cylch
- Mae dyfeisiau'n gysylltiedig mewn dolen gylch
- **Mantais:** Mae data'n teithio mewn un cyfeiriad — llai o wrthdrawiadau
- **Anfantais:** Os yw un dyfais yn methu, gall amharu ar y rhwydwaith cyfan

### Topologi Rhwyll
- Mae pob dyfais wedi'i gysylltu â nifer neu bob dyfais arall
- **Mantais:** Dibynadwy iawn — mae sawl llwybr ar gyfer data
- **Anfantais:** Drud iawn i'w osod a'i gynnal

---

## Caledwedd Rhwydwaith

| Dyfais | Swyddogaeth |
|--------|-------------|
| Llwybrenydd (Router) | Yn anfon pecynnau data rhwng rhwydweithiau gwahanol; yn dod o hyd i'r llwybr gorau |
| Switsh (Switch) | Yn cyfeirio data i ddyfais benodol ar y rhwydwaith yn seiliedig ar gyfeiriad MAC |
| Canolbwynt (Hub) | Yn anfon data i bob dyfais ar y rhwydwaith (llai effeithlon na switsh) |
| Pont (Bridge) | Yn cysylltu dau segment o'r un rhwydwaith |
| Porth (Gateway) | Yn cysylltu rhwydweithiau gwahanol â phrotocolau gwahanol |
| Pwynt Mynediad Diwifr (WAP) | Yn galluogi dyfeisiau i gysylltu â rhwydwaith drwy Wi-Fi |
| Cerdyn Rhwydwaith (NIC) | Yn galluogi dyfais i gysylltu â rhwydwaith |

---

## Protocolau Rhwydwaith

Mae **protocol** yn set o reolau ar gyfer cyfathrebu rhwng dyfeisiau.

### Protocolau Allweddol

| Protocol | Enw Llawn | Defnydd |
|---------|----------|--------|
| TCP | Transmission Control Protocol | Yn sicrhau bod data'n cyrraedd yn gywir ac mewn trefn |
| IP | Internet Protocol | Yn cyfeirio pecynnau rhwng rhwydweithiau |
| HTTP | HyperText Transfer Protocol | Yn trosglwyddo tudalennau gwe |
| HTTPS | HTTP Secure | HTTP â amgryptio (TLS/SSL) |
| FTP | File Transfer Protocol | Yn trosglwyddo ffeiliau rhwng cyfrifiaduron |
| SMTP | Simple Mail Transfer Protocol | Yn anfon e-bost |
| POP3 | Post Office Protocol 3 | Yn lawrlwytho e-bost i'r ddyfais leol |
| IMAP | Internet Message Access Protocol | Yn cyrchu e-bost ar y gweinydd |
| DNS | Domain Name System | Yn trosi enwau parth (e.e. google.com) i gyfeiriadau IP |
| BGP | Border Gateway Protocol | Yn cyfeirio traffig rhwng rhwydweithiau mawrion ar y Rhyngrwyd |

---

## Newid Pecynnau (Packet Switching)

Pan anfonir data dros rwydwaith, mae'n cael ei rannu'n **becynnau** bach.

### Strwythur Pecyn

| Rhan | Cynnwys |
|------|--------|
| Pennawd (Header) | Cyfeiriad IP y ffynhonnell, cyfeiriad IP y cyrchfan, rhif pecyn, cyfanswm pecynnau |
| Data (Payload) | Darn o'r wybodaeth wreiddiol |
| Cynffon (Trailer) | Gwybodaeth gwirio camgymeriad (CRC) |

### Sut Mae'n Gweithio
1. Mae'r data'n cael ei rannu'n becynnau
2. Gall pob pecyn deithio ar hyd llwybr gwahanol drwy'r rhwydwaith
3. Mae llwybrennwyr yn cyfeirio pob pecyn i'w gyrchfan
4. Mae'r pecynnau'n cael eu hailgyfuno yn y gyrchfan
5. Os yw pecyn ar goll neu wedi'i niweidio, gofynnir am ei ailanfon

### Manteision Newid Pecynnau
- Mae llwybr amgen ar gael os yw un llwybr yn methu
- Mae lleiniau cyfathrebu'n cael eu rhannu'n effeithlon
- Gall rhwydwaith symud ymlaen er gwaethaf tagfeydd

---

## Cyfrifo Cost Llwybr

Defnyddir **cost** i benderfynu ar y llwybr gorau rhwng nod a'i gilydd. Y gost isaf yw'r gorau.

**Enghraifft:**
```
A --3-- B --2-- D
|       |
4       5
|       |
C --1-- E
```

Cyfrifo llwybr o A i D:
- A → B → D: 3 + 2 = 5
- A → C → E → B → D: 4 + 1 + 5 + 2 = 12
- Llwybr gorau: A → B → D (cost = 5)

---

## Cyfeiriadaeth IP

- Mae **cyfeiriad IP** yn adnabod dyfais ar rwydwaith
- Mae **IPv4** yn defnyddio 4 octet (e.e. `192.168.1.1`)
- Mae **IPv6** yn defnyddio 8 grŵp o rifau hex (mwy o gyfeiriadau)
- Mae **DNS** yn trosi enwau parth i gyfeiriadau IP

