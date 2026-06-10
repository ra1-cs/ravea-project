# RAVÉA - Test Execution Report

## 1. Document Information

**Project Name:** RAVÉA Beauty E-Commerce Website
**Phase:** Phase II - System Testing
**Student:** Rawan Kolko
**Academic Year:** 2025–2026
**Document Type:** Test Execution Report

---

## 2. Purpose

This document records the execution results of the acceptance test cases prepared for the RAVÉA system. The goal is to verify that the final website satisfies the main user requirements and handles the principal real-world workflows.

---

## 3. Test Environment

| Item           | Description                              |
| -------------- | ---------------------------------------- |
| Frontend       | React web application                    |
| Backend        | ASP.NET Core Web API                     |
| Database       | SQL Server / relational database         |
| Browser        | Chrome / Edge                            |
| Execution Type | Manual acceptance testing                |
| Test Data      | Sample user accounts and beauty products |
| Website URL    | `http://localhost:5173`                  |

---

## 4. Test Execution Results

| Test ID | Feature                | Execution Steps Summary                                                  | Expected Result                                                                      | Actual Result                                                                                  | Status | Notes                                                        |
| ------- | ---------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------ |
| TC-01   | Create Account         | Created an account with name, email, password, skin type, and skin tone. | Account should be created successfully.                                              | Account was created successfully.                                                              | Pass   | Registration form includes skin type and skin tone.          |
| TC-02   | Login                  | Logged in using valid user credentials.                                  | User should access account features.                                                 | User logged in and Profile/Logout appeared.                                                    | Pass   | Navigation changed after login.                              |
| TC-03   | Logout                 | Clicked Logout from navigation bar.                                      | User should be logged out.                                                           | User returned to guest navigation state.                                                       | Pass   | Login/Create Account became visible.                         |
| TC-04   | Browse Products        | Opened Products page.                                                    | Products should be displayed.                                                        | Product cards appeared with images, categories, descriptions, prices, skin type/tone tags.     | Pass   | Product list visible.                                        |
| TC-05   | Search / Filter / Sort | Used search bar, category filters, and sorting buttons.                  | Product list should update.                                                          | Product list updated according to selected criteria.                                           | Pass   | Filters include All, Makeup, Skincare, Tools.                |
| TC-06   | View Product Details   | Opened a product details page.                                           | Product detail information should appear.                                            | Product image, name, category, description, price, skin tone/type and rating section appeared. | Pass   | Rating section visible.                                      |
| TC-07   | Add Product to Cart    | Clicked Add / Add to Beauty Bag.                                         | Product should be added to cart.                                                     | Cart count updated and item was added.                                                         | Pass   | Cart count visible in navbar.                                |
| TC-08   | Manage Cart            | Opened cart, reviewed items, quantity, and total.                        | Cart should show items and total.                                                    | Cart behavior worked as expected.                                                              | Pass   | Cart workflow prepared for demo.                             |
| TC-09   | Place Order            | Confirmed cart order.                                                    | Order should be created and confirmation shown.                                      | Order was created and confirmation/summary displayed.                                          | Pass   | Backend order flow creates order from cart.                  |
| TC-10   | Manage Profile         | Edited name, skin type, and skin tone on Profile page.                   | Profile should be updated.                                                           | Updated values were saved and shown.                                                           | Pass   | Profile page includes Save Changes and View Recommendations. |
| TC-11   | View Recommendations   | Opened Recommendations page after profile update.                        | Recommendations or fallback message should appear.                                   | Recommendations page displayed personalized section or “No recommendations found” message.     | Pass   | Clear fallback message exists.                               |
| TC-12   | Product Rating         | Opened product details and tested rating behavior.                       | Rating should display; unauthenticated user should be asked to login/create account. | Rating display worked and guest user was asked to login/create account.                        | Pass   | Rating section visible on product details page.              |

---

## 5. Test Summary

| Metric                    | Result     |
| ------------------------- | ---------- |
| Total test cases executed | 12         |
| Passed                    | 12         |
| Failed                    | 0          |
| Blocked                   | 0          |
| Overall result            | Successful |

---

## 6. Defects and Observations

| Observation ID | Description                                                                                                             | Severity | Status             |
| -------------- | ----------------------------------------------------------------------------------------------------------------------- | -------- | ------------------ |
| OBS-01         | The Recommendations page may display “No recommendations found” if no product matches the selected skin profile.        | Low      | Accepted behavior  |
| OBS-02         | Rating requires login/create account for unauthenticated users.                                                         | Low      | Expected behavior  |
| OBS-03         | Security improvements such as password hashing and token-based authentication are recommended for a production version. | Medium   | Future improvement |

---

## 7. Conclusion

The test execution confirms that the main RAVÉA workflows are functional and ready for demonstration. The website supports account creation, login, product browsing, product details, cart, order creation, profile management, recommendations, rating behavior, and logout. All executed acceptance test cases passed successfully.
