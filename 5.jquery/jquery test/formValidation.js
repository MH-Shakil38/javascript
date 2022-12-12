$('#result').hide()
		$(document).ready(function(){
				
				$('#firstname').focusout(function(){
				var fnameLen=$('#firstname').val().length;
				if (fnameLen > 3 || fnameLen<15 ) {
				
				alert(fnameLen)

			}else{
				$('#user_name_error').text('firstname 3-15 char')
				$('#user_name_error').css('color','red')

				

			}
		})
	
	})

			$("input[type='submit']").click(function(){
			$('#result').show()
			var gender=$('input[name="gender"]:checked').val();
			var skill=[];
			$.each($('input[name="skill"]:checked'),function(){
				skill.push($(this).val());
				
			});









			
			$('#firstname').focusout(function(){
				if (fnameLen < 3 || fnameLen>15 ) {
				$('#user_name_error').css('color','red')
			}else{
				var fname=$('#firstname').val();
				$('#input1').text(fname)

			}
			})
			
			var lname=$('#lastname').val();
			var lnamelen=$('#lastname').val().length;




















			var email=$('#email').val();


			var dob=$('#dob').val();

			var mobile=$('#p_num').val();

			var password=$('input[type="password"]').val().length;

			var color=$('#favcolor').val();
			var file=$('#myfile').val();






			 	$('#input2').text(lname)
			 	$('#input3').text(email)
			 	$('#input4').text(dob)
			 	$('#input5').text(mobile)
			 	$('#input6').text(password)
			 	$('#input7').text(color)
			 	$('#input8').text(file)
			 	$('#input9').text(skill)
			 	$('#input10').text(gender)
			 	alert(fnameLen)
			 	
			 	
			
				
			})
