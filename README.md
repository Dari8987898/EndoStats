![Image](./src/assets/images/MarchioCompleto.png)

# EndoStats
App created to support and help the work of the [Endocare](https://www.endo-care.it/) Onlus.
</br></br>

## Description
This app is meant to read data from a specific excell file and separate/organize them in different and specific tables.</br>
This app is not meant to alter the data inside the excell but only to visualize it in an easier way.</br>

There are 3 different tables:
- #### Gruppo multidisciplinare (G)
|Riga|Nome|Cognome|Data ins.|Diagnosi|
|:------:|:------:|:------:|:----:|:-------:|
|`number`|`string`|`string`|`string`|`string`|

- #### Ambulatorio (A)
|Riga|Nome|Cognome|Data ins.|Diagnosi|N° tel.|
|:------:|:------:|:------:|:----:|:-------:|:------:|
|`number`|`string`|`string`|`string`|`string`|`string`|

- #### Da valutare (?)
|Riga|Nome|Cognome|Data ins.|Diagnosi|
|:------:|:------:|:------:|:----:|:-------:|
|`number`|`string`|`string`|`string`|`string`|

</br>

>**NOTE:** Every table has the possibility to open each row's details and show more data.

</br>

## Build
If it's the first time you are cloning this repository run `npm install`.</br>
After you can run the command `ng serve`.

The app should start without problems.
</br></br>

## Contributing
Any help is well accepted, make a pull request and you are on track!
</br></br>

## Forking
If you find this repo of some use feel free to fork!
</br></br>

### To do
- Put buttons in the toolbar to change page instead of the menu (change stile of selected button)
- Create detail page
- Change datasource aquisition method (from .csv to .xlsx files)