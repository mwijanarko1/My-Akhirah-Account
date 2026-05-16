# Donor Journey Planning

## Homepage Donation Entry Points
| Section Name | Button Text | Destination URL |
| :--- | :--- | :--- |
| Hero | Donate Now | `/donate` |
| Quick Donate (Hero overlay) | Donate | `/donate?type=...&fund=...&amount=...` |
| Emergency Appeals (Featured) | Donate now | `/donate` |
| Emergency Appeals (Secondary) | (Entire card is a link) | `/donate` |
| Banners (Various) | (Variable e.g. Donate to Palestine) | `/donate` |

## Campaign Card Donation Entry Points
| Card Type | Button Text | Destination URL |
| :--- | :--- | :--- |
| Campaign Listing Card | (Entire card links to detail page) | `/campaigns/[slug]` |
| Campaign Detail CTA | Donate [Amount] / Custom Amount | `/donate?campaign=[slug]&amount=...` |

*(Note: We will add an explicit "Donate" button to the listing cards for better accessibility and clearer entry points without forcing users to visit the detail page).*

## Header/Footer Donation Links
| Location | Link Label | Target URL | Correct? |
| :--- | :--- | :--- | :--- |
| Header (Mobile Menu) | Donate | `/donate` | Yes |
| Header (Desktop Nav) | Donate | `/donate` | Yes |
| Footer (Get involved) | Donate | `/donate` | Yes |
| Footer (Get involved) | Zakat | `/zakat` | Yes |

## The 5-Step Donor Journey
1. **Awareness & Entry**: Donor lands on the Homepage or Campaign Detail page, reads the impact story, and decides to give.
2. **CTA Interaction**: Donor clicks a "Donate Now" button or uses the Quick Donate widget, passing initial context (e.g., amount or fund) to the next step.
3. **Configuration (The `/donate` page)**: Donor confirms or modifies their donation details (Amount, Fund type like Zakat/Sadaqah, One-off/Monthly, and Fee Coverage).
4. **Checkout & Payment**: Donor clicks "Donate Securely" and is handed off to the payment provider (Flutterwave checkout interface) to enter payment details securely.
5. **Confirmation & Receipt**: Payment is processed, webhook marks it successful on our backend, and the donor is redirected to a success page while a receipt is emailed.

## Islamic Giving Fund Placement
- **General Fund**: Default option in all dropdowns for unrestricted giving.
- **Zakat**: Clearly labeled as "Zakat (Eligible)" in the main donation dropdown. Also featured as a dedicated navigation link in the footer (`/zakat`) for dedicated Zakat campaigns.
- **Sadaqah**: Labeled as "Sadaqah (Voluntary Charity)" in dropdowns.
- **Sadaqah Jariyah**: Added as a distinct option in the dropdown for long-term impact projects like water wells or school builds.

## Drafted Copy

**Donation Entry Sections (Homepage/Campaigns)**
> "Your contribution, no matter how small, creates ripples of change. Choose a fund or support our active appeals today."

**Trust Copy (Provider-Agnostic)**
> "100% Secure Payment. Your transaction is encrypted and processed securely by our vetted payment gateway. We do not store your card details."
> "Governance you can trace. We ensure transparency in how every penny is allocated."

## Donation CTA Tracking Table (Week 2)
| Source Page | CTA Text | Destination URL | Mikhail Approval Status |
| :--- | :--- | :--- | :--- |
| Homepage (Hero) | Donate Now | `/donate` | Pending Review |
| Homepage (Emergency) | Donate now | `/donate` | Pending Review |
| Campaign Detail | Donate £[X] | `/donate?campaign=[slug]&amount=[X]` | Pending Review |
| Campaign Detail | Give a Custom Amount | `/donate?campaign=[slug]` | Pending Review |
| Header/Footer | Donate | `/donate` | Pending Review |
| Donation Page | Donate Securely | (Submit to `/api/donations/checkout`) | Pending Review |
