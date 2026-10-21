---
title: "Jane app and QuickBooks: there is no built-in integration. Here is what to do"
date: 2026-10-22
author: "Sharla Clark"
summary: "If you run your clinic on Jane and your books in QuickBooks Online, Xero, or FreshBooks, you have probably searched for the integration. Jane does not have a built-in one for any of them. Here are the three ways practices handle it, the tradeoffs of each, and how we connect Jane to QuickBooks so patient balances, payouts, and the bank all agree every month."
tags:
  - quickbooks
  - jane
  - integrations
status: "Published"
---

If you run your clinic on Jane and keep your books in QuickBooks Online, you have probably gone looking for the integration. There is no built-in one. [Jane's own help center says so](https://jane.app/guide/accounting-software-and-jane): Jane does not directly integrate with any accounting system. You get reports you can export, and the rest is up to you.

So every Jane practice ends up with some kind of workaround, and each one has different tradeoffs. We keep the books for Jane clinics, and we built our own connection after living with those tradeoffs for a while. The three approaches below apply whether your books are in QuickBooks, Xero, FreshBooks, Wave, or Sage, since Jane does not sync with any of them, but the details here are for QuickBooks Online, which is what most of our clients use. This is what the options actually are.

## What Jane gives you to work with

Jane's reporting is good. For bookkeeping, three of its reports do most of the work:

- The Sales Report, which lists every invoice. It exports to a spreadsheet QuickBooks can import once you map the columns and add a due-date column yourself, since Jane has no concept of one.
- The Daily Transactions report, which totals payments by method and date, with Jane Payments fees showing as negative lines. It does not show patient names.
- The Billing Summary, which gives you the change in accounts receivable for the period and breaks the tax out by type.

Everything below starts from Jane's reports. The question is how much of the detail you keep when you move it into QuickBooks.

## The three ways practices handle it

### 1. Categorize the bank deposits

Jane Payments deposits land in the bank, you categorize them as income, and that is the bookkeeping. It is fast. It is also wrong in a few predictable ways. Revenue is understated by the processing fees, which came out before the money arrived. Cash, Zelle, and Venmo payments that patients made outside Jane Payments show up as separate deposits with nothing tying them to a visit. There is no accounts receivable, so QuickBooks cannot tell you who owes you anything. And because a payout combines transactions and can cover more than one day, the deposits alone do not give you enough detail to reconcile revenue, fees, and patient payments back to Jane.

### 2. Post a monthly summary

Once a month someone takes the Billing Summary and the Daily Transactions report and posts one journal entry: revenue, the change in receivables, tax collected, fees, and cash by method. Done carefully, the totals come out right, and the patient-level detail stays in Jane, where you can still look up who owes you. Jane's own guide describes this approach as an alternative to importing invoices. What QuickBooks has is one receivable number, so the two systems can only be compared in total. The catch is in the words "done carefully." The entry depends on whoever builds it remembering that gift card sales are not revenue yet, that a credit memo is not cash, and that a refund has to account for any sales tax on it while Jane does not return the original processing fee.

### 3. Import the invoices

Importing the Sales Report creates individual invoices in QuickBooks under each patient's name. Before doing that, note that [Intuit's own help article](https://quickbooks.intuit.com/learn-support/en-us/help-article/insurance-medical-benefits/quickbooks-online-hipaa-compliant/L9HSimAH5_US_en_US) says QuickBooks Online is not HIPAA compliant and recommends against entering individually identifiable health information. Payments must then be recorded and applied separately. Once that is done you have the invoice and payment detail inside QuickBooks, so the receivable can be compared to Jane by patient instead of only in total. It is also the hardest option to keep right. [Intuit's standard U.S. invoice import](https://quickbooks.intuit.com/learn-support/en-us/help-article/import-export-data-files/import-multiple-invoices/L7E9Xrd8l_US_en_US) takes 100 invoices at a time and 1,000 rows per file, and it will not run at all if sales tax is set up in the account. Depending on transaction volume and the QuickBooks setup, this may mean multiple files or a third-party import tool. And anything that changes in Jane after the import, whether a payment is edited, an invoice voided, or an account credit applied, has to be identified and carried into QuickBooks separately, because a one-time import does not keep the two systems in step.

## Where it goes wrong

These are the things we have actually had to clean up in Jane practices, whichever method they were using.

Payouts are batches, net of fees. A Jane Payments deposit combines several patients, sometimes more than one day, with the fees already taken out. Record the deposit as income and the fees vanish and revenue comes up short. Record the invoices at full value and then also categorize the bank deposit as new income, and income is counted twice.

Then there is the money that does not go through Jane Payments at all. Cash, Zelle, Venmo, and checks are recorded in Jane as payments, but they arrive in the bank on their own, and each one has to be matched to the patient and the visit it paid for. In one practice, months of Zelle deposits sat in a clearing account because two patients with the same first name had been paying for different family members, and the deposits had been matched to the wrong one.

Credits are the next problem, because Jane uses one word for three things. A credit memo is a reduction of what the patient owes. An account credit is money the patient paid earlier that is sitting on their account. A gift card redemption is money collected months ago on a card that was a liability until it was used. All three can show up in Jane's applied-payment reporting even though none of them is new cash. In QuickBooks they are three different entries, and treating them alike puts phantom money in the clearing account.

Edits after the month is done cause trouble no matter which method you use. A payment gets changed from $245 to $240 in Jane after the books were closed. An invoice gets voided. A credit gets applied retroactively. Re-importing without a duplicate check can create a second payment. If later changes are not identified and reflected in QuickBooks, the two systems fall out of agreement, and the month-end receivable is the first place it shows.

And practices that moved to Jane from another system usually carry open balances from the old one. Those sit in QuickBooks, never clear, and get in the way of every month's reconciliation until someone traces them.

## How we do it instead

We built our own connection between Jane and QuickBooks for practices that wanted the patient detail in QuickBooks without the fragility of the manual import. It runs monthly from Jane's own exports: the Sales Report, the Applied and Unapplied Payments report, the Accounts Receivable report, the Jane Payments payout report, and the Adjustments report. The whole thing is built around one check: at month end, Jane's receivable by patient and the QuickBooks receivable by patient agree, the net payments agree, or the exceptions are listed for a person to look at.

Each Jane invoice is created in QuickBooks under a patient code rather than the patient's name, with Jane's invoice number, date, service item, and amount, and each payment is applied to the invoice it paid. The list that connects codes to names stays outside QuickBooks. So QuickBooks can answer "who owes us" by code, and the answer matches Jane. What is appropriate to send to QuickBooks still depends on the privacy requirements that apply to each practice.

Money is routed by how it arrived. Jane Payments money goes to a Jane clearing account that ties to the payouts, and cash, Zelle, and Venmo each go to their own clearing account to be matched against the actual deposits. Fees are recorded as the expense they are.

Credit memos and account credits are not posted on autopilot. They are listed by patient and invoice so each one gets recorded as what it is. We flag the items that need accounting judgment for review instead of guessing.

Repeat runs check for transactions already imported and flag payments whose amount changed in Jane since the last run, rather than creating a second one. The tool never edits a payment on its own, because that payment may already be matched to a deposit that has been reconciled. If Jane shows a payment that QuickBooks is missing, it is applied dated to Jane's payment date rather than the invoice date, so the month-end receivable reflects when the money actually came in.

And every month there is a reconciliation, not a reminder to do one: what was posted, the receivable by patient compared to Jane, the net payments compared to Jane, and whatever needs a decision. Usually that is a credit memo or two and the occasional edited payment.

## Which one do you need?

It depends on what you need QuickBooks to tell you, and on how reliable your month-end check is.

If you are a single practitioner with low volume, no packages or prepaid plans, and you are happy looking up patient balances in Jane, a careful monthly summary entry is fine. Keep the Billing Summary and Daily Transactions reports with the entry so it can be checked later, and reconcile the receivable to Jane's total every month.

If you have several practitioners, sell packages or gift cards, take payments several ways, or have ever asked why QuickBooks does not match Jane, the summary entry gets harder to keep right, and when it drifts there is nothing in QuickBooks to show where. Whichever method you use, what matters is that someone compares the two systems every month, identifies the differences, and takes responsibility for resolving them. That is the part we built our process around.

[See how we connect Jane and other systems to QuickBooks](/systems-integration/), or [book a call](https://calendly.com/mcculloughclark/consult) and we will look at how your Jane activity is reaching your books now.
