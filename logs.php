<?

$debug = false;

$username="cedric";
$password="nyNnW8Kx";
$database="cedric_logs";

function downloadSum($date, $column, $query) {
  $end = strtotime($date);
  $start = $end - (29 * 60 *60 * 24);

  $num = mysql_numrows($query);
  $result = 0;
  $i = 0;

  $currentDate = strtotime($date);

  while ($i < $num) {

    $date = strtotime(mysql_result($query, $i, "date"));
    $withinRange = $date >= $start && $date <= $end;
    if ($withinRange) {
      $dl = mysql_result($query, $i, $column);
      $result += $dl;
    }

    $i++;
  }

  return $result;
}

function cbQuery($query) {
  global $username, $password, $database;

  mysql_connect("db63a.pair.com", $username, $password) or die ("Can't connect");
  @mysql_select_db($database) or die("Can't find database $database");
  $result = mysql_query($query);
  $num = mysql_numrows($result);


  cbTrace($query);
  cbTrace("RESULT: $result  NUM: $num");
  mysql_close();

  return $result;

}

function cbTrace($msg) {
  global $debug;

  if ($debug) {
    print "<p align=\"right\">$msg</p>";
  }
}

$fullQuery = cbQuery("SELECT * FROM logs order by date desc;");
$result = cbQuery("SELECT * FROM logs order by date desc limit 20;");
$num = mysql_numrows($result);
$date = mysql_result($result, $i, "date");

echo "

<html><title>Logs for beust.com as of "
. $date
. "</title><body><table border=2> 
<tr>
<th>Date</th>
<th>TestNG<br>views</th>
<th>TestNG<br>downloads</th>
<th>Past<br>30 days</th>
<th>TestNG Eclipse<br>(web + update)</th>
<th>Past<br>30 days</th>
<th>UCQ<br>views</th>
<th>UCQ<br>downloads</th>
<th>Weblog<br>views</th>
<th>Weblog<br>RSS</th>
<th>Weblog<br>HTML</th>
<th>Perry Rhodan</th>
</tr>";

while ($i < $num) {

  $zip = mysql_result($result, $i, "testng_eclipse_dl");
  if ($zip == null) $zip = 0;
  $jar = mysql_result($result, $i, "testng_eclipse_dl2");
  if ($jar == null) $jar = 0;

  $eclipseSum = downloadSum($currentDate, "testng_eclipse_dl", $fullQuery)
    + downloadSum($currentDate, "testng_eclipse_dl2", $fullQuery);

  $currentDate = mysql_result($result, $i, "date");

  print "<tr> \n";
  print "<td>" . $currentDate . "</td>";
  print "<td>" . mysql_result($result, $i, "testng") . "</td>";
  print "<td><b>" . mysql_result($result, $i, "testng_dl") . "</b></td>";
  print "<td><b>" . downloadSum($currentDate, "testng_dl", $fullQuery) . "</b></td>";
  print "<td><b>" . ($zip + $jar) . " (" . $zip . " + " . $jar . ")</b></td>";
  print "<td><b>" . $eclipseSum . "</b></td>";
  print "<td>" . mysql_result($result, $i, "ejbgen") . "</td>";
  print "<td>" . mysql_result($result, $i, "ejbgen_dl") . "</td>";
  print "<td><b>" . mysql_result($result, $i, "weblog") . "</b></td>";
  print "<td>" . mysql_result($result, $i, "weblog_rss") . "</td>";
  print "<td>" . mysql_result($result, $i, "weblog_html") . "</td>";
  print "<td>" . mysql_result($result, $i, "perry") . "</td>";
  $i++;
}
print "</table></body></html>";

?>
