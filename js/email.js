$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "js/email.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			/*alert("Спасибо за заявку! Скоро мы с вами свяжемся.");*/
			ohSnap('Спасибо за заявку! Ждем Вас на мойке.', {color: 'green', 'duration':'5000'});	
			$("#form").trigger("reset");
		});
		return false;
	});

	// Согласие на обработку данных
	$("input[name=send]").click(function() {
		if ($("[name='checkbox-agree']").prop('checked') == false) { 
			/*alert('Дайте своё согласие на обработку данных!');*/
			/*$("#agree").css('border', '2px solid red');*/
			ohSnap('Дайте своё согласие на обработку данных!', {color: 'red', 'duration':'2000'});		
			return false;
		}		
	});
	
});