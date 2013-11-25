$(document).ready(function() {

    var tab_pool = ["tab_Chemical", "tab_Applications", "tab_CropLand", "tab_WaterBody"];
    var uptab_pool = ["Chemical", "Applications", "CropLand", "WaterBody"];
    var visible = $(".tab:visible").attr('class').split(" ")[1];
    var curr_ind = $.inArray(visible, tab_pool);
    $(".submit").hide();
    $(".back").hide();

    $('li.Chemical').click(function(){
        curr_ind = 0;
        $('li.Chemical').addClass('tabSel').removeClass('tabUnsel');
        $('li.Applications, li.CropLand, li.WaterBody').addClass('tabUnsel').removeClass('tabSel');
        $(".tab:visible").hide();
        $('.tab_Chemical').show();
        $(".back").hide();
        $(".submit").hide();
        $(".next").show();
    });

    $('li.Applications').click(function(){
        curr_ind = 1;
        $('li.Applications').addClass('tabSel').removeClass('tabUnsel');
        $('li.Chemical, li.CropLand, li.WaterBody').addClass('tabUnsel').removeClass('tabSel');
        $(".tab:visible").hide();
        $('.tab_Applications').show();
        $(".back").show();
        $(".submit").hide();
        $(".next").show();
    });

    $('li.CropLand').click(function(){
        curr_ind = 2;
        $('li.CropLand').addClass('tabSel').removeClass('tabUnsel');
        $('li.Applications, li.Chemical, li.WaterBody').addClass('tabUnsel').removeClass('tabSel');
        $(".tab:visible").hide();
        $('.tab_CropLand').show();
        $(".back").show();
        $(".submit").hide();
        $(".next").show();
    });

    $('li.WaterBody').click(function(){
        curr_ind = 3;
        $('li.WaterBody').addClass('tabSel').removeClass('tabUnsel');
        $('li.Applications, li.Chemical, li.CropLand').addClass('tabUnsel').removeClass('tabSel');
        $(".tab:visible").hide();
        $('.tab_WaterBody').show();
        $(".back").show();
        $(".submit").show();
        $(".next").hide();
    });

    $('.next').click(function () {
        var tab = $(".tab:visible");
        if (curr_ind < 3) {      
            $(".tab:visible").hide();
            $("."+ uptab_pool[curr_ind]).addClass('tabUnsel').removeClass('tabSel');
            curr_ind = curr_ind + 1;
            $("." + tab_pool[curr_ind]).show();
            $("."+ uptab_pool[curr_ind]).addClass('tabSel').removeClass('tabUnsel');
            $(".submit").hide();
            $(".back").show();
            }
        if (curr_ind == 3) {
            $(".submit").show();
            $(".next").hide();
        }
    });

    $('.back').click(function () {
        if (curr_ind > 0) {
            $(".tab:visible").hide();
            $("."+ uptab_pool[curr_ind]).addClass('tabUnsel').removeClass('tabSel');
            curr_ind = curr_ind - 1;
            $("." + tab_pool[curr_ind]).show();
            $("."+ uptab_pool[curr_ind]).addClass('tabSel').removeClass('tabUnsel');
            $(".submit").hide();
            $(".next").show();
        }
        if (curr_ind == 0) {
            $(".back").hide();
        }
    });

});
   //  $('#id_avian_NOAEL').val($('#id_avian_NOAEC').val()/20);
   //  $('#id_avian_NOAEC').change(function() { 
   //      $('#id_avian_NOAEL').val($(this).val()/20);
   //  })

   //  $('#id_mammalian_NOAEL').val($('#id_mammalian_NOAEC').val()/20);
   //  $('#id_mammalian_NOAEC').change(function() { 
   //      $('#id_mammalian_NOAEL').val($(this).val()/20);
   //  });
   //  $('#id_seed_treatment_formulation_name').closest('tr').hide();
   //  $('#id_maximum_seedling_rate_per_use').closest('tr').hide();
   //  $('#id_seed_crop').closest('tr').hide();
   //  $('#id_bandwidth').closest('tr').hide();
   //  $('#id_row_sp').closest('tr').hide();
   //  $('#id_density_of_product').closest('tr').hide();

   //  $('#id_Application_type').change(function() { 
   //      if ($(this).val() == 'Seed Treatment'){
   //          $('#id_seed_treatment_formulation_name').closest('tr').show(); 
   //          $('#id_maximum_seedling_rate_per_use').closest('tr').show();
   //          $('#id_density_of_product').closest('tr').show();
   //          $('#id_seed_crop').closest('tr').show();
   //          $('#id_bandwidth').closest('tr').hide();
   //          $('#id_row_sp').closest('tr').hide();
   //          $('#id_Foliar_dissipation_half_life').closest('tr').hide();
   //          $('#id_percent_incorporated').closest('tr').hide();
   //          $('.tab_Application').show()
   //          $('#rate_head').text('Rate (fl oz/cwt)')
   //          $('#id_noa').val(1)
   //          $("#id_noa").prop("disabled", true);
   //          while (i-1 > 1) {
   //              $(".tab_Application tr:last").remove();
   //              i=i-1
   //          }

   //          $('#id_maximum_seedling_rate_per_use').val($('#id_seed_crop').val())
   //          $('#id_seed_crop_v').val($('#id_seed_crop :selected').text())

   //          $('#id_seed_crop').change(function () {
   //              $('#id_maximum_seedling_rate_per_use').val($(this).val())
   //              $('#id_seed_crop_v').val($('#id_seed_crop :selected').text())
   //          })
   //      }
   //      else if ($(this).val() == 'Row/Band/In-furrow-Granular'){
   //          $('.tab_Application').show()
   //          $('#rate_head').text('Rate (lb ai/acre)')
   //          $("#id_noa").prop("disabled", false);
   //          $('.seed').remove()
   //          $('#id_seed_treatment_formulation_name').closest('tr').hide(); 
   //          $('#id_maximum_seedling_rate_per_use').closest('tr').hide();
   //          $('#id_density_of_product').closest('tr').hide();
   //          $('#id_seed_crop').closest('tr').hide();
   //          $('#id_Foliar_dissipation_half_life').closest('tr').show();
   //          $('#id_percent_incorporated').closest('tr').show();
   //          $('#id_bandwidth').closest('tr').show();
   //          $('#id_row_sp').closest('tr').show();
   //      }
   //       else if ($(this).val() == 'Row/Band/In-furrow-Liquid'){
   //          $('.tab_Application').show()
   //          $('#rate_head').text('Rate (lb ai/acre)')
   //          $("#id_noa").prop("disabled", false);
   //          $('.seed').remove()
   //          $('#id_seed_treatment_formulation_name').closest('tr').hide(); 
   //          $('#id_maximum_seedling_rate_per_use').closest('tr').hide();
   //          $('#id_density_of_product').closest('tr').hide();
   //          $('#id_seed_crop').closest('tr').hide();
   //          $('#id_Foliar_dissipation_half_life').closest('tr').show();
   //          $('#id_percent_incorporated').closest('tr').show();
   //          $('#id_bandwidth').closest('tr').show();
   //          $('#id_row_sp').closest('tr').show();
   //      }
   //      else{
   //          $('.tab_Application').show()
   //          $('#rate_head').text('Rate (lb ai/acre)')
   //          $("#id_noa").prop("disabled", false);
   //          $('.seed').remove()
   //          $('#id_seed_treatment_formulation_name').closest('tr').hide(); 
   //          $('#id_maximum_seedling_rate_per_use').closest('tr').hide();
   //          $('#id_density_of_product').closest('tr').hide();
   //          $('#id_seed_crop').closest('tr').hide();
   //          $('#id_bandwidth').closest('tr').hide();
   //          $('#id_Foliar_dissipation_half_life').closest('tr').show();
   //          $('#id_percent_incorporated').closest('tr').show();
   //          $('#id_row_sp').closest('tr').hide();
   //     }
   //  });    

   //  var i = 2

   //      var total = $('#id_noa').val()
   //      $('tr[id*="noa_header"]').show()

   //      while (i <= total) {
   //          if (i==1){
   //              $('.tab_Application').append('<tr class="tab_noa1"><td><input name="jm' + i + '" type="text" size="5" value="' + i + '"/></td><td><input type="text" size="5" name="rate' + i + '" id="id_rate' + i + '" value="4"/></td><td><input type="text" size="5" name="day' + i + '" id="id_day' + i + '"  value="0" /></td></tr>');
   //          }

   //          else {
   //              $('.tab_Application').append('<tr class="tab_noa1"><td><input name="jm' + i + '" type="text" size="5" value="' + i + '"/></td><td><input type="text" size="5" name="rate' + i + '" id="id_rate' + i + '" value="4"/></td><td><input type="text" size="5" name="day' + i + '" id="id_day' + i + '" value="' + 3*(i-1) + '"/></td></tr>');
   //          }
   //          i = i + 1;
   //      }
   //      while (i-1 > total) {
   //          $(".tab_Application tr:last").remove();
   //          i=i-1
   //      }
   //      $('</table>').appendTo('.tab_Application');


   //  $('#id_noa').change(function () {
   //  	var total = $(this).val()
   //  	$('tr[id*="noa_header"]').show()

   //  	while (i <= total) {
   //  		if (i==1){
   //  			$('.tab_Application').append('<tr class="tab_noa1"><td><input name="jm' + i + '" type="text" size="5" value="' + i + '"/></td><td><input type="text" size="5" name="rate' + i + '" id="id_rate' + i + '" value="4"/></td><td><input type="text" size="5" name="day' + i + '" id="id_day' + i + '"  value="0" /></td></tr>');
   //  		}

   //  		else {
   //  			$('.tab_Application').append('<tr class="tab_noa1"><td><input name="jm' + i + '" type="text" size="5" value="' + i + '"/></td><td><input type="text" size="5" name="rate' + i + '" id="id_rate' + i + '" value="4"/></td><td><input type="text" size="5" name="day' + i + '" id="id_day' + i + '" value="' + 3*(i-1) + '"/></td></tr>');
   //  		}
   //  		i = i + 1;
   //  	}
   //  	while (i-1 > total) {
   //  		$(".tab_Application tr:last").remove();
   //  		i=i-1
   //  	}
   //  	$('</table>').appendTo('.tab_Application');
   //  })

   //  $('#id_Species_of_the_tested_bird_avian_ld50').change(function() { 
   //      if ($(this).val() == "Bobwhite quail"){
   //          $('#id_bw_avian_ld50').val(178);
   //      }
   //      else if ($(this).val() == "Mallard duck"){
   //          $('#id_bw_avian_ld50').val(1580);
   //      }
   //      else{
   //          $('#id_bw_avian_ld50').val(7);
   //     }
   // });

   //  $('#id_Species_of_the_tested_bird_avian_lc50').change(function() { 
   //      if ($(this).val() == "Bobwhite quail"){
   //          $('#id_bw_avian_lc50').val(178);
   //      }
   //      else if ($(this).val() == "Mallard duck"){
   //          $('#id_bw_avian_lc50').val(1580);
   //      }
   //      else{
   //          $('#id_bw_avian_lc50').val(7);
   //     }
   // });

   //  $('#id_Species_of_the_tested_bird_avian_NOAEC').change(function() { 
   //      if ($(this).val() == "Bobwhite quail"){
   //          $('#id_bw_avian_NOAEC').val(178);
   //      }
   //      else if ($(this).val() == "Mallard duck"){
   //          $('#id_bw_avian_NOAEC').val(1580);
   //      }
   //      else{
   //          $('#id_bw_avian_NOAEC').val(7);
   //     }
   // });

   //  $('#id_Species_of_the_tested_bird_avian_NOAEL').change(function() { 
   //      if ($(this).val() == "Bobwhite quail"){
   //          $('#id_bw_avian_NOAEL').val(178);
   //      }
   //      else if ($(this).val() == "Mallard duck"){
   //          $('#id_bw_avian_NOAEL').val(1580);
   //      }
   //      else{
   //          $('#id_bw_avian_NOAEL').val(7);
   //     }
   // });

// });
