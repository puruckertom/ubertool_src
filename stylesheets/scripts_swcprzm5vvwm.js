$(document).ready(function() {
  // Number of Applications
  var i_a = 0;
  $('#id_noa').change(function () {
    var total_a = $(this).val();
    while (i_a < total_a) {
      $('.tab_Applications').append(
        '<tr><td><input id="id_day_a_'+i_a+'" type="text" name="day_a_'+i_a+'" value="1" size="2" /></td><td><input id="id_mon_a_'+i_a+'" type="text" name="mon_a_'+i_a+'" value="6" size="2" /></td><td><input id="id_year_a_'+i_a+'" type="text" name="year_a_'+i_a+'" size="4" /></td><td><input id="id_rate_a_'+i_a+'" type="text" name="rate_a_'+i_a+'" value="1.12" size="5" /></td><td><select id="id_cam_a_'+i_a+'" name="cam_a_'+i_a+'"><option value="1">Ground</option><option value="2">Foliar</option><option value="4">Incorporate</option><option value="8">@ Depth</option><option value="7">T-Band</option></select></td><td><input id="id_depth_a_'+i_a+'" type="text" name="depth_a_'+i_a+'" value="4" size="5" /></td><td><input id="id_eff_a_'+i_a+'" type="text" name="eff_a_'+i_a+'" value="0.95" size="4" /></td><td><input id="id_drift_a_'+i_a+'" type="text" name="drift_a_'+i_a+'" value="0.05" size="5" /></td></tr>'
      );
    i_a = i_a + 1;
    };
    $("input[id^='id_depth']").prop('readonly', true).css({ 'background-color':'#EBEBE4', 'color':'#EBEBE4' });
    // Specify Years?
    if ($('#id_specifyYears').val() == '0') {
      $("input[id^='id_year']").prop('disabled', true);
    } else {
      $("input[id^='id_year']").prop('disabled', false);
    }
    while (i_a > total_a) {
      $(".tab_Applications tr:last").remove();
      i_a=i_a-1;
    }
  });
  // Specify Years?
  $("#id_specifyYears").change(function() {
    if ($('#id_specifyYears').val() == '0') {
      $("input[id^='id_year']").prop('disabled', true);
    } else {
      $("input[id^='id_year']").prop('disabled', false);
    }
  });
  // Use Depth?
  function useDepth() {
    var app_nChk = $(this);
    var apptypeChk = $(this).val();
    if (apptypeChk == '1') {
      $(app_nChk).parent().next().children().prop('readonly', true).css({ 'background-color':'#EBEBE4', 'color':'#EBEBE4' });
    } else if (apptypeChk == '2') {
      $(app_nChk).parent().next().children().prop('readonly', true).css({ 'background-color':'#EBEBE4', 'color':'#EBEBE4' });
    } else {
      $(app_nChk).parent().next().children().prop('readonly', false).css({ 'background-color':'#FFFFFF', 'color':'#000' }); 
    }
  }
  $("tbody").on("change", "select[id^='id_cam_a']", useDepth );
  // Only 1 Soil Ref Temp Allowed
  var soilRefTemp = $('#id_soilHalfLife_ref').val();
  $('#id_soilHalfLife_ref_1, #id_soilHalfLife_ref_2').val(soilRefTemp).prop('readonly', true).css({ 'background-color':'#EBEBE4', 'color':'#888' });
  $('#id_soilHalfLife_ref').change(function() {
    soilRefTemp = $('#id_soilHalfLife_ref').val();
    $('#id_soilHalfLife_ref_1, #id_soilHalfLife_ref_2').val(soilRefTemp);
  });
  // Degradates
  // Temporarily disable this feature
  $('#id_deg_check').prop('disabled', true);
  $('#id_deg_check').change(function() { 
    if ($("#id_deg_check").val() == '1'){
      $(".tab_Chemical1, .tab_Chemical_MCF1").show();
      $('.tab_Chemical2, .tab_Chemical_MCF2').hide();
    }
    if ($("#id_deg_check").val() == '2'){
      $(".tab_Chemical1, .tab_Chemical_MCF1, .tab_Chemical2, .tab_Chemical_MCF2").show();
    } 
    if ($("#id_deg_check").val() == '0'){
      $(".tab_Chemical1, .tab_Chemical_MCF1, .tab_Chemical2, .tab_Chemical_MCF2").hide();
    }
  });
  // Format Form
  $(".tab_Chemical th, .tab_Chemical0 th, .tab_Chemical1 th, .tab_Chemical2 th, .tab_Chemical_MCF1 th, .tab_Chemical_MCF2 th, .tab_CropLand th, .tab_Runoff th, .tab_WaterBody th").css({width:"53.3%"});
  // Format Form (Application Tab)
  $("label[for='id_water_body_type_check'], label[for='id_fieldSize'], label[for='id_hydlength'], label[for='id_app_date_type'], label[for='id_noa'], label[for='id_specifyYears']").closest('th').attr({colspan:"5"});
  $("input[id='id_water_body_type_check'], input[id='id_fieldSize'], input[id='id_hydlength'], select[id='id_app_date_type'], select[id='id_noa'], select[id='id_specifyYears']").closest('td').attr({colspan:"3"});
  $("select[id='id_specifyYears']").prop('disabled', true);

  // Water Body Tab -> Future GUI updates

  // Add conditional logic for SimType selection

  if ( $('#id_resAvgBox').length ){
    $('#id_resAvgBox').prop('disabled', true);
    $('#id_resAvgBox').closest('tr').hide();
  }
  // Add conditional logic for "id_SimTypeFlag" = 6 to show $('#id_resAvgBox')

});