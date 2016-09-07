var connection = new ActiveXObject("ADODB.Connection") ;

var connectionstring="Data Source="127.0.0.1";Initial Catalog=<catalog>;User ID="root";Password="";Provider=SQLOLEDB";

connection.Open(connectionstring);
var rs = new ActiveXObject("ADODB.Recordset");

rs.Open("SELECT * FROM table", connection);
rs.MoveFirst
while(!rs.eof)
{
   document.write(rs.fields(1));
   rs.movenext;
}
rs.close;
connection.close