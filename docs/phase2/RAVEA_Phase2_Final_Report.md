# RAVÉA – Phase II Final Technical Report

**Lebanese University – Faculty of Sciences II**
**Department of Informatics and Statistics**
**Course:** Software Engineering Project
**Phase:** Phase II – Incremental Development & Engineering Practice
**Project:** RAVÉA Beauty E-Commerce Website
**Student:** Rawan Kolko
**Academic Year:** 2025–2026

---

# 1. Introduction

RAVÉA is a web-based beauty e-commerce platform designed for makeup, skincare, and beauty tools. The system allows users to browse products, create an account, log in, manage their profile, add products to cart, place orders, rate products, recover their password, and receive personalized recommendations based on skin type and skin tone.

Phase II focuses on incremental development and engineering practice. The goal of this phase is not only to deliver a working system, but also to demonstrate professional software engineering practices through Agile project management, GitHub organization, UML modeling, architecture design, database design, risk management, testing, and final documentation.

---

# 2. Project Overview

## 2.1 System Name

RAVÉA Beauty E-Commerce Website

## 2.2 System Type

Interactive web-based e-commerce application.

## 2.3 Main Goal

The main goal of RAVÉA is to provide a simple, elegant, and personalized shopping experience for beauty products. The platform helps users discover products that match their skin type and skin tone.

## 2.4 Target Users

The system targets:

* Guest users who want to browse products.
* Registered users who want to manage their profile, cart, recommendations, ratings, and orders.
* Future administrators who may manage products, users, and orders.

## 2.5 Main Features

The final RAVÉA website includes:

* Home page
* Product browsing
* Product details
* Product search
* Category filtering
* Product sorting
* Product rating
* User registration
* User login
* User logout
* Password recovery with email code
* Profile management
* Skin type and skin tone selection
* Personalized recommendations
* Add to cart
* Cart management
* Place order
* Order summary / confirmation

---

# 3. Phase II Development Approach

## 3.1 Agile Methodology

The project followed an Agile Scrum-inspired approach. The work was organized using Trello and divided into two main working increments.

This approach was selected because Phase II requires the delivery of two working increments and professional Agile practices. Trello was used to manage the product backlog, sprint progress, testing tasks, documentation tasks, and final delivery artifacts.

## 3.2 Incremental Development

The system was implemented through two main increments:

| Increment              | Focus                                         | Result                               |
| ---------------------- | --------------------------------------------- | ------------------------------------ |
| Increment 1 / Sprint 1 | Core e-commerce features                      | First demonstrable version           |
| Increment 2 / Sprint 2 | Advanced features, testing, and documentation | Complete system ready for final demo |

---

# 4. Sprint 1 Summary

## 4.1 Sprint 1 Goal

The goal of Sprint 1 was to build the core e-commerce workflow and deliver the first functional version of the website.

## 4.2 Sprint 1 Completed User Stories

| User Story | Description              |
| ---------- | ------------------------ |
| US1        | Create account           |
| US2        | Login                    |
| US3        | Logout                   |
| US5        | Browse products          |
| US6        | View product details     |
| US9        | Add product to cart      |
| US10       | View cart                |
| US11       | Modify product quantity  |
| US12       | Remove product from cart |
| US13       | View cart total          |

## 4.3 Sprint 1 Result

At the end of Sprint 1, the user could create an account, log in, browse the product collection, open product details, add products to the cart, and manage the cart.

This sprint produced the first demonstrable version of the RAVÉA website.

---

# 5. Sprint 2 Summary

## 5.1 Sprint 2 Goal

The goal of Sprint 2 was to complete advanced features, improve personalization, finalize the cart/order workflow, and prepare the engineering documentation.

## 5.2 Sprint 2 Completed User Stories

