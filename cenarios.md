# Test Cases - BisouTrip

This document outlines the core test scenarios for the BisouTrip application.

| ID | Scenario | Steps | Expected Result |
| :--- | :--- | :--- | :--- |
| **TC01** | Successful search | 1. Input Origin (NYC)<br>2. Input Destination (LAX)<br>3. Select valid dates<br>4. Click 'Search' | The system displays a list of available flights. |
| **TC02** | Invalid return date | 1. Input Origin (NYC)<br>2. Input Destination (LAX)<br>3. Departure: 2026-07-20<br>4. Return: 2026-07-15<br>5. Click 'Search' | The system displays an error message: "Return date cannot be prior to departure date." |
| **TC03** | Mandatory fields validation | 1. Leave 'Origin' field blank<br>2. Fill remaining fields<br>3. Click 'Search' | The system highlights the 'Origin' field and prevents the search. |