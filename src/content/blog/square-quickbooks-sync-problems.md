---
title: "Intuit replaced the Square app in 2026. Here is what broke, and what we do instead"
date: 2026-10-20
author: "Sharla Clark"
summary: "QuickBooks moved every Square user onto a new connector this year. On paper it does more than the old one. In practice, 2026 has been a rough year for it. Here is what people are reporting, what complete Square bookkeeping has to include, and how we connect Square to QuickBooks so the month ties out."
tags:
  - quickbooks
  - square
  - integrations
status: "Published"
---

If you run sales through Square and keep your books in QuickBooks Online, you are probably in one of three places:

- Someone has suggested the built-in Square connection and you are wondering whether to turn it on.
- You turned it on, it looked fine for a while, and now the bank does not reconcile and there are adjustments nobody can explain.
- You gave up on it, or never trusted it, and someone is keying Square sales into QuickBooks by hand every month.

This article is for all three, and it is specifically about 2026, because this year changed things.

## What changed this year

Intuit retired the old "Connect to Square" app and moved everyone onto **Square Connector by QuickBooks**. It is free with a QuickBooks subscription, and according to [Intuit's own documentation](https://quickbooks.intuit.com/learn-support/en-us/help-article/manage-integrations/connect-manage-square-transactions-quickbooks/L0mBsyBTP_US_en_US), updated in August 2026, it does more than the old app did:

- Sales come in as sales receipts, with Square fees posted to a Square Fees expense account.
- Each Square payout comes in as a bank deposit linked to the sales and fees inside it, with holds, disputes, adjustments, and Square Capital loan payments listed in the same deposit.
- You can pull in up to two years of history at setup, and an "auto-add" setting lets it post transactions it is confident about without review.

That is a reasonable design. The trouble is what happened when it rolled out.

## What people have reported since the switch

These are not old complaints about an old app. They are from the QuickBooks and Square community forums and the bookkeeping subreddits, dated December 2025 through August 2026.

**The migration re-imported history.** In [a QuickBooks community thread that runs from March to August 2026](https://quickbooks.intuit.com/community/other-questions-9/square-connector-upgrade-broke-everything-93370), bookkeepers describe the forced update switching auto-sync on and back-dating it two years. People who had been entering Square by hand, or had sync switched off on purpose, found their bank feed full of transactions they had already recorded. One reported 57 pages of deposits totaling over $150,000, posted on a Sunday evening by a "System Administrator" profile. Live support opened tickets and could not fix it.

**It is a review queue, and you are the reviewer.** This one is by design, not a bug. Intuit's documentation describes it: every imported sale and every payout lands in a list to be reviewed. Transactions with every field filled in can be confirmed in one click. Anything else has to be opened and completed first. Bulk confirm fails if any selected item still needs review, and payments and payouts cannot be confirmed in the same batch, so it is payments first, then payouts, every time. The 2026 thread adds that cash sales now arrive as individual transactions that each need manual approval, and that batch accept stopped working for some users after the update. The only way to skip the queue is the auto-add setting, which posts whatever the connector is confident about without asking. That is the setting the migration switched on, and it is how two years of duplicates got in. So the choice is to click through every transaction, or trust the setting that caused the mess. Either way, the time cost is real and it never goes away: a busy location can put hundreds of transactions a week into that queue, and somebody has to work it every month for as long as you use the connector.

**Sales tax missing or off by pennies.** Users report transactions arriving without sales tax, and others where the tax is a few cents different from Square because Square calculates it per item and QuickBooks calculates it on the total. Either way the sales tax liability in QuickBooks stops agreeing with Square's tax report.

**Connections that will not reconnect, and nobody owns the problem.** In [a Square community thread from December 2025 to February 2026](https://community.squareup.com/t5/Hardware-Setup-Troubleshooting/Not-integrating-with-Quickbooks/m-p/828560), users who disconnected to fix something could not reconnect. The connector showed as connected while nothing imported. Square said it was Intuit's app, Intuit said it was Square's data. In February an Intuit team lead acknowledged on the thread that a team was working on issues with the new connector.

**Slow, and no way to refresh.** The documentation says transactions appear for review within about two hours and that you cannot trigger an update on demand. Users in the 2026 thread report card transactions taking over a week.

**And on Reddit**, in r/QuickBooks and r/quickbooksonline over the past year: the new connector is "extremely limited," it "messed up months of imports and now it won't connect at all" with QuickBooks support admitting it is affecting a lot of customers, and the connection is "a hot mess right now," working about three weeks out of three months.

## Why this is more than an inconvenience

Each of those is a support headache. Together they are an accounting problem.

Re-imported history means sales counted twice unless every duplicate is found and removed. A review queue that nobody has time for means months that are not actually posted, because a transaction sitting in For Review is not in the books. Tax that does not match means a liability that will not reconcile to the return. And a connection that quietly stops means a gap you discover at year end.

Underneath all of it is the thing the documentation does not describe: a reconciliation. The connector imports. At no point does it tell you whether QuickBooks agrees with Square at month end. That check is on you, and in most of the books we take over, nobody was doing it.

## What complete Square bookkeeping includes

The structure is clear, even if the exceptions take skill. A Square payout is the customer money in that settlement, after fees, refunds, loan deductions, and any other adjustments. The customer money itself is more than sales: it includes sales tax, tips, and gift cards. Complete books record each piece where it belongs.

- Sales to income, by category, net of refunds, with the refund reversing whatever it refunds, including tax
- Sales tax collected to the sales tax liability
- Tips owed to employees to a tips liability
- Gift cards sold to a gift card liability, and gift cards redeemed out of it
- Processing fees and instant transfer fees to expense
- Square loan repayments to the loan, with the loan's fixed financing fee handled the way the loan agreement supports
- Each payout matched to the bank deposit, never added on top of sales already recorded

Then the month-end checks. Whatever Square has not paid out yet should equal the balance you are carrying for it, whether that is a clearing account or, if you keep money in Square Checking, that account reconciled to its own statement. A balance that ties confirms the money moved where it should. It does not by itself prove the classifications, so sales, tax, fees, and the loan balance also get checked against Square's reports, on the same basis and the same cutoff.

## The Square loan, and why timing is the hard part

The connector problems above are loud. The timing problems are quiet, and they are the ones that make Square books hard to trust even when every transaction imported correctly. A Square loan is the clearest example, and we have one client with a large one.

**Square keeps two clocks.** When you have a Square loan, Square takes a fixed percentage of every card sale as repayment. Square's loan ledger applies that repayment on the date of the sale. The money, though, does not leave until the payout settles, usually the next business day, and the transfer report shows the deduction on that date. For most of the month nobody notices. At month end it matters. Sales on the 30th and 31st show as repaid on Square's loan dashboard in that month, but the cash was withheld from payouts dated the 1st and 2nd of the next one. Square's own help pages note that the loan dashboard and the transfer reports use different cutoffs.

**So which number is the loan balance?** If you book repayments on the cash basis, as deductions from each payout, QuickBooks will never agree with Square's loan dashboard at month end, and every reconciliation ends with a difference somebody has to explain. If you book them on Square's ledger basis, the loan agrees but the cash does not, because a few days of repayment have been applied that have not been withheld yet. For our client that difference was a few hundred dollars every month, a different amount each time, made up of several day-shifted payments rather than one.

**What we do.** The loan is booked on Square's ledger basis, so the loan balance in QuickBooks equals Square's loan dashboard at every month end. The month-edge difference goes to its own account, Square loan payments in transit, which carries over and clears the following month. The reconciliation shows that balance and what it is made of, so it is a known timing item, not a mystery.

**The financing fee is the other half.** A Square loan has one fixed fee and no running interest, but the fee still has to reach the income statement over the life of the loan. We carry it as a contra to the loan and release it in proportion to repayments, so each month's financing cost matches that month's repayments and the net loan on the balance sheet is what you actually owe. When a client has been expensing it straight-line by hand, the first month on the tool includes a one-time true-up, shown and explained, never plugged.

**Timing shows up in sales too.** Card sales settle a business day later, so a weekend at month end leaves two or three days of sales paid out in the next month. Those are real sales in the month they happened and real cash in the month after. The books carry them as in transit, and the reconciliation checks that figure against what Square shows as pending.

**And accrual versus cash is a decision, not a default.** The same client invoices through Square and bills ahead, so invoices paid in a month are often for the next month's service. We built the accrual, posting the open invoices to receivables with an automatic reversal, and it was correct on paper. It also meant QuickBooks sales no longer matched Square sales, which was the one number the owner compared every month. The client chose consistency: sales in QuickBooks equal sales in Square, and the open invoices are listed on the monthly summary as information. Either answer can be right. What matters is that it is chosen on purpose, written down, and applied the same way every month.

## How we do it instead

We built our own Square to QuickBooks connection after cleaning up a client's books by hand once too often. It is built around the reconciliation, not the import.

**It starts from Square's transfer records.** Every settled sale is tied to the payout that funded it, and every payout is matched to the bank deposit. Anything not yet paid out at month end is reported as in transit, with the amount checked against what Square shows as pending.

**One sales receipt per Square transaction, at gross.** Income to the right categories. Tax, tips, and gift cards to their liability accounts. Refunds reversed in the period they were refunded.

**Every payout split into its real pieces.** Processing fees, instant transfer fees, and loan repayments each go to their own account, and the payout to the bank is recorded as a transfer so the bank feed matches it instead of creating income a second time.

**There is no review queue. It reconciles itself.** After month end, the tool rebuilds the month from Square's own reports, gross to net, and compares it line by line with what is about to post into QuickBooks. If every figure ties, it posts. If the difference is not zero, nothing posts and you get a list of the exceptions instead. Nobody clicks through transactions. The only things a person looks at are the ones the reconciliation could not explain, and most months that is a thing or two, usually a timing item at the month edge, not a queue of hundreds.

**Every batch is tracked and reversible.** If a month needs to be redone, it is voided as a batch and rerun, not deleted one transaction at a time.

**You get a monthly summary.** What posted, what is in transit, how it compares to Square, and anything flagged for review. That email is the reconciliation. It is not a reminder to go do one.

## Should you keep the built-in connector?

If it is importing cleanly, nothing is stuck in review, and someone reconciles it to Square every month, keep it. The signs it needs a closer look:

- Square deposits were added to income after the sales were already recorded
- There is a recurring adjustment and nobody can say what it corrects
- Old Square transactions appeared in For Review after this year's update
- The loan repayments and financing cost cannot be reconciled to what Square shows
- The sales tax liability in QuickBooks does not reconcile to Square's tax report
- Nobody can show when Square activity was last reconciled

If any of those sound familiar, the fix is usually not a better bank rule. It is treating the sale and the payout as two different things, and checking every month that they meet.

Not sure how your Square activity is being recorded? [See how we connect Square and other systems to QuickBooks](/systems-integration/), or [book a call](https://calendly.com/mcculloughclark/consult) and we will look at how sales, fees, loan deductions, and payouts are flowing into your books.