| User Story | Description                       |
| ---------- | --------------------------------- |
| US4        | View profile                      |
| US7        | Filter products                   |
| US8        | View product images               |
| US14       | Place order                       |
| US15       | View order summary                |
| US16       | Receive order confirmation        |
| US17       | Enter skin type                   |
| US18       | Enter skin tone                   |
| US19       | View recommended products         |
| US20       | Modify skin type                  |
| US21       | Search products                   |
| US22       | Rate product                      |
| US23       | Manage user profile               |
| US24       | Password recovery with email code |

## 5.3 Sprint 2 Result

At the end of Sprint 2, RAVÉA included profile management, personalized recommendations, rating behavior, password recovery, advanced product browsing, order creation, and final project documentation.

---

# 6. Updated Product Backlog

The updated product backlog contains 24 user stories. The stories are distributed across the following epics:

| Epic   | Description           |
| ------ | --------------------- |
| Epic 1 | Account Management    |
| Epic 2 | Product Browsing      |
| Epic 3 | Shopping Cart         |
| Epic 4 | Order Management      |
| Epic 5 | Recommendation System |

## 6.1 Velocity Summary

| Sprint   | Completed User Stories | Main Focus                           |
| -------- | ---------------------: | ------------------------------------ |
| Sprint 1 |                     10 | Core e-commerce features             |
| Sprint 2 |                     14 | Advanced features and final delivery |
| Total    |                     24 | Complete RAVÉA system                |

## 6.2 Trello Board Evidence

The Trello board includes:

* Backlog
* Sprint 1 - Done
* Sprint 2 - Done
* Testing and Documentation
* Done - Final Delivery

The Done - Final Delivery list contains final artifacts such as:

* All 24 User Stories Completed
* Phase I Document Uploaded
* GitHub Repository Structured
* Phase II UML Diagrams Completed
* Working System Completed
* Acceptance Testing Completed
* RMMM Risk Management Plan Completed
* Final Report Completed
* Final Presentation Completed

---

# 7. GitHub Repository Organization

## 7.1 Repository Structure

The GitHub repository is organized as follows:

```text
ravea-project/
├── backend/
├── frontend/
├── docs/
│   ├── phase1/
│   ├── phase2/
│   ├── diagrams/
│   ├── testing/
│   ├── risk-management/
│   └── presentation/
└── README.md
```

## 7.2 GitHub Folders

| Folder               | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| frontend             | React frontend application                      |
| backend              | ASP.NET Core backend API                        |
| docs/phase1          | Phase I document                                |
| docs/phase2          | Phase II report and sprint summaries            |
| docs/diagrams        | UML diagrams in `.puml` and `.png`              |
| docs/testing         | Acceptance test cases and test execution report |
| docs/risk-management | RMMM risk management plan                       |
| docs/presentation    | Presentation and demo scenario                  |

## 7.3 GitHub Evidence

The repository provides evidence of:

* Version control usage
* Separation between frontend and backend
* Professional documentation structure
* Diagram source files and exported images
* Testing documentation
* Risk management documentation
* Final report and presentation preparation

---

# 8. System Architecture

## 8.1 Architecture Style

RAVÉA follows a three-layer architecture:

| Layer    | Technology                       | Responsibility                   |
| -------- | -------------------------------- | -------------------------------- |
| Frontend | React, HTML, CSS, JavaScript     | User interface and navigation    |
| Backend  | ASP.NET Core Web API / C#        | Business logic and API endpoints |
| Database | SQL Server / relational database | Persistent data storage          |

## 8.2 Architecture Description

The user interacts with the React frontend. The frontend communicates with the ASP.NET Core backend through HTTP/JSON requests. The backend processes user actions and communicates with the database using Entity Framework Core. The system also uses an email service for password recovery.

## 8.3 Architecture Diagram

Diagram file:

`docs/diagrams/07_Architecture_Diagram.png`

---

# 9. Database Design

## 9.1 Main Entities

The database design includes the following main entities:

