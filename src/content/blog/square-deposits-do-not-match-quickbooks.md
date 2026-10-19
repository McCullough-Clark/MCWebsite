---
title: "Why your Square deposits never match QuickBooks, and how to reconcile them"
date: 2026-10-19
author: "Sharla Clark"
summary: "Square pays you net of fees, refunds, and loan holdbacks, on its own schedule. If you book the bank deposit as sales, your books are wrong in three places at once. Here is the clean way to record Square in QuickBooks Online and tie it out every month."
tags:
  - quickbooks
  - square
  - reconciliation
status: "Published"
---

If you take payments through Square and keep your books in QuickBooks Online, you have probably had this conversation with yourself: Square says you sold $2,400 on Saturday, the bank shows a deposit of $2,268.17 on Tuesday, and nothing in QuickBooks explains the gap.

The gap is normal. The problem is how most people deal with it.

## What is actually inside a Square deposit

A Square deposit is not a day's sales. It is a settlement of several things at once:

- **Card sales for a batch**, usually one business day, paid out the next business day. Friday, Saturday, and Sunday sales often land together on Monday or Tuesday.
- **Processing fees**, deducted before the money reaches you.
- **Refunds and chargebacks**, netted against the batch.
- **Sales tax and tips** collected from customers, which are inside the gross amount but are not your revenue.
- **Loan repayments**, if you have a Square loan. Square holds back a percentage of every batch until it is paid off.
- **Gift card sales**, which are cash you received for something you still owe.

Cash, checks, and anything you ran outside Square never appear in the deposit at all, even though they show up in the Square sales report.

So the deposit is gross sales, minus fees, minus refunds, minus loan holdback, for whichever days happened to settle together. It will never match a sales report for a calendar day or a calendar month.

## The mistake that causes the most damage

The common shortcut is a bank rule that posts every Square deposit straight to a Sales income account.

That one rule gets three things wrong:

1. **Revenue is understated** by the processing fees, because the fee was netted out before the money arrived. Your margin looks worse than it is, and the fee expense never shows up anywhere.
2. **Sales tax is unreported.** The tax you collected is sitting inside "sales," so your sales tax liability account is empty and the return gets prepared from the Square report instead of the books.
3. **Month end does not tie.** The last few days of the month settle in the next month, so monthly revenue in QuickBooks is always off by two or three days of sales, in both directions.

If you ever have a Square loan, it gets worse: the holdback is a loan payment, not a reduction in sales, and booking the net deposit as income quietly inflates your expenses and leaves the loan balance wrong.

## The clean setup: a Square clearing account

The fix is to separate the two events that are happening: the sale, and the payout.

**Step 1. Create a clearing account.** In QuickBooks, add a bank-type account called "Square Clearing." It is not a real bank account. It is a holding place for money Square owes you.

**Step 2. Record sales at gross, into clearing.** Daily or monthly, enter a sales receipt or journal entry from Square's Sales Summary report, with all the pieces:

- Sales, by category if you track them, to income
- Sales tax collected, to the sales tax liability
- Tips collected, to a tips payable liability
- Gift cards sold, to a gift card liability
- Refunds, as a reduction of income
- The total, debited to Square Clearing

Now revenue, tax, and tips are all correct, and nothing depends on when Square decides to pay you.

**Step 3. Record each deposit as a transfer out of clearing.** When a Square payout hits the bank, record it as a transfer from Square Clearing to your checking account, with two extra lines:

- Processing fees, to a merchant fee expense
- Loan holdback, if any, to the Square loan liability

The deposit now explains itself: gross batch out of clearing, fees and loan payment split off, net to the bank. The bank feed matches to the penny.

**Step 4. Reconcile the clearing account every month.** This is the part most people skip, and it is the part that proves the books are right.

At month end, Square Clearing should equal the sales that have been recorded but not yet paid out. Square calls these pending transfers, and you can see them in the Balance or Transfers report. The check is simple:

> Opening clearing balance + this month's gross sales recorded, minus this month's deposits (grossed back up for fees and holdbacks) = closing clearing balance = Square's pending payouts.

If that equation holds, every dollar Square processed this month is either in the bank or on its way, and your income statement is right. If it does not hold, the difference tells you exactly what to look for.

## The things that usually break it

When a clearing account will not tie, it is nearly always one of these:

- **A stray bank rule** still posting some deposits to Sales instead of to clearing.
- **Refunds across month end.** A sale in October refunded in November reduces November's deposit, but the refund belongs in November's sales entry, not October's.
- **Chargebacks and chargeback fees**, which come out of a later batch and are easy to miss.
- **Instant transfers.** Square charges a separate fee for same-day payouts, and the payout lands at an odd time.
- **Square Checking.** If payouts go to Square's own bank account instead of yours, that account needs to be set up in QuickBooks as a real bank account, with its own reconciliation. Transfers from Square Checking to your main bank are then just transfers, not income.
- **Cash sales rung up in Square.** They belong in the sales entry but not in the clearing account, because the cash goes to the bank separately. Post them to Undeposited Funds or straight to the bank.
- **Loan holdbacks** booked as fees. Check the loan balance in your Square dashboard against the liability in QuickBooks each month.

## A worked example

Say the Square Sales Summary for Saturday shows $2,400 gross, including $180 sales tax and $120 tips, with one $50 refund.

The sales entry debits Square Clearing $2,350 and refunds $50, and credits sales $2,100, sales tax payable $180, and tips payable $120.

On Tuesday the bank shows a deposit of $2,268.17. The transfer out of clearing is $2,350, split as $2,268.17 to the bank and $81.83 to merchant fees. Clearing goes back to zero for that batch, the bank feed matches, and the income statement shows $2,050 in net sales and $81.83 in fees, which is what actually happened.

## When this is worth automating

If you have one location and a few dozen transactions a week, a monthly summary entry and a transfer per deposit is a manageable routine.

Once you have several locations, hundreds of transactions a day, loans, gift cards, and multiple payout schedules, hand entry stops being realistic, and the clearing account quietly drifts. That is the point where we connect Square to QuickBooks directly: every receipt posts at gross, every payout is matched automatically with fees and holdbacks split out, and the in-transit balance is checked against Square's own transfer report before anything is called reconciled.

If your Square clearing account has not tied out in a while, or you have never had one, that is usually the first thing to fix. It is also a good test of whether your bookkeeping is reporting what you sold, or just what you deposited.

[Learn how we connect Square and other systems to QuickBooks](/systems-integration/), or [book a call](https://calendly.com/mcculloughclark/consult) and we will look at your setup together.
