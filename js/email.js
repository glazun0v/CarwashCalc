$(document).ready(function () {

	// Проверка пустых строк
	$("input[name=send]").click(function () {
		if ($.trim($("[id='gosnum']").val()) == '') {
			ohSnap('Введите госномер', {
				color: 'red',
				'duration': '2000'
			});
			return false;
		} else if ($.trim($("[id='phone']").val()) == '') {
			ohSnap('Введите телефон', {
				color: 'red',
				'duration': '2000'
			});
			return false;
		} else if ($.trim($("[name='date']").val()) == '') {
			ohSnap('Выберите дату', {
				color: 'red',
				'duration': '2000'
			});
			return false;
		} else if ($("[name='checkbox-agree']").prop('checked') == false) {
			/*$("#agree").css('border', '2px solid red');*/
			ohSnap('Дайте своё согласие на обработку данных', {
				color: 'red',
				'duration': '2000'
			});
			return false;
		}
		
	});

	$("#form").submit(function () {
		$.ajax({
			type: "POST",
			url: "js/email.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			ohSnap('Спасибо за заявку! Ждем Вас на мойке.', {
				color: 'green',
				'duration': '5000'
			});
			$("#form").trigger("reset");
		});
		return false;
	});

});