| Entity     | Description                               |
| ---------- | ----------------------------------------- |
| Users      | Stores account and profile information    |
| Products   | Stores beauty product information         |
| CartItems  | Stores products added to user carts       |
| Orders     | Stores user orders                        |
| OrderItems | Stores products inside each order         |
| Ratings    | Stores product ratings submitted by users |

## 9.2 Main Relationships

* A user can have many cart items.
* A product can appear in many cart items.
* A user can place many orders.
* An order contains many order items.
* A product can appear in many order items.
* A user can give many ratings.
* A product can receive many ratings.

## 9.3 ERD Diagram

Diagram file:

`docs/diagrams/08_Database_ERD.png`

---

# 10. System Modeling and Design

## 10.1 Use Case Diagram

The use case diagram shows the main interactions between Guest User, Registered User, and the RAVÉA system.

Diagram file:

`docs/diagrams/01_Use_Case_Diagram.png`

## 10.2 Detailed Use Case Diagrams

Two detailed use case diagrams were prepared:

| Diagram                            | File                                                                  |
| ---------------------------------- | --------------------------------------------------------------------- |
| Manage Profile and Recommendations | `docs/diagrams/10_Use_Case_Detail_Manage_Profile_Recommendations.png` |
| Create Order from Cart             | `docs/diagrams/11_Use_Case_Detail_Create_Order_From_Cart.png`         |

## 10.3 Activity Diagrams

The activity diagrams describe important workflows:

| Diagram         | File                                            |
| --------------- | ----------------------------------------------- |
| Forgot Password | `docs/diagrams/02_Activity_Forgot_Password.png` |
| Create Order    | `docs/diagrams/03_Activity_Create_Order.png`    |
| Recommendations | `docs/diagrams/09_Activity_Recommendations.png` |

## 10.4 State Diagram

The state diagram represents the lifecycle of the password reset code.

Diagram file:

`docs/diagrams/04_State_Reset_Code_Lifecycle.png`

## 10.5 Sequence Diagrams

Two sequence diagrams were prepared:

| Diagram         | File                                            |
| --------------- | ----------------------------------------------- |
| Forgot Password | `docs/diagrams/05_Sequence_Forgot_Password.png` |
| Create Order    | `docs/diagrams/06_Sequence_Create_Order.png`    |

---

# 11. Implemented Features

## 11.1 Account Management

The system supports:

* Register
* Login
* Logout
* Profile view
* Profile update
* Delete account
* Password recovery with email code

The registration form includes full name, email, password, skin type, and skin tone.

## 11.2 Product Browsing

The product section supports:

* Product listing
* Product cards
* Product images
* Product details
* Search
* Filtering by category
* Sorting by default, price, and top rated

## 11.3 Cart and Order

The cart and order workflow supports:

* Add product to cart
* View cart
* Update quantity
* Remove item
* View total
* Place order
* Receive order confirmation

## 11.4 Recommendations

The recommendation feature uses user skin type and skin tone to show suitable products. If no product matches the profile, the system displays a clear fallback message.

## 11.5 Rating

The product details page includes a rating section. If the user is not logged in, the system asks the user to login or create an account before rating.

---

# 12. System Testing

## 12.1 Testing Approach

Manual acceptance testing was used to validate the main user workflows. The tests cover account management, product browsing, cart, order, profile, recommendations, rating, password recovery, and logout.

## 12.2 Acceptance Test Cases

Test document:

`docs/testing/Acceptance_Test_Cases.md`

## 12.3 Test Execution Report

Execution report:

`docs/testing/Test_Execution_Report.md`

## 12.4 Test Summary

| Metric                      | Result     |
| --------------------------- | ---------- |
| Total acceptance test cases | 12         |
| Passed                      | 12         |
| Failed                      | 0          |
| Blocked                     | 0          |
| Overall result              | Successful |

## 12.5 Tested Features

The following features were tested:

* Create account
* Login
* Logout
* Browse products
* Search/filter/sort products
* View product details
* Add product to cart
* Manage cart
* Place order
* Manage profile
* View recommendations
* Product rating
* Password recovery

