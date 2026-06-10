# RAVÉA - Final Presentation Outline

## Slide 1 - Title

**RAVÉA Beauty E-Commerce Website**
Phase II - Incremental Development & Engineering Practice
Prepared by: Rawan Kolko

---

## Slide 2 - Project Overview

RAVÉA is a web-based beauty e-commerce platform for makeup, skincare, and beauty tools. It allows users to browse products, manage cart, place orders, rate products, recover their password, and receive personalized recommendations based on skin type and skin tone.

---

## Slide 3 - Problem and Motivation

The beauty market contains many products, making it difficult for users to choose products suitable for their skin. RAVÉA solves this by centralizing beauty products and providing personalized recommendations.

---

## Slide 4 - Main Objectives

* Provide an elegant e-commerce website
* Support account creation and login
* Allow product browsing, search, filtering, and sorting
* Support cart and order management
* Provide personalized recommendations
* Allow product rating
* Support password recovery
* Prepare professional engineering documentation

---

## Slide 5 - Technology Stack

* Frontend: React, HTML, CSS, JavaScript
* Backend: ASP.NET Core Web API / C#
* Database: SQL Server / relational database
* ORM: Entity Framework Core
* Project Management: Trello
* Version Control: GitHub
* Diagrams: PlantUML
* Presentation: Canva

---

## Slide 6 - Agile Process

The project was managed using Trello and divided into two sprints:

* Sprint 1: Core e-commerce features
* Sprint 2: Advanced features, recommendations, order completion, testing, and documentation

---

## Slide 7 - Sprint 1

Sprint 1 focused on:

* Register
* Login
* Logout
* Browse products
* View product details
* Add to cart
* View cart
* Modify cart quantity
* Remove cart item
* View cart total

Result: first demonstrable version.

---

## Slide 8 - Sprint 2

Sprint 2 focused on:

* Profile management
* Search, filter, and sort
* Recommendations
* Product rating
* Password recovery
* Order summary and confirmation
* Testing
* Risk management
* Documentation

---

## Slide 9 - Trello Board

Show the Trello board with:

* Backlog
* Sprint 1 - Done
* Sprint 2 - Done
* Testing and Documentation
* Done - Final Delivery

Mention that all 24 user stories were completed.

---

## Slide 10 - GitHub Repository

Show GitHub structure:

```text
frontend/
backend/
docs/
docs/phase1/
docs/phase2/
docs/diagrams/
docs/testing/
docs/risk-management/
docs/presentation/
```

Mention that diagrams are uploaded as both `.puml` and `.png`.

---

## Slide 11 - Website Screenshots

Show screenshots of:

* Home page
* Products page
* Product details page
* Register page
* Login page
* Profile page
* Recommendations page
* Cart page

---

## Slide 12 - System Architecture

Show the Architecture Diagram.

Explain:

* React frontend handles the user interface.
* ASP.NET Core backend handles business logic.
* Entity Framework Core connects the backend to the database.
* SQL Server / relational database stores users, products, cart items, orders, and ratings.
* EmailService supports password recovery.

---

## Slide 13 - Database Design

Show the ERD.

Main entities:

* Users
* Products
* CartItems
* Orders
* OrderItems
* Ratings

Main relationships:

* User has cart items and orders.
* Order contains order items.
* Product can appear in cart items and order items.
* User can rate products.

---

## Slide 14 - System Modeling

Show the Use Case Diagram.

Mention:

* Account management
* Product browsing
* Cart and order workflow
* Recommendations
* Rating
* Password recovery

---

## Slide 15 - Important Workflow: Create Order

Show Activity Diagram or Sequence Diagram - Create Order.

Explain:

1. User confirms cart.
2. Backend checks user.
3. Backend loads cart items.
4. System calculates total.
5. System creates order.
6. System creates order items.
7. System clears cart.
8. User receives confirmation.

---

## Slide 16 - Important Workflow: Recommendations

Show Recommendations activity diagram.

Explain:

1. User creates or updates profile.
2. User selects skin type and skin tone.
3. System filters products.
4. Recommendations page displays matching products.
5. If no products match, the system displays a clear fallback message.

---

## Slide 17 - Testing

Show testing summary:

| Metric              | Result     |
| ------------------- | ---------- |
| Test cases executed | 12         |
| Passed              | 12         |
| Failed              | 0          |
| Overall result      | Successful |

Mention tested features:

* Register
* Login
* Logout
* Products
* Search/filter/sort
* Product details
* Cart
* Order
* Profile
* Recommendations
* Rating
* Password recovery

---

## Slide 18 - Risk Management

Show RMMM summary.

Main risks:

* Schedule delay
* Incomplete documentation
* Cart/order bugs
* Recommendation mismatch
* Security limitations
* Missing test evidence
* Repository organization
* Live demo failure

Mitigation strategies:

* Trello tracking
* GitHub organization
* Manual testing
* Documentation review
* Backup screenshots
* Prepared demo scenario

---

## Slide 19 - Limitations and Future Improvements

* Add secure password hashing
* Add JWT authentication
* Add authorization checks
* Add automated unit/integration tests
* Add admin dashboard
* Add real payment
* Improve recommendation algorithm
* Add order history
* Add product reviews and comments

---

## Slide 20 - Conclusion and Questions

RAVÉA successfully demonstrates a functional beauty e-commerce system developed through an Agile process with professional documentation, testing, risk management, UML diagrams, GitHub organization, and a live demo.

**Thank you. Questions?**
