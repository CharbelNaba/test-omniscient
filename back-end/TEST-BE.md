# Business objectives :

## Exercice 1

We have another piece of software in the company that output customer's orders into JSON files.
We want you to build a software that converts those into CSV files for our accounting department.

However we know there are a few constraints :

- You must reject JSON files that have a depth higher than 2 levels :

file.json
  |__first level
  |____second level
  |______third level
  |________...

- You must reject JSON files that have keys containing arrays, arrays are bad...

- You must reject any JSON file that contains any key that has a value set to : "#ERROR PROCESSING"
  - You need to return a human readable error message in this format `${path_to_key} contains a processing error`, exemple `tomato_price contains a processing error`

- Each key should become a column in your CSV, if a key in nested, you need to specify the path in the column name. exemple : 

If separator is "_"
|orderId|vegetable_name|vegetable_price|currency|
|1      |tomato        |2.65           |euros   |
|2      |potato        |1.32           |dollars |

- Keys longer that 64 characters can't be used as column, you need to reject any JSON file that contains one and throw a specific error.

- You must design json test files that cover all these cases

- You must produce ";" separated csv.

## Excercice 1 : Bonus

- Add a route that converts your csv into json again.