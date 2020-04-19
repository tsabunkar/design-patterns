# Flyweight

- Space Optimization technique.
- A space optimization technique that lets us use less memory by storing externally the data referenceing/associated with similar objects

---

# Motivation

- Avoid redundancy when storing data.
- ex- names
  - Plenty of users wtih identical first/last name
  - No sense in storing same first/last name over and over again
  - Sotr a list of names and reference to them
- ex- bold or italic text formating
  - Don't want each character to have a formatting character
  - Operate on ranges (ex- line number, start/end positions)
