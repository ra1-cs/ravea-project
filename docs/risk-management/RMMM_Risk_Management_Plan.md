# RAVÉA - RMMM Risk Management Plan

## Project

RAVÉA Beauty E-Commerce Website

## Purpose

This document identifies the main project risks and defines mitigation, monitoring, and management strategies.

| Risk ID | Risk Description                                                        | Probability | Impact | Mitigation Strategy                                                                                                 | Monitoring Strategy                                                | Management Plan                                                                                                                          |
| ------- | ----------------------------------------------------------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| R1      | Schedule delay due to limited development time and working individually | Medium      | High   | Prioritize the most important features first and divide work into two clear sprints.                                | Track progress using Trello and monitor completed user stories.    | Reduce scope of low-priority features if needed and focus on final deliverables.                                                         |
| R2      | Missing or incomplete documentation before final submission             | Medium      | High   | Prepare documentation in parallel with development and organize it in GitHub under the `docs` folder.               | Check Trello documentation cards regularly.                        | Complete mandatory artifacts first: diagrams, testing, risk plan, final report, and presentation.                                        |
| R3      | Bugs in cart or order creation workflow                                 | Medium      | High   | Test the full purchase workflow manually using acceptance test cases.                                               | Monitor errors during cart update and order creation.              | Fix blocking bugs immediately and document known limitations if any remain.                                                              |
| R4      | Incorrect or weak recommendation results                                | Medium      | Medium | Use skin type and skin tone as clear recommendation criteria.                                                       | Test different skin profiles and verify displayed recommendations. | Improve product matching rules and show a clear “No recommendations found” message when needed.                                          |
| R5      | Security weakness in authentication and password handling               | Medium      | High   | Avoid exposing sensitive data and plan future improvements such as password hashing and token-based authentication. | Review authentication and password recovery behavior.              | Mention security limitations in the final report and propose improvements such as hashing, JWT, authorization checks, and rate limiting. |
| R6      | GitHub repository not organized clearly for evaluation                  | Low         | Medium | Structure the repository into frontend, backend, and docs folders.                                                  | Review repository before submission.                               | Add README files, upload all diagrams, testing documents, risk plan, final report, and presentation.                                     |
| R7      | Live demo failure during presentation                                   | Medium      | High   | Prepare a fixed demo scenario and test it before the presentation.                                                  | Run the demo path multiple times before delivery.                  | Use screenshots and documentation as backup if the local demo fails.                                                                     |

## Risk Summary

The highest priority risks are schedule delay, documentation incompleteness, cart/order bugs, and security limitations. These risks are controlled through Trello tracking, GitHub organization, acceptance testing, and clear documentation.

## Conclusion

The RMMM plan helps ensure that the RAVÉA project is delivered professionally by identifying possible problems early and preparing mitigation and management actions.
