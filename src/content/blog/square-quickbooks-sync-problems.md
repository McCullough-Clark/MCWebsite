---
title: "QuickBooks' new Square connector: what broke in 2026, and what we do instead"
date: 2026-10-20
author: "Sharla Clark"
summary: "Intuit replaced its old Square app with Square Connector by QuickBooks, and 2026 has been a rough year for it. Here is what people are reporting, what complete Square bookkeeping has to include, where the loan and timing problems hide, and how we connect Square to QuickBooks so the month ties out."
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

This article is for all three, and it is specifically about what has happened since the connector changed.

## What changed

Intuit introduced **Square Connector by QuickBooks** in 2025 to replace the old "Connect to Square" app, and through 2026 has been moving the people still on the old app over to it. It is free with a QuickBooks subscription, and according to [Intuit's own documentation](https://quickbooks.intuit.com/learn-support/en-us/help-article/manage-integrations/connect-manage-square-transactions-quickbooks/L0mBsyBTP_US_en_US), updated in August 2026, it does more than the old app did:

- Sales come in as sales receipts, with Square fees posted to a Square Fees expense account.
- Each Square payout comes in as a bank deposit linked to the sales and fees inside it, with holds, disputes, adjustments, and Square Capital loan payments listed in the same deposit.
- You can pull in up to two years of history at setup, and an auto-add setting lets it post transactions it is confident about without review.

That is a reasonable design. The trouble is what people have run into using it.

## What people have reported

These are not old complaints about an old app. They are from the QuickBooks and Square community forums and the bookkeeping subreddits, dated December 2025 through August 2026, and each one is attributed to the person who reported it.

**The migration re-imported history.** In [a QuickBooks community thread that runs from April to August 2026](https://quickbooks.intuit.com/community/other-questions-9/square-connector-upgrade-broke-everything-93370), a bookkeeper describes an update on March 29 that, by their account, switched automatic syncing on and back-dated it two years. They had been entering Square by hand. The next morning the Bank Deposits screen held 57 pages of transactions totaling over $150,000, which they then deleted one by one. Others in the thread report the same thing through the summer, along with cash sales arriving one at a time and bulk accept failing. Live support opened tickets and could not fix it.

**It is a review queue, and you are the reviewer.** This part is by design. Intuit's documentation describes it: every imported sale and every payout lands in a list to be reviewed. Transactions with every field filled in can be confirmed in bulk, but payments and payouts cannot be confirmed in the same batch, so it is payments first, then payouts, and the bulk action fails if anything selected still needs attention. Anything with missing information is handled on its own. The only way around the queue is the auto-add setting, which posts what the connector is confident about without asking, and that is the setting the bookkeeper above says was turned on for them. So the choice is to work the queue, or trust the automation. Either way, as long as you use the connector without auto-add, somebody is working that queue every month, and at a busy location that is hundreds of transactions a week.

**Sales tax missing or a few cents off.** Users in both forums report transactions arriving without sales tax, and others where the tax differs from Square by pennies. Whatever the cause in a given setup, the result is a sales tax liability in QuickBooks that does not agree with Square's tax report until someone investigates each difference.

**Connections that will not reconnect, and two support teams pointing at each other.** In [a Square community thread from December 2025 to February 2026](https://community.squareup.com/t5/Hardware-Setup-Troubleshooting/Not-integrating-with-Quickbooks/m-p/828560), users who disconnected to fix something could not reconnect. The connector showed as connected while nothing imported. Square told them it was Intuit's app, Intuit told them it was Square's data. In February one participant reported that a QuickBooks team lead resolved their connection on a video call and told them a team was working on problems with the new connector.

**Slow, and no way to refresh.** The documentation says transactions appear for review within about two hours and that you cannot trigger an update on demand. Users in the 2026 thread report card transactions taking over a week to show up.

**And on Reddit**, over the past year: a bookkeeper in r/quickbooksonline [advised against the new connector](https://www.reddit.com/r/quickbooksonline/comments/1txxy0m/qbo_and_square/) as "extremely limited." In r/QuickBooks, a business owner [wrote that it](https://www.reddit.com/r/QuickBooks/comments/1sqf6f0/about_to_just_make_my_own_accounting_system_im/) "messed up months of imports and now it won't connect at all," and said support told them it was affecting a lot of customers. And in [a thread asking whether a connected app had ever quietly broken a client's books](https://www.reddit.com/r/quickbooksonline/comments/1wha0cy/has_a_connected_app_ever_quietly_messed_up_a/), the top answer was that Intuit updated the free Square connector and broke it.

## Why this is more than an inconvenience

Each of those is a support headache. Together they are an accounting problem.

Re-imported history means sales counted twice unless every duplicate is found and removed. A review queue that nobody has time for means months that are not actually posted, because a transaction sitting in For Review is not in the books. Tax that does not agree means a liability that will not reconcile to the return. And a connection that quietly stops means a gap you discover at year end.

Underneath all of it is the thing the documentation does not describe: a reconciliation. The connector imports. At no point does it tell you whether QuickBooks agrees with Square at month end. That check is on you, and in most of the books we take over, nobody was doing it.

## What complete Square bookkeeping includes

The structure is clear, even if the exceptions take skill. A Square payout is the customer money in that settlement, after fees, refunds, loan deductions, and any other adjustments. The customer money itself is more than sales: it includes sales tax, tips, and gift cards. Complete books record each piece where it belongs.

- Sales to income, by category, net of refunds, with the refund reversing whatever it refunds, including tax
- Sales tax collected to the sales tax liability
- Tips owed to employees to a tips liability
- Gift cards sold to a gift card liability, and gift cards redeemed out of it
- Processing fees and instant transfer fees to expense
- Square loan repayments to the loan, with the loan's fixed fee recognized over the loan on a basis the loan terms support
- Each payout matched to the bank deposit, never added on top of sales already recorded

Then the month-end checks. Whatever Square has not paid out yet should equal the balance you are carrying for it, whether that is a clearing account or, if you keep money in Square Checking, that account reconciled to its own statement. A balance that ties confirms the money moved where it should. It does not by itself prove the classifications, so sales, tax, fees, and the loan balance also get checked against Square's reports, on the same basis and the same cutoff.

## The Square loan, and why timing is the hard part

The connector problems above are loud. The timing problems are quiet, and they are the ones that make Square books hard to trust even when every transaction imported correctly. A Square loan is the clearest example. We have one client with a large one, and this is what their records showed.

**Two reports, two cutoffs.** Square takes a fixed percentage of card sales as loan repayment. Square's own help pages note that the loan reports and the transfer reports use different cutoffs, and in this client's records that showed up every month end: the loan report applied repayments from sales on the 30th and 31st, while the transfer report showed those same deductions coming out of payouts dated the 1st and 2nd. The amount was a few hundred dollars, different each month, and made up of several day-shifted payments rather than one.

**Where that difference lives.** We book the loan to agree with Square's loan report, so the loan balance in QuickBooks equals what Square says is still to be repaid at every month end. The month-edge difference goes to its own account, Square loan payments in transit, which carries over and clears in the following month. The reconciliation shows that balance and what it is made of, so it is a documented timing item rather than something to explain from scratch each month.

**The fixed fee is tracked separately.** A Square loan has one fixed fee and no running interest. We keep the remaining repayment obligation and the unamortized fee as separate balances, so the books show both what is still payable to Square and the loan's accounting carrying amount, which is the obligation less the fee not yet recognized. For this client the fee is recognized in proportion to repayments, which fits a loan that is repaid as a percentage of sales with no fixed schedule. At setup we reconciled the opening loan and fee balances to Square, reviewed how the fee had been expensed until then, and documented the adjustment before anything posted.

**Timing shows up in sales too.** Card sales settle a business day later, so a weekend at month end leaves two or three days of sales that Square transfers to the bank in the following month. They are sales in the month they happened. The books carry the unsettled amount as in transit, and the reconciliation checks it against what Square shows as pending.

**And billing ahead needs a decision, not a default.** The same client invoices through Square and bills ahead, so an invoice paid in one month is often for the next month's service. We built an accrual for open invoices, and then turned it off for this client, because an invoice for a service not yet delivered is not earned revenue on any basis, and the accrual was putting it on the books as if it were. Their monthly reporting now records invoice income when Square collects it, so sales in QuickBooks agree with Square's sales report, and the open invoices are listed on the monthly summary as information. The point is not which answer we picked. It is that it was decided on purpose, written down, and applied the same way every month.

## How we do it instead

We built our own Square to QuickBooks connection after cleaning up a client's books by hand once too often. It is built around the reconciliation, not the import, and it runs once a month, after month end.

**It starts from Square's transfer records.** Every settled sale is tied to the payout that funded it, and every payout is matched to the bank deposit. Anything not yet paid out at month end is carried as in transit, with the amount checked against what Square shows as pending.

**One sales receipt per Square transaction, at gross.** Income to the categories set up with you. Tax, tips, and gift cards to their liability accounts. Refunds reversed in the period they were refunded.

**Every payout split into its real pieces.** Processing fees, instant transfer fees, and loan repayments each go to their own account, and the payout to the bank is recorded as a transfer so the bank feed matches it instead of creating income a second time.

**There is no review queue. It checks itself.** The account mappings and accounting decisions are set during setup. Each month the tool rebuilds the month from Square's own reports, gross to net, and compares it line by line with what is about to post. Documented timing balances, like the in-transit amounts above, are expected and shown. If an unexplained difference remains, nothing posts and you get the list of exceptions instead. After posting, it checks QuickBooks again to confirm the balances landed where they should. Nobody clicks through transactions. The only things a person looks at are what the reconciliation could not explain, and for our client so far that has been a thing or two a month, usually at the month edge.

**Every batch is tracked and can be reversed.** Every receipt and journal entry the tool creates is recorded as a batch. If a month needs to be redone, the batch is reversed and rerun, not deleted one transaction at a time.

**You get a monthly summary.** What posted, what is in transit, how it compares to Square, and anything flagged for review, with the completed reconciliation and its supporting detail attached.

## Should you keep the built-in connector?

If it is importing cleanly, the queue is being worked, and someone reconciles it to Square every month, keep it. The signs it needs a closer look:

- Square deposits were added to income after the sales were already recorded
- There is a recurring adjustment and nobody can say what it corrects
- Old Square transactions appeared in For Review or Bank Deposits after an update
- The loan repayments and fee cannot be reconciled to what Square shows
- The sales tax liability in QuickBooks does not reconcile to Square's tax report
- Nobody can show when Square activity was last reconciled

If any of those sound familiar, the fix is usually not a better bank rule. It is treating the sale and the payout as two different things, and checking every month that they meet.

Not sure how your Square activity is being recorded? [See how we connect Square and other systems to QuickBooks](/systems-integration/), or [book a call](https://calendly.com/mcculloughclark/consult) and we will look at how sales, fees, loan deductions, and payouts are flowing into your books.
