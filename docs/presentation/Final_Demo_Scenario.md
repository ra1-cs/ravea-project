# RAVÉA - Final Demo Scenario

## 1. Purpose

This document defines the live demo scenario for the final Phase II presentation. The purpose of the demo is to show that the RAVÉA website is functional and that the main user workflows are implemented.

---

## 2. Demo Preparation

Before starting the demo:

1. Start the backend server.
2. Start the frontend React application.
3. Open the website at:

```text
http://localhost:5173
```

4. Prepare a test user account.
5. Make sure the product list is visible.
6. Make sure the cart is empty or ready for demonstration.
7. Prepare screenshots as backup in case the live demo fails.

---

## 3. Demo Flow

### Step 1 - Home Page

**Action:** Open the RAVÉA home page.

**What to say:**
RAVÉA is a beauty e-commerce website for makeup, skincare, and beauty tools. The goal is to provide a luxury shopping experience with personalized recommendations based on skin type and skin tone.

**Expected result:**
The home page displays the RAVÉA brand, navigation bar, product preview, and entry buttons.

---

### Step 2 - Browse Products

**Action:** Click Products.

**What to say:**
The Products page displays the beauty collection. Users can browse products by category and view product cards containing image, category, description, price, and skin compatibility.

**Expected result:**
The product collection appears.

---

### Step 3 - Search, Filter, and Sort

**Action:** Use the search bar, category buttons, and sort options.

**What to say:**
The user can search for a product, filter by category such as Makeup, Skincare, or Tools, and sort products by price or top rated.

**Expected result:**
The product list updates based on the selected criteria.

---

### Step 4 - Product Details

**Action:** Click a product.

**What to say:**
The product details page shows the product image, name, category, description, skin type, skin tone, price, rating, and the Add to Beauty Bag button.

**Expected result:**
Product details are displayed.

---

### Step 5 - Create Account

**Action:** Click Create Account.

**What to say:**
A new user can create an account by entering full name, email, password, skin type, and skin tone. The skin profile is used later for recommendations.

**Expected result:**
The account is created successfully.

---

### Step 6 - Login

**Action:** Open Login page and enter credentials.

**What to say:**
After logging in, the navigation changes and the user can access profile, cart, recommendations, and logout.

**Expected result:**
The user is logged in and Profile/Logout appear.

---

### Step 7 - Manage Profile

**Action:** Open Profile page. Modify name, skin type, or skin tone. Click Save Changes.

**What to say:**
The profile page allows the user to manage personal beauty information. Updating skin type and skin tone affects the recommendation results.

**Expected result:**
Profile information is updated.

---

### Step 8 - View Recommendations

**Action:** Click View Recommendations or open Recommendations page.

**What to say:**
The recommendations page displays products selected according to the user skin profile. If no products match, the system displays a clear message asking the user to update skin type or skin tone.

**Expected result:**
Recommended products or a clear fallback message appear.

---

### Step 9 - Add Product to Cart

**Action:** Open product details or product card and click Add / Add to Beauty Bag.

**What to say:**
Users can add products to the cart from product cards or product details.

**Expected result:**
Cart count updates.

---

### Step 10 - Cart and Order

**Action:** Open Cart, review items, and place order.

**What to say:**
The cart allows the user to review selected products. When the order is confirmed, the backend creates the order, calculates the total, creates order items, and clears the cart.

**Expected result:**
Order summary or confirmation is displayed.

---

### Step 11 - Rating

**Action:** Open product details and show the rating section.

**What to say:**
The product details page includes a rating section. If the user is not logged in, the system asks the user to login or create an account before rating.

**Expected result:**
Rating section behaves according to login state.

---

### Step 12 - Password Recovery

**Action:** Open Login page and click Forgot password.

**What to say:**
The system supports password recovery using an email reset code. The user enters the email, receives a code, and uses it to set a new password.

**Expected result:**
The system handles the password recovery workflow.

---

### Step 13 - Logout

**Action:** Click Logout.

**What to say:**
The user can end the session using the logout button.

**Expected result:**
The navigation returns to Login and Create Account.

---

## 4. Backup Plan

If the live demo fails:

* Use screenshots of the website pages.
* Show GitHub repository structure.
* Show Trello board.
* Show UML diagrams.
* Explain the demo flow using this scenario.
* Mention that the system was tested through acceptance test cases.

---

## 5. Conclusion

This demo scenario demonstrates the main RAVÉA user journey: account creation, login, product browsing, search/filter/sort, product details, cart, order creation, profile management, personalized recommendations, rating, password recovery, and logout.
