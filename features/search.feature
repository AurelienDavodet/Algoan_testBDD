Feature: Verify title h1 Home page

    # to check first cucumber works or not
    Scenario: Verify the h1 from the home page
        Given The browser is open
        When open the algoan page
        Then the text for the first header should be "Credit decisioning as a Service"