---

# 13. Risk Management

## 13.1 RMMM Plan

The Risk Mitigation, Monitoring, and Management plan identifies project risks and defines mitigation strategies.

Document file:

`docs/risk-management/RMMM_Risk_Management_Plan.md`

## 13.2 Main Risks

| Risk                        | Probability | Impact |
| --------------------------- | ----------- | ------ |
| Schedule delay              | Medium      | High   |
| Incomplete documentation    | Medium      | High   |
| Cart/order workflow bugs    | Medium      | High   |
| Weak recommendation results | Medium      | Medium |
| Security limitations        | Medium      | High   |
| Missing test evidence       | Medium      | Medium |
| Repository disorganization  | Low         | Medium |
| Live demo failure           | Medium      | High   |

## 13.3 Risk Response Strategy

The project controls risks through:

* Trello tracking
* GitHub organization
* Manual acceptance testing
* Documentation review
* Backup screenshots
* Prepared final demo scenario

---

# 14. Technical Decisions

## 14.1 Frontend

React was selected because it supports reusable components, interactive UI, routing, and state management.

## 14.2 Backend

ASP.NET Core Web API was selected because it provides a structured and scalable backend architecture using controllers and DTOs.

## 14.3 Database

A relational database was used to store users, products, cart items, orders, order items, and ratings.

## 14.4 Diagrams

PlantUML was used to create editable UML source files. Each diagram was also exported as PNG for the report and presentation.

## 14.5 Project Management

Trello was used to manage the backlog, sprints, testing, documentation, and final delivery.

## 14.6 Version Control

GitHub was used to organize source code and documentation.

---

# 15. Known Limitations and Future Improvements

## 15.1 Current Limitations

* Payment is not connected to a real payment gateway.
* Recommendation logic can be improved with more advanced matching.
* Admin dashboard is not fully included.
* Automated testing is not yet implemented.
* Password security can be improved for production use.

## 15.2 Future Improvements

Future improvements include:

* Add secure password hashing.
* Add JWT authentication.
* Add authorization checks.
* Add automated unit and integration tests.
* Add admin product management dashboard.
* Add real online payment.
* Improve recommendation algorithm.
* Add order history page.
* Add product reviews and comments.
* Add email confirmation for orders.

---

# 16. Final Demo Scenario

The final demo demonstrates the following flow:

1. Open home page.
2. Browse products.
3. Search, filter, and sort products.
4. Open product details.
5. Create account.
6. Login.
7. Manage profile.
8. View recommendations.
9. Add product to cart.
10. Place order.
11. Show rating behavior.
12. Password recovery.
13. Logout.

Demo scenario file:

`docs/presentation/Final_Demo_Scenario.md`

---

# 17. Final Submission Checklist

| Required Item                  | Status    |
| ------------------------------ | --------- |
| Working system                 | Completed |
| Live demo scenario             | Completed |
| Updated backlog                | Completed |
| Sprint 1 history               | Completed |
| Sprint 2 history               | Completed |
| Use Case Diagram               | Completed |
| 2 Detailed Use Cases           | Completed |
| 2 Activity Diagrams            | Completed |
| 1 State Diagram                | Completed |
| 2 Sequence Diagrams            | Completed |
| Architecture overview          | Completed |
| Database design / ERD          | Completed |
| RMMM Risk Management Plan      | Completed |
| Acceptance Test Cases          | Completed |
| Test Execution Report          | Completed |
| GitHub repository organization | Completed |
| Final presentation outline     | Completed |

---

# 18. Conclusion

Phase II of RAVÉA successfully delivered a functional beauty e-commerce website through two working increments. The project demonstrates core software engineering practices including Agile planning, Trello board management, GitHub organization, system modeling, database design, risk management, system testing, and final demo preparation.

RAVÉA provides a complete user journey from account creation and product browsing to cart management, order creation, profile personalization, recommendations, rating, and password recovery. The project is ready for final presentation and live demonstration.
