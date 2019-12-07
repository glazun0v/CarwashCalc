$(document).ready(function() { // Ждём загрузки страницы	   

	$("input[name=cb1]").change(function () {
		var action = $("select[name=action]").val(); 
		var cb1,cb2,cb3,cb4,cb5,cb6,cb7,cb8;
		var result;

		if ($('#cb1').is(":checked")){cb1 = $('#cb1').val() * 1;} else cb1 = 0;
		if ($('#cb2').is(":checked")){cb2 = $('#cb2').val() * 1;} else cb2 = 0;
		if ($('#cb3').is(":checked")){cb3 = $('#cb3').val() * 1;} else cb3 = 0;
		if ($('#cb4').is(":checked")){cb4 = $('#cb4').val() * 1;} else cb4 = 0;
		if ($('#cb5').is(":checked")){cb5 = $('#cb5').val() * 1;} else cb5 = 0;
		if ($('#cb6').is(":checked")){cb6 = $('#cb6').val() * 1;} else cb6 = 0;
		if ($('#cb7').is(":checked")){cb7 = $('#cb7').val() * 1;} else cb7 = 0;
		if ($('#cb8').is(":checked")){cb8 = $('#cb8').val() * 1;} else cb8 = 0;

		if (action == 'Экспресс') {
			result = 50+cb1+cb2+cb3+cb4+cb5+cb6+cb7+cb8;
		}
		else if (action == 'Контактная'){
			result = 75+cb1+cb2+cb3+cb4+cb5+cb6+cb7+cb8;
		}
		else if (action == 'Бесконтактная'){
			result = 100+cb1+cb2+cb3+cb4+cb5+cb6+cb7+cb8;
		}
		else if (action == 'Самообслуживание'){
			result = 0;
		}
		$('#result').html('<h2>Стоимость ' + result + ' руб</h2>');
	});

	$("select[name=action]").change(function() {
		var action = $("select[name=action]").val(); 
		var cb1,cb2,cb3,cb4,cb5,cb6,cb7,cb8;
		var result;

		if ($('#cb1').is(":checked")){cb1 = $('#cb1').val() * 1;} else cb1 = 0;
		if ($('#cb2').is(":checked")){cb2 = $('#cb2').val() * 1;} else cb2 = 0;
		if ($('#cb3').is(":checked")){cb3 = $('#cb3').val() * 1;} else cb3 = 0;
		if ($('#cb4').is(":checked")){cb4 = $('#cb4').val() * 1;} else cb4 = 0;
		if ($('#cb5').is(":checked")){cb5 = $('#cb5').val() * 1;} else cb5 = 0;
		if ($('#cb6').is(":checked")){cb6 = $('#cb6').val() * 1;} else cb6 = 0;
		if ($('#cb7').is(":checked")){cb7 = $('#cb7').val() * 1;} else cb7 = 0;
		if ($('#cb8').is(":checked")){cb8 = $('#cb8').val() * 1;} else cb8 = 0;

		if (action == 'Экспресс') {
			result = 50+cb1+cb2+cb3+cb4+cb5+cb6+cb7+cb8;
		}
		else if (action == 'Контактная'){
			result = 75+cb1+cb2+cb3+cb4+cb5+cb6+cb7+cb8;
		}
		else if (action == 'Бесконтактная'){
			result = 100+cb1+cb2+cb3+cb4+cb5+cb6+cb7+cb8;
		}
		else if (action == 'Самообслуживание'){
			result = 0;
		}
		$('#result').html('<h2>Стоимость ' + result + ' руб</h2>');
	});

	// Согласие на обработку данных
	$("input[name=send]").click(function() {
		if ($("#agree").prop('checked') == false) { 
        window.alert('Дайте своё согласие на обработку данных!');
        /*$("#agree").css('border', '2px solid red');*/
        return false;
    }
    return true;
	});

});

