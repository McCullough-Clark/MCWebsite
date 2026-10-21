---
title: "Jane app and QuickBooks: there is no integration. Here is what to do"
date: 2026-10-22
author: "Sharla Clark"
summary: "If you run your clinic on Jane and your books in QuickBooks Online, you have probably searched for the integration. Jane does not have one. Here are the three ways practices cope, what each one gets wrong, and how we connect Jane to QuickBooks so patient balances, payouts, and the bank all agree."
tags:
  - quickbooks
  - jane
  - integrations
status: "Published"
---

If you run your clinic on Jane and keep your books in QuickBooks Online, you have probably gone looking for the integration. There is not one. Jane's own help center says it plainly: Jane does not directly integrate with any accounting system. What it offers instead is reports you can export and import yourself.

That leaves every Jane practice choosing one of three workarounds, usually without knowing what each one gives up. We keep the books for Jane clinics and built our own connection after living with those tradeoffs. Here is what the options really are.

## What Jane gives you to work with

Jane's reporting is good. For bookkeeping purposes, three reports matter:

- **The Sales Report**, which lists every invoice. It exports as a spreadsheet that QuickBooks can import, with some column mapping and a due-date column you have to add yourself because Jane has no concept of one.
- **The Daily Transactions report**, which totals payments by method and date. Jane Payments processing fees show up as negative lines.
- **The Billing Summary**, which gives the change in accounts receivable for a period and breaks out tax by type.

Everything below is built from those three reports. The question is how much of the detail you keep.

## The three ways practices cope

**1. Bank feed only.** Jane Payments deposits land in the bank, you categorize them as income, and that is the bookkeeping. It is fast and it is wrong in predictable ways. Revenue is understated by the processing fees, which were taken out before the money arrived. Cash, Zelle, and Venmo payments that patients made outside Jane Payments show up as separate deposits with nothing tying them to a visit. There is no accounts receivable, so QuickBooks cannot tell you who owes you anything. And a deposit is a batch of several days of several patients, so nothing in the books matches anything in Jane.

**2. A monthly summary entry.** Once a month, someone takes the Billing Summary and the Daily Transactions report and posts one journal entry: revenue, the change in receivables, tax collected, fees, and the cash by method. Done carefully, this gets the totals right. What it loses is the patient. QuickBooks knows the practice is owed a number, not who owes it. Jane's aging and QuickBooks' receivable will never agree by patient because QuickBooks does not have patients. And "done carefully" is doing a lot of work in that sentence. The entry depends on whoever builds it remembering that gift card sales are not revenue yet, that a credit memo is not cash, and that a refund reverses tax as well as the fee.

**3. Importing the invoices.** Export the Sales Report, map the columns, import it, and every Jane invoice exists in QuickBooks under the patient's name. This is the only option that gives you a real receivable. It is also the most work to keep right. Payments have to be applied to the right invoices, which the import does not do. QuickBooks caps an import at a thousand invoices, so a busy practice is splitting files. And anything that changes in Jane after the import, a payment edited, an invoice voided, an account credit applied, has to be noticed and fixed by hand, because nothing will tell you.

## Where it goes wrong

These are the things we have actually had to clean up in Jane practices, whichever method was in use.

**Payouts are batches, net of fees.** A Jane Payments deposit covers several days and several patients with the fees already deducted. If the books record the deposit as income, fees vanish and revenue is short. If the books record the invoices at full value and also the deposit, income is counted twice.

**Money that does not come through Jane Payments.** Cash, Zelle, Venmo, and checks are recorded in Jane as payments but arrive in the bank on their own. Each one has to be matched to the patient and visit it paid for. In one practice, months of Zelle deposits sat in a clearing account because two patients with the same first name had been paying for different family members.

**Credits are not all the same thing.** A credit memo in Jane is a reduction of what a patient owes. An account credit is money the patient paid earlier, sitting on their account. A gift card redemption is money collected months ago on a card that was a liability until it was used. Jane records all three as "payments." They are three different entries in QuickBooks, and treating them alike puts phantom money in the clearing account.

**Edits after the month is done.** A payment changed from $245 to $240 in Jane after the books were closed. An invoice voided. A credit applied retroactively. Import again and you get a second payment. Do not import again and the books drift from Jane. Either way the month-end receivable stops agreeing.

**Migration leftovers.** Practices that moved to Jane from another system carry open balances from the old one. They sit in QuickBooks, never clear, and pollute every month's reconciliation until someone traces them.

## How we do it instead

We built our own connection between Jane and QuickBooks because the summary entry was not enough for practices that wanted to know who owed them, and the invoice import was too fragile to trust. It runs monthly, from Jane's own reports, and it is built around one check: at month end, Jane's receivable by patient and QuickBooks' receivable by patient agree, and the net payments agree, or the exceptions are listed.

**Every invoice and every payment, per patient.** Each Jane invoice is created in QuickBooks under the patient, and each payment is applied to the invoice it paid. QuickBooks can answer "who owes us" and the answer matches Jane.

**Money routed by how it arrived.** Jane Payments money goes to a Jane clearing account that ties to the payouts. Cash, Zelle, and Venmo each go to their own clearing account and are matched to the actual deposits. Fees are recorded as the expense they are.

**Credits surfaced, not guessed.** Credit memos and account credits are not posted on autopilot. They are listed with the patient and invoice for review, so each one is recorded as what it is.

**Re-running a month is safe.** The tool recognizes what it already posted. Running again adds the new invoices and payments, skips what is already there, and flags any payment whose amount changed in Jane since, rather than creating a second one. It never edits a payment on its own, because that payment may already be matched to a reconciled deposit.

**Missing payments healed on the right date.** If Jane shows a payment that QuickBooks is missing, it is applied dated to when Jane collected it, not the invoice date, so the month-end receivable is right in both months.

**Patient privacy built in.** Patient names exist only inside QuickBooks, where they belong. The run logs and the monthly summary email use codes, so the reconciliation can be reviewed without health information moving through email.

**A monthly reconciliation, not a reminder to do one.** What was posted, the receivable by patient compared to Jane, the net payments compared to Jane, and anything that needs a decision, usually a credit memo or two and the occasional payment edit.

## Which one do you need?

If you are a single practitioner, low volume, no packages or prepaid plans, and you do not need QuickBooks to track patient balances, a careful monthly summary entry is fine. Keep the Billing Summary and Daily Transactions reports with the entry so it can be checked later.

If you have several practitioners, sell packages or gift cards, take payments several ways, or have ever asked "why doesn't QuickBooks match Jane," the summary entry is where the drift starts. The fix is to put the patient in the books and check the two systems against each other every month.

[See how we connect Jane and other systems to QuickBooks](/systems-integration/), or [book a call](https://calendly.com/mcculloughclark/consult) and we will look at how your Jane activity is reaching your books now.
