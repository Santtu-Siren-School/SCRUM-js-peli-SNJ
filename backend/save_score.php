<?php

$servername = "localhost";
$username = "root";          // XAMPP:n oletuskäyttäjä
$password = "";              // Oletus on tyhjä salasana
$dbname = "pelidata";

// Yhdistä MySQL-tietokantaan
$conn = new mysqli($servername, $username, $password, $dbname);

// Tarkista yhteys
if ($conn->connect_error) {
    die("Yhteys epäonnistui: " . $conn->connect_error);
}

// Haetaan POST-data
$nimi = $_POST['nimi'] ?? '';
$pisteet = intval($_POST['pisteet'] ?? 0);
$kuolemat = intval($_POST['kuolemat'] ?? 0);
$aika = intval($_POST['aika'] ?? 0);

// Valmistellaan SQL-lause virheiden välttämiseksi
$stmt = $conn->prepare("INSERT INTO scores (nimi, pisteet, kuolemat, aika) VALUES (?, ?, ?, ?)");
$stmt->bind_param("siii", $nimi, $pisteet, $kuolemat, $aika);

// Suorita kysely ja anna vastaus
if ($stmt->execute()) {
    echo "Tulos tallennettu onnistuneesti";
} else {
    echo "Virhe tallennuksessa: " . $stmt->error;
}

// Sulje yhteydet
$stmt->close();
$conn->close();
?>
