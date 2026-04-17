# Cybersecurity

## Why Cybersecurity Matters

Every connected system faces threats from attackers who want to steal data, cause disruption, or gain financial gain. Understanding these threats — and the measures to counter them — is essential for anyone working with technology.

---

## Threats: Malware

**Malware** (malicious software) is any software designed to damage, disrupt, or gain unauthorised access to a computer system.

| Type | How it works | Key feature |
|---|---|---|
| **Virus** | Attaches itself to a legitimate program; spreads when that program is run | Requires a host file; spreads via user action |
| **Worm** | Self-replicating; spreads across networks without user interaction | No host file needed; fast-spreading |
| **Trojan** | Disguises itself as legitimate software | Does not self-replicate; relies on deception |
| **Ransomware** | Encrypts the victim's files; demands payment for the decryption key | Financially motivated; very damaging |
| **Spyware** | Secretly monitors user activity and sends data to attacker | Keylogging, screenshots, browsing history |
| **Adware** | Displays unwanted advertisements; often bundled with free software | Usually less harmful; can lead to other malware |

---

## Threats: Social Engineering

**Social engineering** exploits human psychology rather than technical vulnerabilities. Attackers manipulate people into giving up information or access.

| Attack | Description |
|---|---|
| **Phishing** | Fraudulent emails/messages pretending to be from a trusted source (e.g. bank, HMRC) to steal credentials |
| **Spear phishing** | Targeted phishing — personalised to a specific individual using research |
| **Vishing** | Voice phishing — scam phone calls |
| **Pretexting** | Attacker invents a believable scenario to gain trust and extract information |
| **Baiting** | Leaving infected USB drives or offering fake downloads |
| **Quid pro quo** | Offering a service (e.g. "IT support") in exchange for credentials |
| **Impersonation** | Pretending to be someone else (e.g. an IT staff member, a courier) to gain physical or system access |

---

## Threats: Technical Attacks

| Attack | Description |
|---|---|
| **Brute force attack** | Trying every possible password/key combination until the correct one is found |
| **Dictionary attack** | A brute force variant using a list of common passwords and words |
| **DDoS** (Distributed Denial of Service) | Flooding a server/service with traffic from many sources (a botnet) to make it unavailable |
| **Man-in-the-Middle (MitM)** | Attacker secretly intercepts and relays communications between two parties |
| **Packet sniffing** | Capturing data packets as they travel across a network to read or steal contents |
| **Keylogging** | Recording keystrokes to capture passwords and sensitive data |
| **Session hijacking** | Stealing an authenticated session token to impersonate a logged-in user |
| **IP spoofing** | Faking the source IP address of packets to disguise the attacker's identity or bypass filters |
| **SQL injection** | Inserting malicious SQL code into a web form to manipulate a database (e.g. bypass login, dump data) |

### SQL Injection Example
A login form sends: `SELECT * FROM users WHERE username='admin' AND password='xyz'`

If an attacker enters `' OR '1'='1` as the password, the query becomes:
```sql
SELECT * FROM users WHERE username='admin' AND password='' OR '1'='1'
```
This always returns true, granting access without a valid password.

---

## Protective Measures

### Technical Controls

| Measure | How it protects |
|---|---|
| **Anti-malware software** | Detects and removes known malware; scans files and downloads |
| **Firewall** | Monitors and filters incoming/outgoing network traffic based on rules; blocks unauthorised access |
| **Encryption** | Converts data into unreadable ciphertext; only authorised parties with the key can decrypt it |
| **Multi-Factor Authentication (MFA)** | Requires two or more verification factors (something you know, have, or are) — harder to compromise |
| **Strong passwords** | Long, complex, unique passwords slow down brute force attacks |
| **User access levels** | Limiting what each user can access — principle of least privilege |
| **Backups** | Regular copies of data stored separately — allows recovery after ransomware or data loss |
| **Software updates and patches** | Fix known vulnerabilities before attackers can exploit them |
| **HTTPS / TLS** | Encrypts web traffic to prevent packet sniffing and MitM attacks |

### Procedural / Organisational Controls

| Measure | Detail |
|---|---|
| **Penetration testing** | Authorised ethical hackers attempt to break into the system to find vulnerabilities before attackers do |
| **Network forensics** | Analysing network traffic and logs after an incident to understand what happened |
| **Security policies** | Rules governing how staff use systems (password rules, acceptable use, BYOD policy) |
| **Staff training** | Teaching users to recognise phishing emails, social engineering, and safe computing practices |
| **Secure by design** | Building security into software from the start rather than adding it as an afterthought |

---

## Personal Privacy

### Data and Personal Information at Risk

Personal data can be stolen, leaked, or misused. Sensitive data includes:
- Passwords and PINs
- Financial details (card numbers, bank accounts)
- Personal identifiable information (name, address, NI number)
- Private communications (messages, emails)

### Protecting Personal Information

- Use unique, strong passwords for each account
- Enable MFA on important accounts
- Be suspicious of unsolicited emails or calls
- Only share personal data with trusted, secure websites (look for HTTPS)
- Keep devices and software up to date
- Be careful about what you share on social media (attackers use it for spear phishing)

### Legal Framework

**Computer Misuse Act 1990** (UK):
- Makes it illegal to access computer systems without authorisation
- Makes it illegal to modify computer material without authorisation
- Covers hacking, creating/distributing malware, and DDoS attacks

**Data Protection Act 2018 / UK GDPR**:
- Organisations must protect personal data and use it only for stated purposes
- Individuals have rights: access their data, request deletion, correct inaccuracies
