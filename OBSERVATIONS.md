# Observations

Open items on this portfolio. Everything below was checked against the actual
repositories and READMEs, not assumed.

---

## 1. Unevidenced skill claims — needs a decision

The Skills section currently claims:

| Claim | Evidence on the site |
|---|---|
| Power BI · 60% | **None** |
| Tableau · 65% | **None** |

There is no `.pbix`, no published dashboard, and no BI screenshot anywhere in
the six featured projects or across the seven public repos.

This is the only unevidenced claim left on the site. Two options:

1. Ship one dashboard artifact — a `.pbix` in a repo, or a Tableau Public link —
   and add it as a project card.
2. Remove both bars from the Skills section.

Leaving it as-is is the weakest option: a reviewer who checks will find nothing
behind the number, which puts every *other* number on the page in doubt.

**Recommendation:** option 1 if a dashboard exists in coursework, option 2 today.

---

## 2. The 88.9% needs a spoken answer

`Logistics Delay Prediction` leads the work section on **88.9% accuracy**. The
full picture from that repo's own README:

| Class | Precision | Recall |
|---|---|---|
| Delayed | 0.86 | **0.98** |
| On-Time | 0.96 | **0.73** |

So the model catches 98% of genuine delays, but misclassifies roughly 27% of
on-time shipments as late. That trade-off is defensible — for a logistics team,
missing a real delay costs far more than a false alarm — but it has to be said
out loud rather than discovered.

**Prepare this answer:** why recall on the delayed class was the metric that
mattered, and what the false-alarm rate would cost in practice.

Also worth knowing before an interview: the class balance of the 6,880-row
dataset, and how the Random Forest compares to a naive "always predict delayed"
baseline.

---

## 3. Two projects, one dataset — deliberate, not padding

`RetailPulse AI` and `Retail SQL Lab` both use **Online Retail II (UCI)**.

This is handled honestly in the copy — card 05 opens with "The same Online
Retail II data taken the other way" — which turns a potential padding smell into
a demonstration of range: K-Means and RFM in Python, versus star-schema design
and EDA in pure T-SQL on identical data.

**If asked, own it as a deliberate choice.** Do not present them as two
unrelated projects.

---

## 4. Team projects — role is stated, keep it that way

`DAFEsteel` and `NeuroScope` are team projects living under a collaborator's
GitHub account. Both cards therefore carry an explicit `ROLE` line:

- **DAFEsteel** — research, model code review & module architecture
- **NeuroScope** — model code & research

Claiming a team project without naming your contribution is the fastest way to
lose credibility. Keep these lines accurate if the scope changes.

**Worth doing:** get a commit trail, a fork, or a named contribution section in
those upstream READMEs. Right now a reviewer has to take the role line on trust
because the repos sit under another account.

---

## 5. Held back deliberately

`Corelytics-Body.Performance` is a real Jupyter project (8.5MB) but has **no
description and no summarised finding**. It was left off the site rather than
padding the list with a card that cannot explain itself.

**To include it:** add a repo description and a one-line result to its README —
what question it answered and what the answer was — then it earns a slot.

---

## 6. Removed from an earlier draft

- **NeuroScope Landing** — was a second card pointing at the *same URL* as
  NeuroScope Core. Two cards, one destination reads as padding.
- **Fabricated content** — client testimonials, subscription pricing tiers, and
  blog posts inherited from the original design template. None of it was real,
  and for a junior analyst the single strongest asset is that every claim on the
  page is verifiable.

---

## 7. Minor

- Three of the four earlier project links pointed at a collaborator's account or
  duplicated each other. All six links are now verified to resolve.
- `hero.mp4` (20MB), a stray 12MB duplicate PNG, and a dead `Navbar` component
  were dropped — unreferenced weight inherited from the template.
- Skill percentages are self-assessed. The site says so explicitly under the
  Skills cards; keep that disclosure.
