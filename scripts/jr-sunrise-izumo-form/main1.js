javascript:(function(){
  try{
    document.getElementById('jsSelectYear').value='2026';
    document.getElementById('jsSelectMonth').value='01';
    document.getElementById('jsSelectDay').value='23';
    document.getElementById('jsSelectHour').value='21';
    document.getElementById('jsSelectMinute').value='00';
    const t=document.getElementById('jsSelectTrainType');
    t.value='izumo';
    t.dispatchEvent(new Event('change'));
    setTimeout(function(){
      document.getElementById('inputDepartStName').value='%2589%25A1%2595l';
      document.getElementById('inputArriveStName').value='%258Fo%2589_%258Es';
    },1000);
    document.getElementById('radio-box-4').checked=true;
  }catch(e){
    alert('自動入力に失敗しました: '+e.message);
  }
})();