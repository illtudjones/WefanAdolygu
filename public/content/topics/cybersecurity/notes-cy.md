## Bygythiadau Seiberddiogelwch

### Maleiswedd (Malware)

Mae **maleiswedd** (meddalwedd faleisus) yn unrhyw feddalwedd a gynlluniwyd i niweidio system.

| Math | Sut Mae'n Gweithio |
|------|--------------------|
| **Firws** | Yn atodi'i hun i ffeiliau cyfreithlon; yn ymledu pan fo'r ffeil yn cael ei rhannu |
| **Troiadd** | Yn ymddangos yn ddiogel ond yn cynnwys cod maleisus cudd |
| **Mwydyn (Worm)** | Yn ymledu drwy rwydweithiau'n awtomatig heb fod angen ffeil westeiwr |
| **Ysbïwedd (Spyware)** | Yn casglu gwybodaeth yn dawel heb ganiatâd y defnyddiwr |
| **Meddalwedd pridwerth (Ransomware)** | Yn amgryptio ffeiliau defnyddiwr a gofyn am daliad |

### Peirianneg Gymdeithasol (Social Engineering)

Mae **peirianneg gymdeithasol** yn trin pobl i ddatgelu gwybodaeth sensitif.

| Dull | Disgrifiad |
|------|-----------|
| **Genweira (Phishing)** | E-bost neu neges ffug sy'n esgus bod o ffynhonnell ddibynadwy |
| **Rhithio (Pretexting)** | Creu senario ffug i ennill ymddiriedaeth (e.e. esgus bod yn IT) |
| **Abwyd (Baiting)** | Gadael dyfais heintiedig (e.e. gyriant USB) er mwyn i rywun ei defnyddio |
| **Gwasanaeth am wasanaeth (Quid Pro Quo)** | Cynnig cymorth technegol yn gyfnewid am wybodaeth |
| **Dynwarediad (Impersonation)** | Esgus bod yn rhywun arall, e.e. swyddog yr heddlu |

---

## Mathau o Ymosodiad

### Ymosodiad Grym Brutaidd (Brute Force Attack)
- Mae'r ymosodwr yn ceisio **pob cyfuniad posibl** o blaengyfrinair
- Yn effeithiol yn erbyn cyfrineiriau byrrion/gwan
- **Amddiffyniad:** cyfrineiriau hir cymhleth, cyfyngiad ar nifer y cynigion

### Ymosodiad DDoS (Distributed Denial of Service)
- Mae ymosodwyr yn llethu gweinydd â **miloedd o geisiadau ar yr un pryd**
- Y nod yw gwneud gwasanaeth yn anavailable
- **Amddiffyniad:** hidlwyr traffig, gwasanaethau gwrth-DDoS

### Ymosodiad Dyn-yn-y-Canol (Man in the Middle / MitM)
- Mae'r ymosodwr yn **rhyng-gipio** cyfathrebu rhwng dau barti
- **Snwffio pecynnau (Packet sniffing):** darllen data rhwydwaith heb awdurdod
- **Amddiffyniad:** amgryptio (HTTPS), VPN

### Mathau Eraill
- **Cipio allweddell (Keylogging):** cofnodi pob allwedd sy'n cael ei phwyso
- **Herwgipio sesiwn (Session hijacking):** dwyn token sesiwn dilys
- **Ffugio IP (IP spoofing):** ffugio cyfeiriad IP y ffynhonnell
- **Chwistrellu SQL (SQL injection):** mewnosod cod SQL maleisus i fewnbynnau

---

## Mesurau Amddiffynnol

### Amgryptio (Encryption)
- Mae **amgryptio** yn newid data i ffurf annealladwy heb yr allwedd gywir
- **Amgryptio cymesur:** yr un allwedd ar gyfer amgryptio a dadgryptio
- **Amgryptio asymesur:** allwedd gyhoeddus i amgryptio, allwedd breifat i ddadgryptio
- Mae **HTTPS** yn defnyddio TLS/SSL i amgryptio data sy'n cael ei drosglwyddo

### Waliau Tân (Firewalls)
- Mae **wal dân** yn monitro ac yn hidlo traffig rhwydwaith
- Gall flocio mynediad anawdurdodedig
- **Wal dân galedwedd:** dyfais ar wahân yn y rhwydwaith
- **Wal dân meddalwedd:** yn rhedeg ar y cyfrifiadur

### Gwrth-Faleiswedd (Anti-malware)
- Yn sgano ffeiliau am batrymau maleiswedd adnabyddus
- Yn defnyddio **llofnodion firws** i adnabod bygythiadau
- Rhaid ei ddiweddaru'n rheolaidd

### Lefelau Mynediad Defnyddwyr
- Dylai defnyddwyr gael mynediad i ddata a swyddogaethau **angenrheidiol yn unig**
- Egwyddor y **fraint leiaf** — dim ond yr hawliau sydd eu hangen
- **Cyfrif gweinyddwr** â mwy o hawliau; **cyfrifon cyffredin** ar gyfer gwaith bob dydd

### Dilysu Aml-Ffactor (MFA)
- Mae **MFA** yn gofyn am fwy nag un math o brawf adnabod
- **Rhywbeth rydych chi'n ei wybod:** cyfrinair, PIN
- **Rhywbeth sydd gennych chi:** ffôn, cerdyn
- **Rhywbeth ydych chi:** biometreg (olion bysedd, wyneb)

### Cyfrineiriau Cryf
- O leiaf 12 nod
- Cymysgedd o lythrennau mawr/bach, rhifau, a symbolau
- Dylid defnyddio cyfrinair gwahanol ar gyfer pob gwasanaeth
- Defnyddio **rheolwr cyfrineiriau**

### Copïau Wrth Gefn (Backups)
- Yn amddiffyn rhag colli data oherwydd maleiswedd, methiant caledwedd, neu ddamwain
- Dylid eu storio mewn lleoliad gwahanol (neu yn y cwmwl)
- **Rheol 3-2-1:** 3 chopi, ar 2 gyfrwng gwahanol, 1 mewn lleoliad arall

### Profion Treiddio (Penetration Testing)
- Mae **profwyr treiddio** (pentesters) yn ymosod ar systemau gyda chaniatâd
- Nod: canfod gwendidau cyn ymosodwyr gwirioneddol
- Yn helpu sefydliadau i ddeall eu risg seiberddiogelwch

### Fforenseg Rhwydwaith (Network Forensics)
- Yn dadansoddi traffig rhwydwaith ar ôl digwyddiad
- Yn helpu deall sut y digwyddodd ymosodiad
- Yn casglu tystiolaeth ar gyfer achos cyfreithiol os oes angen

---

## Diogelu Data Personol

### Cyfrinachedd, Uniondeb, Argaeledd (CIA Triad)
- **Cyfrinachedd:** Dim ond pobl awdurdodedig all weld y data
- **Uniondeb:** Mae'r data'n gywir ac heb ei newid
- **Argaeledd:** Mae'r data ar gael pan fo ei angen

### Deddfwriaeth Berthnasol
- **Deddf Diogelu Data** — yn rheoleiddio sut y cedwir data personol
- **Deddf Camddefnyddio Cyfrifiaduron** — yn gwneud mynediad anawdurdodedig yn drosedd

