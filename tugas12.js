function PopPush(){
  var buah = ['Pisang','Jeruk','Apel','Mangga'];
  console.log(buah); //all

  buah.pop();
  console.log(buah); //throw Mangga

  buah.shift();
  console.log(buah); //throw Pisang
}
PopPush();
