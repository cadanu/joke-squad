<!DOCTYPE html>
<!-- GDJ -->
<html lang="en-us">

    <head>
        <title>Joke Squad</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" type="text/css" media="screen" href="./css/main.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script rel="JavaScript" type="text/javascript" src="./js/main.js"></script>
    </head>

    <body class="grid-container">
        <?php include "header.php" ?>
        <br>

        <!--<main>-->
            <section class="grid-item-1">
                <span id="joke-area">Random jokes by your favorite neighborhood coder, Chuck Norris Edition! Select a category or just click for jokes!</span>
            </section>
            <br>

            <fieldset class="grid-item-2">
                <legend>Categories</legend>
                <select id="joke-categories">
                    <!--<option></option>-->
                </select>
                <span class="button-div">
                    <button id="make-laugh" class="buttons">Make Me Laugh</button>
                </span>
            </fieldset>
            <br>

            <section class="grid-item-3">
                <span id="info-area"><!--<Info Area--></span>
            </section>
            <br>
        <?php include "footer.php" ?>
        <br>
    </body>

</html>
