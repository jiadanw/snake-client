const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.218',
    port: 50541
  });
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
  console.log('Server says: '+ data);
});
  // interpret incoming data as text
  conn.on('connect', () => {
    conn.write('Name: JD' );
  });
  

  return conn;
  
};



module.exports = connect