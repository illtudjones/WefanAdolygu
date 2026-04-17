# Systems Development Life Cycle

## What is the SDLC?

The **Systems Development Life Cycle (SDLC)** is a structured, documented process for planning, creating, testing, and delivering information systems. It ensures that software or systems are built systematically with defined stages and clear outputs at each step.

---

## SDLC Phases

### 1. Scoping & Feasibility

Before any work begins, the project must be assessed:
- **What problem needs solving?** Define the scope — what the system will and won't do
- **Is it feasible?** Consider:
  - *Technical feasibility* — can the technology do it?
  - *Economic feasibility* — can the organisation afford it?
  - *Legal feasibility* — does it comply with laws?
  - *Operational feasibility* — will staff be able to use it?
- Output: a **feasibility report** and project brief

### 2. Analysis

Gather detailed requirements from **stakeholders** (anyone with an interest in the system — clients, end users, managers).

Techniques:
- Interviews
- Questionnaires / surveys
- Observation of current workflows
- Document analysis

Output: a **requirements specification** document (functional and non-functional requirements)

**Functional requirements** — what the system must *do* (e.g. "users must be able to search by name")
**Non-functional requirements** — how the system must *perform* (e.g. "must respond in under 2 seconds")

### 3. Design

Translate requirements into technical blueprints:
- **System architecture** — how components connect
- **Data models** — entity-relationship diagrams, database schemas
- **User interface mockups** — wireframes and prototypes
- **Algorithm design** — flowcharts and pseudocode for key processes

Output: **design specification** document

### 4. Implementation (Development)

The actual coding takes place. Developers follow the design specification to write, review, and integrate code.

Good practice: use version control (e.g. Git), modular code, and code reviews.

### 5. Testing

Verify that the system works correctly and meets requirements.

| Test type | What it checks |
|---|---|
| **Unit testing** | Individual components/functions in isolation |
| **Integration testing** | Multiple components working together |
| **System testing** | The whole system against the requirements specification |
| **User acceptance testing (UAT)** | End users test whether the system meets their real-world needs |
| **Alpha testing** | Testing done internally before release |
| **Beta testing** | Testing done by a limited group of real users before full release |

**Types of test data:**
- **Normal** — valid data the system should accept
- **Boundary** — data at the edges of acceptable ranges (e.g. minimum/maximum allowed values)
- **Erroneous** — invalid data the system should reject

### 6. Deployment

The system is released to users:
- **Phased rollout** — gradual deployment to groups of users
- **Big bang** — all users switch at once
- **Parallel running** — old and new systems run simultaneously until confidence is established

Staff training and documentation are produced at this stage.

### 7. Maintenance

Ongoing work after deployment:
- **Corrective maintenance** — fixing bugs found after release
- **Adaptive maintenance** — updating the system to work with new hardware/software environments
- **Perfective maintenance** — adding new features or improving performance based on user feedback

---

## SDLC Models

Different projects benefit from different approaches to how the phases are sequenced and repeated.

### Waterfall Model

Each phase completes fully before the next begins. Linear and sequential.

```
Scoping → Analysis → Design → Development → Testing → Deployment → Maintenance
```

- **Strengths:** Clear structure; easy to manage and document; well-suited to projects with fixed, well-understood requirements
- **Weaknesses:** Very inflexible — changing requirements midway is expensive; customer does not see working software until late; testing is left until after development

**Best for:** Safety-critical systems (e.g. medical devices, air traffic control) where requirements are fixed and thorough documentation is legally required.

### Agile Model

Work is divided into short iterations called **sprints** (1–4 weeks each). At the end of each sprint, a working, tested increment is delivered.

Core values (from the Agile Manifesto):
- Individuals and interactions over processes and tools
- Working software over comprehensive documentation
- Customer collaboration over contract negotiation
- Responding to change over following a plan

- **Strengths:** Highly adaptable; continuous customer involvement; early delivery of working features; problems discovered quickly
- **Weaknesses:** Harder to predict final cost and timeline; requires constant stakeholder availability; less documentation can be problematic in regulated industries

**Best for:** Projects where requirements are likely to evolve (e.g. commercial apps, websites).

### Iterative Model

The system is built in increments. Each iteration produces a more complete working version, incorporating feedback from the previous cycle.

- **Strengths:** Working versions are available early; easy to incorporate user feedback; reduces risk of major failure
- **Weaknesses:** Scope creep is a risk; overall architecture needs careful planning from the start

### Spiral Model

Combines iterative development with **structured risk analysis**. Each cycle (spiral) passes through four quadrants: planning, risk analysis, engineering, and evaluation.

- **Strengths:** Risk is explicitly managed at every stage; combines waterfall's structure with iterative flexibility
- **Weaknesses:** Complex and expensive to manage; requires expertise in risk identification; not suited to small or simple projects

**Best for:** Large, high-risk, complex systems (e.g. space missions, large enterprise software).

### Model Comparison

| Model | Flexibility | Documentation | Customer involvement | Best for |
|---|---|---|---|---|
| Waterfall | Low | High | Start and end only | Fixed requirements |
| Agile | High | Low | Continuous | Evolving requirements |
| Iterative | Medium | Medium | Regular checkpoints | Large systems |
| Spiral | Medium | High | Regular checkpoints | High-risk projects |

---

## Professional, Legal, and Ethical Considerations

### Intellectual Property (IP)

Software and digital content are protected by:
- **Copyright** — automatically protects original works from being copied without permission
- **Software licences** — define what users can and cannot do with software (e.g. open source vs proprietary)
- **Patents** — protect inventions and algorithms (in some countries)

Developers must ensure they do not use code, libraries, or assets without appropriate licences.

### Industry Standards

Following industry standards ensures:
- Compatibility between systems
- Reliability and security
- Legal compliance (e.g. GDPR for systems handling personal data)

Relevant standards: ISO/IEC 27001 (information security), WCAG (web accessibility).

### Ethical Considerations

| Issue | Consideration |
|---|---|
| **Privacy** | Does the system collect more data than necessary? Is it secured properly? |
| **Accessibility** | Can people with disabilities use the system? |
| **Environmental impact** | Does the system use energy efficiently? |
| **Job displacement** | Will automation replace workers without adequate support? |
| **Algorithmic bias** | Could AI/ML components discriminate unfairly? |
| **Social responsibility** | Who benefits and who might be harmed by the system? |

Developers have a professional responsibility to consider the broader impact of the systems they build, not just whether they function correctly.
