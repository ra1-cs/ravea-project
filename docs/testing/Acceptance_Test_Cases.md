# RAVÉA - Acceptance Test Cases

## Project

RAVÉA Beauty E-Commerce Website

## Purpose

This document defines acceptance test cases used to validate the main features implemented in the RAVÉA system.

| Test ID | Related Feature / User Story | Preconditions                                        | Test Steps                                                                                                                                  | Expected Result                                                                                                                       | Actual Result | Status |
| ------- | ---------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------ |
| TC-01   | Register / Create Account    | User is not registered                               | 1. Open Create Account page. 2. Enter full name, email, password, skin type, and skin tone. 3. Click Create Account.                        | The account is created successfully and the user can access the website.                                                              | As expected   | Pass   |
| TC-02   | Login                        | User already has an account                          | 1. Open Login page. 2. Enter valid email and password. 3. Click Login.                                                                      | The user logs in successfully and the navigation changes to show Profile and Logout.                                                  | As expected   | Pass   |
| TC-03   | Browse Products              | Products exist in the system                         | 1. Open Products page. 2. View the product collection.                                                                                      | The system displays product cards with image, category, name, description, price, skin type, and skin tone.                           | As expected   | Pass   |
| TC-04   | Search and Filter Products   | Products page is open                                | 1. Type a product keyword in the search bar. 2. Select a category such as Makeup, Skincare, or Tools. 3. Try sorting by price or top rated. | The product list updates according to the selected search, filter, and sorting options.                                               | As expected   | Pass   |
| TC-05   | View Product Details         | Product list is displayed                            | 1. Click on a product card. 2. Open the product details page.                                                                               | The system displays product image, name, category, description, skin type, skin tone, price, and rating section.                      | As expected   | Pass   |
| TC-06   | Add Product to Cart          | Product details page or products page is open        | 1. Click Add or Add to Beauty Bag. 2. Open the cart.                                                                                        | The selected product is added to the cart and the cart count is updated.                                                              | As expected   | Pass   |
| TC-07   | Create Order from Cart       | User is logged in and cart contains products         | 1. Open cart. 2. Review cart items and total. 3. Confirm order.                                                                             | The order is created, the total is calculated, the order status is confirmed, and the cart is cleared.                                | As expected   | Pass   |
| TC-08   | Manage Profile               | User is logged in                                    | 1. Open Profile page. 2. Edit full name, skin type, or skin tone. 3. Click Save Changes.                                                    | The profile is updated successfully and the new skin type and skin tone are saved.                                                    | As expected   | Pass   |
| TC-09   | View Recommendations         | User is logged in with skin type and skin tone saved | 1. Open Recommendations page. 2. Select a category if needed.                                                                               | The system displays recommended products based on the user skin profile, or displays a clear message if no recommendations are found. | As expected   | Pass   |
| TC-10   | Product Rating               | User opens a product details page                    | 1. Open product details. 2. Check the rating section. 3. If logged in, select a rating. If not logged in, try to rate.                      | The system displays the rating. If the user is not logged in, the system asks the user to login or create an account before rating.   | As expected   | Pass   |
| TC-11   | Password Recovery            | User has an existing account                         | 1. Open Login page. 2. Click Forgot password. 3. Enter email. 4. Submit reset request. 5. Enter received code and new password.             | The system sends a reset code, validates it, and updates the password successfully.                                                   | As expected   | Pass   |
| TC-12   | Logout                       | User is logged in                                    | 1. Click Logout.                                                                                                                            | The user is logged out and the navigation returns to Login and Create Account.                                                        | As expected   | Pass   |

## Summary

Total test cases: 12
Passed: 12
Failed: 0

## Conclusion

The acceptance tests confirm that the main RAVÉA features are working as expected, including account creation, login, product browsing, search/filter, product details, cart, order creation, profile management, recommendations, rating, password recovery, and logout.
