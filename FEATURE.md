# Feature: Promoted Listings - seller-side fake door

**OPPORTUNITY:** Self-serve Sponsored Listings (CPC, daily budget) → drugi strumień przychodu.
**OUTCOME:** ≥10% aktywnych sellerów (≥420/4200) konfiguruje kampanię w 14 dni.

## User flow

1. Home → klik 'Seller panel' (header).
2. Tabs: Products | Orders | Payments | Promote.
3. Promote → form: products (multi-select), budget slider 10–500 PLN, checkbox Auto-renew.
4. 'Activate campaign' → modal: 'Feature coming soon — join first wave. 100 PLN credit for email.' + email + submit.
5. Submit → 'Thank you, we'll stay in touch.'

## Kryteria akceptacji

- Jednolita wersja językowa - cały UI po angielsku, mobile-first
- Picker pokazuje ≥6 zamockowanych produktów z polami {nazwa, cena PLN, miniatura, kategoria}, np. 'Skórzany portfel męski — 149 PLN', 'T-shirt męski czarny — 99 PLN'.
- Wejście do `/seller-panel` wymaga flagi `loggedIn=true` w localStorage; bez flagi → redirect na `/login` (mock). Header panelu pokazuje 'Verified seller: Kamil'.
- Odnośnik do panelu sprzedawcy na stronie głównej znajduje się na głównej belce, w sekcji zalogowanego użytkownika

## Czego NIE budujemy

- Real auth, onboarding sellera, payment (Stripe etc.)
- Prawdziwa aukcja CPC, bidding logic
- Żywe metryki, wykresy reaktywne, dashboard z prawdziwymi danymi
- Cały reszta panelu sellera (orders, payouts, products edit) — dead links

## Przykłady

**Input:** Kamil, zalogowany na stronie sklepu, klika na stronie głównej w odnośnik do panelu sprzedawcy i wybiera opcję promowania, po czym wypełnia formularz konfiguracji kampanii.

**Oczekiwany rezultat:** Po wypełnieniu formularza otrzymuje komunikat, że funkcja jest w przygotowaniu i może zostawić swój email aby zostać poinformowanym gdy ta zostanie wydana.
