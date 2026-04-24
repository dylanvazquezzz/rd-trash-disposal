# Phone Routing Plan — RD Trash
## STATUS: COMPLETED ✓
**Active number: 786-408-3738 (Google Voice)**
All site instances updated and deployed to rdtrash.org on 2026-04-21.

---

## Goal
Set up a single business number that simultaneously rings two phones.
First to answer gets the call. Second one gets dropped (intentional — no 3-way).

## Customer Experience
- Customer calls one number (the GV or new number shown on site)
- Their screen shows that number (normal outgoing call on their end)
- Call connects to whoever picks up first — seamless, no greeting

## Current Setup
- Desktop nav: 305-450-0649
- Mobile nav: 954-708-8090
- Both numbers already in the site — these become the simultaneous ring targets

## Plan: Google Voice (Free Tier)
1. Create a Google Voice account (needs a Google account)
2. Get a new GV number (or port existing 305 number — $20 one-time fee)
3. Enable simultaneous ring to both 305-450-0649 and 954-708-8090
4. Update website nav to show the GV number (if not porting)

## Fallback: OpenPhone ($15/mo)
- Same setup but built for business
- Shows "Incoming via RD Trash" on both phones
- Cleaner handling of simultaneous ring
- Can port 305 number

## Website Changes Needed
- If porting 305-450-0649: no change needed on site
- If new GV number: update Nav.tsx (desktop + mobile) and any other hardcoded instances
- Search for `3054500649` across codebase to find all references

## Research Findings

### Google Voice (Free) — Setup
1. Go to voice.google.com → Settings → Calls → Linked Numbers
2. Add both owner cell phones (each gets a verification code)
3. Under Incoming Calls, confirm "Ring linked numbers" is ON
4. Both phones ring simultaneously — first to answer wins, other drops automatically
5. **Takes ~10 minutes to set up**

### Google Voice Gotchas
- Both owners share ONE account/inbox — no separation
- No call whisper — won't know it's a business call vs personal
- Don't install the GV app on both phones or you'll get a 3rd ringing device
- Voicemails go to GV inbox, not your carrier voicemail
- Spam filter can occasionally swallow real calls

### Porting 305-450-0649 into Google Voice
- $20 one-time fee
- 305 must be a mobile number (likely fine)
- Takes 24–72 hours, keep carrier active until complete
- If no port: get a new GV number and update the website

### OpenPhone ($30/mo for 2 users)
- Free number porting
- Each owner gets their own login + call history
- Shows "Incoming call" whisper so you know it's the business line
- Shared SMS inbox — both can see customer texts
- Better overall for a business, but $30/month

## Decision
- **Went with Google Voice (free)** — got approved and received new number 786-408-3738
- Did NOT port existing numbers — new GV number assigned

## Completed Steps
1. ✓ Set up Google Voice account — approved
2. ✓ New number assigned: 786-408-3738
3. ✓ Both 305-450-0649 and 954-708-8090 set as simultaneous ring targets in GV
4. ✓ Website updated — all instances replaced with 786-408-3738
5. ✓ Deployed to rdtrash.org on 2026-04-21
