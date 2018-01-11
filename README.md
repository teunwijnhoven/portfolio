# Countdown

# Waarvoor kun je deze library gebruiken?

Deze library zorgt ervoor dat je eenvoudig datums met bijbehorende tijd in een tabel kunt plaatsen, vervolgens kun je vanuit deze tabel kiezen van welke datum je een countdown wilt starten. Op deze manier kun jij precies zien hoelang het evenement waar je heen gaat nog duurt!

# Hoe installeer je deze library?

1. Download de library
De library heet librarydoc.js

2. Link de javascript file
Als je gebruik wilt maken van de library zul je deze moeten linken in je html file, deze moet onderaan staan kort voordat je de body afsluit. 
"
<body>
	<script type="text/javascript" src="librarydoc.js"></script>
</body>
"


2. Voeg de benodigde HTML toe
Om alles aan te sturen is er HTML nodig, voeg onderstaande HTML toe zoals weergegeven.
"
<!DOCTYPE html>
<html>
	<head>
		<title>Table</title>

		<link rel="stylesheet" type="text/css" href="style.css">

		</style>

	</head>
	<body>

		<div class="countdownContainer">

			<div class="tab tab-1">
				<table id ="table" border="1">
					<tr>
						<th>Datum</th>
						<th>Tijd</th> 
						<th>Start Countdown</th>         
					</tr>	
				</table>
			</div>

			<div class="tabel2">
				Datum :<input type="date" id="date">
				Tijd :<input type="time" id="time">

				<button onclick="counter.addHTMLTableRow();">Voeg toe</button>

			</div>

		</div>



		<table class="countdown">
			<tr class="info">
				<td colspan="4">Countdown</td>
			</tr>
			<tr class="info">
				<td id="dagen"></td>
				<td id="uren"></td>
				<td id="minuten"></td>
				<td id="seconden"></td>
			</tr>
			<tr>
				<td>Dagen</td>
				<td>Uren</td>
				<td>Minuten</td>
				<td>Seconden</td>
		</table> 

    <script type="text/javascript" src="librarydoc.js"></script>



	</body>
</html>"
