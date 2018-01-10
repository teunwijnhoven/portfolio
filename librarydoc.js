var counter = (function () {

	var btnid = 1;

	var defaultSettings = {
        interval: 1,
        defaultdate: '01-01-2019',
        defaulttime: '00:00'
    }

	function myFunction(event) {
	
		var table = document.getElementById("table");

		date = table.rows[event.target.id].cells.item(0).innerHTML + " " + table.rows[event.target.id].cells.item(1).innerHTML;

		// alert(date);
		// alert(event.target.id);

		countdown();

	}

	function countdown(){
		var now = new Date();
		var eventDate = new Date(date);

		var currentTime = now.getTime();
		var eventTime = eventDate.getTime();

		var remTime = eventTime - currentTime;

		var s = Math.floor(remTime / 1000);
		var m = Math.floor(s / 60);
		var h = Math.floor(m / 60);
		var d = Math.floor(h / 24);

		h %= 24;
		m %= 60;
		s %= 60;

		h = (h < 10) ? "0" + h : h;
		m = (m < 10) ? "0" + m : m;
		s = (s < 10) ? "0" + s : s;

		document.getElementById("dagen").textContent = d;
		document.getElementById("dagen").innetText = d;

		document.getElementById("uren").textContent = h;
		document.getElementById("minuten").textContent = m;
		document.getElementById("seconden").textContent = s;

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
			
		if (date == '') {
			date = defaultSettings.defaultdate;
			alert ('Let op je hebt geen datum ingevuld, de defaultdatum word gebruikt voor de countdown ')
		}	

		if (time == '') {
			time = defaultSettings.defaulttime;
		}

		cell1.innerHTML = date;
		cell2.innerHTML = time;

		var buttonnode= document.createElement('input');
		buttonnode.setAttribute('type','button');
		buttonnode.setAttribute('value','START!');
		buttonnode.setAttribute('id',btnid);
		btnid = btnid + 1;

		cell3.appendChild(buttonnode);
		buttonnode.addEventListener("click", myFunction, false);
	}

	// 
    return {

    	myFunction: myFunction,
    	countdown: countdown,
        addHTMLTableRow: addHTMLTableRow

    }



})()