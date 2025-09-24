Flag guessing game FlagIt by Georgina Rimmer and Kieron Horobin hosted at flagit.georgiex.co.uk 2025


Original Plan

// country + wrongCountries already in state

// shuffle to assign correct country to a button (writeQuestion), happens each time gameStage changes. shuffle letters A-D, assign 1 to correct country and others to other letters

// progress gamestage by 1 after any answer button clicked (handleButtons)

// add to score if answer correct (handleButtons)

// show green for correct answer, red for wrong (CSS)

// potentially avoid double clicking by accident (errors)
 


Update

We used flagCDN.com for the API after trying a few others which would miss or have errors with certain flags. Rewrote game logic to generate all the questions at the start which helped to avoid repeat questions throughout the game. Added a second game mode to test all countries in a survival format. Potential future task of including a highscore (using firebase). 