<?

$CARDS = array(
  "ac", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "10c", "jc", "qc", "kc",
  "ad", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "jd", "qd", "kd",
  "ah", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "jh", "qh", "kh",
  "as", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s", "js", "qs", "ks",
);

$cardMap = Array();

function valueOf($strCard) {
  global $cardMap;

  return $cardMap[$strCard] % 13;
}

function suitOf($strCard) {
  return substr($strCard, -1);
}

function displayCard($strCard) {
  global $cardMap;
  return "Card:" . $strCard . " Index:" . $cardMap[$strCard] . " Value:" . valueOf($strCard)
    . " Suit:" . suitOf($strCard);
}

for ($i = 0; $i < sizeof($CARDS); $i++) {
  $cardMap[$CARDS[$i]] = $i;
}

shuffle($CARDS);

$suits = Array();
$card1Index = -1;
$card2Index = -1;
for ($j = 0; $j < 5; $j++) {
  $card = $CARDS[$j];
  $suit = suitOf($card);
  if (array_key_exists($suit, $suits)) {
    $card1Index = $suits[$suit];
    $card2Index = $j;
  } else {
    $suits[$suit] = $j;
  }
  echo displayCard($card). "<p>";
}

$card1 = $CARDS[$card1Index];
$card2 = $CARDS[$card2Index];

$v1 = valueOf($card1);
$v2 = valueOf($card2);

echo "v1:" . $v1 . " v2:" . $v2 . "<p>";

$secretCard = "";
$interval = 0;

echo $card1 . ":" . $card2;

if ($v2 - $v1 >= 0 && $v2 - $v1 <= 6) {
  $secretCard = $card1;
  $interval = $v2 - $v1;
} else {
  $secretCard = $card2;
  $interval = $v1 - $v2;
  if ($interval < 0) $interval += 13;
}

echo "Secret card:" . $secretCard . " Interval:" . $interval;

?>
