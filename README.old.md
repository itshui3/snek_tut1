# snek_tut1 [wip]
# [Project init 10.15.20]
building a quick implementation of snekGeimu relying on various sources for carry[bcos im a noob :(]

Set-Up/Installation: 
Clone onto local end
CLI command 'yarn install'
CLI command 'yarn start'

Working Notes Below

Implementation Plan: 

Goals for myself: 
1 - get over needing to execute perfectly, practice a reliance on resources so I can work fast when needed
2 - get another rep of practice working with 

Init: 
I'll be using create-react-app's init to set-up the project first as this is a method I am used to. I'll want to create my own board since I already know how to do this. Afterwards I'll look at a few implementations and pick one that seems feasible for me. 

Set-Up: 
Basic set-up will involve a button to start the game and a board within which the edibles & snek are contained 
I'll build a grid representation of the board in the client app's state memory. Initially I will implement this simply by drilling props to pass around state info, without care for lifted state's unnecessary re-renders. I figured out how to deal with this problem in a previous project but it felt like an overcomplicated solution and I'm still feeling murky about how to re-implement that. Thus another main goal for me in this project is to get another rep in working with large numbers of components and needing to control their re-rendering with precise state management. 

Game State: 
While attempting this portion in my previous snekGame, I noticed there's a lot of in-between states to the game actually starting. For instance, game could start and then the player can place a snek. Snek could be placed, but direction hasn't been picked. Etc. I want a much simpler implementation. I think I'll even pick the direction for the player just to 'package' the game in progress state all as one thing rather than several

Mechanics: 
TBD[At this point I will research through tutorials for a quick implement]
