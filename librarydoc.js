var counter = (function () {

	// 
	var btnid = 1;

	// Defaultsettings wanneer de persoon geen datum invult word deze datum gekozen
	var defaultSettings = {
        interval: 1,
        defaultdate: '01-01-2019',
        defaulttime: '00:00'
    }

    // myFunction haalt de
	function myFunction(event) {
	
		var table = document.getElementById("table");

		// date = datum in betreffende regel + tijd in betreffende regel
		date = table.rows[event.target.id].cells.item(0).innerHTML + " " + table.rows[event.target.id].cells.item(1).innerHTML;

		// alert(date);
		// alert(event.target.id);

		// start countdown
		countdown();

	}

	// Start function countdown
	function countdown(){
		// Plaats in variable now de datum en in eventDate de ingevoerde datum
		var now = new Date();
		var eventDate = new Date(date);
		// Plaats in variable currentTime de huidige tijd en in eventTime de ingevoerde tijd
		var currentTime = now.getTime();
		var eventTime = eventDate.getTime();
		// Trek deze van elkaar af zodat het tijdsverschil ontstaat
		var remTime = eventTime - currentTime;
		// reken alles om naar betreffende eenheid (seconden naar minuten etc...)
		var s = Math.floor(remTime / 1000);
		var m = Math.floor(s / 60);
		var h = Math.floor(m / 60);
		var d = Math.floor(h / 24);
		// eenheid
		h %= 24;
		m %= 60;
		s %= 60;
		//
		h = (h < 10) ? "0" + h : h;
		m = (m < 10) ? "0" + m : m;
		s = (s < 10) ? "0" + s : s;
		// 
		document.getElementById("dagen").textContent = d;
		document.getElementById("dagen").innetText = d;
		//
		document.getElementById("uren").textContent = h;
		document.getElementById("minuten").textContent = m;
		document.getElementById("seconden").textContent = s;
		//
		setTimeout(countdown, defaultSettings.interval*1000);
	}


	function addHTMLTableRow()

	{

		// get table bij id, maak new  row and cells, put input in cells
		var table = document.getElementById("table"),
			newRow = table.insertRow(table.length),
			cell1 = newRow.insertCell(0),
			cell2 = newRow.insertCell(1),
			cell3 = newRow.insertCell(2),
			date = document.getElementById("date").value,
			time = document.getElementById("time").value;
		
		// Wanner geen datum is ingevuld word uit de defaultsettings de defaultdate genomen en hiervoor gewaarschuwd.	
		if (date == '') {
			date = defaultSettings.defaultdate;
			alert ('Let op je hebt geen datum ingevuld, de defaultdatum word gebruikt voor de countdown ')
		}	

		// Wanneer geen tijd is ingevuld word automatisch de tijd 00:00 ingevoerd vanuit defaulttime
		if (time == '') {
			time = defaultSettings.defaulttime;
		}

		// Plaats in cell1 en cell2 de datum en de tijd zoals ingevoerd (insert)
		cell1.innerHTML = date;
		cell2.innerHTML = time;

		// Maak een button aan in cell3 en geef deze een id mee
		var buttonnode= document.createElement('input');
		buttonnode.setAttribute('type','button');
		buttonnode.setAttribute('value','START!');
		buttonnode.setAttribute('id',btnid);
		btnid = btnid + 1;
		
		cell3.appendChild(buttonnode);

		// Roep zogauw de buttunnode word geclickt myFunction aan
		buttonnode.addEventListener("click", myFunction, false);
	}

	// Aan te roepen functies
    return {

    	myFunction: myFunction,
    	countdown: countdown,
        addHTMLTableRow: addHTMLTableRow

    }



})()