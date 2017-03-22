function setCookie(name, value, expireDays) {
  var exdate=new Date();
  exdate.setDate(exdate.getDate() + expireDays);
  var c_value=escape(value) + ((expireDays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie=name + "=" + c_value;
}
