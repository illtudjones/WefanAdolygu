# Software

## Good Programming Principles

Well-written software is designed with future maintainers in mind. Key principles include:

| Principle | Meaning |
|---|---|
| **Readability** | Code is clear and easy to understand — meaningful variable names, consistent formatting |
| **Maintainability** | Easy to fix bugs and update without breaking other parts |
| **Extensibility** | New features can be added without rewriting existing code |
| **Modularity** | Code is broken into self-contained subroutines/modules with single, well-defined responsibilities |

**Comments** in code should explain *why* something is done, not *what* — well-named code already tells you what.

---

## Programming Languages

### High-Level Languages

High-level languages are **closer to human language** and further from machine code.

- Examples: Python, Java, C#, JavaScript
- **Advantages:** Easier to write, read, and debug; portable (run on different hardware); large standard libraries
- **Disadvantages:** Must be translated to machine code; slightly less efficient than low-level code

### Low-Level Languages

Low-level languages are **closer to machine code** and tied to specific hardware.

**Machine code:**
- Binary instructions directly executed by the CPU
- Extremely fast — no translation needed
- Virtually impossible for humans to read or write directly

**Assembly language:**
- One step above machine code; uses mnemonics (e.g. `MOV AX, 5`, `ADD BX, AX`)
- Translated to machine code by an **assembler**
- Used for device drivers, embedded systems, performance-critical code

| Feature | High-level | Low-level |
|---|---|---|
| Readability | Easy | Hard |
| Portability | High | Low (hardware-specific) |
| Speed of execution | Slightly slower | Fastest |
| Memory control | Limited | Full |
| Examples | Python, Java | Assembly, Machine code |

---

## Translators

A **translator** converts source code written by a programmer into machine code that the CPU can execute.

### Compiler

- Translates the **entire source code** into machine code **before** execution
- Creates a standalone executable file
- **Advantages:** Faster execution; errors are all reported at once; executable can be distributed without the source
- **Disadvantages:** Compilation takes time; the compiled file is platform-specific

### Interpreter

- Translates and executes the code **line by line** at runtime
- No separate executable is created
- **Advantages:** Easier to test and debug (stops at the first error); more portable
- **Disadvantages:** Slower execution; source code must be present on the target machine

### Assembler

- Translates **assembly language** into machine code
- One-to-one mapping: each assembly instruction becomes one machine code instruction

| Feature | Compiler | Interpreter |
|---|---|---|
| When translated | Before execution | At runtime |
| Output | Executable file | No output file |
| Error reporting | All at once | Stops at first error |
| Execution speed | Faster | Slower |
| Examples | C, C++, Java (bytecode) | Python, JavaScript |

---

## Compilation Stages

When a compiler translates source code, it goes through several stages:

| Stage | What happens |
|---|---|
| **Lexical analysis** | Source code is broken into tokens (keywords, identifiers, operators, literals); whitespace and comments removed |
| **Syntax analysis** | Tokens are checked against the grammar rules of the language; a parse tree is built |
| **Semantic analysis** | Meaning is checked — e.g. are variables declared before use? Are types compatible? |
| **Code generation** | Intermediate or target machine code is produced from the parse tree |
| **Code optimisation** | The generated code is improved — redundant instructions removed, loops optimised |

---

## Programming Errors

| Error type | When detected | Description | Example |
|---|---|---|---|
| **Syntax error** | Compile-time / interpretation | Code breaks the language's grammatical rules | Missing `:`, wrong spelling of keyword |
| **Logic error** | Runtime (program runs but gives wrong output) | Code is syntactically valid but produces incorrect results | `>` instead of `>=` in a condition |
| **Runtime error** | Runtime (program crashes) | Code is valid but fails when executed due to illegal operation | Dividing by zero, accessing an array out of bounds |

---

## Software Development Life Cycle (SDLC)

The **SDLC** is a structured process for planning, creating, testing, and deploying software.

### Stages

| Stage | Activities |
|---|---|
| **Planning** | Define the project scope, resources, timeline, and feasibility |
| **Analysis** | Gather and document requirements from stakeholders |
| **Design** | Create architecture, data models, UI mockups, and algorithm designs |
| **Development** (Implementation) | Write the actual code |
| **Testing** | Verify the software works correctly; find and fix bugs |
| **Deployment** | Release the software to users |
| **Maintenance** | Fix bugs, release updates, improve the system over time |

### Project Management Principles

- Break the project into manageable tasks with clear deadlines
- Use milestones to track progress
- Manage risks — identify what could go wrong and plan contingencies
- Document everything for future maintainers

---

## SDLC Models

Different projects benefit from different approaches to sequencing the SDLC stages.

### Waterfall Model

Each stage is completed fully before the next begins. Linear and sequential.

- **Strengths:** Clear structure; easy to manage; good for well-defined projects
- **Weaknesses:** Inflexible — changing requirements late is expensive; testing comes late; customer sees no product until near the end

### Agile Model

Work is divided into short iterations called **sprints** (typically 1–4 weeks). Working software is delivered frequently.

- **Strengths:** Adaptable to changing requirements; customer involvement throughout; early delivery of working software
- **Weaknesses:** Harder to predict final cost/timeline; requires active customer involvement; less documentation

### Iterative Model

The system is built in increments. Each iteration produces a working version with more features.

- **Strengths:** Working versions available early; easy to incorporate feedback
- **Weaknesses:** Scope can creep; requires careful planning

### Spiral Model

Combines iterative development with systematic risk analysis at each cycle.

- **Strengths:** Risk management built in; flexible
- **Weaknesses:** Complex to manage; expensive; requires expertise in risk assessment

| Model | Best for | Key feature |
|---|---|---|
| Waterfall | Fixed requirements, well-understood problems | Sequential stages |
| Agile | Changing requirements, customer collaboration | Short sprints, working software |
| Iterative | Large systems built in pieces | Incremental delivery |
| Spiral | High-risk, complex projects | Risk analysis at each loop |
