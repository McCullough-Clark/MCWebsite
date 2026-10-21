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

If you run your clinic on Jane and keep your books in QuickBooks Online, you have probably gone looking for the integration. There is not one. Jane's own help center says so: Jane does not directly integrate with any accounting system. You get reports you can export, and the rest is up to you.

So every Jane practice ends up with some kind of workaround, and most of them were chosen without knowing what they give up. We keep the books for Jane clinics, and we built our own connection after living with those tradeoffs for a while. This is what the options actually are.

## What Jane gives you to work with

Jane's reporting is good. For bookkeeping, three of its reports do most of the work. The Sales Report lists every invoice, and it exports to a spreadsheet QuickBooks can import once you map the columns and add a due-date column yourself, since Jane has no concept of one. The Daily Transactions report totals payments by method and date, with Jane Payments fees showing up as negative lines. The Billing Summary gives you the change in accounts receivable for the period and breaks the tax out by type.

Everything below starts from those three reports. The question is how much of the detail you keep when you move it into QuickBooks.

## The three ways practices cope

The first way is to use the bank feed and nothing else. Jane Payments deposits land in the bank, you categorize them as income, and that is the bookkeeping. It is fast. It is also wrong in a few predictable ways. Revenue is understated by the processing fees, which came out before the money arrived. Cash, Zelle, and Venmo payments that patients made outside Jane Payments show up as separate deposits with nothing tying them to a visit. There is no accounts receivable, so QuickBooks cannot tell you who owes you anything. And because a deposit is several days of several patients rolled together, nothing in the books lines up with anything in Jane.

The second way is a monthly summary entry. Once a month someone takes the Billing Summary and the Daily Transactions report and posts one journal entry: revenue, the change in receivables, tax collected, fees, and cash by method. Done carefully, the totals come out right. What you lose is the patient. QuickBooks knows the practice is owed a number but not who owes it, and Jane's aging will never agree with the QuickBooks receivable by patient because QuickBooks does not have patients. The other catch is in the words "done carefully." The entry depends on whoever builds it remembering that gift card sales are not revenue yet, that a credit memo is not cash, and that a refund reverses the tax along with the fee. Most months that person is busy.

The third way is to import the invoices. Export the Sales Report, map the columns, import it, and every Jane invoice exists in QuickBooks under the patient's name. This is the only option that gives you a real receivable. It is also the hardest to keep right. The import does not apply payments to invoices, so that is done by hand. QuickBooks caps an import at a thousand invoices, so a busy practice is splitting files. And anything that changes in Jane after the import, whether a payment is edited, an invoice voided, or an account credit applied, has to be noticed and fixed by hand, because nothing will tell you it happened.

## Where it goes wrong

These are the things we have actually had to clean up in Jane practices, whichever method they were using.

Payouts are batches, net of fees. A Jane Payments deposit covers several days and several patients with the fees already taken out. Record the deposit as income and the fees vanish and revenue comes up short. Record the invoices at full value and then also the deposit, and income is counted twice.

Then there is the money that does not go through Jane Payments at all. Cash, Zelle, Venmo, and checks are recorded in Jane as payments, but they arrive in the bank on their own, and each one has to be matched to the patient and the visit it paid for. In one practice, months of Zelle deposits sat in a clearing account because two patients with the same first name had been paying for different family members, and the deposits had been matched to the wrong one.

Credits are the next problem, because Jane uses one word for three things. A credit memo is a reduction of what the patient owes. An account credit is money the patient paid earlier that is sitting on their account. A gift card redemption is money collected months ago on a card that was a liability until it was used. Jane shows all three as payments. In QuickBooks they are three different entries, and treating them alike puts phantom money in the clearing account.

Edits after the month is done cause trouble no matter which method you use. A payment gets changed from $245 to $240 in Jane after the books were closed. An invoice gets voided. A credit gets applied retroactively. Import again and you get a second payment. Do not import again and the books drift away from Jane. Either way the month-end receivable stops agreeing.

And practices that moved to Jane from another system usually carry open balances from the old one. Those sit in QuickBooks, never clear, and get in the way of every month's reconciliation until someone traces them.

## How we do it instead

We built our own connection between Jane and QuickBooks because the summary entry was not enough for practices that wanted to know who owed them, and the invoice import was too fragile to trust. It runs monthly from Jane's own reports. The whole thing is built around one check: at month end, Jane's receivable by patient and the QuickBooks receivable by patient agree, the net payments agree, or the exceptions are listed for a person to look at.

Each Jane invoice is created in QuickBooks under the patient, and each payment is applied to the invoice it paid, so QuickBooks can answer "who owes us" and the answer matches Jane. Money is routed by how it arrived. Jane Payments money goes to a Jane clearing account that ties to the payouts, and cash, Zelle, and Venmo each go to their own clearing account to be matched against the actual deposits. Fees are recorded as the expense they are.

Credit memos and account credits are not posted on autopilot. They are listed with the patient and invoice so each one gets recorded as what it is. We do that on purpose, because the ones that need a decision are exactly the ones a script gets wrong.

Re-running a month is safe. The tool recognizes what it already posted, adds the new invoices and payments, skips what is there, and flags any payment whose amount changed in Jane since the last run instead of creating a second one. It never edits a payment on its own, because that payment may already be matched to a deposit that has been reconciled. If Jane shows a payment that QuickBooks is missing, it is applied dated to when Jane collected it rather than the invoice date, so the receivable is right in both months.

Patient names exist only inside QuickBooks. The run logs and the monthly summary use codes, so the reconciliation can be reviewed without health information moving through email.

And every month there is a reconciliation, not a reminder to do one: what was posted, the receivable by patient compared to Jane, the net payments compared to Jane, and whatever needs a decision. Usually that is a credit memo or two and the occasional edited payment.

## Which one do you need?

If you are a single practitioner with low volume, no packages or prepaid plans, and no need for QuickBooks to track patient balances, a careful monthly summary entry is fine. Keep the Billing Summary and Daily Transactions reports with the entry so it can be checked later.

If you have several practitioners, sell packages or gift cards, take payments several ways, or have ever asked why QuickBooks does not match Jane, the summary entry is where the drift starts. The fix is to get the patient into the books and check the two systems against each other every month.

[See how we connect Jane and other systems to QuickBooks](/systems-integration/), or [book a call](https://calendly.com/mcculloughclark/consult) and we will look at how your Jane activity is reaching your books now.
