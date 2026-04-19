# Security and Authentication

## Why authentication matters

Authentication is the process of verifying that a user is who they claim to be. It prevents unauthorised access to systems and data.

## Authentication methods

| Method | Description | Strength |
|--------|-------------|---------|
| **Username and password** | User knows a secret string | Weak if passwords are guessed, shared or stolen |
| **PIN** | Short numeric code | Convenient but easily observed |
| **Biometrics** | Fingerprint, face, iris or voice scan | Hard to fake, but can't be changed if compromised |
| **Security questions** | Knowledge-based backup questions | Often guessable from social media |
| **One-time passcode (OTP)** | Code sent by SMS or app, expires quickly | Stronger — attacker needs the physical device |
| **Smart card / token** | Physical device the user possesses | Requires physical theft to compromise |

## Multi-factor authentication (MFA)

MFA requires **two or more** different types of evidence before granting access:

- **Something you know** — password or PIN
- **Something you have** — phone, smart card or hardware token
- **Something you are** — biometric (fingerprint, face)

Using two factors means an attacker who steals a password still cannot log in without the second factor. MFA significantly reduces the risk of unauthorised access.

## Access levels and access control

- **Access control** ensures users can only access the data and functions they need for their role.
- Principle of **least privilege** — users are given the minimum access necessary.
- Examples: a teacher can enter marks but a student can only read them; a cashier can process sales but cannot change prices.

## Passwords — good practice

- Use a long password (passphrase) of 12+ characters.
- Mix uppercase, lowercase, digits and symbols.
- Never reuse passwords across different accounts.
- Passwords should be stored as **hashed** values, not in plain text.
- Organisations should enforce minimum password complexity and regular changes.

## Validation

- **Validation** checks that data is sensible, complete and in the correct format — it does not confirm that the data is accurate.
- Validation types include: range check, type check, length check, format check, presence check and check digit.
- Validation reduces input errors but is not a security measure on its own.

## Penetration testing

- A **penetration test** (pen test) is an authorised simulated attack on a system to find vulnerabilities before a malicious attacker does.
- Ethical hackers (penetration testers) try to break in using the same techniques as real attackers.
- Findings are reported and fixed to improve security.

## Network security measures

- **Firewalls** filter incoming and outgoing network traffic based on rules.
- **Encryption** scrambles data so it cannot be read if intercepted.
- **User access levels** restrict what different users can see and do on a network.
- **Physical security** — locked server rooms, badge access — prevents physical tampering.
