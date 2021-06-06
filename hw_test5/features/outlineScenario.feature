@outlineScenario
Feature: Summ for calculator-online
    
    Scenario: should correctly work summ for calculator into https://www.calculator.net/
        When Enter and summ <Number1> and <Number2>
        Then Correctly summ value = <Summ>
        Examples:
            | Number1 | Number2 | Summ |
            | 0       | 0       | 0    |
            | 1       | 1       | 2    |
