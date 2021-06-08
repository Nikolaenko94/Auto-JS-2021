@mainSearch
Feature: Main Search
    
    Scenario: should correctly work main-search into www.google.com
        When Enter a valid query in the search with key 'Enter'
        Then Google search page with query results correctly open

    Scenario: should working search with press button "Google Search"
        When Enter a valid query in the search and click button 'Google Search'
        Then Google search page with query results correctly open