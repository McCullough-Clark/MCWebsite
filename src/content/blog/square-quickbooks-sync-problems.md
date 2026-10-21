---
title: "QuickBooks Square connector not working? What broke in 2026, and what we do instead"
date: 2026-10-14
author: "Sharla Clark"
summary: "Intuit replaced its old Square app with Square Connector by QuickBooks, and 2026 has been a rough year for it. Here is what people are reporting, what complete Square bookkeeping has to include, and how we connect Square to QuickBooks so the month ties out."
tags:
  - quickbooks
  - square
  - integrations
status: "Published"
---

If you run sales through Square and keep your books in QuickBooks Online, you are probably in one of a few spots. Maybe someone suggested the built-in Square connection and you are wondering whether to turn it on. Maybe you turned it on, it looked fine for a while, and now the bank does not reconcile and there are adjustments nobody can explain. Or maybe you gave up on it, or never trusted it, and someone keys Square sales into QuickBooks by hand every month.

## What changed

Intuit introduced Square Connector by QuickBooks in 2025 to replace the old "Connect to Square" app, and through 2026 it has been moving the people still on the old app over to it. It is free with a QuickBooks subscription. According to [Intuit's own documentation](https://quickbooks.intuit.com/learn-support/en-us/help-article/manage-integrations/connect-manage-square-transactions-quickbooks/L0mBsyBTP_US_en_US), updated in August 2026, it does more than the old app did. Sales come in as sales receipts, with Square fees posted to a Square Fees expense account. Each Square payout comes in as a bank deposit linked to the sales and fees inside it, with holds, disputes, adjustments, and Square Capital loan payments listed in the same deposit. You can pull in up to two years of history at setup, and there is an auto-add setting that posts transactions it is confident about without review.

On paper that is a reasonable design. In practice, people are running into a lot of problems with it.

## Why the Square integration is not working for people

### The migration re-imported history

This one can mean a large cleanup. In [a QuickBooks community thread that runs from April to August 2026](https://quickbooks.intuit.com/community/other-questions-9/square-connector-upgrade-broke-everything-93370), a bookkeeper describes an update on March 29 that, by their account, switched automatic syncing on and back-dated it two years. They had been entering Square by hand. They found 57 pages of transactions totaling over $150,000 in the Bank Deposits screen and said they would have to delete thousands of them manually. Others in the thread report the same thing through the summer, along with cash sales arriving one at a time and bulk accept failing. They reported that live support opened tickets and could not fix it.

### It is a review queue, and you are the reviewer

This one is by design. With auto-add off, the connector needs ongoing review, and Intuit's documentation describes how. Every imported sale and every payout lands in a list to be reviewed. Transactions with every field filled in can be confirmed in bulk, but payments and payouts cannot be confirmed in the same batch, so it is payments first, then payouts, and the bulk action fails if anything selected still needs attention. Anything with missing information gets handled on its own. The only way around the queue is the auto-add setting, which posts what the connector is confident about without asking. The bookkeeper above reported that the update restarted automatic syncing and imported history despite their previous settings. So the choice is to work the queue or trust the automation. If you use the connector without auto-add, somebody is working that queue every month, and at a busy location that can be hundreds of transactions a week.

### Sales tax missing or a few cents off

This one is smaller, but it adds up. Users in [the QuickBooks community thread above](https://quickbooks.intuit.com/community/other-questions-9/square-connector-upgrade-broke-everything-93370) report transactions arriving without sales tax, and others where the tax differs from Square by a few cents. Whatever the cause in a given setup, you end up with a sales tax liability in QuickBooks that does not agree with Square's tax report until someone investigates each difference.

### Connections that will not reconnect

In [a Square community thread from December 2025 to February 2026](https://community.squareup.com/t5/Hardware-Setup-Troubleshooting/Not-integrating-with-Quickbooks/m-p/828560), users who disconnected to fix something could not get reconnected. The connector showed as connected while nothing imported. Square said it was Intuit's app, Intuit said it was Square's data. In February one participant reported that a QuickBooks team lead fixed their connection on a video call and told them a team was working on problems with the new connector.

### Slow, with no way to refresh

The documentation says transactions appear for review within about two hours and that you cannot trigger an update yourself. Users in the 2026 thread report card transactions taking over a week to show up.

### If you use Square Checking, Intuit says do not connect it

This one is not a forum complaint. It is on [Intuit's own listing for the connector](https://quickbooks.intuit.com/app/apps/appdetails/squareconnector/en-us/): the app cannot import the details of purchases made from a Square Checking account, and if you use Square Checking, Intuit recommends you do not connect the app at all. Square Checking is where Square keeps your money if you let it, and plenty of businesses pay bills and run the debit card from it. For them the connector covers the sales side and leaves the spending side out, so the Square Checking balance will never reconcile from the connector alone. It has to be reconciled like any other bank account, to its own statement, every month.

## Why this is more than an inconvenience

Any one of those is a support headache. Together they are an accounting problem.

Historical imports duplicate income when they are posted on top of sales already recorded, so every one of them has to be assessed before it is accepted. A review queue nobody has time for means months that are not actually posted, because a transaction sitting in For Review is not in the books. Tax that does not agree means a liability that will not reconcile to the return. A connection that quietly stops means a gap you find at year end.

Underneath all of it is the thing the documentation does not describe, which is a reconciliation. The connector imports. The imported transactions still need a monthly reconciliation of sales, fees, payouts, liabilities, and the remaining Square balance, and that work is on you. In the Square books we have taken over, usually nobody was.

## What complete Square bookkeeping includes

The structure is not complicated, even if the exceptions take some skill. A Square payout is the customer money in that settlement after fees, refunds, loan deductions, and any other adjustments. The customer money itself is more than sales, because it includes sales tax, tips, and gift cards. Complete books record each piece where it belongs.

Sales go to income by category, net of refunds, with each refund reversing whatever it refunds, including tax. Sales tax collected goes to the sales tax liability, tips owed to employees go to a tips liability, and gift cards sold go to a gift card liability with redemptions coming back out of it. Processing fees and instant transfer fees are expense. Square loan repayments go to the loan, with the loan's fixed fee recognized in a way that fits the reporting basis and the loan terms. And each payout is matched to the bank deposit, never added on top of sales already recorded.

Then the month-end checks. Whatever Square has not paid out yet should equal the balance you are carrying for it, whether that is a clearing account or, if you keep money in Square Checking, that account reconciled to its own statement. A balance that ties tells you the money moved where it should. It does not by itself prove the classifications, so sales, tax, fees, and the loan balance also get checked against Square's reports, on the same basis and the same cutoff.

## How we do it: a tool built on Square's API

We built our own tool after cleaning up a client's books by hand once too often. It connects to Square through Square's API, imports the month's transactions into QuickBooks, posts the month-end journal entries for fees, loan activity, and transfers, and then reconciles the result to Square automatically. Transactions can be imported daily, weekly, or monthly, whichever the books call for. The reconciliation runs after month end, and nothing posts that does not tie to Square's own records.

It starts from Square's transfer records. Every payment Square processed is traced to the payout that includes it, and every payout is matched to the bank deposit. Cash and check payments recorded in Square do not pass through those payouts, so they are recorded and reconciled separately. Anything not yet paid out at month end is carried as in transit, with the amount checked against what Square shows as pending.

Each payment Square processed becomes one sales receipt at its gross amount. Income goes to the categories set up with you, tax, tips, and gift cards go to their liability accounts, and refunds are reversed in the period they were refunded. Each payout is split into its real pieces, with processing fees, instant transfer fees, and loan repayments each going to their own account. The payout to the bank is recorded as a transfer so the bank feed matches it instead of creating income a second time.

For accrual-basis clients, Square invoices still open at month end are accrued to accounts receivable with a reversing entry on the first, so the sale lands in the month it was earned and clears when the payment arrives. Invoices that stay open month after month are listed so someone can chase or cancel them.

There is no review queue to work through. The account mappings and accounting decisions are set during setup, and guards built into the process hold anything unexplained for our review. Each month the tool rebuilds the month from Square's own reports, gross to net, and compares it line by line with what is about to post. Known timing balances, like sales Square has not paid out yet at month end, are expected and shown. If an unexplained difference remains, nothing posts and you get the list of exceptions instead. After posting, it checks QuickBooks again to confirm the balances landed where they should. Routine transactions do not get individual approval. The only things a person looks at are what the reconciliation could not explain, and for our client so far that has been a thing or two a month, usually at the month edge.

Every receipt and journal entry the tool creates is recorded as a batch. If a month needs to be redone, the batch is reversed and rerun rather than deleted one transaction at a time. And every month you get a summary of what posted, what is in transit, how it compares to Square, and anything flagged for review, with the completed reconciliation and its supporting detail attached.

## Should you keep the built-in connector?

If it is importing cleanly, the queue is being worked, and someone reconciles it to Square every month, keep it. It needs a closer look if any of these sound familiar:

- Square deposits were added to income after the sales were already recorded
- There is a recurring adjustment nobody can explain
- Old Square transactions showed up in For Review or Bank Deposits after an update
- The loan repayments and fee cannot be reconciled to what Square shows
- The sales tax liability does not reconcile to Square's tax report
- Nobody can say when Square activity was last reconciled

If so, the fix is usually not a better bank rule. It is treating the sale and the payout as two different things, and checking every month that they match.

Not sure how your Square activity is being recorded? [See how we connect Square and other systems to QuickBooks](/systems-integration/), or [book a call](https://calendly.com/mcculloughclark/consult) and we will look at how sales, fees, loan deductions, and payouts are flowing into your books.
