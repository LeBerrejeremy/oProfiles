<?php
//$min = 10;
//$max = 100;
//$nb = rand($min, $max);
////echo $nb + "\n";
//
//for($i = 1; $i<$nb; $i++){
//    if($i % 3 == 0){
//        echo"Fizz, ";
//    }elseif( $i % 5 == 0){
//        echo"Buzz, ";
//    }else{
//        echo"$i, ";
//    }
//}

$p1 = 0;
$p2= 0;
$p5= 0;
$min= 1;
$max= 100;
$nb= rand($min*100, $max*100)/100;

//Le problème du rendu de monnaie s’énonce de façon simple : étant donné un système de //pièces à disposition (je ne peux rendre que des pièces de 50 centimes, 1 euro, 2 //euros…) et un montant à rendre, rendre ce montant avec un nombre minimal de pièces du //système que l’on s’est donné. Les applications d’une solution à ce problème sont //faciles à concevoir : nul n’a envie de récupérer 1 euro en pièces de 1 centime s’il //s’est aventuré à payer 2 euros pour une malheureuse bouteille de soda à un //distributeur. Non, vraiment personne.
/*
echo "$nb, "  ;
while($nb >= 0){

    if($nb >= 2 ){
        $p2++;
        $nb= $nb -2;
    }elseif($nb >= 1){
        $p1++;
        $nb = $nb-1;
    }elseif($nb >= .5){
        $p5++;
        $nb = $nb - .5;
    }else{
        break;
    }
}

echo"$p2, $p1, $p5, $nb";*/

var_dump(1037%5);



