<?php

$recepient = "g0s@ya.ru";
$sitename = "Автомойка AQUA";

$type_auto = trim($_POST["type_auto"]);
$gosnum = trim($_POST["gosnum"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$date = trim($_POST["date"]);
$time = trim($_POST["time"]);
$type_service = trim($_POST["type_service"]);
$cb1 = trim($_POST["cb1"]);
$cb2 = trim($_POST["cb2"]);
$cb3 = trim($_POST["cb3"]);
$cb4 = trim($_POST["cb4"]);
$cb5 = trim($_POST["cb5"]);
$cb6 = trim($_POST["cb6"]);
$cb7 = trim($_POST["cb7"]);
$cb8 = trim($_POST["cb8"]);

if ($type_service == 'Экспресс') {
	$summ = 50+$cb1+$cb2+$cb3+$cb4+$cb5+$cb6+$cb7+$cb8;
}
else if ($type_service == 'Контактная') {
	$summ = 75+$cb1+$cb2+$cb3+$cb4+$cb5+$cb6+$cb7+$cb8;
}
else if ($type_service == 'Бесконтактная') {
	$summ = 100+$cb1+$cb2+$cb3+$cb4+$cb5+$cb6+$cb7+$cb8;
}
else if ($type_service == 'Самообслуживание') {
	$summ = 0;
}

$message = "Тип авто: $type_auto \nГос.номер: $gosnum \nТелефон: $phone \nE-mail: $email \nДата: $date \nВремя: $time \nВид мойки: $type_service \nУслуга 1: $cb1 \nУслуга 2: $cb2 \nУслуга 3: $cb3 \nУслуга 4: $cb4 \nУслуга 5: $cb5 \nУслуга 6: $cb6 \nУслуга 7: $cb7 \nУслуга 8: $cb8 \nСумма: $summ";

$pagetitle = "Новая заявка на мойку с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>