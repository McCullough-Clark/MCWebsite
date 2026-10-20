---
title: "Why the Square to QuickBooks sync makes a mess of your books, and what we do instead"
date: 2026-10-20
author: "Sharla Clark"
summary: "Square's built-in QuickBooks connection is free and quick to turn on. The books it produces are wrong in the same ways every time. Here is what goes wrong, what correct looks like, and how we connect Square to QuickBooks so the numbers actually tie out."
tags:
  - quickbooks
  - square
  - integrations
status: "Published"
---

If you run sales through Square and keep your books in QuickBooks Online, somebody has probably suggested the built-in connection. It is free, it takes a few minutes to turn on, and for a while it looks like it is working. Sales show up in QuickBooks. Nobody has to key anything.

Then the first bank reconciliation does not tie, and the plug entries start.

We have inherited enough books with the built-in sync running to know the pattern. The problems are not random. They are the same handful every time, and they come from one design decision: the sync pushes sales into QuickBooks and leaves the money part for you to sort out.

## What goes wrong

**Everything posts on the sale date, so nothing matches the bank.** Square pays you a day or more later, in batches, net of fees. The sync creates a sales receipt for every transaction on the day it happened. When the real deposit arrives in the bank feed, it does not match any of those receipts, so it gets added as new income. Now the month's sales are counted twice, and the only way to make the bank reconcile is to delete something or post a plug.

**Fees, tips, sales tax, and refunds get flattened.** Processing fees are netted out before the money reaches you, so they are either missing from the books or dumped in one lump at month end. Sales tax collected lands as a line on a receipt instead of in the sales tax liability. Tips get counted as revenue. Refunds show up as negative sales in whatever period the sync happened to run. Each one is small. Together they make the income statement wrong by a few percent every month, in the same direction.

**Loans and instant transfers are invisible.** If you have a Square loan, Square holds back a percentage of every payout to repay it. If you use instant transfers, there is a separate fee. The sync knows nothing about either, so the gap between gross sales and what hit the bank gets wider and nobody can explain it. We have seen loan repayments booked as processing fees and loan balances in QuickBooks that are thousands off from what Square shows.

**Your lists fill up with junk.** Depending on how it is set up, the sync creates items and customers as it goes. A year later the item list has hundreds of entries nobody recognizes and the customer list has one record for every name a cashier ever typed.

**It fails quietly and cannot be undone.** The connection breaks when a password changes or a token expires, and nothing tells you. You find out when a month is missing. Or it runs twice and a month is doubled. Either way, there is no way to pull back a batch. Cleanup is one transaction at a time.

**Nothing proves it.** This is the real problem underneath the others. At no point does the built-in sync produce a report that says QuickBooks agrees with Square. You are trusting it, and trust is not a control.

## What correct looks like

The accounting itself is not complicated. A Square payout is gross sales, minus processing fees, minus refunds, minus any loan holdback, for whichever days settled together. Correct books record each of those pieces where it belongs:

- Sales at gross, by category, to income
- Sales tax, tips, and gift card sales to their liability accounts
- Processing fees and instant transfer fees to expense
- Loan holdbacks to the loan, and the financing cost to interest
- Each payout matched to the bank deposit, not added on top of it

And then one check, every month: the money Square still owes you, the pending payouts, equals the balance of your clearing account in QuickBooks. If you use Square Checking, that account is the clearing account and the check is against Square's own statement. Either way, every dollar Square processed is either in the bank or accounted for in transit. If that check holds, the books are right. If it does not, the difference tells you exactly where to look.

The built-in sync cannot give you that check, because it never looks at the payouts.

## How we do it instead

We built our own Square to QuickBooks connection because the built-in one made a mess of a client's books and we were tired of cleaning it up by hand. It is designed backwards from the bank, not forwards from the register.

**It starts from Square's transfer records, not the sales feed.** Every transaction is tied to the payout it was part of, and the deposit date is the truth. That alone removes the double counting.

**One sales receipt per Square transaction, at gross.** Income goes to the right categories. Tax, tips, and gift cards go to liabilities. Refunds go against sales in the period they were refunded.

**Every payout is split into its real pieces.** Processing fees, instant transfer fees, loan holdback, loan interest, and the net amount, each to its own account. The payout to your bank is recorded as a transfer, so the bank feed matches it instead of creating income twice.

**Nothing posts until it proves out.** Before a month goes into QuickBooks, a reconciliation workbook rebuilds the month from Square's own reports, gross to net, and checks it against what is about to post, line by line. If the difference is not zero, nothing posts. You get a list of what is off instead.

**Every batch can be reversed.** If something needs to be redone, a month comes out cleanly and goes back in cleanly. No one-at-a-time deleting.

**You get a monthly summary.** What posted, what is in transit at month end, and anything that was flagged for review. The in-transit figure is checked against Square's pending payouts, so you can see the tie-out, not just take our word for it.

## Should you turn the built-in sync off?

Not always. If you have one location, modest volume, and someone compares QuickBooks to the Square sales summary every month and fixes what is off, it can be made to work.

The signs it is not working:

- Square deposits are sitting in an income account
- There is a recurring "Square adjustment" or similar plug entry
- The Square loan balance in QuickBooks does not match the Square dashboard
- Sales tax returns are prepared from the Square report instead of the books
- Nobody can say when QuickBooks last agreed with Square

If any of those sound familiar, the fix is usually not a better bank rule. It is recording the sale and the payout as two different things, and checking that they meet.

[See how we connect Square and other systems to QuickBooks](/systems-integration/), or [book a call](https://calendly.com/mcculloughclark/consult) and we will look at what your Square books are doing now.
