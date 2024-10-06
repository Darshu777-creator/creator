function val()
{
  var user=document.ord.user.value;
  var str=/^[A-Za-z\s]+$/;
  if(!(user.match(str)))
    {
      alert("input correct name")
      document.ord.user.focus();
      return false;
    }
  var eml=document.ord.em.value;
  atpost = eml.indexOf("@");
  dotpost = eml.indexOf(".");
  if(atpost<1 || dotpost-atpost < 2)
    {
      alert("input correct email")
      document.ord.user.focus();
      return false;
    }
      var num=document.ord.mobile.value;
  if(isNaN(num) || num.length!=10)
    {
      alert("input correct Mobile number")
      document.ord.mobile.focus();
      return false;
    }
    var item=document.ord.order.value;
    let v=0
    var cont=document.ord.conti.value;
    if(isNaN(cont) || cont<=0 || cont>5)
      {
        alert("conntity 1 to 5 only")
        document.ord.cont.focus();
        return false;
      }
    

    if(item == "pizaa")
    {
        v=390*cont

    }
    else if(item == "burgar")
        {
          v=160*cont
    
        }
    else if(item == "pasta")
    {
      v=120*cont

    }
    else if(item == "gralic bread")
        {
         v=140*cont
    
        }
    confirm("bill is: "+v);

    document.getElementById("bill").value = v;
    
    

  return true;
}