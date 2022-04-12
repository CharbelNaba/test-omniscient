# Business objectives :

Our government has decided to test cognitive abilities of all adult car drivers again because there are two many accidents every year on the road.
You need to design a simple UI to test candidates and make sure they have a brain that is capable enough to drive a car.

It has to be fully responsive because many people don't have a computer and we will give them smartphone to pass the test.
It's goal is to make user add color squares to a grid, and remove them according to instructions to test their pattern recognition abilities.

## Exercice 1

1.Make four square on a screen :
- each square positionned at a different corner of the screen.
- each square has a different color : top-left : "#264653", top-right : "#2a9d8f", bottom-left : "#f4a261", bottom-right : "#e76f51"
- each square has to be big enough for people with fat fingers on mobile (at least 60x60px)

```
---------------
|  |       |  |
|--        ---|
|             |
|--        ---|
|  |       |  |
---------------
```

2.Make a central grid : 
- at the center of the screen, add 3 rows of 3 blank blocks and underneath them, 1 row of 1 blank block.

```
-------------
|   |   |   |
-------------
|   |   |   |
-------------
|   |   |   |
-------------
    |   |
    -----
```

It need to stay at the center of the screen at all time.

3. Add binding bitween the squares and the grid.

When a user clicks on a button, add that color to the grid from the top left corner. Exemple : 

* I click on bottom right corner (color #e76f51)
* grid's square marked with "x" now has a color set to : #e76f51

```
-------------
| x |   |   |
-------------
|   |   |   |
-------------
|   |   |   |
-------------
    |   |
    -----
```

If he clicks again, colors shifts to the right and eventually go to the line below, exemple : 

*I click on top-right corner (color #2a9d8f)
* grid's square marked with "y" now has a color set to : #2a9d8f

```
-------------
| y | x |   |
-------------
|   |   |   |
-------------
|   |   |   |
-------------
    |   |
    -----
```

If new line :

```
-------------
| y | x | x |
-------------
| x |   |   |
-------------
|   |   |   |
-------------
    |   |
    -----
```

If i click on any color in the grid, you must clear the squares from the grid that have this color and repaint the grid, example : 

The initial grid :

```
-------------
| y | x | x |
-------------
| x | z | z |
-------------
| x | y | w |
-------------
    | w |
    -----
```

After clicking on color "X" :

```
-------------
| y | z | z |
-------------
| y | w | w |
-------------
|   |   |   |
-------------
    |   |
    -----
```

## Excercice 1 : Big Bonus if sucessfull / Alternative solution

- You can ignore vue.js entirely and code you solution in ES6 from "src/main.js" and "public/index.html" and "public/index.css". Organize your code as you like and explain your solution.