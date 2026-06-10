# RAVÉA - Acceptance Test Cases

## 1. Document Information

**Project Name:** RAVÉA Beauty E-Commerce Website
**Phase:** Phase II - System Testing
**Student:** Rawan Kolko
**Document Type:** Acceptance Test Cases

---

## 2. Purpose

This document defines the acceptance test cases used to validate the main features of the RAVÉA system.

The Phase II requirements ask for a minimum of 5–8 acceptance test cases with clear expected results, pass/fail criteria, and test execution documentation. This document includes 12 acceptance test cases to cover the main implemented features.

---

## 3. Testing Scope

The acceptance tests cover the following areas:

* Account creation
* Login and logout
* Password recovery
* Product browsing
* Search, filtering, and sorting
* Product details
* Product rating
* Cart management
* Order creation
* Profile management
* Personalized recommendations

---

## 4. Acceptance Test Cases

| Test ID | Feature                         | Related User Story          | Preconditions                                                  | Test Steps                                                                                                                            | Expected Result                                                                                                                      | Pass / Fail Criteria                                                                                                      |
| ------- | ------------------------------- | --------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| TC-01   | Create Account                  | US1                         | User is not registered                                         | 1. Open Create Account page. 2. Enter full name, email, password, skin type, and skin tone. 3. Click Create Account.                  | The account is created successfully and the user data is saved.                                                                      | Pass if account is created and user can continue using the website. Fail if validation or account creation does not work. |
| TC-02   | Login                           | US2                         | User already has an account                                    | 1. Open Login page. 2. Enter valid email and password. 3. Click Login.                                                                | The user logs in successfully. The navigation changes to show Profile and Logout.                                                    | Pass if user is authenticated and redirected/updated correctly. Fail if valid credentials are rejected.                   |
| TC-03   | Logout                          | US3                         | User is logged in                                              | 1. Click Logout from the navigation bar.                                                                                              | The user is logged out and navigation returns to Login and Create Account.                                                           | Pass if user session is cleared. Fail if user remains logged in.                                                          |
| TC-04   | Browse Products                 | US5                         | Products exist in the system                                   | 1. Open Products page. 2. View the product collection.                                                                                | Product cards are displayed with image, category, name, description, price, skin type, and skin tone.                                | Pass if products appear correctly. Fail if products are missing or incomplete.                                            |
| TC-05   | Search / Filter / Sort Products | US7                         | Products page is open                                          | 1. Type a keyword in the search bar. 2. Select category Makeup, Skincare, or Tools. 3. Sort by price or top rated.                    | Product list updates according to search, category filter, and sorting option.                                                       | Pass if displayed products match the selected criteria. Fail if list does not update.                                     |
| TC-06   | View Product Details            | US6, US8                    | Product cards are displayed                                    | 1. Click a product card. 2. Open product details page.                                                                                | Product details page displays image, name, category, description, skin type, skin tone, price, rating, and Add to Beauty Bag button. | Pass if details are displayed correctly. Fail if page is missing product information.                                     |
| TC-07   | Add Product to Cart             | US9                         | Product page or product card is visible                        | 1. Click Add or Add to Beauty Bag. 2. Check cart count.                                                                               | Product is added to cart and cart count updates.                                                                                     | Pass if cart count changes and item appears in cart. Fail if product is not added.                                        |
| TC-08   | Manage Cart                     | US10, US11, US12, US13      | Cart contains at least one product                             | 1. Open Cart page. 2. View items. 3. Modify quantity. 4. Remove item if needed.                                                       | Cart displays products, quantities, and total. Total updates after quantity change or removal.                                       | Pass if cart actions update correctly. Fail if total or quantity is incorrect.                                            |
| TC-09   | Place Order                     | US14, US15, US16            | User is logged in and cart contains products                   | 1. Open cart. 2. Review cart total. 3. Click Place Order / Confirm Order.                                                             | System creates an order, displays order summary/confirmation, and clears the cart.                                                   | Pass if order is created and confirmation is shown. Fail if order is not saved or cart is not handled correctly.          |
| TC-10   | Manage Profile                  | US4, US17, US18, US20, US23 | User is logged in                                              | 1. Open Profile page. 2. Edit full name, skin type, or skin tone. 3. Click Save Changes.                                              | Profile information is updated and saved successfully.                                                                               | Pass if updated values remain visible. Fail if update is not saved.                                                       |
| TC-11   | View Recommendations            | US19                        | User is logged in and profile contains skin type and skin tone | 1. Open Recommendations page. 2. Select a category if needed.                                                                         | System displays recommended products matching the user profile, or displays a clear message if no recommendations are found.         | Pass if recommendations or clear fallback message appears. Fail if page breaks or gives unclear result.                   |
| TC-12   | Product Rating                  | US22                        | Product details page is open                                   | 1. Open a product details page. 2. View the rating section. 3. If logged in, select a star rating. If not logged in, attempt to rate. | Rating is displayed. If user is not logged in, system asks the user to login or create account before rating.                        | Pass if rating behavior matches login state. Fail if unauthorized rating is allowed or rating section fails.              |

---

## 5. Acceptance Criteria Summary

The system is accepted if:

* Main user workflows are functional.
* User can create account, login, logout, and manage profile.
* Product browsing, search, filter, sort, and product details work.
* Cart and order workflow works.
* Recommendations are displayed or a clear fallback message is shown.
* Rating section behaves correctly according to login status.
* Testing results are documented.

---

## 6. Conclusion

The acceptance test cases confirm that RAVÉA covers the main expected features of a beauty e-commerce platform, including account management, product browsing, cart/order workflow, personalized recommendations, and user interaction features such as rating.

---

---

## 7. Conclusion

The test execution confirms that the main RAVÉA workflows are functional and ready for demonstration. The website supports account creation, login, product browsing, product details, cart, order creation, profile management, recommendations, rating behavior, and logout. All executed acceptance test cases passed successfully.
