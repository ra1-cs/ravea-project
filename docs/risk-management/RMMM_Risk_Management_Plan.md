# RAVÉA - RMMM Risk Management Plan

## 1. Document Information

**Project Name:** RAVÉA Beauty E-Commerce Website
**Phase:** Phase II - Incremental Development & Engineering Practice
**Student:** Rawan Kolko
**Academic Year:** 2025–2026
**Course:** Software Engineering Project
**Document Type:** Risk Mitigation, Monitoring, and Management Plan

---

## 2. Purpose of the RMMM Plan

The purpose of this document is to identify the main risks that may affect the RAVÉA project and define how each risk will be mitigated, monitored, and managed.

RAVÉA is a web-based beauty e-commerce platform that allows users to browse makeup, skincare, and beauty tools, create an account, manage their profile, add products to cart, place orders, rate products, and receive product recommendations based on skin type and skin tone.

This RMMM plan helps ensure that the project is delivered in a professional way by anticipating possible problems and preparing solutions before they affect the final delivery.

---

## 3. Risk Management Approach

The risk management process followed in this project includes:

1. **Risk Identification**
   Identify technical, schedule, testing, security, documentation, and demo risks.

2. **Risk Analysis**
   Evaluate each risk using probability and impact.

3. **Risk Mitigation**
   Define preventive actions to reduce the chance or effect of the risk.

4. **Risk Monitoring**
   Track the risk during development using Trello, GitHub, testing, and manual review.

5. **Risk Management / Contingency Plan**
   Define what to do if the risk actually happens.

---

## 4. Risk Probability and Impact Scale

| Level  | Meaning                                     |
| ------ | ------------------------------------------- |
| Low    | Unlikely to happen or low effect on project |
| Medium | Possible risk with noticeable effect        |
| High   | Likely or very serious effect on delivery   |

---

## 5. Risk Table

| Risk ID | Risk Description                                                                                     | Probability | Impact | Mitigation Strategy                                                                                                                                                           | Monitoring Strategy                                                            | Management / Contingency Plan                                                                                                      |
| ------- | ---------------------------------------------------------------------------------------------------- | ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| R1      | Schedule delay because the project is developed individually and Phase II requires many deliverables | Medium      | High   | Divide the work into clear tasks using Trello. Prioritize mandatory Phase II deliverables first: diagrams, testing, risk plan, report, presentation, and demo.                | Check Trello progress daily and move completed tasks to Done - Final Delivery. | If time becomes limited, focus on required artifacts and core demo features first. Reduce extra optional features or polish tasks. |
| R2      | Incomplete documentation before final submission                                                     | Medium      | High   | Organize documentation inside GitHub under the `docs` folder. Prepare each document separately: diagrams, testing, risk management, report, and presentation.                 | Review GitHub folders regularly and compare them with Phase II requirements.   | Complete missing documents immediately and upload both source and final files when possible.                                       |
| R3      | Cart or order workflow bugs during the live demo                                                     | Medium      | High   | Test the full shopping flow before presentation: browse product, add to cart, view cart, place order, and show confirmation.                                                  | Run acceptance test cases and repeat the final demo scenario multiple times.   | If a bug appears during demo, use screenshots as backup and explain the expected workflow clearly.                                 |
| R4      | Recommendation results may be empty or not accurate for some skin type / skin tone combinations      | Medium      | Medium | Use clear matching rules based on user profile. Display a clear message such as “No recommendations found” when no product matches.                                           | Test several profiles with different skin types and tones.                     | If no recommendation appears, demonstrate how updating the profile can improve recommendations.                                    |
| R5      | Security weakness in authentication and password handling                                            | Medium      | High   | Avoid exposing sensitive data. Clearly document future improvements such as password hashing, JWT authentication, authorization checks, and rate limiting for password reset. | Review login, register, profile update, and password recovery behavior.        | Mention security limitations in the final report and presentation, and propose improvements for a production version.              |
| R6      | Missing tests or weak test evidence                                                                  | Medium      | Medium | Prepare acceptance test cases with clear expected results and pass/fail status. Execute the tests manually on the final website.                                              | Keep the test execution report inside `docs/testing`.                          | Add missing test cases before submission and update the execution status.                                                          |
| R7      | GitHub repository may look incomplete or disorganized to the evaluator                               | Low         | Medium | Structure the repository using `frontend`, `backend`, and `docs`. Add subfolders for diagrams, testing, risk management, phase2, and presentation.                            | Review the repository after each upload.                                       | Add README files and make sure final documents are uploaded in the correct folders.                                                |
| R8      | Live demo failure because the local server, database, or frontend does not start correctly           | Medium      | High   | Prepare the local environment before presentation. Test frontend and backend startup. Keep screenshots of important pages as backup.                                          | Run the full demo before the presentation day.                                 | If the local demo fails, present screenshots and explain the workflow using the documentation and diagrams.                        |

---

## 6. Highest Priority Risks

The most critical risks for RAVÉA are:

1. **Schedule delay** because the project has many deliverables.
2. **Documentation incompleteness** because Phase II heavily evaluates process and artifacts.
3. **Cart/order bugs** because the order workflow is a core e-commerce feature.
4. **Security weakness** because user accounts and passwords are involved.
5. **Live demo failure** because the final presentation requires a working system demonstration.

---

## 7. Risk Monitoring Plan

| Monitoring Item          | Tool / Evidence        | Frequency                      |
| ------------------------ | ---------------------- | ------------------------------ |
| Sprint progress          | Trello board           | Daily during final preparation |
| Source code organization | GitHub repository      | After each major update        |
| Diagrams completion      | `docs/diagrams` folder | Once after export              |
| Testing progress         | Acceptance test table  | During final testing           |
| Documentation status     | GitHub docs folder     | Before final submission        |
| Demo readiness           | Final demo scenario    | Before presentation            |

---

## 8. Conclusion

The RMMM plan supports the professional management of the RAVÉA project by identifying possible risks early and defining actions to reduce their impact. The main risk control strategies are Trello tracking, GitHub organization, acceptance testing, documentation review, and preparation of a stable demo scenario.
