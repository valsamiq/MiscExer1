<?php
session_start();

if(isset($_SESSION["players"])){
    $players = $_SESSION["players"];
}
 else {
$players=array("players"=>
    [array("texto"=>"Saludo 1","edad"=>"33"), array("texto"=>"Saludo 2","edad"=>"29")]
    );
$_SESSION["players"]=$players;
}

switch($_SERVER['REQUEST_METHOD']){
    CASE "GET":
        echo json_encode($players);
        break;
    CASE "POST":
        $jsonPlayer = json_decode(file_get_contents("php://input"), false);
        array_push($players["players"], $jsonPlayer);
       echo json_encode($players);
        break;
}

$_SESSION["players"] = $players;
//echo '{"players":[{"texto":"Saludo from P1","edad":"24"},{"texto":"Saludo from P2","edad":"33"}]}';