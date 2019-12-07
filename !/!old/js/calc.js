$(document).ready(function() {

	$('input[class=checkbox]').bootstrapSwitch();
	$("[name='checkbox-agree']").bootstrapSwitch();

	$('input[class=checkbox]').on('switchChange.bootstrapSwitch', function(event, state) {
		var type_service = $("select[name=type_service]").val(); 
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

		if (type_service == 'Экспресс') {
			result = 50+cb1+cb2+cb3+cb4+cb5+cb6+cb7+cb8;
		}
		else if (type_service == 'Контактная') {
			result = 75+cb1+cb2+cb3+cb4+cb5+cb6+cb7+cb8;
		}
		else if (type_service == 'Бесконтактная') {
			result = 100+cb1+cb2+cb3+cb4+cb5+cb6+cb7+cb8;
		}
		else if (type_service == 'Самообслуживание') {
			result = 0;
		}
		$('#result').html('<h2>Стоимость ' + result + ' руб</h2>');
	});

	$("select[name=type_service]").change(function() {
		var type_service = $("select[name=type_service]").val(); 
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

		if (type_service == 'Экспресс') {
			result = 50+cb1+cb2+cb3+cb4+cb5+cb6+cb7+cb8;
		}
		else if (type_service == 'Контактная') {
			result = 75+cb1+cb2+cb3+cb4+cb5+cb6+cb7+cb8;
		}
		else if (type_service == 'Бесконтактная') {
			result = 100+cb1+cb2+cb3+cb4+cb5+cb6+cb7+cb8;
		}
		else if (type_service == 'Самообслуживание') {
			result = 0;
		}
		$('#result').html('<h2>Стоимость ' + result + ' руб</h2>');
	});

});